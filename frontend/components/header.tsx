'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, LogOut, User as UserIcon, ArrowRight } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const { user, logout } = useAuth()

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'About Us', href: '/about' },
    { label: 'Category', href: '/category' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
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
              href="tel:+91 7460033958"
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
                href="/booking"
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
                href="/booking"
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
  )
}
