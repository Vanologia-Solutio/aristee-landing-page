'use client'

import ctaBackground from '@/assets/images/cta.webp'
import { WHATSAPP_NUMBER, WHATSAPP_URL } from '@/lib/constants'
import { Calendar, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import { FadeInItem, FadeInStagger } from '../ui/motion'

export default function CTA() {
  return (
    <section id='cta' className='relative py-16 md:py-24 bg-beige'>
      <Image
        src={ctaBackground}
        alt='Consultation'
        fill
        className='object-cover object-top opacity-20'
      />

      <div className='absolute inset-0 bg-linear-to-b from-beige to-transparent' />

      <FadeInStagger className='relative z-10 mx-auto max-w-6xl px-4 flex flex-col items-center gap-6'>
        <FadeInItem>
          <h1 className='font-heading text-3xl md:text-5xl text-center font-medium leading-tight'>
            Konsultasikan
            <br />
            <span className='text-accent'>Keluhan Kulit Anda</span>
          </h1>
        </FadeInItem>
        <FadeInItem>
          <p className='text-base md:text-lg max-w-md mx-auto text-center text-muted-foreground leading-relaxed'>
            Tim profesional kami siap membantu Anda menemukan solusi terbaik
            untuk kulit sehat dan percaya diri.
          </p>
        </FadeInItem>
        <FadeInItem className='flex flex-col w-full gap-3 md:flex-row md:w-auto md:items-center'>
          <Link href={`tel:${WHATSAPP_NUMBER}`}>
            <Button size='xl' className='w-full'>
              Reservasi Sekarang
              <Calendar />
            </Button>
          </Link>
          <Link href={WHATSAPP_URL} target='_blank' rel='noopener noreferrer'>
            <Button size='xl' className='w-full' variant='whatsapp'>
              WhatsApp Kami
              <MessageCircle />
            </Button>
          </Link>
        </FadeInItem>
      </FadeInStagger>
    </section>
  )
}
