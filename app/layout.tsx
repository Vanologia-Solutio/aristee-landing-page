import FloatingWhatsAppButton from '@/components/general/floating-whatsapp-button'
import Footer from '@/components/general/footer'
import Navbar from '@/components/general/navbar'
import { BUSINESS_NAME } from '@/lib/constants'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Lora, Outfit } from 'next/font/google'
import './globals.css'

const loraHeading = Lora({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-heading',
})
const outfit = Outfit({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: `${BUSINESS_NAME} | Healthy Skin, Confident You`,
  description: `${BUSINESS_NAME} adalah klinik kecantikan yang menyediakan perawatan kulit yang aman, nyaman, dan efektif dengan dokter profesional. Kami berkomitmen untuk membantu Anda mencapai kulit sehat dan meningkatkan kepercayaan diri Anda.`,
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
