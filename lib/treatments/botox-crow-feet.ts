import type { Treatment } from './types'

export const botoxCrowFeetTreatment: Treatment = {
  id: 'botox-crow-feet',
  slug: 'botox-crow-feet',

  name: "BOTOX for Crow's Feet",
  category: 'Injection Treatment',
  tags: ['Smooth', 'Natural', 'Youthful'],

  heroImage: '/images/treatments/botox-crow-feet/hero.png',
  flyerImage: '/images/treatments/botox-crow-feet/flyer.png',

  shortDescription:
    "Injeksi Botulinum Toxin untuk menghaluskan garis halus di sudut mata (crow's feet).",
  description:
    "Perawatan injeksi Botulinum Toxin yang diformulasikan khusus untuk menghaluskan garis halus di sudut mata (crow's feet) tanpa mengubah ekspresi alami Anda. Hasil optimal terlihat dalam 3–7 hari, dengan efek bertahan 3–6 bulan.",

  durationMinutes: 60,
  // Harga belum tercantum di katalog

  sections: [
    {
      type: 'list',
      title: 'Cocok untuk Siapa?',
      items: [
        'Wanita usia di atas 30 tahun',
        "Mulai muncul kerut di sudut mata (crow's feet)",
      ],
    },
    {
      type: 'list',
      title: 'Persiapan Sebelum Botox',
      items: [
        'Hindari obat pengencer darah (aspirin, ibuprofen, vitamin E, fish oil) 5–7 hari sebelum tindakan',
        'Hindari alkohol 24 jam sebelum tindakan',
        'Pastikan dalam kondisi sehat dan tidak sedang hamil atau menyusui',
        'Konsultasikan kondisi medis atau alergi dengan dokter',
      ],
    },
    {
      type: 'list',
      title: 'Pasca Botox',
      items: [
        'Hindari menyentuh atau memijat area yang diobati selama 4–6 jam',
        'Jangan berbaring atau tidur telentang selama 4–6 jam setelah tindakan',
        'Hindari olahraga berat, sauna, dan paparan panas berlebih selama 24 jam',
        'Hasil optimal terlihat dalam 3–7 hari, efek bertahan 3–6 bulan',
      ],
    },
  ],
}
