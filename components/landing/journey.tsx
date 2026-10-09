'use client'

import { Droplets, ScanFace, Sparkles, Sun } from 'lucide-react'
import BotanicalBackground from '../general/botanical-background'
import { AccentLabel } from '../ui/label'
import { FadeIn, FadeInItem, FadeInStagger } from '../ui/motion'

const JOURNEYS = [
  {
    num: 1,
    icon: Sun,
    title: 'Pencerahan Kulit',
    desc: 'Membantu kulit tampak lebih cerah, segar, dan bercahaya dengan perawatan sesuai kebutuhan kulit.',
  },
  {
    num: 2,
    icon: Droplets,
    title: 'Kulit Berjerawat',
    desc: 'Mengatasi minyak berlebih dan jerawat aktif dengan perawatan yang disesuaikan dengan kondisi kulit.',
  },
  {
    num: 3,
    icon: ScanFace,
    title: 'Flek & Pigmentasi',
    desc: 'Membantu menyamarkan tampilan flek dan noda bekas jerawat serta meratakan warna kulit.',
  },
  {
    num: 4,
    icon: Sparkles,
    title: 'Peremajaan Kulit',
    desc: 'Mendukung tampilan kulit yang lebih halus, segar, dan terawat melalui perawatan sesuai kebutuhan kulit.',
  },
]

export default function Journey() {
  return (
    <section
      id='perjalanan'
      className='relative overflow-hidden bg-accent/7 py-16 md:py-24'
    >
      <BotanicalBackground variant='subtle' />

      <div className='relative mx-auto max-w-6xl px-4 space-y-8'>
        <FadeIn className='mx-auto max-w-2xl space-y-2.5 text-center'>
          <AccentLabel>Alur Perawatan</AccentLabel>
          <h2 className='font-heading font-medium text-3xl leading-tight'>
            Perjalanan Menuju <span className='text-accent'>Kulit Sehat</span>{' '}
            Anda
          </h2>
          <p className='text-muted-foreground leading-relaxed'>
            Program bertahap yang dirancang khusus untuk mengatasi masalah kulit
            dari awal hingga hasil optimal.
          </p>
        </FadeIn>
        <div className='relative'>
          <div className='hidden sm:block absolute top-12 left-[12%] right-[12%] h-0.5 overflow-hidden rounded-full bg-accent/15'>
            <div className='h-full w-1/3 animate-[journey-flow_2s_linear_infinite] bg-linear-to-r from-transparent via-accent to-transparent' />
          </div>

          <FadeInStagger className='grid grid-cols-1 gap-10 sm:grid-cols-4'>
            {JOURNEYS.map(journey => (
              <FadeInItem key={journey.num} className='relative text-center'>
                <span className='absolute top-0 z-12 left-1/2 -translate-x-12 rounded-full bg-accent text-sm font-semibold size-7 text-background flex items-center justify-center'>
                  {journey.num}
                </span>
                <div className='relative z-10 mx-auto flex size-24 items-center justify-center rounded-full border-2 border-accent/80 bg-background text-primary'>
                  <journey.icon className='size-10' />
                </div>
                <h3 className='font-medium text-lg mt-3.5 mb-2'>
                  {journey.title}
                </h3>
                <p className='text-sm text-muted-foreground leading-relaxed'>
                  {journey.desc}
                </p>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </div>
    </section>
  )
}
