'use client'

import React from 'react'
import Link from 'next/link'
import { Heart, Mail, MapPin, Phone, MessageCircle } from 'lucide-react'

const socialLinks = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0f0817"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/917408882629',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.122 1.523 5.854L.057 23.882a.5.5 0 00.611.611l6.028-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.064-1.408l-.363-.216-3.762.914.932-3.653-.236-.376A9.799 9.799 0 012.182 12C2.182 6.565 6.565 2.182 12 2.182S21.818 6.565 21.818 12 17.435 21.818 12 21.818z"/>
      </svg>
    ),
  },
]

const services = [
  { label: 'Wedding Decoration', href: '/services' },
  { label: 'Birthday Decoration', href: '/services' },
  { label: 'Anniversary Decoration', href: '/services' },
  { label: 'Corporate Events', href: '/services' },
  { label: 'Theme Decoration', href: '/services' },
]

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Category', href: '/category' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Privacy Policy', href: '#' },
]

const DISPLAY_FONT = "'Cormorant Garamond', 'Playfair Display', Georgia, serif"

// Builds a hanging-garland path: `segments` shallow swags across `width`,
// each dipping `dip` px below `topY` — the resting point of each "bulb".
function buildGarlandPath(segments: number, width: number, topY: number, dip: number) {
  const segW = width / segments
  let d = `M0,${topY}`
  const bulbs: { x: number; y: number }[] = []
  for (let i = 0; i < segments; i++) {
    const x1 = i * segW
    const x2 = (i + 1) * segW
    const midX = (x1 + x2) / 2
    d += ` Q${midX},${topY + dip} ${x2},${topY}`
    bulbs.push({ x: midX, y: topY + dip / 2 })
  }
  return { d, bulbs }
}

function StringLights() {
  const width = 1200
  const topY = 14
  const dip = 20
  const segments = 10
  const { d, bulbs } = buildGarlandPath(segments, width, topY, dip)
  const colors = ['#f5b942', '#ec4899', '#d946ef', '#a855f7']

  return (
    <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0 }} aria-hidden="true">
      <svg
        viewBox={`0 0 ${width} 48`}
        preserveAspectRatio="none"
        style={{ width: '100%', height: '38px', display: 'block' }}
      >
        <defs>
          <filter id="df-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="2.6" />
          </filter>
        </defs>
        <path d={d} fill="none" stroke="rgba(217,70,239,0.22)" strokeWidth="1.5" />
        {bulbs.map((b, i) => {
          const color = colors[i % colors.length]
          return (
            <g
              key={i}
              className="df-bulb"
              style={{
                animation: 'df-twinkle 2.6s ease-in-out infinite',
                animationDelay: `${i * 0.22}s`,
              }}
            >
              <circle cx={b.x} cy={b.y} r="6" fill={color} opacity="0.55" filter="url(#df-glow)" />
              <circle cx={b.x} cy={b.y} r="2.4" fill={color} />
            </g>
          )
        })}
      </svg>
    </div>
  )
}

export function Footer() {
  return (
    <footer
      style={{
        background: 'linear-gradient(180deg, #0a0514 0%, #080311 100%)',
        borderTop: '1px solid rgba(217,70,239,0.15)',
        position: 'relative',
      }}
    >
      <style>{`
        @keyframes df-twinkle {
          0%, 100% { opacity: 0.45; }
          50% { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .df-bulb { animation: none !important; opacity: 0.85 !important; }
        }
      `}</style>

      {/* Signature: a hanging garland of fairy lights in place of a plain divider */}
      <StringLights />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10">

        {/* CTA banner */}
        <div
          className="mb-14 rounded-2xl p-px"
          style={{
            background: 'linear-gradient(135deg, rgba(245,185,66,0.4), rgba(217,70,239,0.4), rgba(124,58,237,0.5))',
          }}
        >
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div className="space-y-5 md:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #ec4899, #d946ef, #7c3aed)',
                  boxShadow: '0 0 24px rgba(217,70,239,0.35)',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <defs>
                    <linearGradient id="df-flame" x1="12" y1="3" x2="12" y2="11" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#f5d49a" />
                      <stop offset="1" stopColor="#fde9c8" />
                    </linearGradient>
                  </defs>
                  <path d="M12 3c0 0-3.4 4.6-3.4 7.8a3.4 3.4 0 006.8 0C15.4 7.6 12 3 12 3z" fill="url(#df-flame)" />
                  <ellipse cx="12" cy="18.2" rx="6.4" ry="2" fill="white" fillOpacity="0.92" />
                </svg>
              </div>
              <div>
                <p
                  className="text-white font-extrabold text-xl leading-none tracking-wide"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  DECOR
                </p>
                <p
                  className="text-xs mt-1"
                  style={{ color: 'rgba(220,195,255,0.55)', fontFamily: DISPLAY_FONT, fontStyle: 'italic' }}
                >
                  We Decor, You Celebrate
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed" style={{ color: 'rgba(200,185,230,0.55)' }}>
              Creating unforgettable moments through exquisite event decoration across India.
            </p>

            {/* Social icons */}
            <div className="flex gap-2.5 pt-2">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'rgba(220,200,255,0.7)',
                  }}
                  onMouseEnter={e => {
                    ;(e.currentTarget as HTMLElement).style.background = 'rgba(217,70,239,0.2)'
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(217,70,239,0.4)'
                    ;(e.currentTarget as HTMLElement).style.color = '#d946ef'
                    ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 14px rgba(217,70,239,0.35)'
                  }}
                  onMouseLeave={e => {
                    ;(e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.07)'
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'
                    ;(e.currentTarget as HTMLElement).style.color = 'rgba(220,200,255,0.7)'
                    ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-white font-bold text-sm uppercase tracking-widest mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {services.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm transition-colors duration-200 flex items-center gap-2"
                    style={{ color: 'rgba(200,185,230,0.55)' }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.color = '#d946ef'
                      const dot = el.querySelector('span') as HTMLElement | null
                      if (dot) {
                        dot.style.background = '#d946ef'
                        dot.style.boxShadow = '0 0 6px rgba(217,70,239,0.7)'
                        dot.style.transform = 'scale(1.6)'
                      }
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.color = 'rgba(200,185,230,0.55)'
                      const dot = el.querySelector('span') as HTMLElement | null
                      if (dot) {
                        dot.style.background = 'rgba(217,70,239,0.4)'
                        dot.style.boxShadow = 'none'
                        dot.style.transform = 'scale(1)'
                      }
                    }}
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0 transition-all duration-200"
                      style={{ background: 'rgba(217,70,239,0.4)' }}
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-white font-bold text-sm uppercase tracking-widest mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {company.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm transition-colors duration-200 flex items-center gap-2"
                    style={{ color: 'rgba(200,185,230,0.55)' }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.color = '#d946ef'
                      const dot = el.querySelector('span') as HTMLElement | null
                      if (dot) {
                        dot.style.background = '#d946ef'
                        dot.style.boxShadow = '0 0 6px rgba(217,70,239,0.7)'
                        dot.style.transform = 'scale(1.6)'
                      }
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.color = 'rgba(200,185,230,0.55)'
                      const dot = el.querySelector('span') as HTMLElement | null
                      if (dot) {
                        dot.style.background = 'rgba(217,70,239,0.4)'
                        dot.style.boxShadow = 'none'
                        dot.style.transform = 'scale(1)'
                      }
                    }}
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0 transition-all duration-200"
                      style={{ background: 'rgba(217,70,239,0.4)' }}
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white font-bold text-sm uppercase tracking-widest mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+917408882629"
                className="flex gap-3 items-start transition-transform duration-200"
                style={{ textDecoration: 'none' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.transform = 'translateX(2px)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.transform = 'translateX(0)')}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'rgba(217,70,239,0.12)', border: '1px solid rgba(217,70,239,0.25)' }}
                >
                  <Phone size={14} style={{ color: '#d946ef' }} />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">+91 74088 82629</p>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(200,185,230,0.45)' }}>Mon–Sun, 9am–9pm</p>
                </div>
              </a>

              <a
                href="mailto:hello@decor-events.com"
                className="flex gap-3 items-start transition-transform duration-200"
                style={{ textDecoration: 'none' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.transform = 'translateX(2px)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.transform = 'translateX(0)')}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'rgba(217,70,239,0.12)', border: '1px solid rgba(217,70,239,0.25)' }}
                >
                  <Mail size={14} style={{ color: '#d946ef' }} />
                </div>
                <p className="text-sm" style={{ color: 'rgba(200,185,230,0.65)' }}>
                  hello@decor-events.com
                </p>
              </a>

              <div className="flex gap-3 items-start">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'rgba(217,70,239,0.12)', border: '1px solid rgba(217,70,239,0.25)' }}
                >
                  <MapPin size={14} style={{ color: '#d946ef' }} />
                </div>
                <p className="text-sm" style={{ color: 'rgba(200,185,230,0.65)' }}>
                  Indore, Madhya Pradesh, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
            marginBottom: '28px',
          }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs" style={{ color: 'rgba(180,165,210,0.4)' }}>
            &copy; {new Date().getFullYear()} DECOR — Event Decoration. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Terms of Service', 'Privacy Policy', 'Cookie Policy'].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-xs transition-colors duration-200"
                style={{ color: 'rgba(180,165,210,0.4)' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#d946ef')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(180,165,210,0.4)')}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Credit strip */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          padding: '16px',
          textAlign: 'center',
        }}
      >
        <p
          className="text-xs flex items-center justify-center gap-1.5"
          style={{ color: 'rgba(180,165,210,0.3)' }}
        >
          Made with
          <Heart size={12} style={{ color: '#ec4899', fill: '#ec4899' }} />
          in Indore — by the DECOR Team
        </p>
      </div>
    </footer>
  )
}