'use client'

import consultationRoom from '@/assets/images/consultation-room.webp'
import medicineBox from '@/assets/images/medicine-box.webp'
import receptionist from '@/assets/images/recepsionist.webp'
import treatmentRoom from '@/assets/images/treatment-room.webp'
import waitingRoom from '@/assets/images/waiting-room.webp'
import wastafel from '@/assets/images/wastafel.webp'
import { BUSINESS_NAME } from '@/lib/constants'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { AccentLabel } from '../ui/label'
import { FadeIn, FadeInItem, FadeInStagger } from '../ui/motion'

const CHECKLISTS = [
  'Perawatan personal sesuai kebutuhan kulit',
  'Lingkungan klinik bersih, nyaman, dan privat',
  'Konsultasi dengan dokter profesional',
]

export default function Gallery() {
  return (
    <section id='galeri' className='py-16 md:py-24 bg-white'>
      <div className='mx-auto max-w-6xl px-4 grid grid-cols-1 items-center justify-center gap-8 md:grid-cols-5 md:gap-12'>
        <FadeIn className='col-span-1 space-y-4 mb-8 md:col-span-2'>
          <AccentLabel>Galeri Kami</AccentLabel>
          <h2 className='font-heading font-medium text-3xl md:text-4xl leading-tight'>
            Kenyamanan di
            <br />
            <span className='text-accent'>Setiap Ruang</span>
          </h2>
          <p className='text-muted-foreground leading-relaxed'>
            {BUSINESS_NAME} hadir untuk memberikan pengalaman perawatan kulit
            yang aman, nyaman, dan berkualitas dengan sentuhan personal. Kami
            percaya setiap kulit itu unik dan berhak mendapatkan perawatan
            terbaik.
          </p>
          <ul className='space-y-2.5 mt-6 mb-8'>
            {CHECKLISTS.map((item, index) => (
              <li key={index} className='flex gap-2 items-center'>
                <CheckCircle className='text-accent size-4' />
                <span className='text-muted-foreground'>{item}</span>
              </li>
            ))}
          </ul>
          <Button size='xl' variant='accent'>
            Selengkapnya Tentang Kami
            <ArrowRight />
          </Button>
        </FadeIn>
        <FadeInStagger className='col-span-1 space-y-4 md:col-span-3'>
          <div className='grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4'>
            <FadeInItem
              whileHover={{ rotate: 2 }}
              transition={{ duration: 0.5 }}
              className='group col-span-1 relative h-40 rounded-4xl overflow-hidden md:col-span-3 md:h-72'
            >
              <Image
                src={receptionist}
                alt='Resepsionis'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                priority
                className='object-cover object-center transition-transform duration-500 group-hover:scale-105'
              />
            </FadeInItem>
            <FadeInItem
              whileHover={{ rotate: -1 }}
              transition={{ duration: 0.5 }}
              className='group col-span-1 relative h-40 rounded-4xl overflow-hidden md:col-span-2 md:h-72'
            >
              <Image
                src={waitingRoom}
                alt='Ruang Tunggu'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                priority
                className='object-cover object-center transition-transform duration-500 group-hover:scale-105'
              />
            </FadeInItem>
          </div>
          <div className='grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4'>
            <FadeInItem
              whileHover={{ rotate: 1 }}
              transition={{ duration: 0.5 }}
              className='group relative h-32 rounded-4xl overflow-hidden md:h-48'
            >
              <Image
                src={consultationRoom}
                alt='Ruang Konsultasi'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                priority
                className='object-cover object-center transition-transform duration-500 group-hover:scale-105'
              />
            </FadeInItem>
            <FadeInItem
              whileHover={{ rotate: -1 }}
              transition={{ duration: 0.5 }}
              className='group relative h-32 rounded-4xl overflow-hidden md:h-48'
            >
              <Image
                src={treatmentRoom}
                alt='Ruang Perawatan'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                priority
                className='object-cover object-center transition-transform duration-500 group-hover:scale-105'
              />
            </FadeInItem>
            <FadeInItem
              whileHover={{ rotate: 2 }}
              transition={{ duration: 0.5 }}
              className='group relative h-32 rounded-4xl overflow-hidden md:h-48'
            >
              <Image
                src={medicineBox}
                alt='Kotak Obat'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                priority
                className='object-cover object-center transition-transform duration-500 group-hover:scale-105'
              />
            </FadeInItem>
            <FadeInItem
              whileHover={{ rotate: -1 }}
              transition={{ duration: 0.5 }}
              className='group relative h-32 rounded-4xl overflow-hidden md:h-48'
            >
              <Image
                src={wastafel}
                alt='Wastafel'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                priority
                className='object-cover object-center transition-transform duration-500 group-hover:scale-105'
              />
            </FadeInItem>
          </div>
        </FadeInStagger>
      </div>
    </section>
  )
}
