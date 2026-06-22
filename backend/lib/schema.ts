// Schema markup utilities for SEO

export interface OrganizationSchema {
  '@context': string
  '@type': string
  name: string
  description: string
  url: string
  logo: string
  contactPoint: {
    '@type': string
    contactType: string
    telephone: string
    email: string
  }
  sameAs: string[]
  address: {
    '@type': string
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
}

export interface LocalBusinessSchema {
  '@context': string
  '@type': string
  name: string
  image: string
  description: string
  address: {
    '@type': string
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  telephone: string
  url: string
  priceRange: string
  aggregateRating?: {
    '@type': string
    ratingValue: number
    reviewCount: number
  }
  geo: {
    '@type': string
    latitude: number
    longitude: number
  }
}

export interface ProductSchema {
  '@context': string
  '@type': string
  name: string
  description: string
  image: string
  offers: {
    '@type': string
    price: string
    priceCurrency: string
    availability: string
  }
  aggregateRating?: {
    '@type': string
    ratingValue: number
    reviewCount: number
  }
}

export const organizationSchema: OrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'DECOR',
  description: 'Premium event decoration services for weddings, birthdays, corporate events, and celebrations.',
  url: 'https://decor-events.com',
  logo: 'https://decor-events.com/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: '+91-9876-543-210',
    email: 'support@decor-events.com',
  },
  sameAs: [
    'https://www.facebook.com/decor-events',
    'https://www.instagram.com/decor-events',
    'https://www.twitter.com/decor-events',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Rajendra Place',
    addressLocality: 'New Delhi',
    addressRegion: 'Delhi',
    postalCode: '110001',
    addressCountry: 'IN',
  },
}

export function generateLocalBusinessSchema(cityData: {
  name: string
  address: string
  phone: string
  rating: number
  bookings: number
  coordinates: { lat: number; lng: number }
}): LocalBusinessSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `DECOR - ${cityData.name}`,
    image: 'https://decor-events.com/logo.png',
    description: `Event decoration services in ${cityData.name}. Premium decoration for weddings, birthdays, corporate events, and celebrations.`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: cityData.address.split(',')[0],
      addressLocality: cityData.name,
      addressRegion: cityData.name,
      postalCode: '000000',
      addressCountry: 'IN',
    },
    telephone: cityData.phone,
    url: `https://decor-events.com/locations/${cityData.name.toLowerCase()}`,
    priceRange: '₹5,000 - ₹100,000+',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: cityData.rating,
      reviewCount: cityData.bookings,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: cityData.coordinates.lat,
      longitude: cityData.coordinates.lng,
    },
  }
}

export function generateProductSchema(product: {
  name: string
  description: string
  image: string
  price: number
  rating: number
  reviews: number
}): ProductSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    offers: {
      '@type': 'Offer',
      price: product.price.toString(),
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviews,
    },
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateArticleSchema(article: {
  title: string
  description: string
  image: string
  author: string
  publishedDate: string
  modifiedDate: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    image: article.image,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate,
    url: article.url,
  }
}
