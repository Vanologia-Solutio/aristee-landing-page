'use client'

import { FEATURED_TREATMENTS } from '@/lib/treatments'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import TreatmentCard from '../treatments/treatment-card'
import { Button } from '../ui/button'
import { AccentLabel } from '../ui/label'
import { FadeIn, FadeInItem, FadeInStagger } from '../ui/motion'

export default function Treatments() {
  return (
    <section id='perawatan' className='py-16 md:py-24'>
      <div className='mx-auto max-w-6xl px-4'>
        <FadeIn className='flex flex-col items-start gap-4 mb-8 md:flex-row md:items-end md:justify-between'>
          <div className='space-y-4'>
            <AccentLabel>Perawatan Unggulan</AccentLabel>
            <h2 className='font-heading font-medium text-3xl leading-tight'>
              Program Perawatan yang Efektif
            </h2>
          </div>
          <Link href='/perawatan'>
            <Button size='sm' variant='link' className='group p-0 text-accent'>
              Lihat Semua Perawatan
              <ArrowRight className='group-hover:translate-x-1 duration-250' />
            </Button>
          </Link>
        </FadeIn>
        <FadeInStagger className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
          {FEATURED_TREATMENTS.map(treatment => (
            <FadeInItem key={treatment.id}>
              <TreatmentCard treatment={treatment} priority />
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  )
}
