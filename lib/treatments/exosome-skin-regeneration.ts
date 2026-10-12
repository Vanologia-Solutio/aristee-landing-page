import type { Treatment } from './types'

export const exosomeSkinRegenerationTreatment: Treatment = {
  id: 'exosome-skin-regeneration',
  slug: 'exosome-skin-regeneration',

  name: 'Exosome Skin Regeneration',
  category: 'Injection Treatment',
  tags: ['Regenerate', 'Repair', 'Renew'],

  heroImage: '/images/treatments/exosome-skin-regeneration/hero.png',
  flyerImage: '/images/treatments/exosome-skin-regeneration/flyer.png',

  shortDescription:
    'Perawatan regenerasi kulit tingkat lanjut untuk kulit sehat, muda dan bercahaya.',
  description:
    'Perawatan regenerasi kulit tingkat lanjut. Exosome bekerja merangsang sel kulit, memperbaiki jaringan, meningkatkan produksi kolagen dan elastisitas kulit, untuk hasil yang optimal dan tahan lama.',

  durationMinutes: 90,
  price: 950000,

  sections: [
    {
      type: 'list',
      title: 'Manfaat',
      items: [
        'Merangsang regenerasi sel kulit dan produksi kolagen',
        'Meningkatkan skin barrier dan memperbaiki tekstur kulit',
        'Menyamarkan kerutan halus, garis wajah, dan noda hitam',
        'Melembapkan kulit intens, kenyal, dan tampak lebih sehat, bercahaya',
        'Kulit tampak lebih sehat, kenyal, dan bercahaya alami',
      ],
    },
    {
      type: 'list',
      title: 'Cocok untuk Siapa?',
      items: [
        'Usia di atas 40 tahun',
        'Kulit mulai ada kerutan',
        'Kulit kusam',
        'Kulit kering',
      ],
    },
  ],
}
