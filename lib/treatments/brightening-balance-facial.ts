import type { Treatment } from './types'

export const brighteningBalanceFacialTreatment: Treatment = {
  id: 'brightening-balance-facial',
  slug: 'brightening-balance-facial',

  name: 'Brightening Balance Facial',
  category: 'Pigmentation Treatment',
  tags: ['Brighten', 'Balance', 'Prevent'],

  heroImage: '/images/treatments/brightening-balance-facial/hero.png',
  flyerImage: '/images/treatments/brightening-balance-facial/flyer.png',

  shortDescription:
    'Perawatan untuk kulit kusam, warna kulit tidak merata, dan hiperpigmentasi ringan.',
  description:
    'Perawatan untuk kulit kusam, warna kulit tidak merata, dan hiperpigmentasi ringan, sekaligus mempersiapkan kulit untuk program pigment care berikutnya.',

  durationMinutes: 60,
  price: 130000,

  sections: [
    {
      type: 'steps',
      title: 'Tindakan yang Dilakukan',
      items: [
        {
          title: 'Gentle Cleansing',
          description: 'Membersihkan kotoran, minyak, dan sisa makeup.',
        },
        {
          title: 'Facial, Neck Massage',
          description:
            'Menggunakan teknologi facial untuk meningkatkan sirkulasi dan penyerapan nutrisi kulit.',
        },
        {
          title: 'Gentle Exfoliation',
          description:
            'Mengangkat sel kulit mati secara lembut sesuai kondisi kulit.',
        },
        {
          title: 'Dark Spot Serum',
          description:
            'Menggunakan serum khusus untuk membantu mencerahkan dan menyamarkan noda gelap.',
        },
        {
          title: 'Brightening & Hydrating Mask',
          description:
            'Menenangkan, melembapkan, dan membantu mencerahkan kulit.',
        },
        {
          title: 'Dark Spot Serum & Cooling',
          description:
            'Serum khusus diaplikasikan kembali untuk memaksimalkan hasil, diakhiri dengan cooling untuk menenangkan kulit.',
        },
        {
          title: 'Moisturizer & Sunscreen',
          description: 'Menjaga kelembapan kulit dan melindungi dari sinar UV.',
        },
      ],
    },
    {
      type: 'list',
      title: 'Goal Perawatan',
      items: [
        'Membantu mencerahkan kulit',
        'Membantu meratakan warna kulit',
        'Membantu menyamarkan tampilan noda gelap ringan',
        'Menjaga kelembapan dan skin barrier',
        'Mempersiapkan kulit untuk program pigment care berikutnya',
      ],
    },
  ],
}
