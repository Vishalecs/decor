'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, LogOut, User as UserIcon, ArrowRight } from 'lucide-react'
import { AboutSection } from './about-section'
import { useAuth } from '@/lib/auth-context'

export function HeaderHero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { user, logout } = useAuth()

  const backgroundImages = [
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=900&h=900&fit=crop&q=85',
    'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900&h=900&fit=crop&q=85',
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&h=900&fit=crop&q=85',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'About Us', href: '/about' },
    { label: 'Category', href: '/category' },
    { label: 'Contact', href: '/contact' },
  ]

  const categories = [
    {
      label: 'Wedding',
      href: '/category/wedding',
      icon: '💍',
    },
    {
      label: 'Birthday',
      href: '/category/birthday',
      icon: '🎂',
    },
    {
      label: 'Anniversary',
      href: '/category/anniversary',
      icon: '❤️',
    },
    {
      label: 'Custom',
      href: '/category/custom',
      icon: '✨',
    },
  ]

  const stats = [
    { icon: '👥', value: '500+', label: 'Events Decorated' },
    { icon: '😊', value: '100%', label: 'Happy Clients' },
    { icon: '👑', value: '5+', label: 'Years Experience' },
    { icon: '📍', value: '20+', label: 'Cities Served' },
  ]

  return (
    <div className="relative w-full min-h-screen bg-[#FDF0F3] overflow-hidden font-sans">

      {/* Decorative floral SVGs - bottom left */}
      <div className="absolute bottom-20 left-0 w-56 h-56 opacity-60 pointer-events-none z-0 select-none">
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
      <div className="absolute top-32 right-8 opacity-30 pointer-events-none z-0 select-none">
        <svg width="120" height="120" viewBox="0 0 120 120">
          {Array.from({ length: 6 }).map((_, row) =>
            Array.from({ length: 6 }).map((_, col) => (
              <circle key={`${row}-${col}`} cx={col * 20 + 10} cy={row * 20 + 10} r="2.5" fill="#c8637a" />
            ))
          )}
        </svg>
      </div>

      {/* ── HEADER ── */}
      <header className="relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <div className="w-10 h-10 flex-shrink-0">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <g transform="translate(20,20)">
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                      <ellipse
                        key={i}
                        cx="0" cy="-9"
                        rx="3.5" ry="7"
                        fill="#C9932A"
                        transform={`rotate(${angle})`}
                        opacity="0.9"
                      />
                    ))}
                    <circle cx="0" cy="0" r="5" fill="#C9932A" />
                    <circle cx="0" cy="0" r="3" fill="#F5D88E" />
                  </g>
                </svg>
              </div>
              <div>
                <p className="font-bold text-[#1a1a1a] text-base tracking-widest leading-none uppercase">DECOR</p>
                <p className="text-[10px] text-[#C9932A] tracking-widest font-medium uppercase">We Decor, You Celebrate</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-[#333] hover:text-[#C9386B] transition-colors relative group pb-0.5"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C9386B] group-hover:w-full transition-all duration-300 rounded-full" />
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2 md:gap-3">
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full border border-[#C9386B] text-[#C9386B] hover:bg-[#C9386B] hover:text-white transition-all"
                aria-label="Call us"
              >
                <Phone size={15} />
              </a>

              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#C9386B] text-[#C9386B] hover:bg-[#C9386B] hover:text-white transition-all text-sm font-medium"
                  >
                    <UserIcon size={15} />
                    <span>{user.fullName.split(' ')[0]}</span>
                  </button>
                  {isUserMenuOpen && (
                    <div className="absolute top-full right-0 mt-2 w-44 bg-white rounded-xl shadow-lg border border-gray-100 p-2 z-50">
                      <Link
                        href="/dashboard"
                        className="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-pink-50 text-[#333] transition-colors"
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={() => { logout(); setIsUserMenuOpen(false) }}
                        className="w-full text-left px-3 py-2 rounded-lg text-red-500 text-sm font-medium hover:bg-pink-50 flex items-center gap-2 transition-colors"
                      >
                        <LogOut size={13} />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href="/services"
                  className="hidden sm:flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#C9386B] text-white text-sm font-bold hover:bg-[#a8284f] hover:shadow-md transition-all"
                >
                  Book Now
                  <ArrowRight size={14} />
                </Link>
              )}

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 hover:bg-pink-100 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={20} className="text-[#333]" /> : <Menu size={20} className="text-[#333]" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-pink-100 bg-white/95 backdrop-blur-sm shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2.5 rounded-xl hover:bg-pink-50 text-sm font-medium text-[#333] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {!user && (
                <Link
                  href="/services"
                  className="block mt-2 px-4 py-3 rounded-xl bg-[#C9386B] text-white text-sm font-bold text-center hover:bg-[#a8284f] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Now →
                </Link>
              )}
            </div>
          </div>
        )}
      </header>

      {/* ── HERO SECTION ── */}
      {/* Outer wrapper: full width, no overflow clip so image can bleed to edge */}
      <main className="relative z-10 min-h-[calc(100vh-80px)]">
        {/*
          Two-column grid:
          - Left col  → text content, padded like the rest of the site
          - Right col → 50vw wide, flush to the right edge of the viewport
        */}
        <div className="grid lg:grid-cols-[1fr_50vw] items-center min-h-[calc(100vh-80px)]">

          {/* LEFT: Text Content */}
          {/*
            pl uses a CSS clamp so text stays aligned with the navbar's max-w-7xl container:
            (100vw - 80rem) / 2 = the left gutter when viewport > 80rem
            Falls back to 1.5rem (px-6) on smaller screens.
          */}
          <div
            className="py-10 pr-8 space-y-7 animate-hero-in"
            style={{ paddingLeft: 'max(1.5rem, calc((100vw - 80rem) / 2))' }}
          >

            {/* Eyebrow */}
            <p className="flex items-center gap-2 text-xs font-semibold text-[#C9386B] uppercase tracking-widest">
              <span className="text-[#C9932A]">✦</span>
              Make Every Moment Unforgettable
              <span className="text-[#C9932A]">✦</span>
            </p>

            {/* Headline */}
            <h1 className="hero-headline text-[2.8rem] md:text-[3.4rem] lg:text-[3.8rem] font-bold leading-[1.05] text-[#1a0a0e]">
              <span className="headline-line">We Design</span>
              <span className="headline-line text-[#C9386B]">Dreams</span>
              <span className="headline-line text-[#1a0a0e]">Beautifully</span>
            </h1>

            {/* Description */}
            <p className="text-[#555] text-base md:text-[17px] leading-relaxed max-w-md">
              From wedding decor to birthday magic, we craft unforgettable celebrations that reflect your style and create timeless memories.
            </p>

            {/* Service icon grid */}
            <div className="grid grid-cols-4 gap-3">
              {categories.map((cat, i) => (
                <Link
                  key={i}
                  href={cat.href}
                  className="flex flex-col items-center gap-2 p-3 md:p-4 bg-white rounded-2xl shadow-sm border border-pink-100 hover:border-[#C9386B]/30 hover:shadow-md transition-all cursor-pointer group"
                >
                  <span className="text-2xl md:text-3xl group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </span>
                  <p className="text-[10px] md:text-xs font-semibold text-[#333] text-center leading-tight">
                    {cat.label}
                  </p>
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#C9386B] text-white text-sm font-bold hover:bg-[#a8284f] hover:shadow-lg transition-all"
              >
                Book Decoration
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-[#C9932A] text-[#C9932A] text-sm font-bold hover:bg-[#C9932A]/10 transition-all"
              >
                View Gallery
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* RIGHT: Image — flush to right viewport edge, zero margin/padding */}
          <div className="relative hidden lg:block h-full min-h-[calc(100vh-80px)] w-full overflow-hidden">
            <img
              src="/gpt.png"
              alt="Hero decoration"
              className="absolute inset-x-0 top-0 w-full h-full object-cover object-top transform -translate-y-10"
            />
          </div>

        </div>
      </main>

      {/* ── STATS MARQUEE ── */}
      <div className="relative z-20 overflow-hidden">
        <div className="relative w-full bg-[#fff3f7] border-t border-b border-[#f5d8e0] shadow-inner">
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-r from-transparent via-[#f9e0ea] to-transparent opacity-80 pointer-events-none" />
          <div className="mx-auto flex h-24 max-w-full items-center px-6">
            <div className="flex min-w-full animate-marquee gap-10 py-2">
              {[...stats, ...stats].map((s, i) => (
                <div key={i} className="flex items-center gap-4 whitespace-nowrap flex-shrink-0 rounded-full border border-[#f4c5d4] bg-white/90 px-5 py-3 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[#fde7ef] flex items-center justify-center text-xl text-[#c9386b] flex-shrink-0">
                    {s.icon}
                  </div>
                  <div>
                    <p className="text-base font-bold text-[#1a0a0e]">{s.value}</p>
                    <p className="text-xs uppercase tracking-[0.18em] text-[#8f6d7b]">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AboutSection />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap');

        .font-serif {
          font-family: 'Playfair Display', Georgia, serif;
        }

        @keyframes hero-in {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-hero-in {
          animation: hero-in 0.65s ease-out both;
        }

        .hero-headline {
          font-family: 'Montserrat', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .headline-line {
          display: block;
          position: relative;
          padding: 0.2rem 0;
        }

        .headline-line::before {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0.1rem;
          width: 30px;
          height: 4px;
          border-radius: 9999px;
          background: linear-gradient(90deg, #C9386B, #F2A4C0);
          opacity: 0.85;
          transform-origin: left;
          transform: scaleX(0.75);
        }

        .headline-line:nth-child(2)::before {
          width: 45px;
          background: linear-gradient(90deg, #C9386B, #D18C9D);
        }

        .headline-line:nth-child(3)::before {
          width: 60px;
          background: linear-gradient(90deg, #C9386B, #F7C3D5);
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 22s linear infinite;
        }

        .text-gradient {
          background: linear-gradient(90deg, #C9386B, #7C3AED);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-hero-in { animation: none; }
          .animate-marquee { animation: none; }
        }
      `}</style>
    </div>
  )
}
