'use client'

import React, { useState } from 'react'
import { ChevronDown, Phone, MessageCircle, Sparkles } from 'lucide-react'

const faqs = [
  {
    id: 1,
    question: 'How far in advance should I book?',
    answer:
      'We recommend booking at least 2–3 weeks in advance for regular events and 3–6 months for weddings. However, we also accommodate last-minute bookings based on availability.',
  },
  {
    id: 2,
    question: 'Do you provide customization options?',
    answer:
      'Absolutely! Every event is unique. We offer complete customization from color schemes to themes. Our design team will work with you to bring your vision to life.',
  },
  {
    id: 3,
    question: 'What areas do you serve?',
    answer:
      'We serve 20+ cities across India including Indore, Delhi, Mumbai, Bangalore, Hyderabad, and more. Contact us to confirm if we serve your area.',
  },
  {
    id: 4,
    question: 'What is included in the packages?',
    answer:
      'Our packages include decoration design, setup, arrangement, styling, and cleanup. Premium packages also include photography, lighting, and additional add-ons.',
  },
  {
    id: 5,
    question: 'Can I see previous work?',
    answer:
      'Yes! Our portfolio includes photos from 500+ events. Check our gallery section and Instagram to see our latest work and get design inspiration.',
  },
  {
    id: 6,
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major payment methods including UPI, credit cards, debit cards, net banking, and wallets. 50% advance booking amount is required to confirm.',
  },
]

export function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1)

  return (
    <section
      className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#ffffff' }}
    >
      {/* Subtle decorative blobs — very low opacity to keep bg white */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-120px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '500px',
          background: 'radial-gradient(ellipse, rgba(236,72,153,0.07) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-60px',
          right: '5%',
          width: '500px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(168,85,247,0.06) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: '40%',
          left: '-80px',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(ellipse, rgba(236,72,153,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-3xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-14">
          {/* Pill eyebrow */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5"
            style={{
              background: 'rgba(236,72,153,0.07)',
              border: '1px solid rgba(236,72,153,0.2)',
            }}
          >
            <Sparkles size={11} style={{ color: '#ec4899' }} />
            <span
              className="text-[11px] uppercase tracking-[0.35em] font-semibold"
              style={{ color: '#ec4899' }}
            >
              Got Questions?
            </span>
            <Sparkles size={11} style={{ color: '#ec4899' }} />
          </div>

          <h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
            style={{
              fontFamily: 'Montserrat, ui-sans-serif, system-ui, sans-serif',
              letterSpacing: '-0.025em',
              color: '#0f172a',
            }}
          >
            Frequently Asked{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #ec4899 0%, #d946ef 50%, #818cf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Questions
            </span>
          </h2>
          <p className="text-base" style={{ color: 'rgba(15,23,42,0.55)' }}>
            Everything you need to know before booking with us
          </p>
        </div>

        {/* ── FAQ Items ── */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id
            return (
              <div
                key={faq.id}
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: isOpen ? 'rgba(252,231,243,0.6)' : '#ffffff',
                  border: isOpen
                    ? '1.5px solid rgba(236,72,153,0.25)'
                    : '1px solid rgba(226,232,240,0.9)',
                  boxShadow: isOpen
                    ? '0 4px 24px rgba(236,72,153,0.08)'
                    : '0 1px 4px rgba(0,0,0,0.04)',
                }}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                >
                  <div className="flex items-center gap-4">
                    {/* Number badge */}
                    <span
                      className="text-xs font-bold tabular-nums flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200"
                      style={{
                        background: isOpen ? 'rgba(236,72,153,0.12)' : 'rgba(241,245,249,0.9)',
                        color: isOpen ? '#ec4899' : 'rgba(100,116,139,0.7)',
                        border: isOpen ? '1px solid rgba(236,72,153,0.2)' : '1px solid rgba(226,232,240,0.8)',
                        fontSize: '11px',
                      }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3
                      className="font-semibold text-base transition-colors duration-200"
                      style={{ color: isOpen ? '#0f172a' : 'rgba(15,23,42,0.85)' }}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  {/* Chevron button */}
                  <div
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      background: isOpen ? 'rgba(236,72,153,0.12)' : 'rgba(241,245,249,0.9)',
                      border: isOpen
                        ? '1px solid rgba(236,72,153,0.25)'
                        : '1px solid rgba(226,232,240,0.9)',
                    }}
                  >
                    <ChevronDown
                      size={15}
                      style={{
                        color: isOpen ? '#d946ef' : 'rgba(100,116,139,0.7)',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                      }}
                    />
                  </div>
                </button>

                {/* Smooth expand */}
                <div
                  style={{
                    maxHeight: isOpen ? '300px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <div className="px-6 pb-6" style={{ paddingLeft: 'calc(1.5rem + 1.75rem + 1rem)' }}>
                    <div
                      className="h-px mb-4"
                      style={{ background: 'linear-gradient(90deg, rgba(236,72,153,0.25), transparent)' }}
                    />
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(51,65,85,0.8)' }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* ── Bottom CTA Card ── */}
        <div
          className="mt-14 rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #fff0f8 0%, #fdf4ff 50%, #f0f4ff 100%)',
            border: '1px solid rgba(236,72,153,0.18)',
            boxShadow: '0 8px 40px rgba(236,72,153,0.08)',
          }}
        >
          {/* Subtle bg dot */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: '-40px',
              right: '-40px',
              width: '180px',
              height: '180px',
              background: 'radial-gradient(circle, rgba(217,70,239,0.09) 0%, transparent 70%)',
            }}
          />

          {/* Icon */}
          <div
            className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-5"
            style={{
              background: 'rgba(236,72,153,0.1)',
              border: '1px solid rgba(236,72,153,0.2)',
            }}
          >
            <MessageCircle size={22} style={{ color: '#ec4899' }} />
          </div>

          <h3
            className="text-xl font-bold mb-2"
            style={{
              fontFamily: 'Montserrat, ui-sans-serif, system-ui, sans-serif',
              color: '#0f172a',
            }}
          >
            Still have questions?
          </h3>
          <p className="text-sm mb-7" style={{ color: 'rgba(51,65,85,0.7)' }}>
            Our team is here to help! Reach out and we'll respond within a few hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {/* Call button */}
            <a
              href="tel:+917408882629"
              className="inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, #ec4899 0%, #d946ef 55%, #7c3aed 100%)',
                boxShadow: '0 4px 20px rgba(217,70,239,0.28)',
              }}
            >
              <Phone size={15} />
              Call Us Now
            </a>

            {/* WhatsApp button */}
            <a
              href="https://wa.me/917408882629"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:scale-[1.02]"
              style={{
                color: '#9d174d',
                border: '1px solid rgba(236,72,153,0.28)',
                background: 'rgba(255,255,255,0.85)',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.122 1.523 5.854L.057 23.882a.5.5 0 00.611.611l6.028-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.064-1.408l-.363-.216-3.762.914.932-3.653-.236-.376A9.799 9.799 0 012.182 12C2.182 6.565 6.565 2.182 12 2.182S21.818 6.565 21.818 12 17.435 21.818 12 21.818z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}