'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Footer } from '@/components/footer'
import { getServiceById, services } from '@/lib/services'
import {
  Star,
  Heart,
  Share2,
  ArrowLeft,
  ArrowRight,
  Check,
  MapPin,
  Clock,
  Users,
  ChevronRight,
  Phone,
  MessageCircle,
  Plus,
} from 'lucide-react'
import { useParams } from 'next/navigation'

export default function ServiceDetailPage() {
  const params = useParams()
  const serviceId = parseInt(params.id as string)
  const service = getServiceById(serviceId)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  if (!service) {
    return (
      <div className="min-h-screen bg-white">
        <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-display font-bold mb-4">Service not found</h1>
            <p className="text-gray-600 mb-8">The service you&apos;re looking for doesn&apos;t exist.</p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:scale-105 transition-transform"
            >
              <ArrowLeft size={18} />
              Back to Services
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const IconComponent = service.icon
  const relatedServices = services.filter((s: any) => s.category === service.category && s.id !== service.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={16} />
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <ChevronRight size={16} />
            <span className="text-foreground font-medium">{service.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Images */}
            <div>
              {/* Main Image */}
              <div className="relative aspect-square rounded-3xl overflow-hidden mb-4 bg-gray-100 group">
                <img
                  src={service.gallery[selectedImage]}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                  aria-label="Add to favorites"
                >
                  <Heart
                    size={24}
                    className={isFavorite ? 'fill-primary text-primary' : 'text-gray-600'}
                  />
                </button>
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-3">
                {service.gallery.map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden transition-all ${
                      selectedImage === index
                        ? 'ring-2 ring-primary ring-offset-2'
                        : 'ring-1 ring-gray-200 hover:ring-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${service.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Details */}
            <div>
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                        <IconComponent size={28} className="text-white" />
                      </div>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-widest">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f5b942]" />
                        {service.category}
                      </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                      {service.name}
                    </h1>
                  </div>
                  <button
                    className="p-3 hover:bg-gray-100 rounded-full transition-colors"
                    aria-label="Share"
                  >
                    <Share2 size={24} className="text-gray-600" />
                  </button>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={
                          i < Math.floor(service.rating)
                            ? 'fill-primary text-primary'
                            : 'text-gray-300'
                        }
                      />
                    ))}
                  </div>
                  <span className="text-lg font-bold">{service.rating}</span>
                  <span className="text-gray-600">({service.reviews} reviews)</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4">About This Service</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {service.longDescription}
                </p>
              </div>

              {/* Why Choose Us */}
              <div className="mb-8 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/10">
                <h3 className="text-xl font-display font-bold mb-4">Why Choose Our {service.name}?</h3>
                <p className="text-gray-700 leading-relaxed">
                  We bring years of expertise and creativity to every event. Our dedicated team ensures 
                  flawless execution, using only premium materials and innovative designs. With hundreds 
                  of successful events and satisfied clients, we guarantee an experience that exceeds your expectations.
                </p>
              </div>

              {/* Key Details */}
              <div className="flex items-stretch justify-between mb-8 p-6 bg-gray-50 rounded-2xl divide-x divide-gray-200">
                <div className="flex-1 flex flex-col items-center text-center px-2">
                  <Clock size={22} className="text-primary mb-2" />
                  <p className="text-[11px] uppercase tracking-wide text-gray-500 mb-1">Duration</p>
                  <p className="font-bold text-sm">{service.duration}</p>
                </div>
                <div className="flex-1 flex flex-col items-center text-center px-2">
                  <Users size={22} className="text-primary mb-2" />
                  <p className="text-[11px] uppercase tracking-wide text-gray-500 mb-1">Team Size</p>
                  <p className="font-bold text-sm">{service.teamSize}</p>
                </div>
                <div className="flex-1 flex flex-col items-center text-center px-2">
                  <MapPin size={22} className="text-primary mb-2" />
                  <p className="text-[11px] uppercase tracking-wide text-gray-500 mb-1">Coverage</p>
                  <p className="font-bold Thomasm-bold text-sm">Within City</p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-display font-bold mb-4">Service Highlights</h3>
                <ul className="space-y-3">
                  {service.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={12} className="text-primary" />
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Details */}
              <div className="mb-8 p-6 bg-gray-50 rounded-2xl">
                <h3 className="text-xl font-display font-bold mb-4">Service Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Clock size={18} className="text-primary" />
                    <div>
                      <p className="text-sm text-gray-500">Setup Time</p>
                      <p className="font-semibold">{service.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users size={18} className="text-primary" />
                    <div>
                      <p className="text-sm text-gray-500">Team Members</p>
                      <p className="font-semibold">{service.teamSize}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-primary" />
                    <div>
                      <p className="text-sm text-gray-500">Service Area</p>
                      <p className="font-semibold">Within City</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star size={18} className="text-primary" />
                    <div>
                      <p className="text-sm text-gray-500">Rating</p>
                      <p className="font-semibold">{service.rating} / 5</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Price & CTA */}
              <div className="rounded-2xl bg-gradient-to-r from-primary via-[#f5b942] to-secondary p-[1.5px] mb-6">
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6">
                  <p className="text-sm text-gray-600 mb-2">Starting Price</p>
                  <div className="flex items-baseline justify-between mb-6 flex-wrap gap-2">
                    <div>
                      <span className="text-4xl font-bold text-primary">₹{service.price.toLocaleString()}</span>
                      <span className="text-gray-600 ml-2">onwards</span>
                    </div>
                    <p className="text-xs text-gray-600">*Price may vary based on customization</p>
                  </div>
                  <div className="flex gap-3">
                    <Link
                      href={`/booking?service=${service.id}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white font-bold rounded-full hover:scale-105 transition-transform text-center"
                    >
                      Book Now
                      <ArrowRight size={18} />
                    </Link>
                    <button className="px-6 py-4 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary/5 transition-colors">
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mb-6 grid grid-cols-3 gap-3">
                <div className="text-center p-3 bg-gray-50 rounded-xl">
                  <p className="text-2xl font-bold text-primary">500+</p>
                  <p className="text-xs text-gray-600">Events Done</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-xl">
                  <p className="text-2xl font-bold text-primary">4.9</p>
                  <p className="text-xs text-gray-600">Avg Rating</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-xl">
                  <p className="text-2xl font-bold text-primary">100%</p>
                  <p className="text-xs text-gray-600">Satisfaction</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <p className="text-sm text-gray-600 mb-4">Have questions? Reach out to our team</p>
                <div className="flex gap-4">
                  <a
                    href="tel:+919876543210"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-center font-semibold hover:border-primary transition-colors"
                  >
                    <Phone size={16} />
                    Call Us
                  </a>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-center font-semibold hover:border-primary transition-colors"
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Related Services */}
          {relatedServices.length > 0 && (
            <div className="mb-20">
              <h2 className="text-3xl font-display font-bold mb-8">Related Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedServices.map((relatedService: any) => {
                  const RelatedIcon = relatedService.icon
                  return (
                    <Link href={`/services/${relatedService.id}`} key={relatedService.id}>
                      <div className="group cursor-pointer transition-transform duration-300 hover:-translate-y-1">
                        <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-gray-100">
                          <img
                            src={relatedService.image}
                            alt={relatedService.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute top-3 right-3 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                            <RelatedIcon size={20} className="text-white" />
                          </div>
                        </div>
                        <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                          {relatedService.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">{relatedService.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-primary font-bold">₹{relatedService.price.toLocaleString()}</span>
                          <ChevronRight size={18} className="text-primary group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}

          {/* Process Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Book Consultation', desc: 'Share your vision and requirements with our team' },
                { step: '02', title: 'Design Planning', desc: 'We create a custom decoration plan just for you' },
                { step: '03', title: 'Setup & Execution', desc: 'Our team handles complete setup at your venue' },
                { step: '04', title: 'Enjoy Your Event', desc: 'Relax and enjoy your beautifully decorated event' },
              ].map((item) => (
                <div key={item.step} className="text-center p-6 bg-gray-50 rounded-2xl">
                  <span className="text-4xl font-bold text-primary/20">{item.step}</span>
                  <h3 className="font-bold mt-2 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-display font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group border-b-2 border-gray-200 pb-4">
                <summary className="flex items-center justify-between gap-4 cursor-pointer font-bold text-lg [&::-webkit-details-marker]:hidden">
                  Can I customize the decoration design?
                  <Plus size={20} className="text-primary flex-shrink-0 group-open:rotate-45 transition-transform" />
                </summary>
                <p className="text-gray-600 mt-4">
                  Absolutely! We specialize in personalized decorations. Our team will work with you to understand your vision and create a custom design.
                </p>
              </details>
              <details className="group border-b-2 border-gray-200 pb-4">
                <summary className="flex items-center justify-between gap-4 cursor-pointer font-bold text-lg [&::-webkit-details-marker]:hidden">
                  What areas do you cover?
                  <Plus size={20} className="text-primary flex-shrink-0 group-open:rotate-45 transition-transform" />
                </summary>
                <p className="text-gray-600 mt-4">
                  We currently serve all areas within the city. For outside city events, please contact us for special arrangements.
                </p>
              </details>
              <details className="group border-b-2 border-gray-200 pb-4">
                <summary className="flex items-center justify-between gap-4 cursor-pointer font-bold text-lg [&::-webkit-details-marker]:hidden">
                  How far in advance should I book?
                  <Plus size={20} className="text-primary flex-shrink-0 group-open:rotate-45 transition-transform" />
                </summary>
                <p className="text-gray-600 mt-4">
                  We recommend booking at least 2-3 weeks in advance to ensure availability and allow time for planning.
                </p>
              </details>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}