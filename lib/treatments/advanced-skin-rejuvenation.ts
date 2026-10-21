import type { Treatment } from './types'

export const advancedSkinRejuvenationTreatment: Treatment = {
  id: 'advanced-skin-rejuvenation',
  slug: 'advanced-skin-rejuvenation',

  name: 'Advanced Skin Rejuvenation',
  category: 'Rejuvenation Program',
  tags: ['Lift', 'Firm', 'Brighten', 'Revitalize'],

  heroImage: '/images/treatments/advanced-skin-rejuvenation/hero.png',
  flyerImage: '/images/treatments/advanced-skin-rejuvenation/flyer.png',

  shortDescription:
    'Perawatan anti-aging komprehensif untuk kulit lebih kencang, lembap, cerah dan tampak lebih muda.',
  description:
    'Perawatan anti-aging komprehensif untuk kulit yang lebih kencang, lembap, cerah bersinar dan tampak lebih muda.',

  durationMinutes: 100,
  price: 320000,

  sections: [
    {
      type: 'steps',
      title: 'Tahap Perawatan',
      items: [
        {
          title: 'Cleansing / Vapozone / Vacuum',
          description:
            'Pembersihan mendalam & membuka pori, mengangkat kotoran dan kelebihan minyak.',
        },
        {
          title: 'Face & Neck Lymphatic Drainage',
          description:
            'Pijatan lembut untuk melancarkan aliran limfe, mengurangi bengkak dan detoksifikasi kulit.',
        },
        {
          title: 'Exosome + PDRN Regenerating Serum',
          description:
            'Menstimulasi regenerasi sel, memperbaiki tekstur, menguatkan skin barrier dan meningkatkan elastisitas kulit.',
        },
        {
          title: 'Mummy Hard Mask',
          description:
            'Masker keras premium untuk mengencangkan, meningkatkan elastisitas & memberikan efek lifting.',
        },
        {
          title: 'Eye Basic Treatment',
          description:
            'Perawatan khusus area mata untuk mengurangi garis halus, mata lelah dan bengkak.',
        },
        {
          title: 'Anti Aging Serum Full Face',
          description:
            'Serum anti-aging berkonsentrasi tinggi untuk menutrisi, mengencangkan & meremajakan kulit.',
        },
        {
          title: 'Photon Therapy (LED Light Therapy)',
          description:
            'Terapi cahaya LED untuk merangsang produksi kolagen, mempercepat regenerasi dan mencerahkan kulit.',
        },
        {
          title: 'Exosome Liposome Cream',
          description:
            'Krim liposome untuk mengunci nutrisi, memperkuat skin barrier dan menjaga kelembapan.',
        },
        {
          title: 'High SPF / PA Sunscreen',
          description:
            'Melindungi kulit dari sinar UV dan mencegah hiperpigmentasi.',
        },
      ],
    },
    {
      type: 'list',
      title: 'Manfaat',
      items: [
        'Meningkatkan elastisitas & kekencangan kulit',
        'Merangsang regenerasi sel & produksi kolagen',
        'Mencerahkan kulit & menyamarkan noda hitam',
        'Memperkuat skin barrier & menjaga kelembapan kulit',
        'Kulit tampak lebih halus, sehat, dan bercahaya',
      ],
    },
  ],
}
