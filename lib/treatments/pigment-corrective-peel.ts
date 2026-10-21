import type { Treatment } from './types'

export const pigmentCorrectivePeelTreatment: Treatment = {
  id: 'pigment-corrective-peel',
  slug: 'pigment-corrective-peel',

  name: 'Pigment Corrective Peel Treatment',
  category: 'Pigmentation Treatment',
  tags: ['Bright', 'Radiant', 'Renew'],

  heroImage: '/images/treatments/pigment-corrective-peel/hero.png',
  flyerImage: '/images/treatments/pigment-corrective-peel/flyer.png',

  shortDescription:
    'Chemical peeling untuk kulit lebih cerah, flek tersamarkan, tekstur halus dan glowing alami.',
  description:
    'Chemical peeling treatment untuk kulit lebih cerah, flek tersamarkan, tekstur halus dan glowing alami. Dilakukan oleh dokter dan therapist terlatih menggunakan produk medis berkualitas.',

  durationMinutes: 60,
  price: 195000,

  sections: [
    {
      type: 'steps',
      title: 'Tindakan yang Dilakukan',
      items: [
        { title: 'Deep Cleansing' },
        { title: 'Skin Analysis' },
        { title: 'Eksfoliasi & Preparation' },
        {
          title: 'Chemical Peeling',
          description: 'Disesuaikan dengan kondisi kulit.',
        },
        { title: 'Aplikasi Brightening Serum' },
        { title: 'Moisturizer' },
        { title: 'Sunscreen Protection SPF' },
      ],
    },
    {
      type: 'list',
      title: 'Goal Perawatan',
      items: [
        'Mencerahkan kulit dan mengembalikan glow alami',
        'Memudarkan flek hitam & bekas jerawat',
        'Menyamarkan pori-pori dan meratakan tekstur kulit',
        'Mengangkat sel kulit mati & merangsang regenerasi kulit baru',
        'Menjaga kelembapan dan kesehatan skin barrier',
      ],
    },
    {
      type: 'list',
      title: 'Cocok untuk Siapa?',
      items: [
        'Usia 20-an hingga 40-an',
        'Kulit kusam & lelah',
        'Flek ringan–sedang',
        'Kulit bertekstur tidak rata',
        'Bekas jerawat kemerahan / kehitaman',
        'Perawatan rutin untuk kulit sehat & glowing',
      ],
    },
    {
      type: 'list',
      title: 'Anjuran',
      items: [
        'Hindari paparan sinar matahari langsung',
        'Gunakan sunscreen',
        'Ikuti skincare rumah sesuai anjuran dokter untuk hasil optimal',
      ],
    },
  ],
}
