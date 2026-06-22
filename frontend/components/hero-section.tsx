'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Heart, Cake, Sparkles, Leaf, Users, Smile, Crown, MapPin } from 'lucide-react'

export function HeroSection() {
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  const services = [
    { id: 'wedding', icon: Heart, label: 'Wedding Decoration', color: 'from-rose-400 to-pink-500' },
    { id: 'birthday', icon: Cake, label: 'Birthday Decoration', color: 'from-orange-400 to-rose-400' },
    { id: 'themed', icon: Sparkles, label: 'Themed Events', color: 'from-purple-400 to-pink-400' },
    { id: 'custom', icon: Leaf, label: 'Custom Décor', color: 'from-green-400 to-emerald-400' },
  ]

  return (
    <section className="relative pt-20 pb-0 md:pt-32 overflow-hidden bg-gradient-to-b from-rose-light via-white to-white">
      {/* Premium Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/8 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-rose-light/20 rounded-full blur-2xl -z-10 animate-blob"></div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-10 right-20 w-24 h-24 opacity-10 animate-float">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" className="text-primary" strokeWidth="2" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" className="text-secondary" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen lg:min-h-auto">
          {/* Left Content */}
          <div className="space-y-10 py-12 lg:py-0 animate-slide-up">
            {/* Premium Tagline with Decorative Elements */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-secondary text-2xl">✦</span>
                <p className="text-sm font-semibold text-secondary uppercase tracking-widest">Make Every Moment Unforgettable</p>
                <span className="text-secondary text-2xl">✦</span>
              </div>

              {/* Main Headline with Premium Styling */}
              <div className="space-y-3">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-tight tracking-tight">
                  We Design
                </h1>
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-tight">
                  <span className="bg-gradient-to-r from-primary via-rose-500 to-primary bg-clip-text text-transparent">Dreams</span>
                </h2>
                <h3 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-tight text-foreground">
                  Beautifully
                </h3>
              </div>

              {/* Premium Description */}
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-lg leading-relaxed pt-6 font-light">
                From wedding décor to birthday magic, we craft unforgettable celebrations that reflect your style and create timeless memories.
              </p>
            </div>

            {/* Premium Service Grid */}
            <div className="grid grid-cols-2 gap-3 py-6">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <div
                    key={service.id}
                    onMouseEnter={() => setHoveredService(service.id)}
                    onMouseLeave={() => setHoveredService(null)}
                    className="group relative overflow-hidden"
                  >
                    <div className="relative p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/40 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:scale-105 cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative flex flex-col items-center gap-2">
                        <div className={`p-2.5 rounded-full bg-gradient-to-br ${service.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-semibold text-sm text-center text-foreground group-hover:text-primary transition-colors">
                          {service.label}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link
                href="/booking"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary via-rose-500 to-primary text-white font-bold text-base shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  BOOK DECORATION
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-600 via-primary to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </Link>
              <Link
                href="/gallery"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-secondary text-secondary font-bold text-base hover:bg-secondary/10 transition-all duration-300 hover:scale-105"
              >
                VIEW GALLERY
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>

          {/* Right Image Section - Enhanced */}
          <div className="relative animate-slide-up animation-delay-300 h-full">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-[40px] blur-3xl -z-10"></div>

            {/* Main elevated image container */}
            <div className="relative h-full flex items-center justify-center">
              {/* Decorative curved background */}
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-secondary/5 to-transparent"></div>

              {/* Primary image with premium styling */}
              <div className="relative w-full h-full max-h-[600px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-secondary/30 backdrop-blur-sm group hover:shadow-3xl transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=800&fit=crop&q=85"
                  alt="Premium Wedding Decoration Setup"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating badge with premium design */}
              <div className="absolute -bottom-6 -right-6 z-20">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-rose-600 rounded-full blur-lg opacity-75"></div>
                  <div className="relative bg-gradient-to-br from-primary to-rose-600 text-white rounded-full p-8 shadow-2xl text-center hover:scale-110 transition-transform duration-300">
                    <p className="font-display text-4xl font-bold">500+</p>
                    <p className="text-xs font-semibold uppercase tracking-wider mt-1">Events Decorated</p>
                  </div>
                </div>
              </div>

              {/* Secondary floating image card */}
              <div className="absolute -bottom-12 -left-8 z-10 opacity-90 hover:opacity-100 transition-opacity">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white w-48 h-48 hover:scale-110 transition-transform duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=300&h=300&fit=crop&q=85"
                    alt="Birthday Celebration Detail"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Decorative accent elements */}
              <div className="absolute top-8 right-8 w-16 h-16 border-2 border-secondary/40 rounded-2xl opacity-40 hover:opacity-60 transition-opacity"></div>
              <div className="absolute bottom-20 left-0 w-20 h-20 border border-primary/30 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>

        {/* Premium Statistics Bar */}
        <div className="mt-20 mb-0 pt-20 pb-16 border-t-2 border-secondary/10 bg-gradient-to-b from-transparent via-rose-light/20 to-transparent rounded-3xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Users, stat: '500+', label: 'Events Decorated' },
              { icon: Smile, stat: '100%', label: 'Happy Clients' },
              { icon: Crown, stat: '5+', label: 'Years Experience' },
              { icon: MapPin, stat: '20+', label: 'Cities Served' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group text-center hover:scale-110 transition-all duration-300 p-4 rounded-2xl hover:bg-white/50 hover:backdrop-blur-md"
              >
                <div className="flex justify-center mb-3 opacity-60 group-hover:opacity-100 transition-opacity">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <p className="font-display text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  {item.stat}
                </p>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  )
}
