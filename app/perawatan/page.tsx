import BotanicalBackground from '@/components/general/botanical-background'
import CTA from '@/components/landing/cta'
import { Eyebrow, Flourish, Sparkle } from '@/components/treatments/ornaments'
import TreatmentCard from '@/components/treatments/treatment-card'
import { FadeIn, FadeInItem, FadeInStagger } from '@/components/ui/motion'
import { BUSINESS_NAME } from '@/lib/constants'
import { TREATMENTS, type Treatment } from '@/lib/treatments'
import { cn, formatPrice } from '@/lib/utils'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: `Semua Perawatan | ${BUSINESS_NAME}`,
  description:
    'Katalog lengkap perawatan kulit di Aristée Beauty Clinic: facial, acne, pigmentasi, rejuvenation, dan perawatan area khusus.',
}

function groupByCategory(treatments: Treatment[]) {
  const groups = new Map<string, Treatment[]>()
  for (const treatment of treatments) {
    groups.set(treatment.category, [
      ...(groups.get(treatment.category) ?? []),
      treatment,
    ])
  }
  return [...groups.entries()]
}

function toAnchor(category: string) {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}

export default function TreatmentsPage() {
  const groups = groupByCategory(TREATMENTS)
  const prices = TREATMENTS.flatMap(t => (t.price ? [t.price] : []))
  const [arch, circle] = [TREATMENTS[2], TREATMENTS[0]]

  const stats = [
    { value: TREATMENTS.length, label: 'Pilihan Perawatan' },
    { value: groups.length, label: 'Series Perawatan' },
    { value: formatPrice(Math.min(...prices)), label: 'Mulai Dari' },
  ]

  return (
    <main id='katalog-perawatan' className='flex-1 flex flex-col'>
      {/* Hero */}
      <section className='relative overflow-hidden bg-blush pt-28 pb-20 sm:pt-36 md:pb-28'>
        <BotanicalBackground variant='hero' />
        <div className='relative mx-auto grid max-w-6xl items-center gap-14 px-4 md:grid-cols-[1.1fr_1fr]'>
          <FadeInStagger className='space-y-7'>
            <FadeInItem>
              <Eyebrow>Katalog Perawatan</Eyebrow>
            </FadeInItem>
            <FadeInItem>
              <h1 className='font-heading text-4xl font-medium leading-[1.1] sm:text-6xl'>
                Temukan Perawatan yang Tepat untuk{' '}
                <em className='font-normal text-accent'>Kulit Anda</em>
              </h1>
            </FadeInItem>
            <FadeInItem>
              <Flourish className='w-48' />
            </FadeInItem>
            <FadeInItem>
              <p className='max-w-lg text-base text-muted-foreground leading-relaxed md:text-lg'>
                Dari facial rutin hingga program rejuvenation, setiap perawatan
                dirancang oleh dokter untuk membantu Anda mendapatkan kulit
                sehat, cerah, dan percaya diri.
              </p>
            </FadeInItem>
            <FadeInItem className='grid max-w-lg grid-cols-3 divide-x divide-gold/30 rounded-3xl bg-background/70 py-4 ring-1 ring-border backdrop-blur-sm'>
              {stats.map(stat => (
                <div key={stat.label} className='px-3 text-center sm:px-5'>
                  <p className='font-heading text-xl font-medium text-primary sm:text-2xl'>
                    {stat.value}
                  </p>
                  <p className='mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground'>
                    {stat.label}
                  </p>
                </div>
              ))}
            </FadeInItem>
          </FadeInStagger>

          <FadeIn delay={0.2} className='relative mx-auto w-full max-w-sm'>
            <div className='absolute inset-0 translate-x-4 -translate-y-4 rounded-t-full rounded-b-[2rem] border border-gold/60' />
            <div className='relative aspect-4/5 overflow-hidden rounded-t-full rounded-b-[2rem] shadow-[0_40px_80px_-40px_rgb(244_83_138/0.6)] ring-8 ring-background'>
              <Image
                src={arch.heroImage}
                alt={arch.name}
                fill
                priority
                sizes='(max-width: 768px) 90vw, 400px'
                className='object-cover object-[60%_center]'
              />
            </div>
            <div className='absolute -bottom-8 -left-6 size-32 overflow-hidden rounded-full shadow-xl shadow-accent/20 ring-6 ring-background sm:-left-12 sm:size-40'>
              <Image
                src={circle.heroImage}
                alt={circle.name}
                fill
                sizes='160px'
                className='object-cover object-[65%_center]'
              />
            </div>
            <Sparkle className='absolute -top-2 -left-4 size-6 text-gold' />
            <Sparkle className='absolute top-1/3 -right-6 size-4 text-accent' />
            <Sparkle className='absolute -bottom-4 right-10 size-3 text-gold' />
          </FadeIn>
        </div>
      </section>

      {/* Series navigation */}
      <nav
        aria-label='Series perawatan'
        className='relative z-10 mx-auto -mt-8 w-full max-w-6xl px-4'
      >
        <FadeIn className='flex gap-1 overflow-x-auto rounded-full bg-background p-2 lg:flex-wrap lg:justify-center lg:rounded-[2rem] shadow-[0_20px_40px_-24px_rgb(244_83_138/0.45)] ring-1 ring-border scrollbar-none'>
          {groups.map(([category, treatments]) => (
            <Link
              key={category}
              href={`#${toAnchor(category)}`}
              className='flex shrink-0 items-center gap-2 rounded-full px-3.5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-accent hover:text-accent-foreground'
            >
              {category}
              <span className='flex size-5 items-center justify-center rounded-full bg-blush-strong text-[10px] text-accent'>
                {treatments.length}
              </span>
            </Link>
          ))}
        </FadeIn>
      </nav>

      {/* Series */}
      {groups.map(([category, treatments], index) => (
        <section
          key={category}
          id={toAnchor(category)}
          className={cn(
            'relative scroll-mt-24 overflow-hidden py-16 md:py-24',
            index % 2 === 1 && 'bg-blush',
          )}
        >
          {index % 2 === 1 && <BotanicalBackground variant='subtle' />}
          <div className='relative mx-auto max-w-6xl px-4'>
            <FadeIn className='mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between'>
              <div className='flex items-end gap-5'>
                <span className='font-heading text-6xl font-normal italic leading-none text-accent/25 md:text-7xl'>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className='space-y-2'>
                  <Eyebrow>Series</Eyebrow>
                  <h2 className='font-heading text-3xl font-medium leading-tight md:text-4xl'>
                    {category}
                  </h2>
                </div>
              </div>
            </FadeIn>
            <FadeInStagger className='grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3'>
              {treatments.map(treatment => (
                <FadeInItem key={treatment.id}>
                  <TreatmentCard treatment={treatment} />
                </FadeInItem>
              ))}
            </FadeInStagger>
          </div>
        </section>
      ))}

      <CTA />
    </main>
  )
}
