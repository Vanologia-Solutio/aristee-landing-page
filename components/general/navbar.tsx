import logo from '@/assets/images/logo.png'
import { Calendar } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

const NAV_LINKS = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang Kami', href: '#tentang-kami' },
  { label: 'Perawatan', href: '#perawatan' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Kontak', href: '#kontak' },
] as const

export default function Navbar() {
  return (
    <header id='navigation-bar' className='z-30'>
      <nav className='fixed inset-x-0 top-0 bg-pink-200/50 backdrop-blur-sm'>
        <div className='mx-auto max-w-6xl flex items-center justify-between py-5'>
          <Image
            src={logo}
            alt="Arist'ee Beauty Clinic"
            width={120}
            height={28}
            priority
            className='shrink-0 object-contain transition-all duration-300 h-9'
          />
          <div className='flex items-center gap-6'>
            {NAV_LINKS.map(link => (
              <Link
                key={link.label}
                href={link.href}
                className='text-sm font-medium text-muted-foreground hover:text-primary transition-colors'
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link href='#kontak'>
            <Button size='lg'>
              Hubungi Kami
              <Calendar />
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  )
}
