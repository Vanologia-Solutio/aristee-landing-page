import type { Treatment } from './types'

export const japaneseMochiTreatment: Treatment = {
  id: 'japanese-mochi',
  slug: 'japanese-mochi',

  name: 'Bright Japanese Mochi Skin Facial',
  category: 'Youth Healthy Skin Series',
  tags: ['Brighten', 'Hydrate', 'Glow'],

  heroImage: '/images/treatments/japanese-mochi/hero.png',
  flyerImage: '/images/treatments/japanese-mochi/flyer.png',

  shortDescription:
    'Kombinasi Vitamin C dan Niacinamide untuk kulit cerah, rata dan bercahaya seperti mochi.',
  description:
    'Perawatan dengan kombinasi Vitamin C dan Niacinamide yang bekerja sinergis untuk mencerahkan, meratakan warna kulit, menyamarkan noda hitam, melembapkan dan membuat kulit tampak sehat, halus dan bercahaya seperti mochi.',

  durationMinutes: 60,
  price: 160000,

  sections: [
    {
      type: 'steps',
      title: 'Tahapan Perawatan',
      items: [
        {
          title: 'Cleansing and Gentle Massage',
          description:
            'Membersihkan dan memijat lembut untuk melancarkan sirkulasi',
        },
        {
          title: 'Vapozone',
          description: 'Membuka pori dan mempersiapkan kulit',
        },
        {
          title: 'Ekstraksi Komedo Selektif',
          description: 'Membersihkan komedo secara selektif dan higienis',
        },
        {
          title: 'HF (High Frequency)',
          description:
            'Membantu menenangkan kulit, mengurangi bakteri penyebab jerawat dan menghaluskan kulit',
        },
        {
          title: 'Serum Vit C & Niacinamid',
          description:
            'Mencerahkan, meratakan warna kulit dan memperkuat skin barrier',
        },
        {
          title: 'Brightening Peel Mask',
          description:
            'Masker peeling lembut untuk mencerahkan dan mengangkat sel kulit mati',
        },
        {
          title: 'Toning & Cooling',
          description:
            'Menyeimbangkan pH kulit dan memberikan efek menenangkan',
        },
        {
          title: 'Vitamin Cream',
          description:
            'Memberi nutrisi, melembapkan dan menjaga elastisitas kulit',
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
        'Kulit kusam dan warna tidak merata',
        'Noda hitam / bekas jerawat',
        'Pori-pori terlihat besar',
        'Kulit kering, dehidrasi',
        'Ingin kulit lembap, halus dan glowing',
      ],
    },
  ],
}
