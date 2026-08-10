import heroBackground from '@/assets/images/bg-hero.png'
import { Calendar, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { AccentLabel } from '../ui/label'

export default function Hero() {
  return (
    <section id='beranda' className='relative pt-52 pb-36'>
      <div className='size-full'>
        <Image
          src={heroBackground}
          alt='Klinik Kecantikan Aristée'
          fill
          className='object-cover object-bottom-right grayscale-20'
        />
      </div>
      <div className='relative mx-auto max-w-6xl z-10'>
        <div className='space-y-6 mb-8'>
          <AccentLabel>Klinik Kecantikan Aristée</AccentLabel>
          <h1 className='max-w-md font-medium font-heading text-5xl leading-tight'>
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
