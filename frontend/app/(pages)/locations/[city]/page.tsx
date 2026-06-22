import { Metadata } from 'next'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { MapPin, Phone, Clock, Star, ChevronRight } from 'lucide-react'

// City data
const citiesData: Record<string, {
  name: string
  description: string
  image: string
  serviceCount: number
  bookings: number
  rating: number
  address: string
  phone: string
  hours: string
  coordinates: { lat: number; lng: number }
}> = {
  'delhi': {
    name: 'Delhi',
    description: 'Premier event decoration services in the heart of India\'s capital. We offer comprehensive decoration solutions for weddings, corporate events, and celebrations.',
    image: 'https://images.unsplash.com/photo-1596961184876-ea74d440b721?w=1200&h=600&fit=crop',
    serviceCount: 250,
    bookings: 2450,
    rating: 4.8,
    address: '123 Rajendra Place, New Delhi, Delhi 110001',
    phone: '+91-9876-543-210',
    hours: '9:00 AM - 10:00 PM',
    coordinates: { lat: 28.6139, lng: 77.2090 }
  },
  'mumbai': {
    name: 'Mumbai',
    description: 'Transform your celebrations with our premium decoration services in Mumbai. Serving the city\'s most prestigious venues and high-profile events.',
    image: 'https://images.unsplash.com/photo-1598361426097-c2670fb3d992?w=1200&h=600&fit=crop',
    serviceCount: 280,
    bookings: 2890,
    rating: 4.9,
    address: '456 Bandra West, Mumbai, Maharashtra 400050',
    phone: '+91-9876-543-211',
    hours: '10:00 AM - 11:00 PM',
    coordinates: { lat: 19.0760, lng: 72.8777 }
  },
  'bangalore': {
    name: 'Bangalore',
    description: 'Innovative decoration solutions for modern celebrations in Bangalore. Create unforgettable memories with our expert event decoration team.',
    image: 'https://images.unsplash.com/photo-1614723414537-b85faf00f655?w=1200&h=600&fit=crop',
    serviceCount: 200,
    bookings: 1890,
    rating: 4.7,
    address: '789 Indiranagar, Bangalore, Karnataka 560008',
    phone: '+91-9876-543-212',
    hours: '9:00 AM - 9:00 PM',
    coordinates: { lat: 12.9716, lng: 77.5946 }
  },
  'hyderabad': {
    name: 'Hyderabad',
    description: 'Elegant and creative decoration services tailored for Hyderabad\'s vibrant culture. Specializing in traditional and contemporary event designs.',
    image: 'https://images.unsplash.com/photo-1519671482677-e66ca3d33f61?w=1200&h=600&fit=crop',
    serviceCount: 180,
    bookings: 1650,
    rating: 4.6,
    address: '321 Jubilee Hills, Hyderabad, Telangana 500033',
    phone: '+91-9876-543-213',
    hours: '9:00 AM - 9:00 PM',
    coordinates: { lat: 17.3850, lng: 78.4867 }
  },
}

interface Props {
  params: Promise<{ city: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params
  const cityData = citiesData[city.toLowerCase()]

  if (!cityData) {
    return {
      title: 'City Not Found | DECOR',
      description: 'This location is not yet available.',
    }
  }

  return {
    title: `Event Decoration Services in ${cityData.name} | DECOR`,
    description: `Professional event decoration services in ${cityData.name}. ${cityData.description} Trusted by ${cityData.bookings}+ customers with ${cityData.rating} star rating.`,
    openGraph: {
      title: `Event Decoration in ${cityData.name}`,
      description: cityData.description,
      images: [{ url: cityData.image, width: 1200, height: 600 }],
      type: 'website',
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(citiesData).map((city) => ({
    city: city,
  }))
}

export default async function CityPage({ params }: Props) {
  const { city } = await params
  const cityData = citiesData[city.toLowerCase()]

  if (!cityData) {
    return (
      <div className="min-h-screen bg-background">
        <main className="pt-24 pb-20">
          <div className="max-w-4xl mx-auto px-4 text-center py-20">
            <h1 className="text-4xl font-bold mb-4">City Not Found</h1>
            <p className="text-muted-foreground mb-8">We&apos;re not yet serving this location, but we&apos;re expanding soon!</p>
            <Link href="/services" className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:shadow-lg transition-shadow">
              View All Services
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24 pb-20">
        <div className="w-full">
          {/* Hero Banner */}
          <div className="h-96 bg-cover bg-center relative" style={{ backgroundImage: `url('${cityData.image}')` }}>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <div className="max-w-4xl mx-auto w-full">
                <h1 className="text-5xl font-display font-bold text-white mb-3">Event Decoration in {cityData.name}</h1>
                <p className="text-xl text-gray-100">{cityData.description}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto px-4 py-20">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              <div className="bg-white rounded-lg p-6 border border-border text-center">
                <p className="text-4xl font-bold text-primary mb-2">{cityData.serviceCount}+</p>
                <p className="text-muted-foreground">Active Services</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-border text-center">
                <p className="text-4xl font-bold text-primary mb-2">{cityData.bookings}+</p>
                <p className="text-muted-foreground">Happy Customers</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-border text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Star size={24} className="text-yellow-500 fill-yellow-500" />
                  <p className="text-4xl font-bold text-primary">{cityData.rating}</p>
                </div>
                <p className="text-muted-foreground">Average Rating</p>
              </div>
            </div>

            {/* Services Section */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8">Our Services in {cityData.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['Wedding Decoration', 'Birthday Decoration', 'Anniversary Celebration', 'Corporate Events', 'Festival Decorations', 'Custom Events'].map((service) => (
                  <Link key={service} href="/services">
                    <div className="bg-white rounded-lg p-6 border border-border hover:shadow-lg hover:border-primary transition-all cursor-pointer h-full">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-lg font-bold text-foreground">{service}</h3>
                        <ChevronRight size={20} className="text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">Professional {service.toLowerCase()} services tailored for {cityData.name}.</p>
                      <button className="mt-4 text-primary font-semibold hover:text-primary/80 transition-colors">
                        Learn More →
                      </button>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-8 text-white mb-20">
              <h2 className="text-3xl font-bold mb-8">Contact Our {cityData.name} Office</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin size={24} />
                    <h3 className="font-bold text-lg">Address</h3>
                  </div>
                  <p>{cityData.address}</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Phone size={24} />
                    <h3 className="font-bold text-lg">Phone</h3>
                  </div>
                  <a href={`tel:${cityData.phone}`} className="hover:underline">{cityData.phone}</a>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Clock size={24} />
                    <h3 className="font-bold text-lg">Hours</h3>
                  </div>
                  <p>{cityData.hours}</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Decorate Your Event?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get started with our simple and intuitive booking process. Choose your service, select your preferences, and we&apos;ll handle the rest.
              </p>
              <Link href="/booking" className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-bold hover:shadow-lg transition-shadow">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
