import { BUSINESS_NAME } from '@/lib/constants'
import { SHORT_NAME, SITE_DESCRIPTION } from '@/lib/seo'
import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BUSINESS_NAME,
    short_name: SHORT_NAME,
    description: SITE_DESCRIPTION,
    lang: 'id',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1b3c73',
    icons: [{ src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' }],
  }
}
