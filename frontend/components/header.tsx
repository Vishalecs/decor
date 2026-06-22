'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, LogOut, User as UserIcon, Search, Sparkles } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, logout } = useAuth()

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent backdrop-blur-md shadow-none max-md:rounded-bl-[1.25rem] max-md:rounded-br-[1.25rem] max-md:bg-[#fff7fa]/95 max-md:shadow-[0_10px_28px_rgba(201,56,107,0.12)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center h-24">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-pink-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link href="/" className="hidden md:flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-2xl shadow-primary/20">
              D
            </div>
            <div className="hidden sm:block">
              <p className="font-display text-lg font-bold text-foreground">DECOR</p>
              <p className="text-xs text-secondary font-medium">We Decor, You Celebrate</p>
            </div>
          </Link>

          <Link
            href="/"
            className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-primary md:hidden"
            aria-label="DECOR home"
          >
            <Sparkles size={36} className="fill-primary/10" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground">
            <Link href="/" className="relative group transition-colors hover:text-primary">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/services" className="relative group transition-colors hover:text-primary">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/gallery" className="relative group transition-colors hover:text-primary">
              Gallery
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/category" className="relative group transition-colors hover:text-primary">
              Category
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/about" className="relative group transition-colors hover:text-primary">
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/contact" className="relative group transition-colors hover:text-primary">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Phone Button */}
            <a
              href="tel:+919876543210"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Call us"
            >
              <Phone size={18} />
              <span className="text-sm font-medium">Call</span>
            </a>

            {/* User Menu or Book Now Button */}
            {user ? (
              <div className="hidden md:flex items-center gap-2">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                  aria-label="Dashboard"
                >
                  <UserIcon size={18} />
                  <span className="text-sm font-medium">{user.fullName.split(' ')[0]}</span>
                </Link>
                <button
                  onClick={logout}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
                  aria-label="Logout"
                >
                  <LogOut size={18} />
                  <span className="text-sm font-medium">Logout</span>
                </button>
              </div>
            ) : (
              <Link
                href="/services"
                className="hidden md:flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-primary to-primary text-white font-medium hover:shadow-lg hover:scale-105 transition-all"
              >
                BOOK NOW
                <span className="text-lg">→</span>
              </Link>
            )}

            <Link
              href="/services"
              className="md:hidden flex h-12 w-12 items-center justify-center rounded-full bg-[#ffe7f0] text-primary shadow-sm"
              aria-label="Search services"
            >
              <Search size={22} />
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-3 animate-slide-down">
            <Link 
              href="/" 
              className="block px-4 py-2 rounded-lg hover:bg-muted text-foreground font-medium"
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className="block px-4 py-2 rounded-lg hover:bg-muted text-foreground font-medium"
            >
              Services
            </Link>
            <Link 
              href="/gallery" 
              className="block px-4 py-2 rounded-lg hover:bg-muted text-foreground font-medium"
            >
              Gallery
            </Link>
            <Link 
              href="/category" 
              className="block px-4 py-2 rounded-lg hover:bg-muted text-foreground font-medium"
            >
              Category
            </Link>
            <Link 
              href="/about" 
              className="block px-4 py-2 rounded-lg hover:bg-muted text-foreground font-medium"
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              className="block px-4 py-2 rounded-lg hover:bg-muted text-foreground font-medium"
            >
              Contact
            </Link>
            {user ? (
              <>
                <Link 
                  href="/dashboard" 
                  className="block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-primary text-white font-medium text-center"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    logout()
                    setIsMenuOpen(false)
                  }}
                  className="block w-full px-4 py-2 rounded-lg hover:bg-muted text-red-600 font-medium text-left"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link 
                href="/services" 
                className="block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-primary text-white font-medium text-center"
              >
                BOOK NOW
              </Link>
            )}
          </nav>
        )}
      </div>
    </header>
  )
}
