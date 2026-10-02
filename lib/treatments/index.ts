import { acneClearPeelTreatment } from './acne-clear-peel'
import { collagenStimulatorTreatment } from './collagen-stimulator'
import { detoxJapaneseTreatment } from './detox-japanese'
import { eyeRenewalTreatment } from './eye-renewal'
import { japaneseMochiTreatment } from './japanese-mochi'
import { matureSkinHydrationTreatment } from './mature-skin-hydration'
import { neckAndDecolleteTreatment } from './neck-and-decollete'
import { pdrnKoreanTreatment } from './pdrn-korean'
import { pigmentMelasmaTreatment } from './pigment-melasma'
import { skinRenewalAndRadiantTreatment } from './skin-renewal-and-radiant'
import type { Treatment } from './types'

export type { Treatment, TreatmentSection, TreatmentStep } from './types'

// Urutan mengikuti katalog (series & step)
export const TREATMENTS: Treatment[] = [
  detoxJapaneseTreatment,
  japaneseMochiTreatment,
  pdrnKoreanTreatment,
  acneClearPeelTreatment,
  matureSkinHydrationTreatment,
  skinRenewalAndRadiantTreatment,
  pigmentMelasmaTreatment,
  collagenStimulatorTreatment,
  eyeRenewalTreatment,
  neckAndDecolleteTreatment,
]

export const FEATURED_TREATMENTS = TREATMENTS.slice(0, 4)

export function getTreatmentBySlug(slug: string) {
  return TREATMENTS.find(treatment => treatment.slug === slug)
}
