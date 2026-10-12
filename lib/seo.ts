import {
  BUSINESS_NAME,
  INSTAGRAM_URL,
  MAP_DIRECTIONS_URL,
  WHATSAPP_NUMBER,
} from './constants'
import type { Treatment } from './treatments'

// Set NEXT_PUBLIC_SITE_URL to the production domain, e.g. https://www.aristee.com
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')
).replace(/\/$/, '')

export const SHORT_NAME = 'Klinik Kecantikan Aristée'
export const CITY = 'Pringsewu'
export const REGION = 'Lampung'

export const ADDRESS = {
  street: 'Jl. Ahmad Yani No.19',
  district: 'Kec. Pringsewu',
  city: 'Kabupaten Pringsewu',
  region: REGION,
  postalCode: '35373',
  country: 'ID',
}

// Titik lokasi klinik di Google Maps
export const GEO = { latitude: -5.3564045, longitude: 104.9778804 }

export const SITE_DESCRIPTION = `${BUSINESS_NAME} adalah klinik kecantikan di ${CITY}, ${REGION} dengan supervisi dokter. Facial, perawatan jerawat, flek & melasma, peremajaan kulit, skin booster, hingga exosome dengan produk terdaftar BPOM.`

export const SITE_KEYWORDS = [
  'klinik kecantikan Pringsewu',
  'klinik kecantikan Lampung',
  'klinik kecantikan terdekat',
  'klinik kecantikan dokter Pringsewu',
  'klinik estetika Pringsewu',
  'skincare clinic Pringsewu',
  'beauty clinic Pringsewu',
  'dokter kecantikan Pringsewu',
  'facial Pringsewu',
  'facial wajah Pringsewu',
  'perawatan wajah Pringsewu',
  'perawatan kulit Pringsewu',
  'perawatan jerawat Pringsewu',
  'perawatan flek dan melasma',
  'chemical peeling Pringsewu',
  'peremajaan kulit',
  'anti aging Pringsewu',
  'skin booster Pringsewu',
  'collagen stimulator',
  'exosome Pringsewu',
  'PDRN facial',
  'Korean glass skin facial',
  'harga facial Pringsewu',
  'Aristée',
  'Aristee Beauty Clinic',
  'Klinik Kecantikan Aristee',
  'dr. Linda',
]

export function absoluteUrl(path = '/') {
  return `${SITE_URL}${path === '/' ? '' : path}`
}

export function treatmentKeywords(treatment: Treatment) {
  return [
    treatment.name,
    `${treatment.name} ${CITY}`,
    `${treatment.name} ${REGION}`,
    `harga ${treatment.name}`,
    `manfaat ${treatment.name}`,
    `${treatment.category} ${CITY}`,
    ...treatment.tags,
    `klinik kecantikan ${CITY}`,
    SHORT_NAME,
  ]
}

const CLINIC_ID = `${SITE_URL}/#klinik`
const WEBSITE_ID = `${SITE_URL}/#website`

type Crumb = { name: string; path: string }

export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  }
}

function treatmentOffer(treatment: Treatment) {
  if (!treatment.price) return undefined
  return {
    '@type': 'Offer',
    url: absoluteUrl(`/perawatan/${treatment.slug}`),
    price: treatment.price,
    priceCurrency: 'IDR',
    availability: 'https://schema.org/InStock',
  }
}

export function clinicJsonLd(treatments: Treatment[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['MedicalClinic', 'BeautySalon'],
        '@id': CLINIC_ID,
        name: BUSINESS_NAME,
        alternateName: [SHORT_NAME, 'Aristee Beauty Clinic'],
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        image: absoluteUrl('/opengraph-image'),
        telephone: `+${WHATSAPP_NUMBER}`,
        priceRange: 'Rp',
        currenciesAccepted: 'IDR',
        medicalSpecialty: 'https://schema.org/Dermatology',
        address: {
          '@type': 'PostalAddress',
          streetAddress: `${ADDRESS.street}, ${ADDRESS.district}`,
          addressLocality: ADDRESS.city,
          addressRegion: ADDRESS.region,
          postalCode: ADDRESS.postalCode,
          addressCountry: ADDRESS.country,
        },
        geo: { '@type': 'GeoCoordinates', ...GEO },
        hasMap: MAP_DIRECTIONS_URL,
        areaServed: [
          { '@type': 'AdministrativeArea', name: ADDRESS.city },
          { '@type': 'AdministrativeArea', name: REGION },
        ],
        sameAs: [INSTAGRAM_URL],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: `+${WHATSAPP_NUMBER}`,
          contactType: 'reservations',
          availableLanguage: ['id'],
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Perawatan Kulit & Wajah',
          itemListElement: treatments.map(treatment => ({
            '@type': 'Offer',
            ...treatmentOffer(treatment),
            itemOffered: {
              '@type': 'Service',
              name: treatment.name,
              url: absoluteUrl(`/perawatan/${treatment.slug}`),
            },
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: SITE_URL,
        name: BUSINESS_NAME,
        alternateName: SHORT_NAME,
        inLanguage: 'id-ID',
        publisher: { '@id': CLINIC_ID },
      },
    ],
  }
}

export function treatmentListJsonLd(treatments: Treatment[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbJsonLd([
        { name: 'Beranda', path: '/' },
        { name: 'Perawatan', path: '/perawatan' },
      ]),
      {
        '@type': 'ItemList',
        name: `Katalog Perawatan ${BUSINESS_NAME}`,
        numberOfItems: treatments.length,
        itemListElement: treatments.map((treatment, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: treatment.name,
          url: absoluteUrl(`/perawatan/${treatment.slug}`),
        })),
      },
    ],
  }
}

export function treatmentJsonLd(treatment: Treatment) {
  const url = absoluteUrl(`/perawatan/${treatment.slug}`)
  return {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbJsonLd([
        { name: 'Beranda', path: '/' },
        { name: 'Perawatan', path: '/perawatan' },
        { name: treatment.name, path: `/perawatan/${treatment.slug}` },
      ]),
      {
        '@type': 'Service',
        '@id': `${url}#layanan`,
        name: treatment.name,
        description: treatment.description,
        serviceType: treatment.category,
        category: treatment.category,
        url,
        image: absoluteUrl(treatment.heroImage),
        provider: { '@id': CLINIC_ID },
        areaServed: [
          { '@type': 'AdministrativeArea', name: ADDRESS.city },
          { '@type': 'AdministrativeArea', name: REGION },
        ],
        offers: treatmentOffer(treatment),
      },
    ],
  }
}
