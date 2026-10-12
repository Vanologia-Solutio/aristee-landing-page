import FloatingWhatsAppButton from '@/components/general/floating-whatsapp-button'
import Footer from '@/components/general/footer'
import JsonLd from '@/components/general/json-ld'
import Navbar from '@/components/general/navbar'
import { BUSINESS_NAME } from '@/lib/constants'
import {
  CITY,
  clinicJsonLd,
  GEO,
  REGION,
  SHORT_NAME,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_URL,
} from '@/lib/seo'
import { TREATMENTS } from '@/lib/treatments'
import { cn } from '@/lib/utils'
import type { Metadata, Viewport } from 'next'
import { Lora, Outfit } from 'next/font/google'
import './globals.css'

const loraHeading = Lora({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-heading',
})
const outfit = Outfit({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BUSINESS_NAME} | ${CITY}, ${REGION}`,
    template: `%s | ${SHORT_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  applicationName: BUSINESS_NAME,
  authors: [{ name: BUSINESS_NAME, url: SITE_URL }],
  creator: BUSINESS_NAME,
  publisher: BUSINESS_NAME,
  category: 'Beauty & Health',
  alternates: { canonical: '/' },
  formatDetection: { telephone: true, address: true, email: true },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: '/',
    siteName: BUSINESS_NAME,
    title: `${BUSINESS_NAME} | ${CITY}, ${REGION}`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BUSINESS_NAME} | ${CITY}, ${REGION}`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  // Isi setelah verifikasi di Google Search Console
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
  other: {
    'geo.region': 'ID-LA',
    'geo.placename': `${CITY}, ${REGION}`,
    'geo.position': `${GEO.latitude};${GEO.longitude}`,
    ICBM: `${GEO.latitude}, ${GEO.longitude}`,
  },
}

export const viewport: Viewport = {
  themeColor: '#1b3c73',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='id'
      data-scroll-behavior='smooth'
      className={cn(
        'antialiased font-sans scroll-smooth bg-background',
        outfit.variable,
        loraHeading.variable,
      )}
    >
      <body>
        <JsonLd data={clinicJsonLd(TREATMENTS)} />
        <div className='min-h-screen flex flex-col'>
          <Navbar />
          {children}
          <Footer />
          <FloatingWhatsAppButton />
        </div>
      </body>
    </html>
  )
}
