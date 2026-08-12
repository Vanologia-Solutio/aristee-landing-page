import ctaBackground from '@/assets/images/cta.webp'
import { WHATSAPP_NUMBER, WHATSAPP_URL } from '@/lib/constants'
import { Calendar, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

export default function CTA() {
  return (
    <section id='cta' className='relative py-24'>
      <Image
        src={ctaBackground}
        alt='Consultation'
        fill
        className='object-cover object-top opacity-20'
      />

      <div className='absolute inset-0 bg-linear-to-b from-background to-transparent' />

      <div className='relative z-10 mx-auto max-w-6xl px-4 flex flex-col items-center gap-6'>
        <h1 className='font-heading text-5xl text-center font-medium leading-tight'>
          Konsultasikan
          <br />
          <span className='text-accent'>Keluhan Kulit Anda</span>
        </h1>
        <p className='text-lg max-w-md mx-auto text-center text-muted-foreground leading-relaxed'>
          Tim profesional kami siap membantu Anda menemukan solusi terbaik untuk
          kulit sehat dan percaya diri.
        </p>
        <div className='flex items-center gap-2'>
          <Link href={`tel:${WHATSAPP_NUMBER}`}>
            <Button size='lg' className='w-full'>
              Reservasi Sekarang
              <Calendar />
            </Button>
          </Link>
          <Link href={WHATSAPP_URL} target='_blank' rel='noopener noreferrer'>
            <Button
              size='lg'
              className='w-full text-green-600'
              variant='outline'
            >
              WhatsApp Kami
              <MessageCircle />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
