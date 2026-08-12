import { Droplets, Leaf, ShieldPlus } from 'lucide-react'
import { AccentLabel } from '../ui/label'

const JOURNEYS = [
  {
    num: 1,
    icon: Droplets,
    title: 'Sebum Control',
    desc: 'Mengontrol produksi minyak berlebih dan mengatasi jerawat aktif.',
  },
  {
    num: 2,
    icon: ShieldPlus,
    title: 'Acne Repair',
    desc: 'Memperbaiki kondisi kulit, mengurangi peradangan dan memperkuat skin barrier.',
  },
  {
    num: 3,
    icon: Leaf,
    title: 'Scar Renewal',
    desc: 'Memudarkan bekas jerawat dan meratakan tekstur kulit untuk hasil optimal.',
  },
]

export default function Journey() {
  return (
    <section id='perjalanan' className='bg-accent/15 py-16 md:py-32'>
      <div className='mx-auto max-w-6xl px-4 grid grid-cols-1 items-center justify-center gap-10 md:grid-cols-9'>
        <div className='col-span-1 space-y-4 text-center md:text-left md:col-span-3'>
          <AccentLabel>Alur Perawatan</AccentLabel>
          <h2 className='font-heading font-medium text-3xl leading-tight'>
            Perjalanan Menuju <span className='text-accent'>Kulit Sehat</span>{' '}
            Anda
          </h2>
          <p className='text-muted-foreground leading-relaxed'>
            Program bertahap yang dirancang khusus untuk mengatasi masalah kulit
            dari awal hingga hasil optimal.
          </p>
        </div>
        <div className='col-span-1 relative md:col-span-6'>
          <div className='hidden sm:block absolute top-12 left-[12%] right-[12%] h-0.5 overflow-hidden rounded-full bg-accent/15'>
            <div className='h-full w-1/3 animate-[journey-flow_2s_linear_infinite] bg-linear-to-r from-transparent via-accent to-transparent' />
          </div>

          <div className='grid grid-cols-1 gap-10 sm:grid-cols-3'>
            {JOURNEYS.map(journey => (
              <div key={journey.num} className='relative text-center'>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
