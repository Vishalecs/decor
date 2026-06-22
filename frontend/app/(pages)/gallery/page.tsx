'use client'

import { useState } from 'react'
import { Footer } from '@/components/footer'

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

const categories = [
  { id: 'all', label: '✨ All Events' },
  { id: 'wedding', label: '💍 Wedding' },
  { id: 'birthday', label: '🎂 Birthday' },
  { id: 'engagement', label: '💕 Engagement' },
  { id: 'baby', label: '👶 Baby Shower' },
  { id: 'anniversary', label: '❤️ Anniversary' },
  { id: 'corporate', label: '🏢 Corporate' },
]

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
      <main className="pb-20 pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-pink-50 bg-[#fff6fa]">
          <div className="absolute inset-y-0 right-0 hidden w-[56%] lg:block">
            <img 
              src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1000&h=800&fit=crop&q=80" 
              alt="Beautiful event decoration gallery" 
              className="h-full w-full object-cover" 
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,0.98) 30%, rgba(255,255,255,0.85) 45%, rgba(255,255,255,0.45) 60%, rgba(255,255,255,0) 100%)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </div>

          <div className="mx-auto grid min-h-[365px] max-w-7xl items-center px-4 py-12 sm:px-6 lg:px-8">
            <div className="relative z-10 max-w-xl">
              <p className="text-sm font-extrabold uppercase tracking-normal text-[#f7257d]">Our Gallery</p>
              <h1 className="mt-4 font-sans text-4xl font-extrabold leading-[1.12] tracking-normal text-[#111827] sm:text-5xl lg:text-[3.45rem]">
                Event
                <span className="block">
                  <span className="text-[#f7257d]">Decoration</span> Showcase
                </span>
              </h1>
              <p className="mt-5 max-w-lg text-base leading-7 text-[#566174]">
                Explore our stunning decorations and memorable setups crafted for every special occasion.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter Pills */}
        <section className="px-4 sm:px-6 lg:px-8 mb-12">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Gallery Grid - Full Width */}
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
