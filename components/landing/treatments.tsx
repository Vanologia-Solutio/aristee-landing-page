import facial from '@/assets/images/treatments/facial.webp'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { AccentLabel } from '../ui/label'

const TREATMENTS = [
  {
    id: 'perawatan-wajah',
    title: 'Perawatan Wajah',
    desc: 'Perawatan kulit wajah yang dirancang untuk mengatasi berbagai masalah kulit, termasuk jerawat, penuaan dini, dan hiperpigmentasi.',
    image: facial,
  },
  {
    id: 'perawatan-tubuh',
    title: 'Perawatan Tubuh',
    desc: 'Perawatan kulit tubuh yang membantu mengatasi masalah kulit seperti selulit, stretch mark, dan kulit kusam.',
    image: facial,
  },
  {
    id: 'perawatan-kuku',
    title: 'Perawatan Kuku',
    desc: 'Perawatan kuku yang menjaga kesehatan dan keindahan kuku, termasuk perawatan kutikula dan penguatan kuku.',
    image: facial,
  },
  {
    id: 'perawatan-rambut',
    title: 'Perawatan Rambut',
    desc: 'Perawatan rambut yang membantu mengatasi masalah rambut seperti kerontokan, ketombe, dan rambut kering.',
    image: facial,
  },
]

export default function Treatments() {
  return (
    <section id='perawatan' className='py-16 md:py-24 bg-beige'>
      <div className='mx-auto max-w-6xl px-4'>
        <div className='flex flex-col items-start gap-4 mb-8 md:flex-row md:items-end md:justify-between'>
          <div className='space-y-4'>
            <AccentLabel>Perawatan Unggulan</AccentLabel>
            <h2 className='font-heading font-medium text-3xl leading-tight'>
              Program Perawatan yang Efektif
            </h2>
          </div>
          <Button size='sm' variant='link' className='group p-0 text-accent'>
            Lihat Semua Perawatan
            <ArrowRight className='group-hover:translate-x-1 duration-250' />
          </Button>
        </div>
        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
          {TREATMENTS.map(treatment => (
            <Card
              id={treatment.id}
              key={treatment.id}
              className='group relative overflow-hidden pt-0'
            >
              <div className='relative aspect-4/3 w-full overflow-hidden'>
                <Image
                  src={treatment.image}
                  alt={treatment.title}
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  priority
                  className='object-cover object-center transition-transform duration-500 group-hover:scale-105'
                />
              </div>
              <CardHeader>
                <CardTitle className='font-sans'>{treatment.title}</CardTitle>
                <CardDescription className='line-clamp-2 text-muted-foreground'>
                  {treatment.desc}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button
                  size='sm'
                  variant='link'
                  className='group p-0 text-accent'
                >
                  Selengkapnya
                  <ArrowRight className='group-hover:translate-x-1 duration-250' />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
