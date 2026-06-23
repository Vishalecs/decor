import { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Baby,
  BriefcaseBusiness,
  Cake,
  ChevronRight,
  Flower2,
  Gift,
  Grid2X2,
  Heart,
  Home,
  PartyPopper,
  Sparkles,
  Star,
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

const avatarSeeds = [12, 33, 47, 8]

export default function CategoryPage() {
  return (
    <div className="category-page min-h-screen overflow-hidden bg-[#fff8fb] text-[#17171f]">
      <main className="relative">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden bg-[#FDF0F3]">
          {/* Decorative floral SVG - bottom left */}
          <div className="absolute bottom-0 left-0 h-56 w-56 opacity-60 pointer-events-none z-0 select-none">
            <svg viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="60" cy="180" rx="30" ry="60" fill="#f9c6d0" transform="rotate(-30 60 180)" />
              <ellipse cx="90" cy="170" rx="25" ry="50" fill="#f5aab9" transform="rotate(10 90 170)" />
              <ellipse cx="40" cy="160" rx="20" ry="45" fill="#fbd5dc" transform="rotate(-50 40 160)" />
              <path d="M70 190 Q80 120 110 80" stroke="#d4857a" strokeWidth="2" fill="none" />
              <path d="M55 185 Q50 130 30 90" stroke="#d4857a" strokeWidth="1.5" fill="none" />
              <ellipse cx="25" cy="145" rx="16" ry="35" fill="#f9c6d0" transform="rotate(-60 25 145)" />
              <ellipse cx="115" cy="85" rx="12" ry="25" fill="#f5aab9" transform="rotate(15 115 85)" />
            </svg>
          </div>

          {/* Decorative dots - top right area */}
          <div className="absolute top-10 right-8 opacity-30 pointer-events-none z-0 select-none">
            <svg width="120" height="120" viewBox="0 0 120 120">
              {Array.from({ length: 6 }).map((_, row) =>
                Array.from({ length: 6 }).map((_, col) => (
                  <circle key={`${row}-${col}`} cx={col * 20 + 10} cy={row * 20 + 10} r="2.5" fill="#c8637a" />
                ))
              )}
            </svg>
          </div>

          {/* ✅ Grid updated: 40%/60% split like services page */}
          <div className="grid lg:grid-cols-[40%_60%] items-center">
            {/* LEFT: Text Content */}
            <div
              className="relative z-10 py-12 pr-8 space-y-6"
              style={{ paddingLeft: 'max(1.5rem, calc((100vw - 80rem) / 2))' }}
            >
              <p className="flex items-center gap-2 text-xs font-semibold text-[#C9386B] uppercase tracking-widest">
                <span className="text-[#C9932A]">✦</span>
                Explore Categories
                <span className="text-[#C9932A]">✦</span>
              </p>

              <h1 className="font-sans text-[2.6rem] md:text-[3.1rem] lg:text-[3.45rem] font-bold leading-[1.08] text-[#1a0a0e]">
                <span className="block relative pb-2">
                  Choose the Perfect
                  <span className="absolute left-0 bottom-0 h-1 w-10 rounded-full bg-gradient-to-r from-[#C9386B] to-[#F2A4C0] opacity-85" />
                </span>
                <span className="block relative pb-2 text-[#C9386B]">
                  Decor Category
                  <span className="absolute left-0 bottom-0 h-1 w-16 rounded-full bg-gradient-to-r from-[#C9386B] to-[#D18C9D] opacity-85" />
                </span>
              </h1>

              <p className="max-w-md text-[#555] text-base md:text-[17px] leading-relaxed">
                Start with your celebration type, explore relevant packages, view details, and book the service that fits your event.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="#categories-grid"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#C9386B] text-white text-sm font-bold hover:bg-[#a8284f] hover:shadow-lg transition-all"
                >
                  Browse Categories
                  <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-[#C9932A] text-[#C9932A] text-sm font-bold hover:bg-[#C9932A]/10 transition-all"
                >
                  <Grid2X2 size={15} />
                  Plan Your Event
                </Link>
              </div>

              <div className="flex flex-col gap-4 rounded-2xl border border-pink-100 bg-white/70 p-4 backdrop-blur-sm sm:flex-row sm:items-center sm:gap-6">
                <div>
                  <p className="text-sm text-gray-700">
                    Trusted by <span className="font-extrabold text-[#C9386B]">500+</span> Happy Clients
                  </p>
                  <div className="mt-2 flex items-center -space-x-2">
                    {avatarSeeds.map((seed) => (
                      <img
                        key={seed}
                        src={`https://i.pravatar.cc/64?img=${seed}`}
                        alt="Happy client"
                        className="h-8 w-8 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#C9386B] text-[10px] font-extrabold text-white">
                      +95
                    </span>
                  </div>
                </div>

                <span className="hidden h-10 w-px bg-pink-100 sm:block" />

                <div>
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, index) => (
                        <Star key={index} size={16} className="fill-[#C9932A] text-[#C9932A]" />
                      ))}
                    </div>
                    <span className="text-sm font-extrabold text-gray-950">4.8/5</span>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">Based on 240+ Reviews</p>
                </div>
              </div>
            </div>

            {/* ✅ RIGHT: Responsive image — same as services page */}
            <div className="relative block w-full overflow-hidden h-[240px] sm:h-[340px] md:h-[460px] lg:h-full lg:min-h-[600px]">
              <img
                src="/images/category.png"
                alt="Luxury event decoration categories"
                className="absolute inset-0 h-full w-full object-contain object-center"
              />
            </div>
          </div>
        </section>

        <section id="categories-grid" className="relative px-4 pb-16 pt-12 sm:px-6 lg:px-8">
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