import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Check, Sparkles } from 'lucide-react'
import { Footer } from '@/components/footer'
import { decorCategories, getDecorCategory } from '@/lib/category-packages'

type CategoryRouteProps = {
  params: { category: string } | Promise<{ category: string }>
}

const packageColors = [
  { bg: 'from-[#f7257d] to-[#ff4d8d]', softBg: 'bg-[#fff0f6]', textColor: 'text-[#f7257d]', emoji: '🎂' },
  { bg: 'from-[#5b6df5] to-[#7c8cff]', softBg: 'bg-[#eef1ff]', textColor: 'text-[#5b6df5]', emoji: '✨' },
  { bg: 'from-[#8b3ff2] to-[#a855f7]', softBg: 'bg-[#f3e8ff]', textColor: 'text-[#8b3ff2]', emoji: '👑' },
  { bg: 'from-[#58b91f] to-[#7bcf2b]', softBg: 'bg-[#edfbea]', textColor: 'text-[#4b961c]', emoji: '🎨' },
  { bg: 'from-[#ff6b00] to-[#ff922e]', softBg: 'bg-[#fff1e8]', textColor: 'text-[#ff6b00]', emoji: '🎉' },
  { bg: 'from-[#f7257d] to-[#ff5d8f]', softBg: 'bg-[#fff0f6]', textColor: 'text-[#f7257d]', emoji: '💎' },
]

const featurePills = [
  { icon: '✨', title: 'Stylish Setups' },
  { icon: '💎', title: 'Premium Quality' },
  { icon: '🎨', title: 'Custom Themes' },
  { icon: '💰', title: 'Budget Friendly' },
]

export function generateStaticParams() {
  return decorCategories.map((category) => ({
    category: category.slug,
  }))
}

export async function generateMetadata({ params }: CategoryRouteProps): Promise<Metadata> {
  const { category: categorySlug } = await params
  const category = getDecorCategory(categorySlug)

  if (!category) {
    return {
      title: 'Category Not Found | DECOR',
    }
  }

  return {
    title: `${category.name} Packages | DECOR`,
    description: `Explore ${category.name.toLowerCase()} packages with prices, images, included features, and booking options.`,
  }
}

export default async function CategoryDetailPage({ params }: CategoryRouteProps) {
  const resolvedParams = await params
  const { category: categorySlug } = resolvedParams
  const category = getDecorCategory(categorySlug)

  if (!category) {
    notFound()
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#fff7fa] text-[#17171f]">
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 pb-8 pt-8 sm:px-6 lg:h-[480px] lg:px-8 lg:pb-0 lg:pt-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fff7fa] to-white" />
          
          <img
            src={category.heroImage}
            alt={category.name}
            className="absolute right-0 top-0 hidden h-full w-[55%] object-cover opacity-70 lg:block"
          />
          <div className="absolute inset-0 hidden bg-gradient-to-r from-[#fff7fa] via-[#fff7fa]/95 to-[#fff7fa]/20 lg:block" />
          
          <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-[#ff4d8d]/20 blur-3xl" />
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#ff4d8d]/10 blur-3xl" />

          <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full bg-[#ffe7f0] px-5 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#f7257d] shadow-sm">
                <Sparkles size={15} />
                All Packages
              </p>

              <h1 className="mt-6 font-sans text-4xl font-black leading-[1.04] tracking-normal text-[#15151f] sm:text-6xl lg:text-[4rem]">
                <span className="bg-gradient-to-r from-[#f7257d] via-[#ff4d8d] to-[#ff6b6b] bg-clip-text text-transparent">
                  {category.name}
                </span>
              </h1>

              <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-[#485166] sm:text-lg lg:max-w-xl lg:text-base">
                {category.description} Compare packages, view included features, and choose a setup that makes your event stylish and budget-friendly.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:max-w-[780px] lg:grid-cols-4">
              {featurePills.map(({ icon, title }) => (
                <div
                  key={title}
                  className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_10px_28px_rgba(247,37,125,0.08)]"
                >
                  <span className="text-xl">{icon}</span>
                  <span className="text-xs font-black leading-tight text-[#17171f]">{title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Grid Section */}
        <section className="mx-auto max-w-7xl px-4 pb-14 pt-6 sm:px-6 lg:px-8">
          {/* Desktop Grid - 3 columns */}
          <div className="hidden gap-6 lg:grid lg:grid-cols-3">
            {category.packages.map((pkg, index) => {
              const colors = packageColors[index % packageColors.length]
              return (
                <article
                  key={pkg.slug}
                  className="group overflow-hidden rounded-[1.6rem] border border-[#f8dce6] bg-white shadow-[0_14px_38px_rgba(247,37,125,0.09)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_26px_58px_rgba(247,37,125,0.16)]"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[1.45] overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    {/* Icon Badge */}
                    <div className={`absolute left-4 top-4 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br ${colors.bg} text-white text-2xl shadow-xl`}>
                      {colors.emoji}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col p-6">
                    <h2 className="font-sans text-[1.6rem] font-black leading-tight text-[#17171f]">
                      {pkg.name}
                    </h2>
                    <p className="mt-3 text-sm font-medium leading-6 text-[#485166]">
                      {pkg.description}
                    </p>

                    {/* Footer - Price and Button */}
                    <div className="mt-6 flex items-end justify-between gap-4">
                      <div>
                        <p className="text-xs font-medium text-[#737b8f]">Starting from</p>
                        <p className={`mt-1 font-sans text-2xl font-black ${colors.textColor}`}>
                          ₹ {pkg.price.toLocaleString('en-IN')}
                        </p>
                      </div>
                      <Link
                        href={`/category/${category.slug}/${pkg.slug}`}
                        className={`inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r ${colors.bg} px-6 py-3 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5`}
                      >
                        View Details
                        <ArrowRight size={17} />
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          {/* Mobile Stack - Single Column */}
          <div className="flex flex-col gap-5 lg:hidden">
            {category.packages.map((pkg, index) => {
              const colors = packageColors[index % packageColors.length]
              return (
                <article
                  key={pkg.slug}
                  className="overflow-hidden rounded-[1.45rem] border border-[#f8dce6] bg-white shadow-[0_14py_38px_rgba(247,37,125,0.09)]"
                >
                  {/* Mobile Card Layout */}
                  <div className="grid grid-cols-[0.92fr_1.25fr] gap-3 p-3 sm:grid-cols-[1fr_1.3fr]">
                    {/* Image Side */}
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="h-full w-full object-cover"
                      />
                      <div className={`absolute left-2 top-2 flex h-10 w-10 items-center justify-center rounded-full border-3 border-white bg-gradient-to-br ${colors.bg} text-white text-lg shadow-lg`}>
                        {colors.emoji}
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="flex flex-col">
                      <h3 className="font-sans text-lg font-black leading-tight text-[#17171f]">
                        {pkg.name}
                      </h3>
                      <p className="mt-1 text-xs font-medium text-[#485166] line-clamp-2">
                        {pkg.description}
                      </p>

                      {/* Price and Button */}
                      <div className="mt-auto flex items-end justify-between gap-2 pt-3">
                        <div>
                          <p className="text-[10px] font-medium text-[#737b8f]">From</p>
                          <p className={`mt-0.5 font-sans text-lg font-black ${colors.textColor}`}>
                            ₹{pkg.price.toLocaleString('en-IN')}
                          </p>
                        </div>
                        <Link
                          href={`/category/${category.slug}/${pkg.slug}`}
                          className={`inline-flex items-center justify-center gap-1 rounded-full bg-gradient-to-r ${colors.bg} px-4 py-2 text-xs font-black text-white shadow-lg`}
                        >
                          View
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          {/* Custom Package CTA */}
          <div className="mt-10 rounded-[1.7rem] border border-[#f8dce6] bg-white p-6 shadow-[0_14px_38px_rgba(247,37,125,0.08)] sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f7257d] text-2xl text-white shadow-lg shadow-[#f7257d]/20">
                📅
              </span>
              <div>
                <p className="text-lg font-black text-[#f7257d]">Need a custom package?</p>
                <h2 className="mt-1 font-sans text-xl font-black text-[#17171f] sm:text-2xl">
                  Tell us your venue, theme, and guest count.
                </h2>
              </div>
            </div>
            <Link
              href={`/booking?category=${category.slug}`}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#f7257d] px-8 py-4 text-sm font-black text-white shadow-lg shadow-[#f7257d]/20 transition hover:bg-[#d91b66] sm:mt-0 sm:w-auto"
            >
              Get Custom Quote
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');

        * {
          font-family: 'Montserrat', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
      `}</style>
    </div>
  )
}
