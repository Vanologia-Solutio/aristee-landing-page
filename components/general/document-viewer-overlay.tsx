'use client'

import { downloadFile, toFilename } from '@/lib/download'
import { cn } from '@/lib/utils'
import { Download, ExternalLink, FileText, Loader2 } from 'lucide-react'
import { Fragment, useState } from 'react'
import { Button } from '../ui/button'
import { ViewerButton, ViewerShell } from './viewer-shell'

function isPdf(url: string) {
  return url.split('?')[0].toLowerCase().endsWith('.pdf')
}

export function DocumentViewerOverlay({
  open,
  onClose,
  src,
  title,
  subtitle = 'Pratinjau Dokumen',
}: {
  open: boolean
  onClose: () => void
  src: string
  title: string
  subtitle?: string
}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const canPreview = isPdf(src)
  const download = () => downloadFile(src, toFilename(title, src))

  return (
    <ViewerShell
      open={open}
      onClose={onClose}
      title={title}
      subtitle={subtitle}
      actions={
        <Fragment>
          {canPreview && (
            <ViewerButton
              label='Buka di Tab Baru'
              onClick={() => window.open(src, '_blank', 'noopener,noreferrer')}
            >
              <ExternalLink />
            </ViewerButton>
          )}
          <Button
            size='lg'
            variant='accent'
            onClick={download}
            className='hidden sm:inline-flex'
          >
            <Download />
            Unduh
          </Button>
          <span className='sm:hidden'>
            <ViewerButton label='Unduh' onClick={download}>
              <Download />
            </ViewerButton>
          </span>
        </Fragment>
      }
    >
      <div className='flex min-h-0 flex-1 items-center justify-center px-4 pb-4 sm:px-8 sm:pb-8'>
        {canPreview ? (
          <div className='pointer-events-auto relative size-full max-w-5xl overflow-hidden rounded-2xl bg-background shadow-2xl shadow-black/40'>
            {!isLoaded && (
              <div className='absolute inset-0 flex flex-col items-center justify-center gap-3 bg-blush text-muted-foreground'>
                <Loader2 className='size-8 animate-spin text-accent' />
                <p className='text-xs uppercase tracking-[0.25em]'>
                  Memuat Dokumen
                </p>
              </div>
            )}
            <iframe
              src={src}
              title={title}
              onLoad={() => setIsLoaded(true)}
              className={cn(
                'size-full border-0 transition-opacity duration-300',
                isLoaded ? 'opacity-100' : 'opacity-0',
              )}
            />
          </div>
        ) : (
          <div className='pointer-events-auto flex max-w-sm flex-col items-center gap-5 rounded-3xl bg-white/10 p-10 text-center ring-1 ring-white/15 backdrop-blur-xl'>
            <span className='flex size-20 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20'>
              <FileText className='size-9 text-background' />
            </span>
            <div className='space-y-2'>
              <h3 className='font-heading text-xl font-medium text-background'>
                Pratinjau tidak tersedia
              </h3>
              <p className='text-sm text-background/70'>
                Jenis file ini tidak dapat ditampilkan di browser. Silakan unduh
                untuk melihatnya.
              </p>
            </div>
            <Button size='lg' variant='accent' onClick={download}>
              <Download />
              Unduh File
            </Button>
          </div>
        )}
      </div>
    </ViewerShell>
  )
}
