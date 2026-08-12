'use client'

import logo from '@/assets/images/logo-ori.webp'
import { cn } from '@/lib/utils'
import { Menu, Phone, X } from 'lucide-react'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useEffect, useState } from 'react'
import { Button } from '../ui/button'

const NAV_LINKS = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang Kami', href: '#perjalanan' },
  { label: 'Perawatan', href: '#perawatan' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Kontak', href: '#operasional' },
] as const

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', latest => {
    setIsScrolled(latest > 36)
  })

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <Fragment>
      <header
        id='navigation-bar'
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-250',
          isScrolled
            ? 'bg-beige md:bg-beige/90 backdrop-blur-sm py-3.5'
            : 'bg-transparent py-5',
        )}
      >
        <nav className='mx-auto max-w-6xl px-4 flex items-center justify-between'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href='/'>
              <Image
                src={logo}
                alt="Arist'ee Beauty Clinic"
                width={120}
                height={32}
                priority
                className='shrink-0 object-contain transition-all duration-300 h-8 size-auto'
              />
            </Link>
          </motion.div>
          <div className='hidden md:flex items-center gap-6'>
            {NAV_LINKS.map((link, i) => (
              <motion.span
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className='text-sm font-medium text-primary hover:text-accent transition-colors relative group'
              >
                <Link href={link.href}>
                  {link.label}
                  <span className='absolute -bottom-0.5 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-250' />
                </Link>
              </motion.span>
            ))}
          </div>
          <Link href='#operasional' className='hidden md:block'>
            <Button size='lg' variant='accent-outline'>
              Hubungi Kami
              <Phone />
            </Button>
          </Link>
          <Button
            variant='ghost'
            size='icon'
            aria-label='Buka menu navigasi'
            onClick={() => setIsMenuOpen(true)}
            className='md:hidden text-primary'
          >
            <Menu className='size-6' />
          </Button>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className='fixed inset-0 z-100 bg-beige flex flex-col items-center justify-center gap-8 md:hidden'
          >
            <Button
              variant='ghost'
              size='icon'
              aria-label='Tutup menu navigasi'
              onClick={() => setIsMenuOpen(false)}
              className='absolute top-5 right-4 text-primary'
            >
              <X className='size-6' />
            </Button>
            <div className='flex flex-col items-center gap-6'>
              {NAV_LINKS.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className='text-lg font-medium text-primary hover:text-accent transition-colors'
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link href='#operasional' onClick={() => setIsMenuOpen(false)}>
              <Button size='lg' variant='accent-outline'>
                Hubungi Kami
                <Phone />
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  )
}
