import type { Treatment } from './types'

export const skinRenewalAndRadiantTreatment: Treatment = {
  id: 'skin-renewal-and-radiant',
  slug: 'skin-renewal-and-radiant',

  name: 'Skin Renewal & Radiant Treatment',
  category: 'Rejuvenation Program',
  tags: ['Cerah', 'Halus', 'Bercahaya'],

  heroImage: '/images/treatments/skin-renewal-and-radiant/hero.png',

  shortDescription:
    'Deep cleansing, chemical peeling dan nutrisi aktif untuk mengembalikan cahaya alami kulit usia 40+.',
  description:
    'Perawatan intensif dengan kombinasi deep cleansing, chemical peeling dan nutrisi aktif untuk memperbaiki kulit kusam, menyamarkan noda, meratakan tekstur dan mengembalikan cahaya alami kulit Anda. Untuk usia 40+.',

  durationMinutes: 90,
  price: 220000,

  sections: [
    {
      type: 'steps',
      title: 'Tahap Perawatan',
      items: [
        { title: 'Cleansing' },
        { title: 'Face & Neck Lymphatic Drainage' },
        { title: 'Hyaluronic & Collagen Serum' },
        { title: 'Mummy Hard Mask' },
        { title: 'Chemical Peeling' },
        { title: 'Peel Neutralizing' },
        { title: 'Cooling & Calming Cream' },
        { title: 'Sunscreen' },
      ],
    },
  ],
}
