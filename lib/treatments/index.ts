import { acneClearPeelTreatment } from './acne-clear-peel'
import { acneRecoveryTreatment } from './acne-recovery-treatment'
import { acneSebumControlTreatment } from './acne-sebum-control'
import { advancedSkinRejuvenationTreatment } from './advanced-skin-rejuvenation'
import { botoxCrowFeetTreatment } from './botox-crow-feet'
import { brighteningBalanceFacialTreatment } from './brightening-balance-facial'
import { collagenStimulatorTreatment } from './collagen-stimulator'
import { detoxJapaneseTreatment } from './detox-japanese'
import { exosomeSkinRegenerationTreatment } from './exosome-skin-regeneration'
import { eyeRenewalTreatment } from './eye-renewal'
import { glowInfusionAndImmuneBoosterTreatment } from './glow-infusion-and-immune-booster'
import { japaneseMochiTreatment } from './japanese-mochi'
import { matureSkinHydrationTreatment } from './mature-skin-hydration'
import { neckAndDecolleteTreatment } from './neck-and-decollete'
import { pdrnKoreanTreatment } from './pdrn-korean'
import { pigmentCorrectivePeelTreatment } from './pigment-corrective-peel'
import { pigmentMelasmaTreatment } from './pigment-melasma'
import { skinRenewalAndRadiantTreatment } from './skin-renewal-and-radiant'
import type { Treatment } from './types'

export type { Treatment, TreatmentSection, TreatmentStep } from './types'

// Urutan mengikuti katalog (series & step)
export const TREATMENTS: Treatment[] = [
  detoxJapaneseTreatment,
  japaneseMochiTreatment,
  pdrnKoreanTreatment,
  acneSebumControlTreatment,
  acneClearPeelTreatment,
  acneRecoveryTreatment,
  matureSkinHydrationTreatment,
  skinRenewalAndRadiantTreatment,
  advancedSkinRejuvenationTreatment,
  brighteningBalanceFacialTreatment,
  pigmentCorrectivePeelTreatment,
  pigmentMelasmaTreatment,
  collagenStimulatorTreatment,
  exosomeSkinRegenerationTreatment,
  botoxCrowFeetTreatment,
  glowInfusionAndImmuneBoosterTreatment,
  eyeRenewalTreatment,
  neckAndDecolleteTreatment,
]

export const FEATURED_TREATMENTS = TREATMENTS.slice(0, 4)

export function getTreatmentBySlug(slug: string) {
  return TREATMENTS.find(treatment => treatment.slug === slug)
}
