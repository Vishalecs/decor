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
      <main className="pb-20 pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-pink-50 bg-[#fff6fa]">
          <div className="absolute inset-y-0 right-0 hidden w-[56%] lg:block">
            <img 
              src="/gpt1.png" 
              alt="Contact DECOR event decoration" 
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
              <p className="text-sm font-extrabold uppercase tracking-normal text-[#f7257d]">Contact Us</p>
              <h1 className="mt-4 font-sans text-4xl font-extrabold leading-[1.12] tracking-normal text-[#111827] sm:text-5xl lg:text-[3.45rem]">
                Let's Plan Your
                <span className="block">
                  <span className="text-[#f7257d]">Perfect</span> Event
                </span>
              </h1>
              <p className="mt-5 max-w-lg text-base leading-7 text-[#566174]">
                Reach out to DECOR for a consultation, pricing details, or to discuss your decoration requirements. We're here to make your celebration truly special.
              </p>
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
