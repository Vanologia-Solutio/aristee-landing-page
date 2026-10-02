export interface TreatmentStep {
  title: string
  description?: string
}

export type TreatmentSection =
  | { type: 'steps'; title: string; items: TreatmentStep[] }
  | { type: 'list'; title: string; items: string[] }

export interface Treatment {
  id: string
  slug: string

  name: string
  category: string
  tags: string[]

  // Path relative to /public, e.g. '/images/treatments/{slug}/hero.png'
  heroImage: string
  gallery?: string[]

  shortDescription: string
  description: string

  durationMinutes: number
  // Harga dalam Rupiah; kosong jika belum tercantum di katalog
  price?: number

  sections: TreatmentSection[]
}
