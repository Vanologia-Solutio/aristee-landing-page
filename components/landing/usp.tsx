import leaf1 from '@/assets/images/leaf-1.webp'
import leaf2 from '@/assets/images/leaf-2.webp'
import { Cpu, FlaskConical, Stethoscope, Target } from 'lucide-react'
import Image from 'next/image'

const SELLING_POINTS = [
  {
    id: 'dokter-terapis-berpengalaman',
    title: 'Dokter & Terapis Berpengalaman',
    desc: 'Ditangani oleh tenaga ahli di bidangnya',
    icon: Stethoscope,
  },
  {
    id: 'teknologi-modern-aman',
    title: 'Teknologi Modern & Aman',
    desc: 'Peralatan canggih dengan standar klinis tinggi',
    icon: Cpu,
  },
  {
    id: 'produk-medis-berkualitas',
    title: 'Produk Medis Berkualitas',
    desc: 'Hanya produk terpilih yang aman dan efektif',
    icon: FlaskConical,
  },
  {
    id: 'konsultasi-dokter',
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

      <div className='mx-auto max-w-6xl px-4 grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-0 lg:grid-cols-4 items-center justify-center'>
        {SELLING_POINTS.map((point, index) => (
          <div
            key={index}
            className='flex flex-col text-center items-center justify-center gap-2.5 px-4 md:px-12'
          >
            <point.icon className='text-accent size-9' />
            <h3 className='font-medium text-xl text-background'>
              {point.title}
            </h3>
            <p className='text-sm text-muted/80'>{point.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
