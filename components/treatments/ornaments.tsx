import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

/** Four-point sparkle, inherits the current text color. */
export function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox='0 0 24 24'
      className={cn('size-4 fill-current', className)}
    >
      <path d='M12 0c.6 6.2 5.8 11.4 12 12-6.2.6-11.4 5.8-12 12-.6-6.2-5.8-11.4-12-12C6.2 11.4 11.4 6.2 12 0Z' />
    </svg>
  )
}

/** Thin gold divider: line — diamond — line. */
export function Flourish({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox='0 0 160 12'
      className={cn('h-3 w-40 text-gold', className)}
    >
      <path
        d='M0 6h66M94 6h66'
        stroke='currentColor'
        strokeWidth='0.75'
        strokeLinecap='round'
      />
      <path
        d='M80 1.5 84.5 6 80 10.5 75.5 6Z'
        fill='none'
        stroke='currentColor'
        strokeWidth='0.9'
      />
      <circle cx='70' cy='6' r='1.1' fill='currentColor' />
      <circle cx='90' cy='6' r='1.1' fill='currentColor' />
    </svg>
  )
}

/** Small uppercase label framed by hairlines, used above headings. */
export function Eyebrow({
  children,
  className,
  center = false,
}: {
  children: ReactNode
  className?: string
  center?: boolean
}) {
  return (
    <p
      className={cn(
        'flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-accent',
        center && 'justify-center',
        className,
      )}
    >
      <span className='h-px w-8 bg-gold/70' />
      {children}
      {center && <span className='h-px w-8 bg-gold/70' />}
    </p>
  )
}

/** "Repair • Rejuvenate • Glow" style tag line from the catalog posters. */
export function TagLine({
  tags,
  className,
}: {
  tags: string[]
  className?: string
}) {
  return (
    <p
      className={cn(
        'flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium uppercase tracking-[0.2em] text-primary/80',
        className,
      )}
    >
      {tags.map((tag, i) => (
        <span key={tag} className='inline-flex items-center gap-3'>
          {i > 0 && <span className='size-1 rounded-full bg-accent' />}
          {tag}
        </span>
      ))}
    </p>
  )
}

/** Centered section heading with eyebrow, italic accent and flourish. */
export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  className,
}: {
  eyebrow: string
  title: string
  accent?: string
  description?: string
  className?: string
}) {
  return (
    <div
      className={cn('flex flex-col items-center gap-4 text-center', className)}
    >
      <Eyebrow center>{eyebrow}</Eyebrow>
      <h2 className='font-heading text-3xl font-medium leading-tight md:text-4xl'>
        {title}{' '}
        {accent && <em className='font-normal text-accent'>{accent}</em>}
      </h2>
      <Flourish />
      {description && (
        <p className='max-w-xl text-muted-foreground leading-relaxed'>
          {description}
        </p>
      )}
    </div>
  )
}
