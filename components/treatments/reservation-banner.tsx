import BotanicalBackground from '@/components/general/botanical-background'
import { BUSINESS_NAME, WHATSAPP_NUMBER, WHATSAPP_URL } from '@/lib/constants'
import { ArrowRight, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { FadeIn } from '../ui/motion'
import { Eyebrow, Flourish } from './ornaments'

export default function ReservationBanner({
  treatmentName,
}: {
  treatmentName?: string
}) {
  const message = treatmentName
    ? `Halo, ${BUSINESS_NAME}! Saya ingin reservasi ${treatmentName}.`
    : `Halo, ${BUSINESS_NAME}! Saya ingin konsultasi perawatan yang cocok untuk kulit saya.`
  const whatsappUrl = `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`

  return (
    <section className='px-4 pb-16 md:pb-24'>
      <FadeIn className='relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-linear-to-br from-blush-strong via-blush to-background px-6 py-14 text-center ring-1 ring-border md:px-16 md:py-20'>
        <BotanicalBackground variant='subtle' />
        <div className='relative flex flex-col items-center gap-5'>
          <Eyebrow center>Konsultasi dengan Dokter</Eyebrow>
          <h2 className='max-w-2xl font-heading text-3xl font-medium leading-tight md:text-5xl'>
            Siap Mendapatkan Kulit{' '}
            <em className='font-normal text-accent'>
              Lebih Sehat &amp; Bercahaya?
            </em>
          </h2>
          <Flourish />
          <p className='max-w-lg text-muted-foreground leading-relaxed'>
            Tim dokter kami akan membantu menentukan perawatan yang paling
            sesuai dengan kondisi kulit Anda.
          </p>
          <div className='mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row'>
            <Link href={`tel:${WHATSAPP_NUMBER}`}>
              <Button size='xl' className='w-full px-7'>
                Reservasi Sekarang
                <ArrowRight />
              </Button>
            </Link>
            <Link href={whatsappUrl} target='_blank' rel='noopener noreferrer'>
              <Button size='xl' variant='whatsapp' className='w-full px-7'>
                WhatsApp Kami
                <MessageCircle />
              </Button>
            </Link>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
