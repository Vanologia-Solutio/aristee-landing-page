import consultationRoom from '@/assets/images/treatments/consultation-room.webp'
import medicineBox from '@/assets/images/treatments/medicine-box.webp'
import receptionist from '@/assets/images/treatments/recepsionist.webp'
import treatmentRoom from '@/assets/images/treatments/treatment-room.webp'
import waitingRoom from '@/assets/images/treatments/waiting-room.webp'
import wastafel from '@/assets/images/treatments/wastafel.webp'
import { BUSINESS_NAME } from '@/lib/constants'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { AccentLabel } from '../ui/label'

const CHECKLISTS = [
  'Perawatan personal sesuai kebutuhan kulit',
  'Lingkungan klinik bersih, nyaman, dan privat',
  'Konsultasi dengan dokter profesional',
]

export default function Gallery() {
  return (
    <section id='galeri' className='py-24'>
      <div className='mx-auto max-w-6xl px-4 grid grid-cols-5 items-center justify-center gap-12'>
        <div className='col-span-2 space-y-4 mb-8'>
          <AccentLabel>Galeri Kami</AccentLabel>
          <h2 className='font-heading font-medium text-4xl leading-tight'>
            Kenyamanan di
            <br />
            <span className='text-accent'>Setiap Ruang</span>
          </h2>
          <p className='text-muted-foreground leading-relaxed'>
            {BUSINESS_NAME} hadir untuk memberikan pengalaman perawatan kulit
            yang aman, nyaman, dan berkualitas dengan sentuhan personal. Kami
            percaya setiap kulit itu unik dan berhak mendapatkan perawatan
            terbaik.
          </p>
          <ul className='space-y-2.5 mt-6 mb-8'>
            {CHECKLISTS.map((item, index) => (
              <li key={index} className='flex gap-2 items-center'>
                <CheckCircle className='text-accent size-4' />
                <span className='text-muted-foreground'>{item}</span>
              </li>
            ))}
          </ul>
          <Button size='lg'>
            Selengkapnya Tentang Kami
            <ArrowRight />
          </Button>
        </div>
        <div className='col-span-3 space-y-4'>
          <div className='grid grid-cols-5 gap-4'>
            <div className='group col-span-3 relative h-72 rounded-4xl overflow-hidden hover:rotate-2 transition-transform duration-500'>
              <Image
                src={receptionist}
                alt='Resepsionis'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                priority
                className='object-cover object-center transition-transform duration-500 group-hover:scale-105'
              />
            </div>
            <div className='group col-span-2 relative h-72 rounded-4xl overflow-hidden hover:-rotate-1 transition-transform duration-500'>
              <Image
                src={waitingRoom}
                alt='Ruang Tunggu'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                priority
                className='object-cover object-center transition-transform duration-500 group-hover:scale-105'
              />
            </div>
          </div>
          <div className='grid grid-cols-4 gap-4'>
            <div className='group relative h-48 rounded-4xl overflow-hidden hover:rotate-1 transition-transform duration-500'>
              <Image
                src={consultationRoom}
                alt='Ruang Konsultasi'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                priority
                className='object-cover object-center transition-transform duration-500 group-hover:scale-105'
              />
            </div>
            <div className='group relative h-48 rounded-4xl overflow-hidden hover:-rotate-1 transition-transform duration-500'>
              <Image
                src={treatmentRoom}
                alt='Ruang Perawatan'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                priority
                className='object-cover object-center transition-transform duration-500 group-hover:scale-105'
              />
            </div>
            <div className='group relative h-48 rounded-4xl overflow-hidden hover:rotate-2 transition-transform duration-500'>
              <Image
                src={medicineBox}
                alt='Kotak Obat'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                priority
                className='object-cover object-center transition-transform duration-500 group-hover:scale-105'
              />
            </div>
            <div className='group relative h-48 rounded-4xl overflow-hidden hover:-rotate-1 transition-transform duration-500'>
              <Image
                src={wastafel}
                alt='Wastafel'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                priority
                className='object-cover object-center transition-transform duration-500 group-hover:scale-105'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
