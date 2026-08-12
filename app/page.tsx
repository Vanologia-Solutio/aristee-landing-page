import CTA from '@/components/landing/cta'
import Gallery from '@/components/landing/gallery'
import Hero from '@/components/landing/hero'
import Journey from '@/components/landing/journey'
import Operational from '@/components/landing/operational'
import Treatments from '@/components/landing/treatments'
import USP from '@/components/landing/usp'

export default function Home() {
  return (
    <main id='landing-page' className='flex-1 flex flex-col'>
      <Hero />
      <Journey />
      <Treatments />
      <USP />
      <Gallery />
      <Operational />
      <CTA />
    </main>
  )
}
