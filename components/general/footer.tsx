import leaf4 from '@/assets/images/leaf-4.webp'
import leaf5 from '@/assets/images/leaf-5.webp'
import logo from '@/assets/images/logo-white.webp'
import {
  BUSINESS_NAME,
  MAP_DIRECTIONS_URL,
  SUPPORT_EMAIL,
  WHATSAPP_URL,
} from '@/lib/constants'
import { Contact, Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

export default function Footer() {
  return (
    <footer className='relative bg-primary overflow-hidden'>
      <div className='absolute z-10 -bottom-7 -left-7 opacity-15'>
        <Image
          src={leaf4}
          alt='Leaf'
          width={184}
          height={184}
          className='object-cover object-center size-full'
        />
      </div>
      <div className='absolute z-10 top-7 -right-12 -rotate-30 opacity-15'>
        <Image
          src={leaf5}
          alt='Leaf'
          width={144}
          height={144}
          className='object-cover object-center size-full'
        />
      </div>

      <div className='max-w-6xl px-4 mx-auto grid grid-cols-2 gap-x-6 gap-y-8 py-10 md:grid-cols-11 md:gap-12'>
        <div className='col-span-2 space-y-5 md:col-span-4'>
          <Image
            src={logo}
            alt="Arist'ee Beauty Clinic"
            width={120}
            height={32}
            priority
            className='shrink-0 object-contain transition-all duration-300 h-8 size-auto'
          />
          <p className='text-sm text-background/65 leading-relaxed'>
            {BUSINESS_NAME} hadir untuk memberikan pengalaman perawatan kulit
            yang aman, nyaman, dan berkualitas.
          </p>
          <div className='flex items-center gap-2'>
            <Button size='icon' variant='outline'>
              <Contact />
            </Button>
            <Button size='icon' variant='outline'>
              <Contact />
            </Button>
            <Button size='icon' variant='outline'>
              <Contact />
            </Button>
          </div>
        </div>
        <div className='col-span-1 md:col-span-2'>
          <h4 className='font-medium mb-3.5 text-background'>Navigasi</h4>
          <ul className='text-xs space-y-2.5 text-background/65'>
            <li>
              <Link href='/'>Beranda</Link>
            </li>
            <li>
              <Link href='#perjalanan'>Perjalanan</Link>
            </li>
            <li>
              <Link href='#perawatan'>Perawatan</Link>
            </li>
            <li>
              <Link href='#galeri'>Galeri</Link>
            </li>
            <li>
              <Link href='#operasional'>Operasional</Link>
            </li>
            <li>
              <Link href='#cta'>Kontak</Link>
            </li>
          </ul>
        </div>
        <div className='col-span-1 md:col-span-2'>
          <h4 className='font-medium mb-3.5 text-background'>Informasi</h4>
          <ul className='text-xs space-y-2.5 text-background/65'>
            <li>
              <Link href='/faq'>FAQ</Link>
            </li>
            <li>
              <Link href='/syarat-ketentuan'>Syarat & Ketentuan</Link>
            </li>
            <li>
              <Link href='/kebijakan-privasi'>Kebijakan Privasi</Link>
            </li>
          </ul>
        </div>
        <div className='col-span-2 md:col-span-3'>
          <h4 className='font-medium mb-3.5 text-background'>Kontak Kami</h4>
          <ul className='text-xs space-y-2.5 text-background/65'>
            <li className='flex gap-1.5'>
              <MapPin className='size-4 shrink-0' />
              <Link
                href={MAP_DIRECTIONS_URL}
                target='_blank'
                rel='noopener noreferrer'
              >
                Jl. Ahmad Yani No.19, Kab. Pringsewu, Lampung, Indonesia
              </Link>
            </li>
            <li className='flex gap-1.5'>
              <Phone className='size-4 shrink-0' />
              <Link
                href={WHATSAPP_URL}
                target='_blank'
                rel='noopener noreferrer'
              >
                +62 812-345-6789
              </Link>
            </li>
            <li className='flex gap-1.5'>
              <Mail className='size-4 shrink-0' />
              <Link href={`mailto:${SUPPORT_EMAIL}`}>info@aristee.com</Link>
            </li>
          </ul>
        </div>
      </div>

      <p className='text-xs sm:text-sm text-background/65 text-center pb-4'>
        &copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
      </p>
    </footer>
  )
}
