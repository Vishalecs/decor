import { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Baby,
  BriefcaseBusiness,
  Cake,
  Flower2,
  Gift,
  Heart,
  Home,
  PartyPopper,
  Sparkles,
} from 'lucide-react'
import { Footer } from '@/components/footer'
import { decorCategories } from '@/lib/category-packages'

export const metadata: Metadata = {
  title: 'Decoration Categories | DECOR',
  description:
    'Browse premium event decoration categories including wedding, birthday, anniversary, baby shower, engagement, corporate, house warming, and farewell decoration packages.',
}

const categoryMeta = {
  'wedding-decoration': {
    Icon: Heart,
    badge: 'from-[#ff4d8d] to-[#ff7aa8]',
    tags: ['Mandap', 'Floral', 'Reception'],
    tagClass: 'bg-[#fff0f6] text-[#ff4d8d]',
  },
  'birthday-decoration': {
    Icon: Cake,
    badge: 'from-[#ff9f1c] to-[#ff4d8d]',
    tags: ['Balloons', 'Themes', 'Backdrops'],
    tagClass: 'bg-[#fff4e3] text-[#f97316]',
  },
  'anniversary-decoration': {
    Icon: Gift,
    badge: 'from-[#7c3aed] to-[#a855f7]',
    tags: ['Romantic', 'Candlelight', 'Floral'],
    tagClass: 'bg-[#f3e8ff] text-[#7c3aed]',
  },
  'baby-shower-decoration': {
    Icon: Baby,
    badge: 'from-[#38bdf8] to-[#60a5fa]',
    tags: ['Pastel', 'Cute Props', 'Backdrops'],
    tagClass: 'bg-[#eaf4ff] text-[#2563eb]',
  },
  'engagement-decoration': {
    Icon: Flower2,
    badge: 'from-[#ec4899] to-[#f472b6]',
    tags: ['Floral', 'Photo Spots', 'Stage'],
    tagClass: 'bg-[#fff0f6] text-[#ec4899]',
  },
  'corporate-event-decoration': {
    Icon: BriefcaseBusiness,
    badge: 'from-[#2563eb] to-[#38bdf8]',
    tags: ['Branding', 'Stage', 'Conference'],
    tagClass: 'bg-[#eaf2ff] text-[#2563eb]',
  },
  'house-warming-decoration': {
    Icon: Home,
    badge: 'from-[#22c55e] to-[#84cc16]',
    tags: ['Welcome', 'Floral', 'Pooja'],
    tagClass: 'bg-[#edfbea] text-[#3f9f35]',
  },
  'farewell-decoration': {
    Icon: PartyPopper,
    badge: 'from-[#7c3aed] to-[#a855f7]',
    tags: ['Memory Wall', 'Photo Corner', 'Stage'],
    tagClass: 'bg-[#f3e8ff] text-[#7c3aed]',
  },
}

export default function CategoryPage() {
  return (
    <div className="category-page min-h-screen overflow-hidden bg-[#fff8fb] text-[#17171f]">
      <main className="relative">
        <section className="relative overflow-hidden border-b border-pink-50 bg-[#fff6fa] pt-20">
          <div className="absolute inset-y-0 right-0 hidden w-[56%] lg:block">
            <img 
              src="/gpt2.png" 
              alt="Luxury event decoration categories" 
              className="h-full w-full object-cover" 
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,0.98) 30%, rgba(255,255,255,0.85) 45%, rgba(255,255,255,0.45) 60%, rgba(255,255,255,0) 100%)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </div>

          <div className="mx-auto grid min-h-[365px] max-w-7xl items-center px-4 py-12 sm:px-6 lg:px-8">
            <div className="relative z-10 max-w-xl">
              <p className="text-sm font-extrabold uppercase tracking-normal text-[#f7257d]">Explore Categories</p>
              <h1 className="mt-4 font-sans text-4xl font-extrabold leading-[1.12] tracking-normal text-[#111827] sm:text-5xl lg:text-[3.45rem]">
                Choose the Perfect
                <span className="block">
                  <span className="text-[#f7257d]">Decor</span> Category
                </span>
              </h1>
              <p className="mt-5 max-w-lg text-base leading-7 text-[#566174]">
                Start with your celebration type, explore relevant packages, view details, and book the service that fits your event.
              </p>
            </div>
          </div>
        </section>

        <section className="relative px-4 pb-16 pt-6 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-[#ff4d8d]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-[#c084fc]/25 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <div className="grid grid-cols-2 gap-5 lg:gap-6 xl:grid-cols-4">
              {decorCategories.map((category) => {
                const meta = categoryMeta[category.slug as keyof typeof categoryMeta]
                const Icon = meta?.Icon ?? Sparkles

                return (
                  <Link
                    href={`/category/${category.slug}`}
                    key={category.slug}
                    className="group overflow-hidden rounded-[1.45rem] border border-[#ffd7e5] bg-white shadow-[0_12px_34px_rgba(255,77,141,0.10)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_60px_rgba(255,77,141,0.18)] sm:rounded-[1.6rem]"
                  >
                    <div className="relative aspect-[1.5] overflow-hidden">
                      <img
                        src={category.heroImage}
                        alt={category.name}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                      <div className={`absolute left-3 top-3 flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-white bg-gradient-to-br ${meta?.badge ?? category.accent} text-white shadow-xl sm:left-4 sm:top-4 sm:h-14 sm:w-14 sm:border-4`}>
                        <Icon size={24} className="sm:hidden" />
                        <Icon size={27} className="hidden sm:block" />
                      </div>
                    </div>

                    <div className="p-4 sm:p-5">
                      <h2 className="font-sans text-lg font-black leading-tight text-[#161822] sm:text-xl">{category.name}</h2>
                      <p className="mt-2 min-h-[4.5rem] text-sm leading-6 text-[#596070] sm:mt-3">{category.description}</p>

                      <div className="mt-4 hidden flex-wrap gap-2 lg:flex">
                        {(meta?.tags ?? category.packages.slice(0, 3).map((item) => item.bestFor)).map((tag) => (
                          <span key={tag} className={`rounded-full px-3 py-1.5 text-xs font-bold ${meta?.tagClass ?? 'bg-[#fff1f7] text-[#ff4d8d]'}`}>
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 flex items-center justify-between rounded-xl border border-transparent bg-transparent px-0 py-1 transition group-hover:text-[#ff2f76] sm:mt-5 lg:border-[#ffd7e5] lg:bg-[#fff8fb] lg:px-4 lg:py-3 lg:group-hover:border-[#ff4d8d] lg:group-hover:bg-[#fff1f7]">
                        <span className="text-sm font-black text-[#ff2f76]">View Packages</span>
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ffe7f0] text-[#ff2f76] transition group-hover:translate-x-1 group-hover:bg-[#ff4d8d] group-hover:text-white">
                          <ArrowRight size={16} />
                        </span>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');

        .category-page,
        .category-page * {
          font-family: 'Montserrat', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
      `}</style>
    </div>
  )
}
