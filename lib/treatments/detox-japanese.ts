import type { Treatment } from './types'

export const detoxJapaneseTreatment: Treatment = {
  id: 'detox-japanese',
  slug: 'detox-japanese',

  name: 'Detox Japanese Pure Skin Facial',
  category: 'Youth Healthy Skin Series',
  tags: ['Cleanse', 'Reset', 'Protect'],

  heroImage: '/images/treatments/detox-japanese/hero.png',

  shortDescription:
    'Detoks mendalam untuk membersihkan pori dari kotoran, minyak berlebih dan racun akibat polusi.',
  description:
    'Detox Japanese Pure Skin Facial bekerja mendalam untuk membersihkan pori dari kotoran, minyak berlebih dan racun akibat polusi, makeup serta penumpukan residu skincare.',

  durationMinutes: 50,
  price: 120000,

  sections: [
    {
      type: 'steps',
      title: 'Tahapan Perawatan',
      items: [
        { title: 'Gentle Cleansing' },
        { title: 'Detox Massage' },
        { title: 'Detox Proses dengan Alat Khusus' },
        { title: 'Skin Cleansing & Refresh' },
        { title: 'Japan Sakura Serum Booster' },
        { title: 'Calming Peel Mask' },
        { title: 'Skin Cooling' },
        { title: 'Japan Sakura Essence Cream' },
        { title: 'Sunscreen Serum' },
      ],
    },
    {
      type: 'list',
      title: 'Cocok untuk Kamu yang',
      items: [
        'Sering terpapar debu, asap, polusi dan AC',
        'Sering ganti-ganti skincare',
        'Pori terlihat besar dan mudah berminyak',
        'Kulit terasa lelah dan butuh reset',
        'Ingin kulit bersih, segar dan siap menyerap nutrisi',
      ],
    },
  ],
}
