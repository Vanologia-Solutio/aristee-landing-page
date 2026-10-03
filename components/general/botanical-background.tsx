import leaf1 from '@/assets/images/leaf-1.webp'
import leaf2 from '@/assets/images/leaf-2.webp'
import leaf4 from '@/assets/images/leaf-4.webp'
import leaf5 from '@/assets/images/leaf-5.webp'
import { cn } from '@/lib/utils'
import type { StaticImageData } from 'next/image'

/** Line-art leaf recolored with the accent color via CSS mask. */
function Leaf({
  image,
  className,
}: {
  image: StaticImageData
  className?: string
}) {
  const mask = `url(${image.src}) center / contain no-repeat`
  return (
    <span
      aria-hidden
      className={cn('absolute bg-accent', className)}
      style={{
        aspectRatio: `${image.width} / ${image.height}`,
        mask,
        WebkitMask: mask,
      }}
    />
  )
}

const VARIANTS = {
  hero: [
    {
      image: leaf1,
      className: '-top-6 -right-10 w-44 -rotate-45 opacity-30 md:w-64',
    },
    {
      image: leaf4,
      className: '-bottom-10 -left-12 w-40 rotate-12 opacity-25 md:w-56',
    },
    {
      image: leaf5,
      className: 'top-1/3 left-[46%] hidden w-20 rotate-45 opacity-15 lg:block',
    },
  ],
  tall: [
    {
      image: leaf1,
      className: 'top-10 -right-12 w-48 rotate-[-24deg] opacity-30 md:w-64',
    },
    {
      image: leaf2,
      className: 'top-[38%] -left-16 w-44 rotate-[18deg] opacity-20 md:w-56',
    },
    {
      image: leaf5,
      className: 'top-[62%] -right-10 w-36 -rotate-12 opacity-20 md:w-48',
    },
    {
      image: leaf4,
      className: '-bottom-8 left-[8%] w-36 rotate-[-8deg] opacity-20 md:w-44',
    },
  ],
  subtle: [
    {
      image: leaf2,
      className: 'top-12 -right-14 w-36 -rotate-30 opacity-15 md:w-48',
    },
    {
      image: leaf5,
      className: '-bottom-6 -left-10 w-32 rotate-12 opacity-15 md:w-40',
    },
  ],
} satisfies Record<string, { image: StaticImageData; className: string }[]>

/**
 * Decorative leaves, soft blush glows and a fine grain texture.
 * Place inside a `relative overflow-hidden` section and give the content `relative`.
 */
export default function BotanicalBackground({
  variant = 'hero',
}: {
  variant?: keyof typeof VARIANTS
}) {
  return (
    <div aria-hidden className='pointer-events-none absolute inset-0'>
      <div className='absolute -top-24 left-1/4 size-96 rounded-full bg-accent/10 blur-3xl' />
      <div className='absolute -bottom-32 right-0 size-112 rounded-full bg-blush-strong blur-3xl' />
      <div className='bg-grain absolute inset-0 opacity-40 mix-blend-multiply' />
      {VARIANTS[variant].map(({ image, className }, i) => (
        <Leaf key={i} image={image} className={className} />
      ))}
    </div>
  )
}
