'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Star, MapPin } from 'lucide-react'

interface ServiceCardProps {
  id: string
  name: string
  category: string
  image: string
  rating: number
  reviewCount: number
  startingPrice: number
  description: string
  location?: string
}

export function ServiceCard({
  id,
  name,
  category,
  image,
  rating,
  reviewCount,
  startingPrice,
  description,
  location,
}: ServiceCardProps) {
  return (
    <Link href={`/services/${id}`}>
      <div className="group overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer h-full flex flex-col">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden bg-muted">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {/* Overlay Badge */}
          <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </div>
        </div>

        {/* Content Container */}
        <div className="flex-1 p-6 flex flex-col">
          {/* Title */}
          <h3 className="font-display text-xl font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {name}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
            {description}
          </p>

          {/* Location */}
          {location && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <MapPin size={16} className="text-secondary" />
              <span>{location}</span>
            </div>
          )}

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < Math.floor(rating) ? 'fill-secondary text-secondary' : 'text-muted'}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">{rating.toFixed(1)}</span>
            <span className="text-xs text-muted-foreground">({reviewCount} reviews)</span>
          </div>

          {/* Price Footer */}
          <div className="border-t border-border pt-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground">Starting from</p>
              <p className="font-display text-2xl font-bold text-primary">₹{startingPrice.toLocaleString()}</p>
            </div>
            <div className="text-right">
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-rose-dark transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
