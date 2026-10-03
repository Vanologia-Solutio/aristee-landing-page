import type { Treatment } from './types'

export const acneClearPeelTreatment: Treatment = {
  id: 'acne-clear-peel',
  slug: 'acne-clear-peel',

  name: 'Acne Clear Peel Treatment',
  category: 'Acne Treatment',
  tags: ['Clear', 'Renew', 'Refine'],

  heroImage: '/images/treatments/acne-clear-peel/hero.png',
  flyerImage: '/images/treatments/acne-clear-peel/flyer.png',

  shortDescription:
    'Chemical peeling untuk membantu mengatasi komedo, jerawat, dan meratakan tekstur kulit.',
  description:
    'Perawatan lanjutan dengan chemical peeling untuk membantu mengatasi komedo, jerawat, dan meratakan tekstur kulit.',

  durationMinutes: 75,
  price: 195000,

  sections: [
    {
      type: 'steps',
      title: 'Tindakan yang Dilakukan',
      items: [
        {
          title: 'Deep Cleansing / Face Massage',
          description:
            'Membersihkan kotoran, minyak dan sisa makeup sekaligus memijat wajah untuk melancarkan sirkulasi dan relaksasi kulit.',
        },
        {
          title: 'Peel Preparation',
          description:
            'Mempersiapkan kulit agar lebih optimal dalam menerima bahan peeling.',
        },
        {
          title: 'Chemical Peeling',
          description:
            'Peeling dengan bahan aktif sesuai kondisi kulit untuk membantu mengangkat sel kulit mati, membuka pori, dan mengurangi komedo.',
        },
        {
          title: 'Peel Neutralizing',
          description:
            'Menetralkan dan menyeimbangkan kondisi kulit setelah peeling.',
        },
        {
          title: 'After Peel Cream',
          description:
            'Menenangkan dan membantu memperbaiki skin barrier setelah peeling.',
        },
        {
          title: 'Skin Cooling',
          description:
            'Mendinginkan dan menenangkan kulit untuk mengurangi kemerahan.',
        },
        {
          title: 'High SPF Sunscreen',
          description:
            'Melindungi kulit dari sinar UV dan mencegah hiperpigmentasi.',
        },
      ],
    },
    {
      type: 'list',
      title: 'Goal Perawatan',
      items: [
        'Mengangkat sel kulit mati dan membersihkan pori lebih dalam',
        'Mengurangi komedo dan jerawat aktif',
        'Mengontrol produksi sebum berlebih',
        'Mengurangi bakteri penyebab jerawat',
        'Memperbaiki tekstur kulit dan mencerahkan tampilan kulit',
        'Mencegah timbulnya jerawat baru',
      ],
    },
  ],
}
