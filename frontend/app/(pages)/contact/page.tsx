import { Metadata } from 'next'
import { Footer } from '@/components/footer'
import { Mail, Phone, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact | DECOR',
  description: 'Get in touch with DECOR for event decoration consultations, bookings, and support.',
}

export default function ContactPage() {
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

          {/* ✅ Grid updated: 40%/60% split like services page */}
          <div className="grid lg:grid-cols-[40%_60%] items-center">
            {/* LEFT: Text Content */}
            <div
              className="relative z-10 py-12 pr-8 space-y-6"
              style={{ paddingLeft: 'max(1.5rem, calc((100vw - 80rem) / 2))' }}
            >
              <p className="flex items-center gap-2 text-xs font-semibold text-[#C9386B] uppercase tracking-widest">
                <span className="text-[#C9932A]">✦</span>
                Contact Us
                <span className="text-[#C9932A]">✦</span>
              </p>

              <h1 className="font-sans text-[2.6rem] md:text-[3.1rem] lg:text-[3.45rem] font-bold leading-[1.08] text-[#1a0a0e]">
                <span className="block relative pb-2">
                  Let's Plan Your
                  <span className="absolute left-0 bottom-0 h-1 w-10 rounded-full bg-gradient-to-r from-[#C9386B] to-[#F2A4C0] opacity-85" />
                </span>
                <span className="block relative pb-2 text-[#C9386B]">
                  Perfect Event
                  <span className="absolute left-0 bottom-0 h-1 w-16 rounded-full bg-gradient-to-r from-[#C9386B] to-[#D18C9D] opacity-85" />
                </span>
              </h1>

              <p className="max-w-md text-[#555] text-base md:text-[17px] leading-relaxed">
                Reach out to DECOR for a consultation, pricing details, or to discuss your decoration requirements. We're here to make your celebration truly special.
              </p>
            </div>

            {/* ✅ RIGHT: Responsive image — same as services page */}
            <div className="relative block w-full overflow-hidden h-[240px] sm:h-[340px] md:h-[460px] lg:h-full lg:min-h-[600px]">
              <img
                src="/images/contact.png"
                alt="Contact DECOR event decoration"
                className="absolute inset-0 h-full w-full object-contain object-center"
              />
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 mt-16 grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-10 shadow-[0_10px_26px_rgba(247,37,125,0.08)] border border-pink-100">
            <h2 className="text-2xl font-bold mb-6 text-[#111827]">Reach Out</h2>
            <div className="space-y-6 text-[#596174]">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#f7257d]">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-lg font-semibold text-[#111827]">Phone</p>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#f7257d]">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-lg font-semibold text-[#111827]">Email</p>
                  <p>hello@decor-events.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#f7257d]">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-lg font-semibold text-[#111827]">Location</p>
                  <p>New Delhi, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-[0_10px_26px_rgba(247,37,125,0.08)] border border-pink-100">
            <h2 className="text-2xl font-bold mb-6 text-[#111827]">Send us a message</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-[#111827] mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-pink-100 px-4 py-3 text-sm text-[#111827] outline-none focus:border-[#f7257d] focus:ring-2 focus:ring-pink-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#111827] mb-2">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-pink-100 px-4 py-3 text-sm text-[#111827] outline-none focus:border-[#f7257d] focus:ring-2 focus:ring-pink-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#111827] mb-2">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your event"
                  className="w-full rounded-lg border border-pink-100 px-4 py-3 text-sm text-[#111827] outline-none focus:border-[#f7257d] focus:ring-2 focus:ring-pink-100"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-[#f7257d] px-8 py-3 text-sm font-semibold text-white hover:bg-[#dd1469] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}