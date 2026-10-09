'use client'

import heroBackground from '@/assets/images/bg-hero.webp'
import leaf1 from '@/assets/images/leaf-1.webp'
import leaf5 from '@/assets/images/leaf-5.webp'
import recepsionist from '@/assets/images/recepsionist.webp'
import { BUSINESS_NAME, WHATSAPP_NUMBER } from '@/lib/constants'
import { Calendar, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Leaf } from '../general/botanical-background'
import { Eyebrow, Flourish } from '../treatments/ornaments'
import { Button } from '../ui/button'
import { FadeInItem, FadeInStagger } from '../ui/motion'

export default function Hero() {
  return (
    <section
      id='beranda'
      className='relative overflow-hidden pt-15 pb-24 sm:pt-16 sm:pb-32'
    >
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
          src={recepsionist}
          alt={BUSINESS_NAME}
          fill
          className='object-cover object-center grayscale-20'
        />
      </div>
      <div className='absolute inset-0 bg-linear-to-b sm:bg-linear-to-r from-blush via-blush sm:via-35% to-transparent sm:to-70%' />
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 hidden sm:block'
      >
        <Leaf
          image={leaf1}
          className='top-16 -left-12 w-40 rotate-135 opacity-25 md:w-52'
        />
        <Leaf
          image={leaf5}
          className='-bottom-6 -right-10 w-36 -rotate-30 opacity-25 md:w-48'
        />
      </div>
      <FadeInStagger className='relative mx-auto max-w-6xl px-4 z-10'>
        <FadeInItem className='mb-8 sm:mb-10'>
          <p className='font-heading text-lg italic text-primary sm:text-xl'>
            by dr. Linda
          </p>
        </FadeInItem>
        <div className='space-y-6 mb-10'>
          <FadeInItem>
            <Eyebrow>Klinik Kecantikan Aristée</Eyebrow>
          </FadeInItem>
          <FadeInItem>
            <h1 className='max-w-full sm:max-w-md font-medium font-heading text-4xl leading-tight tracking-tight sm:text-6xl'>
              Perawatan Kulit yang{' '}
              <em className='font-normal text-accent'>Nyaman</em>,{' '}
              <em className='font-normal text-accent'>Personal</em>, dan{' '}
              <em className='font-normal text-accent'>
                Terarah Bersama Dokter
              </em>
            </h1>
          </FadeInItem>
          <FadeInItem>
            <Flourish className='w-fit' />
          </FadeInItem>
          <FadeInItem>
            <p className='max-w-full sm:max-w-md text-base text-muted-foreground leading-relaxed md:text-lg'>
              Hadir untuk memberikan pengalaman perawatan kulit yang nyaman dan
              personal, dengan standar kebersihan yang baik serta pendampingan
              dokter di setiap langkah perawatan.
            </p>
          </FadeInItem>
        </div>
        <FadeInItem className='flex flex-col items-stretch gap-3 sm:flex-row sm:items-center'>
          <Link href={`tel:${WHATSAPP_NUMBER}`}>
            <Button size='xl' className='w-full sm:w-auto'>
              Reservasi Sekarang
              <Calendar />
            </Button>
          </Link>
          <Link href='/perawatan' className='w-full sm:w-auto'>
            <Button
              size='xl'
              variant='accent-outline'
              className='w-full sm:w-auto'
            >
              Lihat Perawatan
              <ChevronRight />
            </Button>
          </Link>
        </FadeInItem>
      </FadeInStagger>
    </section>
  )
}
