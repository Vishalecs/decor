import { Metadata } from 'next'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'About Us | DECOR',
  description: 'Learn about DECOR, our mission, values, and how we bring beautiful event decoration to every celebration.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fffdfd] text-foreground">
      <main className="pb-20 pt-0">
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

          <div className="grid lg:grid-cols-[40%_60%] items-center">
            {/* LEFT: Text Content */}
            <div
              className="relative z-10 py-12 pr-8 space-y-6"
              style={{ paddingLeft: 'max(1.5rem, calc((100vw - 80rem) / 2))' }}
            >
              <p className="flex items-center gap-2 text-xs font-semibold text-[#C9386B] uppercase tracking-widest">
                <span className="text-[#C9932A]">✦</span>
                About DECOR
                <span className="text-[#C9932A]">✦</span>
              </p>

              <h1 className="font-sans text-[2.6rem] md:text-[3.1rem] lg:text-[3.45rem] font-bold leading-[1.08] text-[#1a0a0e]">
                <span className="block relative pb-2">
                  We Create
                  <span className="absolute left-0 bottom-0 h-1 w-10 rounded-full bg-gradient-to-r from-[#C9386B] to-[#F2A4C0] opacity-85" />
                </span>
                <span className="block relative pb-2 text-[#C9386B]">
                  Unforgettable Moments
                  <span className="absolute left-0 bottom-0 h-1 w-16 rounded-full bg-gradient-to-r from-[#C9386B] to-[#D18C9D] opacity-85" />
                </span>
              </h1>

              <p className="max-w-md text-[#555] text-base md:text-[17px] leading-relaxed">
                DECOR brings premium event decoration to weddings, birthdays, anniversaries and corporate events. We combine creativity, quality, and attention to detail to make every moment spectacular.
              </p>
            </div>

            {/* RIGHT: Image — matches services page responsive style */}
            <div className="relative block w-full overflow-hidden h-[240px] sm:h-[340px] md:h-[460px] lg:h-full lg:min-h-[600px]">
              <img
                src="/images/about.png"
                alt="About DECOR event decoration"
                className="absolute inset-0 h-full w-full object-contain object-center"
              />
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 mt-16 grid gap-12 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-10 shadow-[0_10px_26px_rgba(247,37,125,0.08)] border border-pink-100">
            <h2 className="text-2xl font-bold mb-4 text-[#111827]">Our Story</h2>
            <p className="text-base text-[#596174] leading-relaxed mb-4">
              Since our beginning, we have been passionate about transforming venues into memorable celebrations. Our team of designers, florists, and production experts work together to deliver stunning decor that reflects your personality and vision.
            </p>
            <p className="text-base text-[#596174] leading-relaxed">
              Every event is unique, and we invest time in understanding your style, theme, and goals. This ensures the final design is polished, cohesive, and perfectly suited to the occasion.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-[0_10px_26px_rgba(247,37,125,0.08)] border border-pink-100">
            <h2 className="text-2xl font-bold mb-4 text-[#111827]">Our Values</h2>
            <ul className="space-y-4 text-base text-[#596174]">
              <li>
                <strong className="text-[#111827]">Creativity:</strong> We design décor that feels fresh, elegant, and tailored to your event.
              </li>
              <li>
                <strong className="text-[#111827]">Quality:</strong> We use premium materials and expert craftsmanship for every setup.
              </li>
              <li>
                <strong className="text-[#111827]">Service:</strong> We deliver thoughtful planning, clear communication, and seamless execution.
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}