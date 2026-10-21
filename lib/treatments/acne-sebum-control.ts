import type { Treatment } from './types'

export const acneSebumControlTreatment: Treatment = {
  id: 'acne-sebum-control',
  slug: 'acne-sebum-control',

  name: 'Acne Sebum Control',
  category: 'Acne Treatment',
  tags: ['Cleanse', 'Control', 'Prevent'],

  heroImage: '/images/treatments/acne-sebum-control/hero.png',
  flyerImage: '/images/treatments/acne-sebum-control/flyer.png',

  shortDescription:
    'Perawatan awal untuk mengontrol minyak berlebih, membersihkan pori, dan mencegah jerawat.',
  description:
    'Perawatan awal untuk mengontrol minyak berlebih, membersihkan pori, dan mencegah timbulnya jerawat.',

  durationMinutes: 60,
  price: 120000,

  sections: [
    {
      type: 'steps',
      title: 'Tindakan yang Dilakukan',
      items: [
        {
          title: 'Deep Cleansing',
          description: 'Membersihkan kotoran, minyak, dan sisa makeup.',
        },
        {
          title: 'Vapozone / Vacuum',
          description:
            'Membuka pori-pori dan membantu mengangkat komedo serta kotoran.',
        },
        {
          title: 'Ekstraksi Komedo Selektif',
          description:
            'Mengangkat komedo dan kotoran pada pori tersumbat secara selektif dan higienis.',
        },
        {
          title: 'High Frequency (HF)',
          description:
            'Membantu mengurangi bakteri penyebab jerawat dan meredakan peradangan.',
        },
        {
          title: 'Sebum Control Masker',
          description:
            'Menenangkan kulit, menyerap minyak berlebih, dan membantu menyegarkan kulit.',
        },
        {
          title: 'Cooling / Acne Serum',
          description:
            'Menyegarkan, menenangkan kulit, dan membantu mengontrol minyak.',
        },
        {
          title: 'Sunscreen',
          description: 'Melindungi kulit dari sinar UV.',
        },
      ],
    },
    {
      type: 'list',
      title: 'Goal Perawatan',
      items: [
        'Mengontrol produksi sebum berlebih',
        'Membersihkan pori dan komedo',
        'Mengurangi bakteri penyebab jerawat',
        'Mencegah timbulnya jerawat baru',
        'Kulit terasa bersih, segar, dan lebih seimbang',
      ],
    },
  ],
}
