import type { Treatment } from '@/lib/treatments'
import { formatPrice } from '@/lib/utils'
import { ArrowUpRight, Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Sparkle, TagLine } from './ornaments'

export default function TreatmentCard({
  treatment,
  priority = false,
}: {
  treatment: Treatment
  priority?: boolean
}) {
  return (
    <Link
      href={`/perawatan/${treatment.slug}`}
      id={treatment.slug}
      className='group flex h-full flex-col rounded-[2rem] bg-card p-2.5 ring-1 ring-border shadow-[0_24px_48px_-28px_rgb(244_83_138/0.35)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_32px_56px_-28px_rgb(244_83_138/0.5)] hover:ring-accent/30'
    >
      <div className='relative aspect-4/3 w-full overflow-hidden rounded-[1.6rem]'>
        <Image
          src={treatment.heroImage}
          alt={treatment.name}
          fill
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
          priority={priority}
          className='object-cover object-center transition-transform duration-700 group-hover:scale-105'
        />
        <div className='absolute inset-0 bg-linear-to-t from-primary/25 via-transparent to-transparent' />
        <span className='absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-background/85 px-3 py-1 text-xs font-medium text-primary shadow-sm backdrop-blur-md'>
          <Clock className='size-3.5 text-accent' />
          {treatment.durationMinutes} menit
        </span>
        {treatment.isBestSeller && (
          <span className='absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-linear-to-r from-gold to-[#d9b88a] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white shadow-lg shadow-gold/40'>
            <Sparkle className='size-2.5' />
            Best Seller
          </span>
        )}
        <span className='absolute bottom-3 right-3 rounded-full bg-accent px-3.5 py-1 text-xs font-semibold tracking-wide text-accent-foreground shadow-lg shadow-accent/30'>
          {treatment.price ? formatPrice(treatment.price) : 'Hubungi Kami'}
        </span>
      </div>

      <div className='flex flex-1 flex-col gap-3 px-3.5 pt-5 pb-3'>
        <p className='flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.25em] text-gold'>
          {treatment.category}
        </p>
        <h3 className='font-heading text-xl font-medium leading-snug line-clamp-2'>
          {treatment.name}
        </h3>
        <p className='text-sm text-muted-foreground leading-relaxed line-clamp-2'>
          {treatment.shortDescription}
        </p>
        <div className='mt-auto flex items-center justify-between gap-3 border-t border-border/80 pt-4'>
          <TagLine
            tags={treatment.tags.slice(0, 3)}
            className='gap-x-2 text-[10px] tracking-[0.15em] [&_span]:gap-2'
          />
          <span className='flex size-9 shrink-0 items-center justify-center rounded-full text-accent ring-1 ring-accent/40 transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground'>
            <ArrowUpRight className='size-4 transition-transform duration-300 group-hover:rotate-45' />
          </span>
        </div>
      </div>
    </Link>
  )
}
