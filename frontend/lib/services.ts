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
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80',
    icon: Heart,
    features: [
      'Customized Theme Design',
      'Premium Flower Arrangements',
      'Professional Lighting Setup',
      'Décor Installation & Removal',
      'Day-of Coordination',
      'Photography Setup Assistance',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=80',
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&q=80',
    ],
    duration: '8 - 12 Hours',
    teamSize: '4 - 6 Members',
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
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80',
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
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80',
      'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=1200&q=80',
      'https://images.unsplash.com/photo-1558301211-9d8f278c4abf?w=1200&q=80',
    ],
    duration: '4 - 6 Hours',
    teamSize: '2 - 3 Members',
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
    image: 'https://images.unsplash.com/photo-1522673604730-f0717d5f1a8e?w=1200&q=80',
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
      'https://images.unsplash.com/photo-1522673604730-f0717d5f1a8e?w=1200&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80',
      'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=1200&q=80',
    ],
    duration: '6 - 8 Hours',
    teamSize: '3 - 4 Members',
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
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80',
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
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80',
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80',
      'https://images.unsplash.com/photo-1475721027785-f64ecc933832?w=1200&q=80',
    ],
    duration: '6 - 10 Hours',
    teamSize: '3 - 5 Members',
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
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80',
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
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80',
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=80',
      'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1200&q=80',
    ],
    duration: '8 - 12 Hours',
    teamSize: '4 - 6 Members',
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
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1200&q=80',
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
      'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1200&q=80',
      'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1200&q=80',
      'https://images.unsplash.com/photo-1482512595542-9c8d8a4b8b8b?w=1200&q=80',
    ],
    duration: '6 - 8 Hours',
    teamSize: '3 - 4 Members',
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
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80',
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
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=80',
    ],
    duration: '3 - 5 Hours',
    teamSize: '2 Members',
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
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=80',
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
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=80',
      'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200&q=80',
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=80',
    ],
    duration: '10 - 14 Hours',
    teamSize: '5 - 8 Members',
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