import type { Treatment } from './types'

export const collagenStimulatorTreatment: Treatment = {
  id: 'collagen-stimulator',
  slug: 'collagen-stimulator',

  name: 'Skin Booster atau Collagen Stimulator',
  category: 'Injection Treatment',
  tags: ['Hydrate', 'Rejuvenate', 'Stimulate'],

  heroImage: '/images/treatments/collagen-stimulator/hero.png',
  flyerImage: '/images/treatments/collagen-stimulator/flyer.png',

  shortDescription:
    'Perawatan injeksi untuk meningkatkan hidrasi dan merangsang produksi kolagen alami.',
  description:
    'Perawatan injeksi yang bekerja mendalam untuk meningkatkan hidrasi kulit, merangsang produksi kolagen alami, serta memperbaiki kualitas kulit secara menyeluruh.',

  durationMinutes: 90,
  // Harga belum tercantum di katalog

  sections: [
    {
      type: 'steps',
      title: 'Pilih Perawatan Anda',
      items: [
        {
          title: 'Skin Booster',
          description:
            'Memberikan hidrasi intens ke lapisan kulit, meningkatkan kelembapan dan kecerahan.',
        },
        {
          title: 'Collagen Stimulator',
          description:
            'Merangsang produksi kolagen alami untuk kulit lebih kencang, elastis, dan sehat dari dalam.',
        },
      ],
    },
    {
      type: 'list',
      title: 'Manfaat',
      items: [
        'Kulit lebih lembap, kenyal, dan bercahaya',
        'Merangsang produksi kolagen untuk kulit lebih kencang dan elastis',
        'Memperbaiki tekstur kulit membuat tampilan lebih sehat dan awet muda',
        'Hasil natural, aman, dan minim downtime',
      ],
    },
    {
      type: 'list',
      title: 'Untuk Siapa?',
      items: [
        'Usia 30 tahun ke atas',
        'Kulit mulai kering, kusam, dan kendur',
        'Garis halus mulai terlihat',
        'Ingin menjaga kualitas kulit jangka panjang',
      ],
    },
  ],
}
