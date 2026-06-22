'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { services } from '@/lib/services'
import { Star, ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react'

// Map lib/services category to display-friendly names
const categoryMap: Record<string, string> = {
  'wedding': 'Wedding',
  'birthday': 'Birthday',
  'anniversary': 'Anniversary',
  'corporate': 'Corporate',
  'seasonal': 'Festive',
  'custom': 'Themed',
}

const categories = ['All', 'Wedding', 'Birthday', 'Anniversary', 'Corporate']

export function FeaturedServices() {
  const [activeCategory, setActiveCategory] = useState('All')

  // Filter and limit to 8 services for homepage
  const filtered = activeCategory === 'All'
    ? services.slice(0, 8)
    : services.filter((s) => {
        const displayCategory = categoryMap[s.category]
        return displayCategory === activeCategory
      }).slice(0, 8)

  return (
    <section className="py-24 lg:py-32 overflow-hidden font-sans relative" style={{ background: 'linear-gradient(180deg, #fff6f8 0%, #fffafd 45%, #ffffff 100%)' }}>

      {/* Soft decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#C9386B] opacity-[0.04] blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[#C9932A] opacity-[0.05] blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header — fully centered ── */}
        <div className="text-center mb-12 space-y-4">
          <p className="flex items-center justify-center gap-2 text-xs font-semibold text-[#C9386B] uppercase tracking-widest">
            <span className="text-[#C9932A]">✦</span>
            Our Services
            <span className="text-[#C9932A]">✦</span>
          </p>
          <h2 className="text-[2.6rem] md:text-[3.2rem] lg:text-[3.6rem] font-extrabold leading-[1.06] text-[#1a0a0e] font-mont">
            Every Occasion,<br />
            <span className="text-gradient">Beautifully Decorated</span>
          </h2>
          <p className="text-[#645f70] text-base md:text-[17px] max-w-xl mx-auto leading-relaxed">
            Choose from our carefully curated decoration packages for every celebration — modern, timeless, and unforgettable.
          </p>
        </div>

        {/* ── Filter Pills — centered ── */}
        <div className="flex gap-2 flex-wrap justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#C9386B] text-white shadow-md shadow-[#C9386B]/25'
                  : 'bg-white text-[#666] border border-pink-200 hover:border-[#C9386B] hover:text-[#C9386B]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5">
          {filtered.map((service) => (
            <Link href={`/services/${service.id}`} key={service.id} className="group block">
              <div className="relative rounded-2xl overflow-hidden bg-white border border-pink-100 hover:border-[#C9386B]/40 hover:shadow-xl hover:shadow-[#C9386B]/10 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">

                {/* Image */}
                <div className="relative overflow-hidden h-44 flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />

                  {/* Price */}
                    <div className="absolute bottom-3 left-3 rounded-full bg-[#000000b3] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white shadow-lg">
                      {service.priceLabel}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex flex-col gap-3 mb-4">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-semibold text-[#1a0a0e] text-base md:text-lg leading-snug group-hover:text-[#C9386B] transition-colors">
                          {service.name}
                        </h3>
                        <div className="w-9 h-9 rounded-full bg-pink-50 group-hover:bg-[#C9386B] flex items-center justify-center flex-shrink-0 transition-all duration-300">
                          <ArrowUpRight size={13} className="text-[#C9386B] group-hover:text-white transition-colors" />
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-2 rounded-full bg-[#fff0f7] px-3 py-1 text-[11px] uppercase tracking-[0.2em] font-semibold text-[#c0266a]">
                        <Sparkles size={12} />
                        {categoryMap[service.category] ?? service.category}
                      </span>
                    </div>

                  <p className="text-[#4f4f5f] text-sm leading-relaxed mb-4 flex-1">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#fff0f7] px-3 py-1 text-[11px] font-semibold text-[#c0266a]">
                      Duration: {service.duration}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#fff7ed] px-3 py-1 text-[11px] font-semibold text-[#92400e]">
                      Team: {service.teamSize}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1.5 mt-auto pt-3 border-t border-pink-50">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={11}
                          className={i < Math.floor(service.rating) ? 'fill-[#C9932A] text-[#C9932A]' : 'text-gray-200'}
                        />
                      ))}
                    </div>
                    <span className="text-[#1a0a0e] text-xs font-semibold">{service.rating}</span>
                    <span className="text-[#716f7b] text-xs">({service.reviews} reviews)</span>
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* ── View All — centered bottom ── */}
        <div className="text-center mt-14">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#C9386B] text-white text-sm font-bold hover:bg-[#a8284f] hover:shadow-lg hover:shadow-[#C9386B]/30 transition-all group"
          >
            View All Services
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Playfair+Display:wght@700;800&display=swap');

        .heading-mostrate {
          font-family: 'Cormorant Garamond', 'Playfair Display', Georgia, serif;
          letter-spacing: -0.01em;
        }
      `}</style>
    </section>
  )
}
