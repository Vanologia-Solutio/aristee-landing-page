import type { Treatment } from './types'

export const neckAndDecolleteTreatment: Treatment = {
  id: 'neck-and-decollete',
  slug: 'neck-and-decollete',

  name: 'Neck & Décolleté Treatment',
  category: 'Special Area Treatment',
  tags: ['Hydrate', 'Revive', 'Renew'],

  heroImage: '/images/treatments/neck-and-decollete/hero.png',
  flyerImage: '/images/treatments/neck-and-decollete/flyer.png',

  shortDescription:
    'Perawatan khusus leher dan kulit dada atas untuk melembapkan, menutrisi dan menyegarkan kulit.',
  description:
    'Perawatan khusus leher dan kulit dada atas (décolleté) untuk membantu melembapkan, menutrisi dan menyegarkan kulit, sekaligus memberikan relaksasi melalui lymphatic drainage massage.',

  durationMinutes: 40,
  price: 70000,

  sections: [
    {
      type: 'steps',
      title: 'Tahapan Perawatan',
      items: [
        {
          title: 'Gentle Cleansing',
          description:
            'Membersihkan area leher dan kulit dada atas (décolleté) dengan lembut.',
        },
        {
          title: 'Neck Lymphatic Drainage Massage',
          description:
            'Pijatan lembut untuk melancarkan aliran limfa, mengurangi ketegangan dan membantu mengurangi tampilan sembap.',
        },
        {
          title: 'Facial Device Treatment',
          description:
            'Menggunakan alat facial sesuai kebutuhan kulit untuk membantu meningkatkan penyerapan produk dan menyegarkan kulit.',
        },
        {
          title: 'Neck Cream Treatment',
          description:
            'Aplikasi neck cream dengan pijatan lembut untuk menutrisi dan melembapkan kulit.',
        },
        {
          title: 'Cooling & Refresh',
          description:
            'Cooling ringan untuk menenangkan kulit dan memberikan kesegaran.',
        },
      ],
    },
    {
      type: 'list',
      title: 'Paket Perawatan',
      items: [
        'Neck & Décolleté Treatment (perawatan saja) — Rp 70.000',
        'Neck & Décolleté + Take-Home Neck Cream (perawatan + produk) — Rp 110.000',
      ],
    },
  ],
}
