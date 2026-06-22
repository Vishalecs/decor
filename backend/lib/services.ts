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
    longDescription: 'Our award-winning wedding decoration services transform your venue into a magical setting. We specialize in creating personalized designs that reflect your unique love story, using premium flowers, elegant draping, and sophisticated lighting arrangements.',
    price: 15000,
    priceLabel: 'Starting from ₹15,000',
    rating: 4.9,
    reviews: 342,
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&h=400&fit=crop',
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
      'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1552990827-b53b6d0bced5?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=300&fit=crop',
    ],
    duration: '8-12 hours',
    teamSize: '4-6 members',
  },
  {
    id: 2,
    name: 'Birthday Decoration',
    category: 'birthday',
    description: 'Make birthdays magical with our vibrant and fun decoration themes',
    longDescription: 'Turn birthday celebrations into unforgettable memories with our creative and colorful decoration packages. From kids themes to elegant adult celebrations, we bring joy and excitement to every birthday party.',
    price: 5000,
    priceLabel: 'Starting from ₹5,000',
    rating: 4.8,
    reviews: 289,
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&h=400&fit=crop',
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
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    ],
    duration: '4-6 hours',
    teamSize: '2-3 members',
  },
  {
    id: 3,
    name: 'Anniversary Decoration',
    category: 'anniversary',
    description: 'Celebrate love with romantic and elegant anniversary setups',
    longDescription: 'Create a romantic atmosphere for your special milestone with our elegant anniversary decoration services. We specialize in intimate, sophisticated designs perfect for celebrating love and togetherness.',
    price: 8000,
    priceLabel: 'Starting from ₹8,000',
    rating: 4.9,
    reviews: 215,
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&h=400&fit=crop',
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
      'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1535016066981-2e2e3b822dd0?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1515295285027-555fcf8ec0ea?w=400&h=300&fit=crop',
    ],
    duration: '6-8 hours',
    teamSize: '3-4 members',
  },
  {
    id: 4,
    name: 'Corporate Events',
    category: 'corporate',
    description: 'Professional and elegant setups for your corporate celebrations',
    longDescription: 'Make your corporate events memorable with our professional decoration services. Perfect for conferences, product launches, award ceremonies, and corporate parties with a touch of sophistication.',
    price: 12000,
    priceLabel: 'Starting from ₹12,000',
    rating: 4.7,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&h=400&fit=crop',
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
      'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=300&fit=crop',
    ],
    duration: '6-10 hours',
    teamSize: '3-5 members',
  },
  {
    id: 5,
    name: 'Themed Events',
    category: 'custom',
    description: 'Transform your event with unique and creative theme concepts',
    longDescription: 'Bring any theme to life with our creative and imaginative decoration expertise. From fantasy themes to vintage styles, we create immersive experiences tailored to your vision.',
    price: 10000,
    priceLabel: 'Starting from ₹10,000',
    rating: 4.8,
    reviews: 198,
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&h=400&fit=crop',
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
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1533631406061-409e879e84d3?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop',
    ],
    duration: '8-12 hours',
    teamSize: '4-6 members',
  },
  {
    id: 6,
    name: 'Festival Decoration',
    category: 'seasonal',
    description: 'Celebrate festivals with vibrant and festive decorations',
    longDescription: 'Bring the spirit of celebrations to life with our festival decoration services. From Diwali to Christmas, we create festive atmospheres that capture the joy of every celebration.',
    price: 7000,
    priceLabel: 'Starting from ₹7,000',
    rating: 4.7,
    reviews: 167,
    image: 'https://images.unsplash.com/photo-1467883453080-8ac3256e75a0?w=600&h=400&fit=crop',
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
      'https://images.unsplash.com/photo-1467883453080-8ac3256e75a0?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1516739313521-c79898d51c64?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=400&h=300&fit=crop',
    ],
    duration: '6-8 hours',
    teamSize: '3-4 members',
  },
  {
    id: 7,
    name: 'Party & Social Events',
    category: 'birthday',
    description: 'Fun and vibrant decorations for all social gatherings',
    longDescription: 'Create unforgettable memories at your social events with our colorful and dynamic decoration services. Perfect for house parties, get-togethers, and casual celebrations.',
    price: 4500,
    priceLabel: 'Starting from ₹4,500',
    rating: 4.6,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&h=400&fit=crop',
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
      'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=400&h=300&fit=crop',
    ],
    duration: '3-5 hours',
    teamSize: '2 members',
  },
  {
    id: 8,
    name: 'Music & Nightlife Events',
    category: 'custom',
    description: 'High-energy decorations perfect for concerts and club events',
    longDescription: 'Create a vibrant atmosphere for your music events and nightlife celebrations. We specialize in dynamic lighting, stage setups, and modern décor for high-energy events.',
    price: 20000,
    priceLabel: 'Starting from ₹20,000',
    rating: 4.8,
    reviews: 142,
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop',
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
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=300&fit=crop',
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
