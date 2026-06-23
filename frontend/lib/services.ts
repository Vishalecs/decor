import { Heart, Cake, Flower2, Wand2, Music, Gift, Sparkles, Palette } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Service {
  id: number
  name: string
  category: 'wedding' | 'birthday' | 'anniversary' | 'corporate' | 'seasonal' | 'custom'
  description: string
  longDescription: string
  price: number
  priceLabel: string
  rating: number
  reviews: number
  image: string
  icon: LucideIcon
  features: string[]
  gallery: string[]
  duration: string
  teamSize: string
}

export const services: Service[] = [
  {
    id: 1,
    name: 'Wedding Decoration',
    category: 'wedding',
    description: 'Create your dream wedding with our exquisite decoration designs',
    longDescription: 'Transform your wedding venue into a breathtaking paradise with our premium decoration services. From elegant floral arrangements to stunning stage setups, we create magical atmospheres that make your special day truly unforgettable. Our expert team handles everything from entrance decor to mandap design with meticulous attention to detail.',
    price: 15000,
    priceLabel: 'Starting from ₹15,000',
    rating: 4.9,
    reviews: 342,
    image: '/images/wedding.png',
    icon: Heart,
    features: [
      'Customized theme design',
      'Premium flower arrangements',
      'Professional lighting setup',
      'Décor installation & removal',
      'Day-of coordination',
      'Photography setup assistance',
    ],
    gallery: [
      '/images/wedding1.png',
      '/images/wedding2.png',
      '/images/wedding3.png',
    ],
    duration: '8-12 hours',
    teamSize: '4-6 members',
  },
  {
    id: 2,
    name: 'Birthday Decoration',
    category: 'birthday',
    description: 'Make birthdays magical with our vibrant and fun decoration themes',
    longDescription: 'Turn birthday celebrations into unforgettable memories with our creative and colorful decoration packages. From kids themes to elegant adult celebrations, we bring joy and excitement to every birthday party with personalized touches and vibrant setups.',
    price: 5000,
    priceLabel: 'Starting from ₹5,000',
    rating: 4.8,
    reviews: 289,
    image: '/images/birthday.png',
    icon: Cake,
    features: [
      'Age-specific themes',
      'Balloon arrangements',
      'Backdrop setup',
      'Table decorations',
      'Photo booth area',
      'Quick setup & takedown',
    ],
    gallery: [
      '/images/birthday1.png',
      '/images/birthday2.png',
      '/images/birthday3.png',
    ],
    duration: '4-6 hours',
    teamSize: '2-3 members',
  },
  {
    id: 3,
    name: 'Anniversary Decoration',
    category: 'anniversary',
    description: 'Celebrate love with romantic and elegant anniversary setups',
    longDescription: 'Create a romantic atmosphere for your special milestone with our elegant anniversary decoration services. We specialize in intimate, sophisticated designs perfect for celebrating love and togetherness with candlelight dinners, floral arches, and personalized decor.',
    price: 8000,
    priceLabel: 'Starting from ₹8,000',
    rating: 4.9,
    reviews: 215,
    image: '/images/anniversary.png',
    icon: Flower2,
    features: [
      'Romantic theme customization',
      'Rose and floral arrangements',
      'Ambient lighting design',
      'Candle setups',
      'Photo backdrop creation',
      'Personalized touches',
    ],
    gallery: [
      '/images/anniversary1.png',
      '/images/anniversary2.png',
      '/images/anniversary3.png',
    ],
    duration: '6-8 hours',
    teamSize: '3-4 members',
  },
  {
    id: 4,
    name: 'Corporate Events',
    category: 'corporate',
    description: 'Professional and elegant setups for your corporate celebrations',
    longDescription: 'Make your corporate events memorable with our professional decoration services. Perfect for conferences, product launches, award ceremonies, and corporate parties with a touch of sophistication and brand-aligned designs.',
    price: 12000,
    priceLabel: 'Starting from ₹12,000',
    rating: 4.7,
    reviews: 156,
    image: '/images/corprate.png',
    icon: Palette,
    features: [
      'Brand-aligned design',
      'Professional setup',
      'Branded backdrops',
      'Stage decoration',
      'Lighting arrangement',
      'Event coordination',
    ],
    gallery: [
      '/images/corporate1.png',
      '/images/corporate2.png',
      '/images/corporate3.png',
    ],
    duration: '6-10 hours',
    teamSize: '3-5 members',
  },
  {
    id: 5,
    name: 'Themed Events',
    category: 'custom',
    description: 'Transform your event with unique and creative theme concepts',
    longDescription: 'Bring any theme to life with our creative and imaginative decoration expertise. From fantasy themes to vintage styles, we create immersive experiences tailored to your vision and preferences.',
    price: 10000,
    priceLabel: 'Starting from ₹10,000',
    rating: 4.8,
    reviews: 198,
    image: '/images/theme.png',
    icon: Wand2,
    features: [
      'Custom theme development',
      'Creative prop arrangements',
      'Immersive design',
      'Color-coordinated setup',
      'Thematic lighting',
      'Interactive elements',
    ],
    gallery: [
      '/images/custom1.png',
      '/images/custom2.png',
      '/images/custom3.png',
    ],
    duration: '8-12 hours',
    teamSize: '4-6 members',
  },
  {
    id: 6,
    name: 'Festival Decoration',
    category: 'seasonal',
    description: 'Celebrate festivals with vibrant and festive decorations',
    longDescription: 'Bring the spirit of celebrations to life with our festival decoration services. From Diwali to Christmas, we create festive atmospheres that capture the joy of every celebration with traditional and modern fusion designs.',
    price: 7000,
    priceLabel: 'Starting from ₹7,000',
    rating: 4.7,
    reviews: 167,
    image: '/images/fastival.png',
    icon: Sparkles,
    features: [
      'Festival-specific designs',
      'Traditional & modern fusion',
      'String light arrangements',
      'Lamp and lantern setup',
      'Gate decoration',
      'Entrance arches',
    ],
    gallery: [
      '/images/festival1.png',
      '/images/festival2.png',
      '/images/festival3.png',
    ],
    duration: '6-8 hours',
    teamSize: '3-4 members',
  },
  {
    id: 7,
    name: 'Party & Social Events',
    category: 'birthday',
    description: 'Fun and vibrant decorations for all social gatherings',
    longDescription: 'Create unforgettable memories at your social events with our colorful and dynamic decoration services. Perfect for house parties, get-togethers, and casual celebrations with quick setup and stunning visuals.',
    price: 4500,
    priceLabel: 'Starting from ₹4,500',
    rating: 4.6,
    reviews: 203,
    image: '/images/party.png',
    icon: Gift,
    features: [
      'Colorful balloon setups',
      'Bunting and streamers',
      'Table centerpieces',
      'Background decoration',
      'Lighting effects',
      'Quick installation',
    ],
    gallery: [
      '/images/party1.png',
      '/images/party2.png',
      '/images/party3.png',
    ],
    duration: '3-5 hours',
    teamSize: '2 members',
  },
  {
    id: 8,
    name: 'Music & Nightlife Events',
    category: 'custom',
    description: 'High-energy decorations perfect for concerts and club events',
    longDescription: 'Create a vibrant atmosphere for your music events and nightlife celebrations. We specialize in dynamic lighting, stage setups, and modern décor for high-energy events that leave lasting impressions.',
    price: 20000,
    priceLabel: 'Starting from ₹20,000',
    rating: 4.8,
    reviews: 142,
    image: '/images/music.png',
    icon: Music,
    features: [
      'Stage lighting design',
      'Dynamic projections',
      'Professional sound backdrop',
      'LED arrangements',
      'Modern prop design',
      'VIP area setup',
    ],
    gallery: [
      '/images/music1.png',
      '/images/music2.png',
      '/images/music3.png',
    ],
    duration: '10-14 hours',
    teamSize: '5-8 members',
  },
]

export const categories = [
  { id: 'all', label: 'All Services' },
  { id: 'wedding', label: 'Weddings' },
  { id: 'birthday', label: 'Birthdays' },
  { id: 'anniversary', label: 'Anniversaries' },
  { id: 'corporate', label: 'Corporate' },
  { id: 'seasonal', label: 'Seasonal' },
  { id: 'custom', label: 'Custom Events' },
]

export function getServiceById(id: number): Service | undefined {
  return services.find((service) => service.id === id)
}

export function getServicesByCategory(category: string): Service[] {
  if (category === 'all') return services
  return services.filter((service) => service.category === category)
}

export function searchServices(query: string): Service[] {
  const lowerQuery = query.toLowerCase()
  return services.filter(
    (service) =>
      service.name.toLowerCase().includes(lowerQuery) ||
      service.description.toLowerCase().includes(lowerQuery) ||
      service.longDescription.toLowerCase().includes(lowerQuery)
  )
}