import heroBackground from '@/assets/images/bg-hero.webp'
import { BUSINESS_NAME } from '@/lib/constants'
import { Calendar, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { AccentLabel } from '../ui/label'

export default function Hero() {
  return (
    <section id='beranda' className='relative pt-44 pb-32'>
      <div className='absolute inset-0'>
        <Image
          src={heroBackground}
          alt={BUSINESS_NAME}
          fill
          className='object-cover object-bottom-right grayscale-20'
        />
      </div>
      <div className='absolute inset-0 bg-linear-to-r from-background via-background via-35% to-transparent to-70%' />
      <div className='relative mx-auto max-w-6xl px-4 z-10'>
        <div className='space-y-6 mb-8'>
          <AccentLabel>{BUSINESS_NAME}</AccentLabel>
          <h1 className='max-w-md font-medium font-heading text-5xl leading-snug'>
            Perawatan Kulit yang <span className='text-accent'>Nyaman</span>,{' '}
            <span className='text-accent'>Personal</span>, dan{' '}
            <span className='text-accent'>Terpercaya</span>
          </h1>
          <p className='max-w-sm text-muted-foreground leading-relaxed'>
            Kami hadir untuk memberikan pengalaman perawatan kulit yang aman,
            nyaman dan efektif bersama dokter profesional.
          </p>
        </div>
        <div className='flex items-center gap-2'>
          <Button size='lg'>
            Reservasi Sekarang
            <Calendar />
          </Button>
          <Button size='lg'>
            Lihat Perawatan
            <ChevronRight />
          </Button>
        </div>
      </div>
    </section>
  )
}
