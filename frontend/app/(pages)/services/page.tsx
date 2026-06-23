'use client'

import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import { Footer } from '@/components/footer'
import {
  Baby,
  Building2,
  Cake,
  CalendarHeart,
  ChevronDown,
  ChevronRight,
  Gem,
  Gift,
  Grid2X2,
  Headphones,
  Heart,
  MapPin,
  Medal,
  PartyPopper,
  RefreshCw,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Star,
} from 'lucide-react'
import { getServicesByCategory, searchServices, services } from '@/lib/services'

const heroImage = "/images/services.png"

const categoryTiles = [
  {
    id: 'birthday',
    label: 'Birthday',
    Icon: Cake,
    gradient: 'from-[#ff4d8d] to-[#ff9f43]',
    glow: 'shadow-[#ff4d8d]/20',
    ring: 'border-[#ffd1df]',
  },
  {
    id: 'wedding',
    label: 'Wedding',
    Icon: CalendarHeart,
    gradient: 'from-[#c9386b] to-[#c9932a]',
    glow: 'shadow-[#c9386b]/20',
    ring: 'border-[#f2c6d6]',
  },
  {
    id: 'anniversary',
    label: 'Anniversary',
    Icon: Heart,
    gradient: 'from-[#ef476f] to-[#7c3aed]',
    glow: 'shadow-[#7c3aed]/20',
    ring: 'border-[#e6d7ff]',
  },
  {
    id: 'custom',
    label: 'Baby Shower',
    Icon: Baby,
    gradient: 'from-[#38bdf8] to-[#f9a8d4]',
    glow: 'shadow-[#38bdf8]/20',
    ring: 'border-[#cdefff]',
  },
  {
    id: 'birthday',
    label: 'House Party',
    Icon: PartyPopper,
    gradient: 'from-[#f59e0b] to-[#ef4444]',
    glow: 'shadow-[#f59e0b]/20',
    ring: 'border-[#fed7aa]',
  },
  {
    id: 'corporate',
    label: 'Corporate',
    Icon: Building2,
    gradient: 'from-[#2563eb] to-[#14b8a6]',
    glow: 'shadow-[#2563eb]/20',
    ring: 'border-[#bfdbfe]',
  },
  {
    id: 'custom',
    label: 'Surprise Setup',
    Icon: Gift,
    gradient: 'from-[#a855f7] to-[#ec4899]',
    glow: 'shadow-[#a855f7]/20',
    ring: 'border-[#ead5ff]',
  },
  {
    id: 'seasonal',
    label: 'Luxury Events',
    Icon: Gem,
    gradient: 'from-[#111827] to-[#c9932a]',
    glow: 'shadow-[#c9932a]/25',
    ring: 'border-[#f5d88e]',
  },
]

const avatarSeeds = [12, 33, 47, 8]

const trustItems = [
  {
    icon: ShieldCheck,
    title: 'Verified Vendors',
    text: 'All our vendors are background verified',
  },
  {
    icon: Medal,
    title: 'Best Price Guarantee',
    text: 'Get the best quality at unbeatable prices',
  },
  {
    icon: Gift,
    title: 'Custom Packages',
    text: 'Tailored packages for your unique needs',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    text: "We're here to help you anytime, anywhere",
  },
]

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('rating')

  const filteredServices = useMemo(() => {
    let result = searchQuery
      ? searchServices(searchQuery)
      : getServicesByCategory(selectedCategory)

    if (sortBy === 'rating') {
      result = [...result].sort((a, b) => b.rating - a.rating)
    } else if (sortBy === 'price-low') {
      result = [...result].sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      result = [...result].sort((a, b) => b.price - a.price)
    } else if (sortBy === 'reviews') {
      result = [...result].sort((a, b) => b.reviews - a.reviews)
    }

    return result
  }, [selectedCategory, searchQuery, sortBy])

  const featuredServices = [services[0], services[1]].filter(Boolean)

  return (
    <div className="min-h-screen bg-[#fffdfd] text-[#111827]">
      <main className="pb-16 pt-0">
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
                Your Celebration, Our Passion
                <span className="text-[#C9932A]">✦</span>
              </p>

              <h1 className="font-sans text-[2.6rem] md:text-[3.1rem] lg:text-[3.45rem] font-bold leading-[1.08] text-[#1a0a0e]">
                <span className="block relative pb-2">
                  Beautiful Setup
                  <span className="absolute left-0 bottom-0 h-1 w-10 rounded-full bg-gradient-to-r from-[#C9386B] to-[#F2A4C0] opacity-85" />
                </span>
                <span className="block relative pb-2 text-[#C9386B]">
                  For Every Moment
                  <span className="absolute left-0 bottom-0 h-1 w-16 rounded-full bg-gradient-to-r from-[#C9386B] to-[#D18C9D] opacity-85" />
                </span>
              </h1>

              <p className="max-w-md text-[#555] text-base md:text-[17px] leading-relaxed">
                From birthdays to weddings, we create unforgettable experiences tailored just for you.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="/booking"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#C9386B] text-white text-sm font-bold hover:bg-[#a8284f] hover:shadow-lg transition-all"
                >
                  Plan Your Event
                  <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#services-list"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-[#C9932A] text-[#C9932A] text-sm font-bold hover:bg-[#C9932A]/10 transition-all"
                >
                  <Grid2X2 size={15} />
                  Explore Services
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

            {/* RIGHT: Image — 60% space, responsive, full image visible without cropping */}
            <div className="relative block w-full overflow-hidden h-[240px] sm:h-[340px] md:h-[460px] lg:h-full lg:min-h-[600px]">
              <img
                src={heroImage}
                alt="Premium luxury event decoration setup"
                className="absolute inset-0 h-full w-full object-contain object-center"
              />
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <section className="mt-12">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-6 w-1 rounded-full bg-[#f7257d]" />
              <h2 className="font-sans text-xl font-extrabold tracking-normal text-gray-950">Browse by Category</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
              {categoryTiles.map(({ id, label, Icon, gradient, glow, ring }) => {
                const active = selectedCategory === id && !searchQuery

                return (
                  <button
                    key={label}
                    onClick={() => {
                      setSelectedCategory(id)
                      setSearchQuery('')
                    }}
                    className={`group min-h-[124px] rounded-xl border bg-white p-4 text-center shadow-[0_10px_25px_rgba(247,37,125,0.06)] transition hover:-translate-y-1 hover:shadow-xl ${glow} ${
                      active ? 'border-[#f7257d] ring-4 ring-pink-100' : ring
                    }`}
                  >
                    <span className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${gradient} text-white shadow-lg transition duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      <Icon size={31} strokeWidth={1.9} />
                    </span>
                    <span className="mt-3 block text-sm font-extrabold text-gray-950 transition group-hover:text-[#c91864]">{label}</span>
                  </button>
                )
              })}
            </div>
          </section>

          <section className="mt-9">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h2 className="flex items-center gap-3 font-sans text-xl font-extrabold tracking-normal text-gray-950">
                <span className="h-6 w-1 rounded-full bg-[#f7257d]" />
                Featured Services
              </h2>
              <Link href="#services-list" className="inline-flex items-center gap-1 text-sm font-extrabold text-[#c91864]">
                View All
                <ChevronRight size={16} />
              </Link>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {featuredServices.map((service, index) => (
                <Link
                  href={`/services/${service.id}`}
                  key={service.id}
                  className="group relative min-h-[275px] overflow-hidden rounded-xl bg-gray-950 shadow-[0_14px_35px_rgba(17,24,39,0.13)]"
                >
                  <img
                    src={service.image}
                    alt={service.name}
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute left-6 top-5 rounded-lg bg-white px-4 py-2 text-xs font-extrabold text-[#f7257d]">
                    {index === 0 ? 'Popular' : 'Trending'}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                    <div>
                      <h3 className="font-sans text-xl font-extrabold tracking-normal text-white">{service.name}</h3>
                      <div className="mt-2 flex flex-wrap items-center gap-2 text-xs font-semibold text-white">
                        <Star size={14} className="fill-[#ffca3a] text-[#ffca3a]" />
                        <span>{service.rating}</span>
                        <span className="text-white/80">({service.reviews})</span>
                        <span className="text-white/70">|</span>
                        <span>Delhi NCR</span>
                      </div>
                    </div>
                    <span className="shrink-0 rounded-md bg-[#f7257d] px-5 py-3 text-xs font-extrabold text-white transition group-hover:bg-white group-hover:text-[#f7257d]">
                      View Details
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section id="services-list" className="mt-9">
            <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="flex items-center gap-3 font-sans text-xl font-extrabold tracking-normal text-gray-950">
                <span className="h-6 w-1 rounded-full bg-[#f7257d]" />
                All Services
              </h2>

              <div className="flex gap-3">
                <button className="inline-flex h-10 items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-800 shadow-sm">
                  <SlidersHorizontal size={16} className="text-[#c91864]" />
                  Filter
                  <ChevronDown size={14} />
                </button>
                <label className="relative inline-flex h-10 items-center rounded-lg border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-800 shadow-sm">
                  <SlidersHorizontal size={16} className="mr-2 text-[#c91864]" />
                  <select
                    value={sortBy}
                    onChange={(event) => setSortBy(event.target.value)}
                    className="appearance-none bg-transparent pr-6 outline-none"
                  >
                    <option value="rating">Sort By</option>
                    <option value="reviews">Most Reviews</option>
                    <option value="price-low">Price Low</option>
                    <option value="price-high">Price High</option>
                  </select>
                  <ChevronDown size={14} className="pointer-events-none absolute right-3" />
                </label>
              </div>
            </div>

            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {filteredServices.map((service: any) => (
                  <Link
                    href={`/services/${service.id}`}
                    key={service.id}
                    className="group overflow-hidden rounded-xl border border-pink-100 bg-white shadow-[0_10px_26px_rgba(247,37,125,0.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(247,37,125,0.14)]"
                  >
                    <div className="relative aspect-[1.55] overflow-hidden bg-pink-50">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <span
                        aria-label={`Save ${service.name}`}
                        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm"
                      >
                        <Heart size={19} />
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-sans text-sm font-extrabold tracking-normal text-gray-950">{service.name}</h3>
                      <div className="mt-3 flex items-center gap-2 text-xs">
                        <Star size={14} className="fill-[#f7257d] text-[#f7257d]" />
                        <span className="font-extrabold text-[#f7257d]">{service.rating}</span>
                        <span className="text-gray-500">({service.reviews})</span>
                      </div>
                      <div className="mt-2 flex items-center gap-1.5 text-xs text-gray-500">
                        <MapPin size={13} className="text-[#f7257d]" />
                        Delhi NCR
                      </div>
                      <div className="mt-4 flex items-end justify-between gap-3">
                        <div>
                          <p className="text-xs text-gray-600">From</p>
                          <p className="font-sans text-base font-extrabold tracking-normal text-gray-950">
                            Rs.{service.price.toLocaleString('en-IN')}
                          </p>
                        </div>
                        <span className="rounded-md border border-[#f7257d] px-4 py-2 text-xs font-extrabold text-[#f7257d] transition group-hover:bg-[#f7257d] group-hover:text-white">
                          Know More
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-pink-100 bg-white py-16 text-center shadow-sm">
                <Search size={34} className="mx-auto text-pink-300" />
                <h3 className="mt-4 font-sans text-2xl font-extrabold tracking-normal text-gray-950">
                  No services found
                </h3>
                <p className="mt-2 text-sm text-gray-500">Try a different search term or browse all categories.</p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory('all')
                  }}
                  className="mt-6 rounded-md bg-[#f7257d] px-6 py-3 text-sm font-extrabold text-white"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </section>

          <div className="mt-8 text-center">
            <button className="inline-flex items-center gap-2 rounded-lg border border-[#ff8ab8] px-12 py-3 text-sm font-extrabold text-[#f7257d] transition hover:bg-pink-50">
              Load More Services
              <RefreshCw size={16} />
            </button>
          </div>

          <section className="mt-8 grid gap-4 rounded-2xl border border-pink-100 bg-white p-6 shadow-[0_10px_28px_rgba(247,37,125,0.06)] sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map(({ icon: Icon, title, text }, index) => (
              <div key={title} className={`flex items-center gap-4 ${index > 0 ? 'lg:border-l lg:border-pink-100 lg:pl-6' : ''}`}>
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#fff0f6]">
                  <Icon size={27} className="text-[#f7257d]" />
                </span>
                <span>
                  <span className="block text-sm font-extrabold text-gray-950">{title}</span>
                  <span className="mt-1 block text-xs leading-5 text-gray-500">{text}</span>
                </span>
              </div>
            ))}
          </section>

          <section className="mt-8 overflow-hidden rounded-2xl bg-[#f7257d] px-7 py-8 text-white shadow-[0_18px_40px_rgba(247,37,125,0.18)] sm:px-10 lg:flex lg:items-center lg:justify-between">
            <div>
              <h2 className="font-sans text-3xl font-extrabold leading-tight tracking-normal">
                Let's Plan Your
                <span className="block">Dream Event</span>
              </h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/90">
                Share your requirements and we'll take care of the rest.
              </p>
            </div>
            <Link
              href="/booking"
              className="mt-6 inline-flex items-center justify-center gap-3 rounded-lg bg-white px-8 py-4 text-sm font-extrabold text-[#f7257d] shadow-lg transition hover:-translate-y-0.5 hover:text-[#d41468] lg:mt-0"
            >
              Get a Free Quote
              <ChevronRight size={18} />
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
