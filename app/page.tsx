import CTA from '@/components/landing/cta'
import Gallery from '@/components/landing/gallery'
import Hero from '@/components/landing/hero'
import Journey from '@/components/landing/journey'
import Treatments from '@/components/landing/treatments'

export default function Home() {
  return (
    <main id='landing-page' className='flex-1 flex flex-col'>
      <Hero />
      <Journey />
      <Treatments />
      <Gallery />
      <CTA />
    </main>
  )
}
