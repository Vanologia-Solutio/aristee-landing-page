'use client'

import leaf1 from '@/assets/images/leaf-1.webp'
import leaf2 from '@/assets/images/leaf-2.webp'
import { FlaskConical, ShieldCheck, Stethoscope, Target } from 'lucide-react'
import Image from 'next/image'
import { FadeInItem, FadeInStagger } from '../ui/motion'

const SELLING_POINTS = [
  {
    id: 'dokter-terapis-profesional',
    title: 'Dokter & Terapis Profesional',
    desc: 'Ditangani oleh tenaga ahli di bidangnya',
    icon: Stethoscope,
  },
  {
    id: 'perawatan-aman-higienis',
    title: 'Perawatan Aman & Higienis',
    desc: 'Prosedur steril dengan standar klinis tinggi',
    icon: ShieldCheck,
  },
  {
    id: 'produk-medis-bpom',
    title: 'Produk Medis Berkualitas & Terdaftar BPOM',
    desc: 'Hanya produk terpilih yang aman dan efektif',
    icon: FlaskConical,
  },
  {
    id: 'hasil-optimal-terukur',
    title: 'Hasil Optimal & Terukur',
    desc: 'Perawatan efektif dengan hasil yang nyata',
    icon: Target,
  },
]

export default function USP() {
  return (
    <section id='usp' className='relative py-12 bg-primary overflow-hidden'>
      <div className='absolute z-10 -bottom-14 -left-8 opacity-15'>
        <Image
          src={leaf2}
          alt='Leaf'
          width={196}
          height={196}
          className='object-cover object-center'
        />
      </div>
      <div className='absolute z-10 top-4 -right-16 -rotate-28 opacity-15'>
        <Image
          src={leaf1}
          alt='Leaf'
          width={184}
          height={184}
          className='object-cover object-center'
        />
      </div>

      <FadeInStagger className='mx-auto max-w-6xl px-4 grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-0 lg:grid-cols-4 items-center justify-center'>
        {SELLING_POINTS.map((point, index) => (
          <FadeInItem
            key={index}
            className='flex flex-col text-center items-center justify-center gap-2.5 px-4 md:px-6'
          >
            <point.icon className='text-accent size-9' />
            <h3 className='font-medium text-xl text-background'>
              {point.title}
            </h3>
            <p className='text-sm text-muted/80'>{point.desc}</p>
          </FadeInItem>
        ))}
      </FadeInStagger>
    </section>
  )
}
