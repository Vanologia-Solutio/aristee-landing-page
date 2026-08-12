'use client'

import heroBackground from '@/assets/images/bg-hero.webp'
import altHeroBackground from '@/assets/images/alt-bg-hero.webp'
import { BUSINESS_NAME } from '@/lib/constants'
import { Calendar, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { AccentLabel } from '../ui/label'
import { FadeInItem, FadeInStagger } from '../ui/motion'

export default function Hero() {
  return (
    <section id='beranda' className='relative pt-28 pb-16 sm:pt-40 sm:pb-32'>
      <div className='absolute inset-0 hidden sm:block'>
        <Image
          src={heroBackground}
          alt={BUSINESS_NAME}
          fill
          className='object-cover object-bottom-right grayscale-20'
        />
      </div>
      <div className='absolute inset-0 top-1/2 block sm:hidden'>
        <Image
          src={altHeroBackground}
          alt={BUSINESS_NAME}
          fill
          className='object-cover object-center grayscale-20'
        />
      </div>
      <div className='absolute inset-0 bg-linear-to-b sm:bg-linear-to-r from-beige via-beige sm:via-35% to-transparent sm:to-70%' />
      <FadeInStagger className='relative mx-auto max-w-6xl px-4 z-10'>
        <div className='space-y-6 mb-8'>
          <FadeInItem>
            <AccentLabel>{BUSINESS_NAME}</AccentLabel>
          </FadeInItem>
          <FadeInItem>
            <h1 className='max-w-full sm:max-w-md font-medium font-heading text-3xl sm:text-5xl leading-snug'>
              Perawatan Kulit yang <span className='text-accent'>Nyaman</span>,{' '}
              <span className='text-accent'>Personal</span>, dan{' '}
              <span className='text-accent'>Terpercaya</span>
            </h1>
          </FadeInItem>
          <FadeInItem>
            <p className='max-w-full sm:max-w-sm text-muted-foreground leading-relaxed'>
              Kami hadir untuk memberikan pengalaman perawatan kulit yang aman,
              nyaman dan efektif bersama dokter profesional.
            </p>
          </FadeInItem>
        </div>
        <FadeInItem className='flex flex-col items-stretch gap-3 sm:flex-row sm:items-center'>
          <Button size='xl' className='w-full sm:w-auto'>
            Reservasi Sekarang
            <Calendar />
          </Button>
          <Button
            size='xl'
            variant='accent-outline'
            className='w-full sm:w-auto'
          >
            Lihat Perawatan
            <ChevronRight />
          </Button>
        </FadeInItem>
      </FadeInStagger>
    </section>
  )
}
