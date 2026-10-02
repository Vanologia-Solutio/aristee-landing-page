import BotanicalBackground from '@/components/general/botanical-background'
import {
  Eyebrow,
  Flourish,
  SectionHeading,
  Sparkle,
  TagLine,
} from '@/components/treatments/ornaments'
import ReservationBanner from '@/components/treatments/reservation-banner'
import TreatmentCard from '@/components/treatments/treatment-card'
import { Button } from '@/components/ui/button'
import { FadeIn, FadeInItem, FadeInStagger } from '@/components/ui/motion'
import { BUSINESS_NAME, WHATSAPP_URL } from '@/lib/constants'
import { getTreatmentBySlug, TREATMENTS } from '@/lib/treatments'
import { formatPrice } from '@/lib/utils'
import { ArrowRight, Check, Clock } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const dynamicParams = false

export function generateStaticParams() {
  return TREATMENTS.map(treatment => ({ slug: treatment.slug }))
}

export async function generateMetadata(
  props: PageProps<'/perawatan/[slug]'>,
): Promise<Metadata> {
  const { slug } = await props.params
  const treatment = getTreatmentBySlug(slug)
  if (!treatment) return {}

  return {
    title: `${treatment.name} | ${BUSINESS_NAME}`,
    description: treatment.shortDescription,
  }
}

export default async function TreatmentDetailPage(
  props: PageProps<'/perawatan/[slug]'>,
) {
  const { slug } = await props.params
  const treatment = getTreatmentBySlug(slug)
  if (!treatment) notFound()

  const reservationUrl = `${WHATSAPP_URL}?text=${encodeURIComponent(`Halo, ${BUSINESS_NAME}! Saya ingin reservasi ${treatment.name}.`)}`

  const stepSections = treatment.sections.filter(s => s.type === 'steps')
  const listSections = treatment.sections.filter(s => s.type === 'list')

  const sameCategory = TREATMENTS.filter(
    t => t.slug !== treatment.slug && t.category === treatment.category,
  )
  const related = [
    ...sameCategory,
    ...TREATMENTS.filter(
      t => t.slug !== treatment.slug && !sameCategory.includes(t),
    ),
  ].slice(0, 3)

  return (
    <main id='detail-perawatan' className='flex-1 flex flex-col'>
      {/* Hero */}
      <section className='relative overflow-hidden bg-blush pt-28 pb-20 sm:pt-36 md:pb-28'>
        <BotanicalBackground variant='hero' />
        <div className='relative mx-auto max-w-6xl px-4'>
          <div className='grid items-center gap-16 md:grid-cols-[1.1fr_1fr]'>
            <FadeInStagger className='space-y-7'>
              <FadeInItem>
                <Eyebrow>{treatment.category}</Eyebrow>
              </FadeInItem>
              <FadeInItem>
                <h1 className='font-heading text-4xl font-medium leading-[1.1] sm:text-6xl'>
                  {treatment.name}
                </h1>
              </FadeInItem>
              <FadeInItem>
                <TagLine tags={treatment.tags} />
              </FadeInItem>
              <FadeInItem>
                <Flourish className='w-48' />
              </FadeInItem>
              <FadeInItem>
                <p className='max-w-lg text-base text-muted-foreground leading-relaxed md:text-lg'>
                  {treatment.description}
                </p>
              </FadeInItem>
              <FadeInItem className='flex flex-col gap-3 sm:flex-row'>
                <Link
                  href={reservationUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button size='xl' className='w-full px-7'>
                    Reservasi Sekarang
                    <ArrowRight />
                  </Button>
                </Link>
                <Link href='/perawatan'>
                  <Button
                    size='xl'
                    variant='accent-outline'
                    className='w-full px-7'
                  >
                    Lihat Perawatan Lain
                  </Button>
                </Link>
              </FadeInItem>
            </FadeInStagger>

            <FadeIn
              delay={0.2}
              className='relative mx-auto w-full max-w-sm md:max-w-md'
            >
              <div className='absolute inset-0 translate-x-4 -translate-y-4 rounded-t-full rounded-b-[2rem] border border-gold/60' />
              <div className='relative aspect-4/5 overflow-hidden rounded-t-full rounded-b-[2rem] shadow-[0_40px_80px_-40px_rgb(244_83_138/0.6)] ring-8 ring-background'>
                <Image
                  src={treatment.heroImage}
                  alt={treatment.name}
                  fill
                  priority
                  sizes='(max-width: 768px) 90vw, 450px'
                  className='object-cover object-[60%_center]'
                />
                <div className='absolute inset-0 bg-linear-to-t from-primary/30 via-transparent to-transparent' />
              </div>

              {/* Duration — double ring like the catalog posters */}
              <div className='absolute top-10 -right-4 flex size-28 items-center justify-center rounded-full bg-background shadow-xl shadow-accent/20 sm:-right-8 sm:size-32'>
                <div className='flex size-[calc(100%-12px)] flex-col items-center justify-center rounded-full ring-1 ring-gold/70'>
                  <Clock className='size-3.5 text-gold' />
                  <span className='font-heading text-4xl font-medium leading-none text-accent sm:text-5xl'>
                    {treatment.durationMinutes}
                  </span>
                  <span className='text-[10px] font-medium uppercase tracking-[0.25em] text-primary'>
                    Menit
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className='absolute -bottom-6 -left-4 rounded-3xl bg-background/95 px-6 py-4 shadow-xl shadow-accent/20 ring-1 ring-border backdrop-blur-md sm:-left-10'>
                <p className='flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.25em] text-gold'>
                  <Sparkle className='size-2.5' />
                  Harga
                </p>
                <p className='mt-1 font-heading text-3xl font-medium text-primary'>
                  {treatment.price
                    ? formatPrice(treatment.price)
                    : 'Hubungi Kami'}
                </p>
              </div>

              <Sparkle className='absolute -top-3 -left-5 size-6 text-gold' />
              <Sparkle className='absolute bottom-1/4 -right-6 size-3.5 text-accent' />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Steps */}
      {stepSections.map(section => (
        <section
          key={section.title}
          className='relative overflow-hidden py-16 md:py-24'
        >
          <div className='relative mx-auto max-w-6xl px-4'>
            <FadeIn>
              <SectionHeading
                eyebrow='Alur Perawatan'
                title={section.title}
                description='Setiap tahap dilakukan dengan aman dan nyaman oleh tenaga profesional kami.'
                className='mb-12 md:mb-16'
              />
            </FadeIn>
            <FadeInStagger className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
              {section.items.map((step, i) => (
                <FadeInItem
                  key={step.title}
                  className='group relative overflow-hidden rounded-[2rem] bg-card p-7 ring-1 ring-border shadow-[0_24px_48px_-32px_rgb(244_83_138/0.4)] transition-all duration-500 hover:-translate-y-1 hover:ring-accent/30'
                >
                  <span className='absolute -top-3 right-5 font-heading text-8xl italic leading-none text-accent/10 transition-colors duration-500 group-hover:text-accent/20'>
                    {i + 1}
                  </span>
                  <span className='relative flex size-11 items-center justify-center rounded-full bg-blush-strong font-heading text-lg text-accent ring-4 ring-blush'>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className='relative mt-5 font-heading text-xl font-medium leading-snug'>
                    {step.title}
                  </h3>
                  {step.description && (
                    <p className='relative mt-2 text-sm text-muted-foreground leading-relaxed'>
                      {step.description}
                    </p>
                  )}
                </FadeInItem>
              ))}
            </FadeInStagger>
          </div>
        </section>
      ))}

      {/* Benefits / suitability */}
      {listSections.length > 0 && (
        <section className='relative overflow-hidden bg-blush py-16 md:py-24'>
          <BotanicalBackground variant='subtle' />
          <FadeInStagger
            className={
              listSections.length > 1
                ? 'relative mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2'
                : 'relative mx-auto grid max-w-3xl gap-6 px-4'
            }
          >
            {listSections.map(section => (
              <FadeInItem
                key={section.title}
                className='rounded-[2rem] bg-background/90 p-8 ring-1 ring-border shadow-[0_24px_48px_-32px_rgb(244_83_138/0.45)] backdrop-blur-sm md:p-10'
              >
                <div className='flex items-center gap-3'>
                  <span className='flex size-10 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg shadow-accent/30'>
                    <Sparkle className='size-4' />
                  </span>
                  <h2 className='font-heading text-2xl font-medium leading-tight'>
                    {section.title}
                  </h2>
                </div>
                <Flourish className='mt-5 mb-6 w-32 text-gold/80' />
                <ul className='space-y-4'>
                  {section.items.map(item => (
                    <li key={item} className='flex gap-3'>
                      <span className='mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-blush-strong text-accent'>
                        <Check className='size-3' strokeWidth={3} />
                      </span>
                      <span className='leading-relaxed'>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </section>
      )}

      {/* Related */}
      <section className='py-16 md:py-24'>
        <div className='mx-auto max-w-6xl px-4'>
          <FadeIn>
            <SectionHeading
              eyebrow='Perawatan Lainnya'
              title='Mungkin Anda'
              accent='Juga Suka'
              className='mb-12'
            />
          </FadeIn>
          <FadeInStagger className='grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3'>
            {related.map(t => (
              <FadeInItem key={t.id}>
                <TreatmentCard treatment={t} />
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      <ReservationBanner treatmentName={treatment.name} />
    </main>
  )
}
