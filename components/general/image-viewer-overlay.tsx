'use client'

import { downloadFile, toFilename } from '@/lib/download'
import { cn } from '@/lib/utils'
import {
  Download,
  ImageOff,
  Loader2,
  RefreshCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
} from 'lucide-react'
import { animate, motion, useMotionValue } from 'motion/react'
import { useState } from 'react'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { ViewerButton, ViewerShell } from './viewer-shell'

const MIN_SCALE = 0.5
const MAX_SCALE = 3
const STEP = 0.25

export function ImageViewerOverlay({
  open,
  onClose,
  src,
  title,
  subtitle = 'Pratinjau Gambar',
}: {
  open: boolean
  onClose: () => void
  src: string
  title: string
  subtitle?: string
}) {
  const [scale, setScale] = useState(1)
  const [rotation, setRotation] = useState(0)
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const recenter = () => {
    animate(x, 0)
    animate(y, 0)
  }

  const zoomTo = (next: number) => {
    const clamped = Math.min(Math.max(next, MIN_SCALE), MAX_SCALE)
    setScale(clamped)
    if (clamped <= 1) recenter()
  }

  const reset = () => {
    setScale(1)
    setRotation(0)
    recenter()
  }

  const handleClose = () => {
    onClose()
    reset()
  }

  const isReady = status === 'ready'
  const isZoomed = scale > 1

  return (
    <ViewerShell
      open={open}
      onClose={handleClose}
      title={title}
      subtitle={subtitle}
      actions={
        <Button
          size='lg'
          variant='accent'
          onClick={() => downloadFile(src, toFilename(title, src))}
          className='hidden sm:inline-flex'
        >
          <Download />
          Unduh
        </Button>
      }
    >
      <div className='relative flex min-h-0 flex-1 items-center justify-center overflow-hidden px-4 pb-4'>
        {status === 'loading' && (
          <div className='absolute inset-0 flex flex-col items-center justify-center gap-3 text-background/70'>
            <Loader2 className='size-8 animate-spin text-accent' />
            <p className='text-xs uppercase tracking-[0.25em]'>Memuat</p>
          </div>
        )}

        {status === 'error' ? (
          <div className='pointer-events-auto flex flex-col items-center gap-4 text-center text-background/70'>
            <span className='flex size-20 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15'>
              <ImageOff className='size-9' />
            </span>
            <p className='text-sm'>Gambar tidak dapat dimuat.</p>
          </div>
        ) : (
          <motion.img
            src={src}
            alt={title}
            draggable={false}
            onLoad={() => setStatus('ready')}
            onError={() => setStatus('error')}
            onDoubleClick={() => (isZoomed ? reset() : zoomTo(2))}
            drag={isZoomed}
            dragMomentum={false}
            style={{ x, y }}
            animate={{ scale, rotate: rotation, opacity: isReady ? 1 : 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            className={cn(
              'pointer-events-auto max-h-full max-w-full select-none rounded-2xl object-contain',
              isZoomed
                ? 'cursor-grab active:cursor-grabbing'
                : 'cursor-zoom-in',
            )}
          />
        )}
      </div>

      {isReady && (
        <div className='pointer-events-auto mx-auto mb-6 flex items-center gap-1 rounded-full bg-white/10 p-1.5 ring-1 ring-white/15 backdrop-blur-xl'>
          <ViewerButton
            label='Perkecil'
            onClick={() => zoomTo(scale - STEP)}
            disabled={scale <= MIN_SCALE}
          >
            <ZoomOut />
          </ViewerButton>
          <span className='w-12 text-center text-xs font-medium tabular-nums text-background'>
            {Math.round(scale * 100)}%
          </span>
          <ViewerButton
            label='Perbesar'
            onClick={() => zoomTo(scale + STEP)}
            disabled={scale >= MAX_SCALE}
          >
            <ZoomIn />
          </ViewerButton>
          <Separator orientation='vertical' className='mx-1 bg-white/20' />
          <ViewerButton
            label='Putar 90°'
            onClick={() => setRotation(prev => prev + 90)}
          >
            <RotateCw />
          </ViewerButton>
          <ViewerButton label='Atur Ulang' onClick={reset}>
            <RefreshCcw />
          </ViewerButton>
          <Separator
            orientation='vertical'
            className='mx-1 bg-white/20 sm:hidden'
          />
          <span className='sm:hidden'>
            <ViewerButton
              label='Unduh'
              onClick={() => downloadFile(src, toFilename(title, src))}
            >
              <Download />
            </ViewerButton>
          </span>
        </div>
      )}
    </ViewerShell>
  )
}
