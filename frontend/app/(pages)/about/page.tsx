import { Metadata } from 'next'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'About Us | DECOR',
  description: 'Learn about DECOR, our mission, values, and how we bring beautiful event decoration to every celebration.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fffdfd] text-foreground">
      <main className="pb-20 pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-pink-50 bg-[#fff6fa]">
          <div className="absolute inset-y-0 right-0 hidden w-[56%] lg:block">
            <img 
              src="/gpt1.png" 
              alt="About DECOR event decoration" 
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
              <p className="text-sm font-extrabold uppercase tracking-normal text-[#f7257d]">About DECOR</p>
              <h1 className="mt-4 font-sans text-4xl font-extrabold leading-[1.12] tracking-normal text-[#111827] sm:text-5xl lg:text-[3.45rem]">
                We Create
                <span className="block">
                  <span className="text-[#f7257d]">Unforgettable</span> Moments
                </span>
              </h1>
              <p className="mt-5 max-w-lg text-base leading-7 text-[#566174]">
                DECOR brings premium event decoration to weddings, birthdays, anniversaries and corporate events. We combine creativity, quality, and attention to detail to make every moment spectacular.
              </p>
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
