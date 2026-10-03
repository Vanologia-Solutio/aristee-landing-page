import type { Treatment } from './types'

export const matureSkinHydrationTreatment: Treatment = {
  id: 'mature-skin-hydration',
  slug: 'mature-skin-hydration',

  name: 'Mature Skin Hydration Facial',
  category: 'Rejuvenation Program',
  tags: ['Hydrate', 'Restore', 'Glow'],

  heroImage: '/images/treatments/mature-skin-hydration/hero.png',
  flyerImage: '/images/treatments/mature-skin-hydration/flyer.png',

  shortDescription:
    'Hidrasi intens untuk kulit mature (40+) yang kering, kusam dan kehilangan elastisitas.',
  description:
    'Perawatan dasar untuk kulit mature (usia 40+) yang kering, kusam dan kehilangan elastisitas. Memberikan hidrasi intens, memperkuat skin barrier dan membuat kulit tampak segar serta bercahaya.',

  durationMinutes: 75,
  price: 160000,

  sections: [
    {
      type: 'steps',
      title: 'Tahap Perawatan',
      items: [
        {
          title: 'Gentle Cleansing',
          description:
            'Membersihkan kotoran, minyak dan sisa makeup secara menyeluruh',
        },
        {
          title: 'Lymphatic Drainage Massage',
          description:
            'Pijat lembut wajah & leher untuk melancarkan aliran getah bening dan mengurangi bengkak',
        },
        {
          title: 'Vapozone dan Vacuum',
          description:
            'Membuka pori, melunakkan komedo dan mengangkat kotoran secara efektif',
        },
        {
          title: 'Aplikasi Anti Aging Serum & Hidrasi dengan Device Khusus',
          description:
            'Memberikan nutrisi aktif dan hidrasi intens menggunakan teknologi penunjang',
        },
        {
          title: 'Mummy Hard Mask',
          description:
            'Masker keras yang membantu mengencangkan kulit, meningkatkan elastisitas dan hidrasi',
        },
        {
          title: 'Anti Aging Cream & Sunscreen',
          description:
            'Mengunci kelembapan dan melindungi kulit dari sinar UV untuk hasil optimal',
        },
      ],
    },
    {
      type: 'list',
      title: 'Manfaat Perawatan',
      items: [
        'Menghidrasi dan melembapkan kulit secara optimal',
        'Memperkuat skin barrier & menjaga kelembapan kulit',
        'Kulit tampak lebih segar, kenyal dan bercahaya alami',
        'Membantu mengurangi tampilan garis halus akibat dehidrasi',
      ],
    },
  ],
}
