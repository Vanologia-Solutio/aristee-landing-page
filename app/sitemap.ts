import { absoluteUrl } from '@/lib/seo'
import { TREATMENTS } from '@/lib/treatments'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: absoluteUrl('/'),
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: absoluteUrl('/perawatan'),
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...TREATMENTS.map(treatment => ({
      url: absoluteUrl(`/perawatan/${treatment.slug}`),
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      images: [absoluteUrl(treatment.heroImage)],
    })),
  ]
}
