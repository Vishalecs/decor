'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Camera, ChevronRight, Flower2, Grid2X2, Sofa, Sparkle, Star } from 'lucide-react'
import { Footer } from '@/components/footer'

const heroImage = "/images/gallery.png"

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=500&fit=crop&q=80', category: 'Wedding', label: 'Grand Wedding' },
  { src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=500&h=500&fit=crop&q=80', category: 'Birthday', label: 'Birthday Bash' },
  { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500&h=500&fit=crop&q=80', category: 'Engagement', label: 'Engagement Ceremony' },
  { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=500&fit=crop&q=80', category: 'Wedding', label: 'Reception Setup' },
  { src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&h=500&fit=crop&q=80', category: 'Anniversary', label: 'Silver Anniversary' },
  { src: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=500&h=500&fit=crop&q=80', category: 'Corporate', label: 'Corporate Event' },
  { src: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=500&h=500&fit=crop&q=80', category: 'Birthday', label: 'Kids Birthday' },
  { src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&h=500&fit=crop&q=80', category: 'Baby Shower', label: 'Baby Shower' },
  { src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&h=500&fit=crop&q=80', category: 'Birthday', label: 'Birthday Decor' },
]

const heroHighlights = [
  {
    icon: Sparkle,
    title: 'Stunning Designs',
    text: 'Unique themes and creative decor that impress.',
  },
  {
    icon: Flower2,
    title: 'Quality & Detail',
    text: 'Premium materials and flawless execution.',
  },
  {
    icon: Sofa,
    title: 'Memorable Setups',
    text: 'Perfect settings for unforgettable moments.',
  },
  {
    icon: Camera,
    title: 'Gallery Highlights',
    text: 'A glimpse of our best events and creations.',
  },
]

const categories = [
  { id: 'all', label: '✨ All Events' },
  { id: 'wedding', label: '💍 Wedding' },
  { id: 'birthday', label: '🎂 Birthday' },
  { id: 'engagement', label: '💕 Engagement' },
  { id: 'baby', label: '👶 Baby Shower' },
  { id: 'anniversary', label: '❤️ Anniversary' },
  { id: 'corporate', label: '🏢 Corporate' },
]

const avatarSeeds = [12, 33, 47, 8]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('latest')
  const [favorites, setFavorites] = useState<number[]>([])

  const filteredImages = galleryImages.filter(img => {
    const matchCategory = selectedCategory === 'all' || img.category.toLowerCase() === selectedCategory.toLowerCase()
    const matchSearch = img.label.toLowerCase().includes(searchTerm.toLowerCase())
    return matchCategory && matchSearch
  })

  const toggleFavorite = (index: number) => {
    setFavorites(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    )
  }

  return (
    <div className="min-h-screen bg-[#fffdfd] text-foreground">
      <main className="pb-20 pt-0">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden bg-[#FDF0F3]">
          {/* Decorative floral SVG - bottom left */}
          <div className="absolute bottom-0 left-0 h-56 w-56 opacity-60 pointer-events-none z-0 select-none">
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
          <div className="absolute top-10 right-8 opacity-30 pointer-events-none z-0 select-none">
            <svg width="120" height="120" viewBox="0 0 120 120">
              {Array.from({ length: 6 }).map((_, row) =>
                Array.from({ length: 6 }).map((_, col) => (
                  <circle key={`${row}-${col}`} cx={col * 20 + 10} cy={row * 20 + 10} r="2.5" fill="#c8637a" />
                ))
              )}
            </svg>
          </div>

          <div className="grid lg:grid-cols-[40%_60%] items-center">
            {/* LEFT: Text Content */}
            <div
              className="relative z-10 py-12 pr-8 space-y-6"
              style={{ paddingLeft: 'max(1.5rem, calc((100vw - 80rem) / 2))' }}
            >
              <p className="flex items-center gap-2 text-xs font-semibold text-[#C9386B] uppercase tracking-widest">
                <span className="text-[#C9932A]">✦</span>
                Our Gallery
                <span className="text-[#C9932A]">✦</span>
              </p>

              <h1 className="font-sans text-[2.6rem] md:text-[3.1rem] lg:text-[3.45rem] font-bold leading-[1.08] text-[#1a0a0e]">
                <span className="block relative pb-2">
                  Event Decoration
                  <span className="absolute left-0 bottom-0 h-1 w-10 rounded-full bg-gradient-to-r from-[#C9386B] to-[#F2A4C0] opacity-85" />
                </span>
                <span className="block relative pb-2 text-[#C9386B]">
                  Showcase
                  <span className="absolute left-0 bottom-0 h-1 w-16 rounded-full bg-gradient-to-r from-[#C9386B] to-[#D18C9D] opacity-85" />
                </span>
              </h1>

              <p className="max-w-md text-[#555] text-base md:text-[17px] leading-relaxed">
                Explore our stunning decorations and memorable setups crafted for every special occasion.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="#gallery-grid"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#C9386B] text-white text-sm font-bold hover:bg-[#a8284f] hover:shadow-lg transition-all"
                >
                  Explore Gallery
                  <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-[#C9932A] text-[#C9932A] text-sm font-bold hover:bg-[#C9932A]/10 transition-all"
                >
                  <Grid2X2 size={15} />
                  Plan Your Event
                </Link>
              </div>

              <div className="flex flex-col gap-2.5 rounded-xl border border-pink-100 bg-white/70 p-3 backdrop-blur-sm sm:flex-row sm:items-center sm:gap-4">
                <div>
                  <p className="text-xs text-gray-700">
                    Trusted by <span className="font-extrabold text-[#C9386B]">500+</span> Happy Clients
                  </p>
                  <div className="mt-1.5 flex items-center -space-x-2">
                    {avatarSeeds.map((seed) => (
                      <img
                        key={seed}
                        src={`https://i.pravatar.cc/64?img=${seed}`}
                        alt="Happy client"
                        className="h-6 w-6 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#C9386B] text-[8px] font-extrabold text-white">
                      +95
                    </span>
                  </div>
                </div>

                <span className="hidden h-8 w-px bg-pink-100 sm:block" />

                <div>
                  <div className="flex items-center gap-1">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, index) => (
                        <Star key={index} size={13} className="fill-[#C9932A] text-[#C9932A]" />
                      ))}
                    </div>
                    <span className="text-xs font-extrabold text-gray-950">4.8/5</span>
                  </div>
                  <p className="mt-0.5 text-[10px] text-gray-500">Based on 240+ Reviews</p>
                </div>
              </div>
            </div>

            {/* RIGHT: Image — matches services page responsive style */}
            <div className="relative block w-full overflow-hidden h-[240px] sm:h-[340px] md:h-[460px] lg:h-full lg:min-h-[600px]">
              <img
                src={heroImage}
                alt="Premium luxury event decoration setup"
                className="absolute inset-0 h-full w-full object-contain object-center"
              />
            </div>
          </div>
        </section>

        {/* Floating feature strip */}
        <div className="mx-auto -mt-6 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 rounded-2xl border border-white/60 bg-white/80 px-6 py-6 shadow-[0_14px_40px_rgba(17,24,39,0.10)] backdrop-blur-md sm:px-8">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4">
              {heroHighlights.map(({ icon: Icon, title, text }, index) => (
                <div
                  key={title}
                  className={`flex items-start gap-3 ${index > 0 ? 'sm:border-l sm:border-pink-100 sm:pl-4' : ''}`}
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#fde6ef] text-[#f7257d]">
                    <Icon size={22} strokeWidth={1.6} />
                  </span>
                  <span>
                    <span className="block text-sm font-extrabold text-gray-950">{title}</span>
                    <span className="mt-0.5 block text-xs leading-5 text-gray-500">{text}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <section className="mt-12 px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-pink-600 text-white shadow-lg shadow-pink-600/30'
                    : 'bg-white text-gray-700 border border-pink-100 hover:border-pink-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* Main Content */}
        <div id="gallery-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Sort and Results */}
          <div className="flex justify-between items-center mb-8 flex-wrap gap-3">
            <div className="text-sm text-gray-600">
              Showing <span className="font-bold">{filteredImages.length}</span> results
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-pink-500"
            >
              <option value="latest">Latest First</option>
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredImages.map((image, index) => (
              <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
                <div className="relative aspect-square overflow-hidden bg-gray-200">
                  <img
                    src={image.src}
                    alt={image.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Heart Button */}
                  <button
                    onClick={() => toggleFavorite(index)}
                    className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                  >
                    <span className="text-lg">{favorites.includes(index) ? '❤️' : '🤍'}</span>
                  </button>

                  {/* Category Badge */}
                  <div className="absolute bottom-3 left-3 bg-white/95 px-3 py-1.5 rounded-full">
                    <span className="text-xs font-bold text-pink-600">{image.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No events found matching your filters.</p>
            </div>
          )}
        </div>

        {/* Stats Section */}
        <section className="mt-20 px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-8 sm:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {[
                { icon: '🎉', value: '500+', label: 'Events Decorated' },
                { icon: '😊', value: '1000+', label: 'Happy Clients' },
                { icon: '👑', value: '5+', label: 'Years Experience' },
                { icon: '📍', value: '20+', label: 'Cities Served' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl sm:text-5xl mb-2">{stat.icon}</div>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}