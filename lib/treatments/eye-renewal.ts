import type { Treatment } from './types'

export const eyeRenewalTreatment: Treatment = {
  id: 'eye-renewal',
  slug: 'eye-renewal',

  name: 'Eye Renewal Treatment',
  category: 'Special Area Treatment',
  tags: ['Refresh', 'Soothe', 'Brighten'],

  heroImage: '/images/treatments/eye-renewal/hero.png',

  shortDescription:
    'Perawatan khusus area mata untuk mengurangi tampilan mata lelah dan menjaga kulit tetap awet muda.',
  description:
    'Perawatan khusus area mata untuk mengurangi tampilan mata lelah, melembapkan dan menjaga kulit sekitar mata agar tampak lebih awet muda.',

  durationMinutes: 30,
  price: 70000,

  sections: [
    {
      type: 'steps',
      title: 'Tahapan Perawatan',
      items: [
        {
          title: 'Gentle Eye Cleansing',
          description: 'Membersihkan area mata dengan lembut.',
        },
        {
          title: 'Eye Relax Massage',
          description:
            'Pijatan lembut dengan alat pijat khusus dan teknik manual.',
        },
        {
          title: 'Eye Cream Treatment',
          description:
            'Aplikasi eye cream untuk menutrisi dan melembapkan area mata.',
        },
        {
          title: 'Cooling Eye Sheet Mask',
          description: 'Masker khusus mata untuk menenangkan dan melembapkan.',
        },
        {
          title: 'Eye Cooling & Refresh',
          description:
            'Cooling ringan untuk mengurangi mata lelah dan menyegarkan.',
        },
      ],
    },
    {
      type: 'list',
      title: 'Paket Perawatan',
      items: [
        'Eye Renewal Treatment (perawatan saja) — Rp 70.000',
        'Eye Renewal + Take Home Eye Cream (perawatan + produk) — Rp 100.000',
      ],
    },
  ],
}
