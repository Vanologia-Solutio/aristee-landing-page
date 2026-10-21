import type { Treatment } from './types'

export const acneRecoveryTreatment: Treatment = {
  id: 'acne-recovery-treatment',
  slug: 'acne-recovery-treatment',

  name: 'Acne Recovery Treatment',
  category: 'Acne Treatment',
  tags: ['Calm', 'Repair', 'Strengthen'],

  heroImage: '/images/treatments/acne-recovery-treatment/hero.png',
  flyerImage: '/images/treatments/acne-recovery-treatment/flyer.png',

  shortDescription:
    'Perawatan khusus kulit berjerawat untuk mengontrol minyak, mengurangi jerawat, dan memperkuat skin barrier.',
  description:
    'Perawatan khusus untuk kulit berjerawat yang membantu mengontrol minyak berlebih, mengurangi komedo dan jerawat, serta memperkuat skin barrier. Agar hasil optimal, lanjutkan terapi harian dengan obat dan cream sesuai anjuran dokter.',

  durationMinutes: 90,
  price: 275000,

  sections: [
    {
      type: 'steps',
      title: 'Tindakan yang Dilakukan',
      items: [
        {
          title: 'Deep Cleansing',
          description: 'Membersihkan kotoran, minyak, dan sisa makeup.',
        },
        {
          title: 'Facial, Neck & Back Massage',
          description:
            'Pijat relaksasi untuk melancarkan sirkulasi, mengurangi ketegangan otot, dan membantu penyerapan nutrisi.',
        },
        {
          title: 'Acne Clear Serum',
          description:
            'Serum khusus untuk membantu mengontrol sebum, merawat kulit berjerawat, dan menenangkan kulit.',
        },
        {
          title: 'Acne Soothing Mask',
          description:
            'Masker menenangkan dan meredakan peradangan, membantu mengecilkan pori dan mengontrol jerawat.',
        },
        {
          title: 'Skin Barrier Serum',
          description:
            'Serum yang membantu memperkuat dan melindungi skin barrier, menjaga kelembapan kulit serta menenangkan iritasi.',
        },
        {
          title: 'Photon Red Light Therapy',
          description:
            'Terapi cahaya merah yang membantu regenerasi sel, mengurangi peradangan, dan mempercepat proses penyembuhan jerawat.',
        },
        {
          title: 'Skin Barrier Cream',
          description:
            'Menjaga kelembapan kulit dan memperkuat skin barrier agar kulit lebih sehat dan tahan terhadap iritasi.',
        },
      ],
    },
    {
      type: 'list',
      title: 'Goal Perawatan',
      items: [
        'Mengurangi komedo dan jerawat aktif',
        'Mengontrol produksi sebum berlebih',
        'Menenangkan peradangan dan kemerahan',
        'Membantu regenerasi sel kulit',
        'Memperkuat skin barrier dan menjaga kelembapan kulit',
        'Mencegah timbulnya jerawat baru',
      ],
    },
  ],
}
