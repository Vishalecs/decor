import { MetadataRoute } from 'next'
import { decorCategories } from '@/lib/category-packages'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://decor-events.com'
  const today = new Date().toISOString().split('T')[0]

  const categoryPages = decorCategories.map((category) => ({
    url: `${baseUrl}/category/${category.slug}`,
    lastModified: today,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const packagePages = decorCategories.flatMap((category) =>
    category.packages.map((item) => ({
      url: `${baseUrl}/category/${category.slug}/${item.slug}`,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    }))
  )

  return [
    // Main pages
    {
      url: baseUrl,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/category`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...categoryPages,
    ...packagePages,
    {
      url: `${baseUrl}/contact`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Service pages
    {
      url: `${baseUrl}/services/wedding-decoration`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/birthday-decoration`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/anniversary-celebration`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/corporate-events`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // Location pages
    {
      url: `${baseUrl}/locations/delhi`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/mumbai`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/bangalore`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations/hyderabad`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Auth pages
    {
      url: `${baseUrl}/auth/login`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/auth/signup`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.6,
    },

    // Footer pages
    {
      url: `${baseUrl}/privacy`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}
