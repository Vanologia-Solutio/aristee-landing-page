'use client'

import logo from '@/assets/images/logo-ori.webp'
import { cn } from '@/lib/utils'
import { Calendar } from 'lucide-react'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
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
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', latest => {
    setIsScrolled(latest > 36)
  })

  return (
    <header
      id='navigation-bar'
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-250',
        isScrolled
          ? 'bg-background/80 backdrop-blur-sm py-3.5 border-b border-border/60'
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
        <div className='flex items-center gap-6'>
          {NAV_LINKS.map((link, i) => (
            <motion.span
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className='text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group'
            >
              <Link href={link.href}>
                {link.label}
                <span className='absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-250' />
              </Link>
            </motion.span>
          ))}
        </div>
        <Link href='#operasional'>
          <Button size='lg'>
            Hubungi Kami
            <Calendar />
          </Button>
        </Link>
      </nav>
    </header>
  )
}
