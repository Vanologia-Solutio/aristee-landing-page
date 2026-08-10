import sampleImage from '@/assets/images/treatments/facial.png'
import { Calendar, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { AccentLabel } from '../ui/label'

export default function CTA() {
  return (
    <section id='cta' className='relative py-24'>
      <div className='mx-auto max-w-6xl border-2 border-accent/50 rounded-4xl bg-accent/10 grid grid-cols-7'>
        <div className='col-span-3 p-12'>
          <AccentLabel className='mb-4'>Konsultasi Sekarang</AccentLabel>
          <h2 className='font-heading font-medium text-3xl leading-tight'>
            Kulit Sehat, <span className='text-accent'>Percaya Diri</span>{' '}
            Meningkat
          </h2>
          <p className='text-muted-foreground leading-relaxed mt-6 mb-8'>
            Jangan tunggu masalah kulit semakin parah. Konsultasikan sekarang
            dan dapatkan solusi terbaik untuk kulit Anda.
          </p>
          <div className='flex items-center gap-2'>
            <Button size='lg'>
              Reservasi Sekarang
              <Calendar />
            </Button>
            <Button size='lg' variant='outline'>
              WhatsApp Kami
              <MessageCircle />
            </Button>
          </div>
        </div>
        <div className='col-span-4 relative'>
          <Image
            src={sampleImage}
            alt='Sample Treatment'
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            priority
            className='object-cover object-center'
          />
        </div>
      </div>
    </section>
  )
}
