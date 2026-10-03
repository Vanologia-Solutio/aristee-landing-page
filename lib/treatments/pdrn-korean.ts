import type { Treatment } from './types'

export const pdrnKoreanTreatment: Treatment = {
  id: 'pdrn-korean',
  slug: 'pdrn-korean',

  name: 'PDRN Korean Glass Skin Facial',
  category: 'Youth Healthy Skin Series',
  tags: ['Repair', 'Rejuvenate', 'Glow'],

  heroImage: '/images/treatments/pdrn-korean/hero.png',
  flyerImage: '/images/treatments/pdrn-korean/flyer.png',

  shortDescription:
    'Perawatan intensif PDRN Premium untuk meregenerasi sel kulit dan memperkuat skin barrier.',
  description:
    'Perawatan intensif dengan PDRN Premium untuk membantu meregenerasi sel kulit, meningkatkan elastisitas dan memperkuat skin barrier sehingga kulit tampak sehat, glowing dan bercahaya.',

  durationMinutes: 90,
  price: 220000,

  sections: [
    {
      type: 'steps',
      title: 'Tahapan Perawatan',
      items: [
        {
          title: 'Deep Cleansing',
          description: 'Membersihkan kulit secara menyeluruh hingga ke pori',
        },
        {
          title: 'Lymphatic Drainage Massage',
          description:
            'Merangsang sirkulasi, mengurangi bengkak dan detoksifikasi kulit',
        },
        {
          title: 'Vapozone',
          description: 'Membuka pori dan melunakkan kotoran',
        },
        {
          title: 'Vacuum Ekstraksi Komedo',
          description:
            'Mengangkat komedo dan kotoran secara efektif tanpa iritasi',
        },
        {
          title: 'PDRN Premium Serum',
          description:
            'Menghidrasi, memperbaiki tekstur kulit dan meningkatkan elastisitas',
        },
        {
          title: 'Pink Soft Peel Mask',
          description:
            'Masker lembut berwarna pink untuk menutrisi, mencerahkan dan menenangkan kulit',
        },
        {
          title: 'Cooling & Refresh',
          description: 'Menyejukkan kulit, meredakan kemerahan dan menyegarkan',
        },
        {
          title: 'PDRN Skin Barrier Cream',
          description:
            'Memperkuat skin barrier, menjaga kelembapan dan menutrisi kulit',
        },
        {
          title: 'Sunscreen',
          description:
            'Perlindungan akhir dari sinar UV untuk kulit sehat setiap hari',
        },
      ],
    },
    {
      type: 'list',
      title: 'Cocok untuk Kamu yang',
      items: [
        'Ingin kulit sehat, kenyal dan bercahaya seperti kaca',
        'Kulit mulai kendur dan kehilangan elastisitas',
        'Skin barrier lemah dan mudah iritasi',
        'Kulit kering, dehidrasi dan tampak lelah',
      ],
    },
  ],
}
