import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '../ui/button'
import { AccentLabel } from '../ui/label'

const JOURNEYS = [
  {
    num: 1,
    icon: Sparkles,
    title: 'Sebum Control',
    desc: 'Mengontrol produksi minyak berlebih dan mengatasi jerawat aktif.',
  },
  {
    num: 2,
    icon: Sparkles,
    title: 'Acne Repair',
    desc: 'Memperbaiki kondisi kulit, mengurangi peradangan dan memperkuat skin barrier.',
  },
  {
    num: 3,
    icon: Sparkles,
    title: 'Scar Renewal',
    desc: 'Memudarkan bekas jerawat dan meratakan tekstur kulit untuk hasil optimal.',
  },
]

export default function Journey() {
  return (
    <section id='perjalanan' className='bg-accent/10 pt-36 pb-24'>
      <div className='mx-auto max-w-6xl grid grid-cols-9 items-center justify-center gap-10'>
        <div className='col-span-3 space-y-4'>
          <AccentLabel>Journey to Better Skin</AccentLabel>
          <h2 className='font-heading font-medium text-3xl leading-tight'>
            Perjalanan Menuju Kulit Sehat Anda
          </h2>
          <p className='text-muted-foreground leading-relaxed'>
            Program bertahap yang dirancang khusus untuk mengatasi masalah kulit
            dari awal hingga hasil optimal.
          </p>
          <Button size='sm' variant='link' className='group p-0 text-accent'>
            Selengkapnya
            <ArrowRight className='group-hover:translate-x-1 duration-250' />
          </Button>
        </div>
        {JOURNEYS.map(journey => (
          <div key={journey.num} className='col-span-2 relative text-center'>
            <span className='absolute top-0 left-1/2 -translate-x-12 rounded-full bg-primary text-sm font-semibold size-7 text-white flex items-center justify-center'>
              {journey.num}
            </span>
            <div className='mx-auto flex size-24 items-center justify-center rounded-full border border-accent bg-white text-accent'>
              <journey.icon className='size-8' />
            </div>
            <h3 className='font-heading font-medium text-lg mt-3.5 mb-2'>
              {journey.title}
            </h3>
            <p className='text-sm text-muted-foreground leading-relaxed'>
              {journey.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
