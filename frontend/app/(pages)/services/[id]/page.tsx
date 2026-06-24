'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Footer } from '@/components/footer'
import { getServiceById } from '@/lib/services'
import {
  Star,
  Heart,
  ArrowRight,
  MapPin,
  Clock,
  Users,
  ChevronRight,
  ChevronDown,
  FileText,
  Palette,
  Flower2,
  Settings2,
  CalendarCheck,
  ShieldCheck,
  Award,
  Pencil,
  Camera,
  Lightbulb,
  Brush,
  Calendar,
  CircleHelp,
  Building2,
  HelpCircle,
} from 'lucide-react'
import { useParams } from 'next/navigation'
import type { LucideIcon } from 'lucide-react'

const NAVY = '#1a2b48'
const PINK = '#c35064'

const demoAvatars = [
  'https://i.pravatar.cc/80?img=1',
  'https://i.pravatar.cc/80?img=5',
  'https://i.pravatar.cc/80?img=9',
  'https://i.pravatar.cc/80?img=12',
]

const serviceExtras: Record<number, {
  tagline: string
  trustLabel: string
  highlightBadges: { icon: React.ReactNode; label: string }[]
  featureSubtitles: string[]
  faqs: { q: string; a: string; icon: LucideIcon }[]
  trustStats: { icon: React.ReactNode; value: string; label: string; sub: string }[]
}> = {
  1: {
    tagline: 'Where Your Love Story Comes to Life',
    trustLabel: 'Trusted by 300+ Couples',
    highlightBadges: [
      { icon: <Palette size={20} />, label: 'Personalized Theme Design' },
      { icon: <Flower2 size={20} />, label: 'Premium Fresh Flowers' },
      { icon: <Settings2 size={20} />, label: 'Professional Setup' },
      { icon: <CalendarCheck size={20} />, label: 'On-time Execution' },
      { icon: <ShieldCheck size={20} />, label: 'Hassle-free Experience' },
    ],
    featureSubtitles: [
      'Unique concepts that reflect your vision',
      'Fresh, vibrant & high-quality flowers',
      'Elegant lighting to create the perfect mood',
      'Complete setup and neat takedown',
      'Smooth execution so you can enjoy your day',
      'Beautiful backdrops for picture-perfect moments',
    ],
    faqs: [
      { q: 'Can I customize the decoration design?', a: 'Absolutely! We specialize in personalized decorations. Our team will work with you to understand your vision and create a custom design that reflects your personality and style.', icon: CircleHelp },
      { q: 'What areas do you cover?', a: 'We currently serve all areas within the city. For outside city events, please contact us for special arrangements.', icon: MapPin },
      { q: 'How far in advance should I book?', a: 'We recommend booking at least 2–3 weeks in advance to ensure availability and allow sufficient time for planning.', icon: Calendar },
      { q: 'Do you provide fresh flowers?', a: 'Yes, we use only premium-quality fresh flowers sourced daily to ensure freshness and vibrancy throughout your event.', icon: Flower2 },
      { q: 'Can you decorate both indoor and outdoor venues?', a: 'Yes, our team is experienced in decorating both indoor and outdoor venues, adapting designs to suit each environment beautifully.', icon: Building2 },
    ],
    trustStats: [
      { icon: <Heart size={18} />, value: '500+', label: 'Weddings Decorated', sub: 'Creating magical memories' },
      { icon: <Award size={18} />, value: '5+', label: 'Years of Experience', sub: 'Delivering excellence' },
      { icon: <Pencil size={18} />, value: '100%', label: 'Customization', sub: 'Designed just for you' },
      { icon: <Clock size={18} />, value: 'On-Time', label: 'Delivery', sub: 'Always on schedule' },
      { icon: <Star size={18} />, value: 'Happy Couples', label: '300+ 5-Star Reviews', sub: 'Trusted & loved' },
    ],
  },
}

const defaultExtras = (serviceName: string) => ({
  tagline: `Professional ${serviceName} You Can Trust`,
  trustLabel: 'Trusted by 300+ Clients',
  highlightBadges: [
    { icon: <Palette size={20} />, label: 'Custom Design' },
    { icon: <Settings2 size={20} />, label: 'Professional Setup' },
    { icon: <CalendarCheck size={20} />, label: 'On-time Execution' },
    { icon: <ShieldCheck size={20} />, label: 'Hassle-free Experience' },
    { icon: <Award size={20} />, label: 'Premium Quality' },
  ],
  featureSubtitles: [
    'Unique concepts for your event',
    'Premium quality materials',
    'Professional lighting setup',
    'Complete setup & takedown',
    'Smooth day-of coordination',
    'Picture-perfect backdrops',
  ],
  faqs: [
    { q: 'Can I customize the decoration design?', a: 'Absolutely! Every decoration is personalized to your vision.', icon: CircleHelp },
    { q: 'What areas do you cover?', a: 'We serve all areas within the city.', icon: MapPin },
    { q: 'How far in advance should I book?', a: 'We recommend booking at least 2–3 weeks in advance.', icon: Calendar },
    { q: 'Do you handle setup and takedown?', a: 'Yes, our team handles complete setup and post-event takedown.', icon: Settings2 },
    { q: 'Is the price fixed?', a: 'Starting prices are listed; final pricing depends on customization and venue size.', icon: HelpCircle },
  ],
  trustStats: [
    { icon: <Heart size={18} />, value: '500+', label: 'Events Done', sub: 'Creating magical memories' },
    { icon: <Award size={18} />, value: '5+', label: 'Years of Experience', sub: 'Delivering excellence' },
    { icon: <Pencil size={18} />, value: '100%', label: 'Customization', sub: 'Designed just for you' },
    { icon: <Clock size={18} />, value: 'On-Time', label: 'Delivery', sub: 'Always on schedule' },
    { icon: <Star size={18} />, value: 'Happy Clients', label: '4.8 Avg Rating', sub: 'Trusted & loved' },
  ],
})

const featureIcons = [Palette, Flower2, Lightbulb, Brush, Calendar, Camera]

function SectionDivider() {
  return (
    <div className="flex justify-center items-center gap-1.5 mb-6">
      <div className="h-px w-8 bg-rose-200" />
      <Heart size={10} className="text-[#c35064] fill-[#c35064]" />
      <Heart size={7} className="text-[#c35064]/30 fill-[#c35064]/30" />
      <div className="h-px w-8 bg-rose-200" />
    </div>
  )
}

function FaqItem({ q, a, icon: Icon }: { q: string; a: string; icon: LucideIcon }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 py-5 px-2 text-left group"
      >
        <div className="w-11 h-11 rounded-full bg-[#c35064]/10 flex items-center justify-center flex-shrink-0 text-[#c35064]">
          <Icon size={19} />
        </div>
        <span className="flex-1 text-center text-base sm:text-lg font-semibold text-gray-800 group-hover:text-[#c35064] transition-colors">
          {q}
        </span>
        <ChevronDown
          size={20}
          className={`text-gray-400 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <p className="pb-6 px-2 sm:px-8 text-center text-base text-gray-500 leading-relaxed max-w-2xl mx-auto">
          {a}
        </p>
      )}
    </div>
  )
}

export default function ServiceDetailPage() {
  const params = useParams()
  const serviceId = parseInt(params.id as string)
  const service = getServiceById(serviceId)

  if (!service) {
    return (
      <div className="min-h-screen bg-[#fcf9f9]">
        <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Service not found</h1>
          <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 bg-[#c35064] text-white rounded-full font-medium">
            Back to Services
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  const extras = serviceExtras[service.id] ?? defaultExtras(service.name)
  const nameParts = service.name.split(' ')
  const nameFirst = nameParts[0]
  const nameRest = nameParts.slice(1).join(' ')
  const heroImage = service.gallery[0] || service.image

  return (
    <div className="min-h-screen bg-[#fcf9f9]">
      <main>

        {/* ── HERO ── */}
        <section className="relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px] lg:min-h-[580px]">

            {/* Left content */}
            <div className="relative z-10 px-5 sm:px-8 lg:px-12 xl:px-16 pt-3 sm:pt-4 pb-36 lg:pb-28">
              {/* Pink watercolor splash */}
              <div
                className="absolute top-0 right-0 w-72 h-72 pointer-events-none opacity-40"
                style={{
                  background: 'radial-gradient(circle at 70% 30%, rgba(232,160,180,0.55) 0%, rgba(252,233,240,0.3) 40%, transparent 70%)',
                }}
              />

              {/* Breadcrumb */}
              <div className="flex items-center gap-2 mb-4 text-sm text-gray-400 relative">
                <Link href="/" className="hover:text-[#c35064] transition-colors">Home</Link>
                <ChevronRight size={14} />
                <Link href="/services" className="hover:text-[#c35064] transition-colors">Services</Link>
                <ChevronRight size={14} />
                <span className="text-gray-600 font-medium">{service.name}</span>
              </div>

              <p
                className="text-[#c35064] text-2xl sm:text-3xl mb-2 relative"
                style={{ fontFamily: 'var(--font-great-vibes), cursive' }}
              >
                {extras.tagline}
              </p>

              <h1
                className="font-bold leading-[1.05] mb-5 relative"
                style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', fontFamily: 'var(--font-playfair-display), Georgia, serif' }}
              >
                <span style={{ color: NAVY }}>{nameFirst}</span>
                {nameRest && (
                  <>
                    <br />
                    <span style={{ color: PINK }}>{nameRest}</span>
                  </>
                )}
              </h1>

              <p className="text-gray-500 leading-relaxed mb-5 text-[15px] max-w-[480px] relative">
                {service.longDescription}
              </p>

              {/* Rating + avatars */}
              <div className="flex flex-wrap items-center gap-3 mb-6 relative">
                <div className="flex items-center gap-1.5">
                  <Star size={18} className="fill-amber-400 text-amber-400" />
                  <span className="font-bold text-gray-800">{service.rating}</span>
                  <span className="text-gray-400 text-sm">({service.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {demoAvatars.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt=""
                        className="w-8 h-8 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{extras.trustLabel}</span>
                </div>
              </div>

              {/* Info cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-7 relative max-w-[520px]">
                {[
                  { icon: Clock, label: 'Duration', value: service.duration },
                  { icon: Users, label: 'Team Size', value: service.teamSize },
                  { icon: MapPin, label: 'Coverage', value: 'Within City' },
                ].map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2.5 bg-white border border-gray-200 rounded-xl px-3.5 py-3 shadow-sm"
                  >
                    <Icon size={18} className="text-[#c35064] flex-shrink-0" />
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">{label}</p>
                      <p className="text-xs font-bold text-gray-800">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mb-2 relative">
                <Link
                  href={`/booking?service=${service.id}`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#c35064] text-white font-bold rounded-full text-sm hover:bg-[#a84258] transition-colors shadow-md shadow-[#c35064]/20"
                >
                  Book Now <ArrowRight size={16} />
                </Link>
                <button className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-[#c35064] text-[#c35064] font-semibold rounded-full text-sm hover:bg-[#c35064]/5 transition-colors bg-white">
                  <FileText size={16} /> Get Quote
                </button>
              </div>
              <p className="text-xs text-gray-400 relative">*Price may vary based on customization</p>
            </div>

            {/* Right — hero image with framed, layered look */}
            <div className="relative hidden lg:flex items-center justify-center min-h-[580px] pr-10 xl:pr-16 py-10">
              {/* Soft blurred color glow behind the frame */}
              <div
                className="absolute right-6 top-1/2 -translate-y-1/2 w-[85%] aspect-[4/5] rounded-[2.5rem] pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 40%, rgba(195,80,100,0.25) 0%, transparent 70%)',
                  filter: 'blur(30px)',
                }}
              />

              {/* Gold accent ring, offset behind the image */}
              <div
                className="absolute right-2 top-8 w-full max-w-[460px] aspect-[4/5] rounded-[2rem] border-2 pointer-events-none"
                style={{ borderColor: 'rgba(201,147,42,0.35)' }}
              />

              {/* Main framed image */}
              <div className="relative w-full max-w-[460px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-black/20 ring-1 ring-white/40">
                <img
                  src={heroImage}
                  alt={service.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Subtle bottom gradient for depth, no text needed */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(26,43,72,0.25) 100%)',
                  }}
                />
                {/* Fine inner border for a polished edge */}
                <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/30 pointer-events-none" />
              </div>

              {/* Small floating accent badge */}
              <div className="absolute left-0 bottom-16 hidden xl:flex items-center gap-2 bg-white rounded-2xl shadow-lg shadow-black/10 px-4 py-3 border border-gray-100">
                <Heart size={16} className="text-[#c35064] fill-[#c35064]" />
                <div>
                  <p className="text-xs font-bold text-gray-800 leading-none">{service.rating} Rating</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">{service.reviews} reviews</p>
                </div>
              </div>
            </div>

            {/* Mobile hero image */}
            <div className="relative lg:hidden h-64 sm:h-80 mx-5 rounded-2xl overflow-hidden mb-4 shadow-lg shadow-black/10 ring-1 ring-white/40">
              <img src={heroImage} alt={service.name} className="w-full h-full object-cover" />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(26,43,72,0.3) 100%)' }}
              />
            </div>
          </div>

          {/* Feature bar */}
          <div className="absolute bottom-0 left-0 right-0 z-20 px-4 sm:px-6 lg:px-8 pb-4 lg:pb-6">
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 px-4 sm:px-6 py-4 lg:py-5">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-2">
                {extras.highlightBadges.map((badge, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 text-center">
                    <div className="w-10 h-10 rounded-full bg-[#c35064]/10 flex items-center justify-center text-[#c35064]">
                      {badge.icon}
                    </div>
                    <span className="text-[11px] sm:text-xs font-medium text-gray-600 leading-tight">
                      {badge.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT'S INCLUDED + FAQ (stacked, full width) ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex flex-col gap-6 lg:gap-8">

            {/* What's Included */}
            <div className="w-full bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2
                className="text-xl sm:text-2xl font-bold text-center mb-1"
                style={{ color: NAVY, fontFamily: 'var(--font-playfair-display), Georgia, serif' }}
              >
                What&apos;s Included
              </h2>
              <SectionDivider />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {service.features.map((feature, index) => {
                  const FeatureIcon = featureIcons[index] ?? Palette
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#c35064]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FeatureIcon size={16} className="text-[#c35064]" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-800">{feature}</p>
                        <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                          {extras.featureSubtitles[index] ?? ''}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* FAQ */}
            <div className="w-full bg-white border border-gray-100 rounded-2xl p-6 sm:p-10 shadow-sm">
              <h2
                className="text-2xl sm:text-3xl font-bold text-center mb-1"
                style={{ color: NAVY, fontFamily: 'var(--font-playfair-display), Georgia, serif' }}
              >
                Frequently Asked Questions
              </h2>
              <SectionDivider />
              <div className="flex flex-col max-w-3xl mx-auto">
                {extras.faqs.map((faq, i) => (
                  <FaqItem key={i} q={faq.q} a={faq.a} icon={faq.icon} />
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
