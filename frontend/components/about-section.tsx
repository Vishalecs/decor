'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const tabs = [
  {
    id: 'mission',
    label: 'Our Mission',
    heading: 'Crafting Timeless Celebrations',
    body: 'Every event is a canvas. We paint it with premium florals, elegant draping, and meticulous detail — transforming spaces into memories that linger long after the lights dim.',
  },
  {
    id: 'howwework',
    label: 'How We Work',
    heading: 'A Seamless Experience',
    body: 'Select your service, choose a curated package, confirm with us, and leave the rest to us. From first flower to final farewell, we handle every detail so you can celebrate stress-free.',
  },
]

// Floating rose SVG — replaces balloons with on-brand florals
function FloatingRose({ style }: { style: React.CSSProperties }) {
  return (
    <div className="absolute pointer-events-none select-none hidden sm:block" style={style}>
      <svg width="38" height="50" viewBox="0 0 38 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* stem */}
        <line x1="19" y1="32" x2="19" y2="50" stroke="#C9932A" strokeWidth="1.5" strokeLinecap="round" />
        {/* petals */}
        <ellipse cx="19" cy="20" rx="7" ry="11" fill="#C9386B" opacity="0.85" />
        <ellipse cx="12" cy="22" rx="6" ry="9" fill="#e05580" opacity="0.7" transform="rotate(-25 12 22)" />
        <ellipse cx="26" cy="22" rx="6" ry="9" fill="#e05580" opacity="0.7" transform="rotate(25 26 22)" />
        <ellipse cx="15" cy="14" rx="5" ry="8" fill="#f0829a" opacity="0.6" transform="rotate(-15 15 14)" />
        <ellipse cx="23" cy="14" rx="5" ry="8" fill="#f0829a" opacity="0.6" transform="rotate(15 23 14)" />
        {/* center */}
        <circle cx="19" cy="19" r="4" fill="#a8284f" opacity="0.9" />
      </svg>
    </div>
  )
}

export function AboutSection() {
  const [activeTab, setActiveTab] = useState('mission')
  const active = tabs.find((t) => t.id === activeTab)!

  return (
    <section className="about-section relative bg-gradient-to-b from-white to-[#f7f3f8] overflow-hidden py-14 sm:py-20 lg:py-28">

      {/* Floating roses — hidden on mobile to avoid clutter */}
      <FloatingRose style={{ bottom: '12%', left: '6%', opacity: 0.7, transform: 'rotate(-10deg)' }} />
      <FloatingRose style={{ top: '10%', left: '38%', opacity: 0.5, transform: 'rotate(15deg) scale(0.8)' }} />
      <FloatingRose style={{ top: '18%', right: '4%', opacity: 0.65, transform: 'rotate(-5deg) scale(1.1)' }} />
      <FloatingRose style={{ bottom: '20%', right: '8%', opacity: 0.5, transform: 'rotate(20deg) scale(0.75)' }} />
      <FloatingRose style={{ bottom: '5%', left: '44%', opacity: 0.55, transform: 'rotate(-20deg) scale(0.9)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">

          {/* ── LEFT: Image collage ── */}
          <div className="relative h-[300px] sm:h-[420px] md:h-[480px]">

            {/* Main image — large, bottom-left */}
            <div className="absolute bottom-0 left-0 w-[62%] h-[80%] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl z-10">
              <img
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=700&fit=crop&q=85"
                alt="Event decoration"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Secondary image — top-right, overlapping */}
            <div className="absolute top-0 right-0 w-[55%] h-[65%] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl z-10 border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=500&fit=crop&q=85"
                alt="Wedding decoration"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Logo badge — overlapping both images */}
            <div className="absolute bottom-[28%] right-[28%] z-20 w-14 h-14 sm:w-20 sm:h-20 bg-white rounded-xl sm:rounded-2xl shadow-2xl flex flex-col items-center justify-center border border-pink-100">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-8 sm:h-8">
                <g transform="translate(20,20)">
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                    <ellipse key={i} cx="0" cy="-9" rx="3.5" ry="7" fill="#C9932A" transform={`rotate(${angle})`} opacity="0.9" />
                  ))}
                  <circle cx="0" cy="0" r="5" fill="#C9932A" />
                  <circle cx="0" cy="0" r="3" fill="#F5D88E" />
                </g>
              </svg>
              <p className="text-[7px] sm:text-[9px] font-bold text-[#C9386B] tracking-widest mt-0.5">DECOR</p>
            </div>

            {/* Dot pattern decoration */}
            <div className="absolute top-4 left-4 opacity-20 pointer-events-none z-0 hidden sm:block">
              <svg width="80" height="80" viewBox="0 0 80 80">
                {Array.from({ length: 4 }).map((_, r) =>
                  Array.from({ length: 4 }).map((_, c) => (
                    <circle key={`${r}-${c}`} cx={c * 20 + 10} cy={r * 20 + 10} r="3" fill="#C9386B" />
                  ))
                )}
              </svg>
            </div>
          </div>

          {/* ── RIGHT: Content ── */}
          <div className="space-y-5 sm:space-y-6">

            {/* Eyebrow */}
            <p className="text-xs font-semibold text-[#888] uppercase tracking-widest text-center sm:text-left">Who We Are</p>

            {/* Headline */}
            <h2 className="text-[2rem] sm:text-[2.6rem] md:text-[3.2rem] font-extrabold leading-[1.1] sm:leading-[1.06] text-[#1a0a0e] font-mont text-center sm:text-left">
              Where Art Meets
              <br />
              <span className="text-gradient">Celebration</span>
            </h2>

            {/* Tabs */}
            <div className="flex gap-5 sm:gap-6 border-b border-[#e0d0d5] overflow-x-auto">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`pb-3 text-sm font-semibold transition-all relative whitespace-nowrap ${
                    activeTab === t.id ? 'text-[#1a0a0e]' : 'text-[#999] hover:text-[#555]'
                  }`}
                >
                  {t.label}
                  {activeTab === t.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9386B] rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div key={activeTab} className="space-y-3 animate-tab-in">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1a0a0e]">{active.heading}</h3>
              <p className="text-[#666] text-[15px] sm:text-base leading-relaxed">{active.body}</p>
            </div>

            {/* CTA row — stacked (upar-niche) on mobile, side-by-side from sm: up */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 pt-2">
              <Link
                href="/category"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#C9386B] text-white text-sm font-bold hover:bg-[#a8284f] hover:shadow-lg transition-all group w-full sm:w-auto"
              >
                View Packages
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="tel:+917460033958"
                className="flex items-center justify-center sm:justify-start gap-3 group rounded-full sm:rounded-none border border-[#f0d8de] sm:border-0 py-3 sm:py-0 w-full sm:w-auto"
              >
                <div className="w-11 h-11 rounded-full border-2 border-[#C9386B] flex items-center justify-center text-[#C9386B] group-hover:bg-[#C9386B] group-hover:text-white transition-all flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-[10px] font-semibold text-[#999] uppercase tracking-widest">Call Us</p>
                  <p className="text-sm font-bold text-[#1a0a0e]">+91 7460033958</p>
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap');

        .about-section { font-family: 'Montserrat', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
        .font-mont { font-family: 'Montserrat', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
        .font-serif { font-family: 'Playfair Display', Georgia, serif; }

        .text-gradient {
          background: linear-gradient(90deg, #C9386B 0%, #7C3AED 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        @keyframes tab-in {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-tab-in { animation: tab-in 0.25s ease-out both; }

        /* Tabs */
        .about-section .tabs-button { padding-bottom: 0.75rem; }
        .about-section .tabs-button[aria-current="true"] { color: #1a0a0e; }

        /* Stat / CTA polish */
        .about-section .w-11 { width: 44px; height: 44px; }

        @media (prefers-reduced-motion: reduce) {
          .animate-tab-in { animation: none; }
        }
      `}</style>
    </section>
  )
}