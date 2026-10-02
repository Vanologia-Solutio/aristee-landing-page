import type { Treatment } from './types'

export const pigmentMelasmaTreatment: Treatment = {
  id: 'pigment-melasma',
  slug: 'pigment-melasma',

  name: 'Pigment Melasma Repair Treatment',
  category: 'Pigmentation Treatment',
  tags: ['Calm', 'Repair', 'Correct', 'Maintain'],

  heroImage: '/images/treatments/pigment-melasma/hero.png',

  shortDescription:
    'Perawatan intensif namun gentle untuk melasma dan hiperpigmentasi yang persisten.',
  description:
    'Perawatan intensif namun gentle untuk kulit dengan melasma atau hiperpigmentasi yang persisten. Fokus pada pemulihan, penguatan skin barrier, dan perbaikan warna kulit secara bertahap.',

  durationMinutes: 90,
  price: 275000,

  sections: [
    {
      type: 'steps',
      title: 'Tindakan yang Dilakukan',
      items: [
        {
          title: 'Gentle Cleansing',
          description:
            'Membersihkan kotoran, minyak, dan sisa makeup secara lembut.',
        },
        {
          title: 'Face, Neck & Back Massage',
          description:
            'Pijat relaksasi untuk melancarkan sirkulasi, mengurangi ketegangan otot, dan membantu penyerapan nutrisi.',
        },
        {
          title: 'Facial Recovery Treatment',
          description:
            'Perawatan pemulihan menggunakan teknologi facial untuk menenangkan kulit, memperbaiki skin barrier, dan menyiapkan kulit agar optimal menerima nutrisi.',
        },
        {
          title: 'Ultrasonic Therapy',
          description:
            'Membantu penyerapan serum secara optimal, meningkatkan hidrasi, dan memperbaiki tekstur kulit.',
        },
        {
          title: 'Dark Spot Serum',
          description:
            'Serum khusus membantu menyamarkan noda gelap dan meratakan warna kulit.',
        },
        {
          title: 'Soothing Mask & Cooling',
          description:
            'Masker menenangkan untuk mengurangi kemerahan dan memberikan efek sejuk serta menyegarkan kulit.',
        },
        {
          title: 'Tranexamic Cream & Sunscreen',
          description:
            'Membantu mengontrol produksi melanin, melindungi kulit dari sinar UV, dan mencegah hiperpigmentasi berulang.',
        },
      ],
    },
    {
      type: 'list',
      title: 'Goal Perawatan',
      items: [
        'Menenangkan kulit dan mengurangi sensitivitas',
        'Memperbaiki dan memperkuat skin barrier',
        'Menyamarkan hiperpigmentasi secara bertahap',
        'Meratakan warna kulit dan meningkatkan kecerahan',
        'Menjaga kelembapan kulit secara optimal',
        'Mencegah pigmentasi berulang',
        'Memberikan kulit sehat, halus, dan bercahaya',
      ],
    },
  ],
}
