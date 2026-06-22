'use client'

import Link from 'next/link'
import { ArrowRight, Phone, Star, Clock, MapPin, Sparkles } from 'lucide-react'

const trustBadges = [
  { icon: Star,     text: '4.9★ Rated',  sub: '500+ events'         },
  { icon: Clock,    text: 'Same-Day',     sub: 'Booking available'   },
  { icon: MapPin,   text: 'Indore',       sub: 'Packages from ₹1,999'},
]

const avatars = [
  { initials: 'EC', bg: '#ec4899' },
  { initials: 'RK', bg: '#8b5cf6' },
  { initials: 'AP', bg: '#3b82f6' },
  { initials: 'MS', bg: '#d946ef' },
]

export function CTASection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #0f0817 0%, #1a0d2e 50%, #0f0817 100%)',
      }}
    >
      {/* Background image with heavy dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.12,
        }}
      />

      {/* Layered radial glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            'radial-gradient(ellipse 70% 55% at 50% -5%, rgba(217,70,239,0.22) 0%, transparent 65%)',
            'radial-gradient(ellipse 45% 40% at 85% 25%, rgba(124,58,237,0.16) 0%, transparent 60%)',
            'radial-gradient(ellipse 40% 35% at 15% 80%, rgba(236,72,153,0.1) 0%, transparent 55%)',
          ].join(', '),
        }}
      />

      {/* Top border line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(217,70,239,0.6) 35%, rgba(124,58,237,0.6) 65%, transparent 100%)',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
        <div className="flex flex-col items-center text-center gap-7">

          {/* Eyebrow pill */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
            style={{
              background: 'rgba(217,70,239,0.1)',
              border: '1px solid rgba(217,70,239,0.3)',
            }}
          >
            <Sparkles size={12} style={{ color: '#d946ef' }} />
            <span
              className="text-[11px] uppercase tracking-[0.35em] font-semibold"
              style={{ color: '#e9b8fc' }}
            >
              Book with DECOR
            </span>
            <Sparkles size={12} style={{ color: '#d946ef' }} />
          </div>

          {/* Heading */}
          <div className="space-y-1">
            <h2
              className="text-5xl sm:text-6xl md:text-[5.5rem] font-extrabold leading-[0.9] tracking-[-0.03em] text-white"
              style={{ fontFamily: 'Montserrat, ui-sans-serif, system-ui, sans-serif' }}
            >
              Let Us Decorate
            </h2>
            <h2
              className="text-5xl sm:text-6xl md:text-[5.5rem] font-extrabold leading-[0.9] tracking-[-0.03em]"
              style={{
                fontFamily: 'Montserrat, ui-sans-serif, system-ui, sans-serif',
                background: 'linear-gradient(135deg, #f472b6 0%, #d946ef 45%, #a78bfa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Your Next Chapter
            </h2>
          </div>

          {/* Subtext */}
          <p
            className="max-w-lg text-base sm:text-lg leading-relaxed"
            style={{ color: 'rgba(210,195,240,0.65)' }}
          >
            From intimate birthdays to grand weddings — we handle every detail so you can be fully present in every moment.
          </p>

          {/* Trust badge pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {trustBadges.map(({ icon: Icon, text, sub }) => (
              <div
                key={text}
                className="flex items-center gap-2.5 rounded-full px-4 py-2"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <Icon size={13} style={{ color: '#d946ef' }} />
                <span className="text-white text-xs font-semibold">{text}</span>
                <span className="text-[11px]" style={{ color: 'rgba(200,185,230,0.45)' }}>
                  {sub}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-1">
            {/* Primary */}
            <Link
              href="/booking"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full px-9 py-4 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.03]"
              style={{
                background: 'linear-gradient(135deg, #ec4899 0%, #d946ef 50%, #7c3aed 100%)',
                boxShadow: '0 0 40px rgba(217,70,239,0.4), 0 8px 32px rgba(217,70,239,0.25)',
              }}
            >
              Book Your Event Now
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            {/* Secondary */}
            <a
              href="tel:+917408882629"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold transition-all duration-300 hover:scale-[1.02]"
              style={{
                color: 'rgba(230,215,255,0.9)',
                border: '1px solid rgba(255,255,255,0.15)',
                background: 'rgba(255,255,255,0.06)',
              }}
            >
              <Phone size={15} />
              Call Us Now
            </a>

            {/* Ghost */}
            <Link
              href="/contact"
              className="text-sm font-semibold transition-colors duration-200 hover:text-[#d946ef]"
              style={{ color: 'rgba(200,180,240,0.5)' }}
            >
              View Packages →
            </Link>
          </div>

          {/* Social proof bar */}
          <div
            className="mt-4 flex items-center gap-5 rounded-2xl px-7 py-4"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.09)',
            }}
          >
            {/* Avatar stack */}
            <div className="flex -space-x-2.5">
              {avatars.map(({ initials, bg }, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold text-white"
                  style={{
                    background: bg,
                    border: '2px solid #0f0817',
                    zIndex: 4 - i,
                  }}
                >
                  {initials}
                </div>
              ))}
            </div>

            {/* Vertical divider */}
            <div className="w-px h-8" style={{ background: 'rgba(255,255,255,0.1)' }} />

            <div className="text-left">
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <p className="text-xs leading-tight" style={{ color: 'rgba(200,185,230,0.55)' }}>
                <span className="text-white font-semibold">500+ happy clients</span> across Indore
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom border line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(124,58,237,0.5), rgba(217,70,239,0.5), transparent)',
        }}
      />
    </section>
  )
}