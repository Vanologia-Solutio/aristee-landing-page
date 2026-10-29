'use client'

import {
  BUSINESS_NAME,
  MAP_DIRECTIONS_URL,
  MAP_EMBED_URL,
  WHATSAPP_URL,
} from '@/lib/constants'
import { Calendar, Map, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { AccentLabel } from '../ui/label'
import { FadeIn, FadeInItem, FadeInStagger } from '../ui/motion'
import { Separator } from '../ui/separator'

export default function Operational() {
  return (
    <section
      id='operasional'
      className='py-16 md:py-24 bg-linear-to-b from-white via-white/50 to-blush'
    >
      <div className='mx-auto max-w-6xl px-4 space-y-10'>
        <FadeIn className='flex flex-col items-center gap-2.5 text-center'>
          <AccentLabel>Kunjungi Kami</AccentLabel>
          <h3 className='font-heading font-medium text-3xl md:text-4xl leading-tight'>
            Lokasi & Jam Operasional
          </h3>
          <p className='text-muted-foreground leading-relaxed max-w-md'>
            Kami siap menyambut Anda dengan pelayanan terbaik dalam suasana yang
            nyaman dan profesional.
          </p>
        </FadeIn>
        <div className='grid grid-cols-1 items-center justify-center gap-10 md:grid-cols-5 md:gap-12'>
          <FadeInStagger className='col-span-1 space-y-6 md:col-span-2'>
            <FadeInItem className='flex items-start gap-4'>
              <span className='size-12 aspect-square bg-accent/10 rounded-full inline-flex items-center justify-center'>
                <MapPin className='text-accent' />
              </span>
              <div className='space-y-1.5'>
                <h4 className='font-heading font-medium text-xl'>
                  Lokasi Klinik
                </h4>
                <AccentLabel>{BUSINESS_NAME}</AccentLabel>
                <p className='text-sm text-muted-foreground'>
                  Jl. Ahmad Yani No.19, Kec. Pringsewu, Kabupaten Pringsewu,
                  Lampung 35373
                </p>
              </div>
            </FadeInItem>
            <Separator className='hidden md:block' />
            <FadeInItem className='flex items-start gap-4'>
              <span className='size-12 aspect-square bg-accent/10 rounded-full inline-flex items-center justify-center'>
                <Calendar className='text-accent' />
              </span>
              <div className='space-y-1.5'>
                <h4 className='font-heading font-medium text-xl'>
                  Operasional
                </h4>
                <dl className='grid grid-cols-[auto_1fr] gap-x-2 gap-y-1 text-sm font-medium'>
                  <dt className='flex justify-between gap-2'>
                    Tanggal <span aria-hidden='true'>:</span>
                  </dt>
                  <dd>01 sampai 25</dd>
                  <dt className='flex justify-between gap-2'>
                    Jam <span aria-hidden='true'>:</span>
                  </dt>
                  <dd>09.00 &minus; 20.00 WIB</dd>
                </dl>
              </div>
            </FadeInItem>
            <FadeInItem className='grid grid-cols-1 gap-3 sm:grid-cols-2'>
              <Link
                href={MAP_DIRECTIONS_URL}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button size='xl' className='w-full'>
                  Temukan Lokasi
                  <Map />
                </Button>
              </Link>
              <Link
                href={WHATSAPP_URL}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button size='xl' className='w-full' variant='accent-outline'>
                  Hubungi Kami
                  <Phone />
                </Button>
              </Link>
            </FadeInItem>
          </FadeInStagger>
          <FadeIn
            delay={0.15}
            className='col-span-1 relative overflow-hidden min-h-72 md:col-span-3 md:min-h-96'
          >
            <iframe
              src={MAP_EMBED_URL}
              className='absolute inset-0 size-full object-cover'
              style={{ border: 0 }}
              allowFullScreen={true}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              title={BUSINESS_NAME}
            />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
