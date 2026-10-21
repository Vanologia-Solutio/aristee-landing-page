import type { Treatment } from './types'

export const glowInfusionAndImmuneBoosterTreatment: Treatment = {
  id: 'glow-infusion-and-immune-booster',
  slug: 'glow-infusion-and-immune-booster',

  name: 'Glowing Infusion & Immune Booster',
  category: 'Injection Treatment',
  tags: ['Glow', 'Protect', 'Boost'],

  heroImage: '/images/treatments/glow-infusion-and-immune-booster/hero.png',
  flyerImage: '/images/treatments/glow-infusion-and-immune-booster/flyer.png',

  shortDescription:
    'Infus Vitamin C untuk mendukung kulit cerah, sehat, dan daya tahan tubuh yang optimal.',
  description:
    'Nutrisi Vitamin C melalui infus untuk mendukung kulit cerah, sehat, dan daya tahan tubuh yang optimal. Sudah termasuk konsultasi dan monitoring, serta bonus 3 sachet Glowing Sheet Mask.',

  durationMinutes: 60,
  price: 280000,

  sections: [
    {
      type: 'steps',
      title: 'Alur Perawatan',
      items: [
        { title: 'Konsultasi & Screening' },
        { title: 'Persiapan & Pemasangan Infus' },
        { title: 'Glowing Infusion Vitamin C' },
        { title: 'Monitoring Selama Infus' },
        { title: 'Setelah Infus & Hydration' },
      ],
    },
    {
      type: 'list',
      title: 'Manfaat',
      items: [
        'Menangkal radikal bebas akibat polusi dan paparan lingkungan',
        'Membantu mencerahkan kulit dan membuat tampak lebih glowing',
        'Menjaga kesehatan kulit dan meningkatkan elastisitas',
        'Meningkatkan daya tahan tubuh dan membantu proses detox alami',
      ],
    },
    {
      type: 'list',
      title: 'Bonus & Rekomendasi',
      items: [
        'Free 3 sachet Glowing Sheet Mask (Vitamin C, Glutation, Niacinamide B5)',
        'Terapi lanjutan di rumah dengan Glutation Peroral untuk menjaga hasil perawatan dari dalam',
      ],
    },
  ],
}
