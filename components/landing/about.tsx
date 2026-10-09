'use client'

import recepsionist from '@/assets/images/recepsionist.webp'
import { BUSINESS_NAME } from '@/lib/constants'
import { ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import { Eyebrow, Flourish, Sparkle } from '../treatments/ornaments'
import { FadeIn, FadeInItem, FadeInStagger } from '../ui/motion'

const FOCUSES = [
  'Kulit Berjerawat',
  'Flek & Pigmentasi',
  'Pencerahan Kulit',
  'Peremajaan Kulit',
]

export default function About() {
  return (
    <section
      id='tentang-kami'
      className='relative overflow-hidden bg-linear-to-b from-beige via-beige to-white py-16 md:py-32'
    >
      <div className='absolute -top-32 -left-32 size-96 rounded-full bg-beige-strong/80 blur-3xl' />
      <div className='absolute top-1/3 -right-24 size-80 rounded-full bg-blush-strong/60 blur-3xl' />

      <div className='relative mx-auto max-w-6xl px-4 grid grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-16'>
        <FadeIn className='relative mx-auto w-full max-w-sm'>
          <div className='absolute inset-0 -translate-x-4 -translate-y-4 rounded-t-full rounded-b-[2rem] border border-gold/60' />
          <div className='relative aspect-4/5 overflow-hidden rounded-t-full rounded-b-[2rem] shadow-[0_40px_80px_-40px_rgb(200_167_129/0.8)] ring-8 ring-white/80'>
            <Image
              src={recepsionist}
              alt={`Ruang konsultasi ${BUSINESS_NAME}`}
              fill
              sizes='(min-width: 768px) 384px, 90vw'
              className='object-cover object-center'
            />
          </div>
          <div className='absolute -bottom-6 -right-2 flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 shadow-xl shadow-gold/25 ring-1 ring-gold/30 backdrop-blur-sm sm:-right-10'>
            <span className='inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-beige'>
              <ShieldCheck className='size-5 text-gold' />
            </span>
            <div>
              <p className='text-sm font-medium'>Supervisi Dokter</p>
              <p className='text-xs text-muted-foreground'>
                Produk terdaftar resmi BPOM
              </p>
            </div>
          </div>
          <Sparkle className='absolute -top-3 right-2 size-6 text-gold' />
          <Sparkle className='absolute top-1/2 -left-8 size-4 text-accent' />
        </FadeIn>

        <FadeInStagger className='space-y-5 text-center md:text-left'>
          <FadeInItem>
            <Eyebrow className='justify-center md:justify-start' center>
              Tentang Kami
            </Eyebrow>
          </FadeInItem>
          <FadeInItem className='space-y-4'>
            <h2 className='font-heading font-medium text-3xl leading-tight md:text-4xl'>
              Mendampingi Perjalanan{' '}
              <em className='font-normal text-accent'>Kulit Sehat</em> Anda
            </h2>
            <Flourish className='mx-auto md:mx-0' />
          </FadeInItem>
          <FadeInItem>
            <p className='text-muted-foreground leading-relaxed'>
              <strong>{BUSINESS_NAME}</strong> hadir untuk mendampingi
              perjalanan Anda dalam merawat dan menjaga kesehatan kulit—di bawah
              supervisi dokter, berlandaskan ilmu medis dan pendekatan yang
              tepat untuk kebutuhan setiap kulit.
            </p>
          </FadeInItem>
          <FadeInItem>
            <p className='text-muted-foreground leading-relaxed'>
              Kami membantu Anda mendapatkan kulit yang lebih sehat, terawat,
              dan percaya diri melalui perawatan untuk kulit berjerawat, flek
              dan pigmentasi, pencerahan kulit, hingga peremajaan kulit.
            </p>
          </FadeInItem>
          <FadeInItem className='flex flex-wrap justify-center gap-2 md:justify-start'>
            {FOCUSES.map(focus => (
              <span
                key={focus}
                className='rounded-full border border-gold/40 bg-white/70 px-3 py-1 text-xs font-medium text-primary'
              >
                {focus}
              </span>
            ))}
          </FadeInItem>
          <FadeInItem>
            <p className='text-muted-foreground leading-relaxed'>
              Setiap perawatan dirancang dengan mengutamakan keamanan, hasil
              yang natural, serta penggunaan produk yang telah terdaftar resmi
              di BPOM.
            </p>
          </FadeInItem>
          <FadeInItem>
            <blockquote className='rounded-2xl bg-beige-strong/60 px-6 py-5 font-heading text-lg leading-relaxed md:rounded-l-none md:border-l-2 md:border-gold'>
              Karena bagi kami, menjadi cantik bukan tentang mengubah diri,
              tetapi tentang merawat diri dengan tepat dan menjadi{' '}
              <em className='text-accent'>The Best Version of You.</em>
            </blockquote>
          </FadeInItem>
        </FadeInStagger>
      </div>
    </section>
  )
}
