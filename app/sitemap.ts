import { MetadataRoute } from 'next'
import { departments } from '@/lib/locations'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://unityvert.fr'

  const deptUrls: MetadataRoute.Sitemap = departments.map((dept) => ({
    url: `${baseUrl}/zones/${dept.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const cityUrls: MetadataRoute.Sitemap = departments.flatMap((dept) =>
    dept.cities.map((city) => ({
      url: `${baseUrl}/zones/${dept.slug}/${city.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }))
  )

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/galerie`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...deptUrls,
    ...cityUrls,
  ]
}
