import FloatingWhatsAppButton from '@/components/general/floating-whatsapp-button'
import Footer from '@/components/general/footer'
import Navbar from '@/components/general/navbar'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Lora, Outfit } from 'next/font/google'
import './globals.css'

const loraHeading = Lora({ subsets: ['latin'], variable: '--font-heading' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Aristée Beauty Clinic | Healthy Skin, Confident You',
  description:
    'Aristée Beauty Clinic is a trusted beauty clinic that provides safe, comfortable, and effective skin care treatments with professional doctors. We are committed to helping you achieve healthy skin and boost your confidence.',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='en'
      className={cn(
        'antialiased font-sans scroll-smooth bg-background',
        outfit.variable,
        loraHeading.variable,
      )}
    >
      <body>
        <div className='min-h-screen flex flex-col'>
          <Navbar />
          {children}
          <Footer />
          <FloatingWhatsAppButton />
        </div>
      </body>
    </html>
  )
}
