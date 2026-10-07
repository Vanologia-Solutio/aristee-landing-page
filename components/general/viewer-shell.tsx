'use client'

import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { type ReactNode, useEffect, useSyncExternalStore } from 'react'
import { createPortal } from 'react-dom'
import { Button } from '../ui/button'

const subscribe = () => () => {}

/**
 * Full-screen overlay frame shared by the image and document viewers:
 * portal to `body`, scroll lock, Esc / backdrop to close, header with title and actions.
 */
export function ViewerShell({
  open,
  onClose,
  title,
  subtitle,
  actions,
  children,
}: {
  open: boolean
  onClose: () => void
  title: string
  subtitle: string
  actions?: ReactNode
  children: ReactNode
}) {
  const isMounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  )

  useEffect(() => {
    if (!open) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose])

  if (!isMounted) return null

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          role='dialog'
          aria-modal
          aria-label={title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className='fixed inset-0 z-110 flex flex-col bg-primary/90 backdrop-blur-md'
        >
          <div className='absolute inset-0' onClick={onClose} />

          <header className='relative z-10 flex items-center justify-between gap-4 px-4 py-4 sm:px-6'>
            <div className='min-w-0'>
              <p className='text-[10px] font-medium uppercase tracking-[0.3em] text-gold'>
                {subtitle}
              </p>
              <h2 className='truncate font-heading text-lg font-medium text-background sm:text-xl'>
                {title}
              </h2>
            </div>
            <div className='flex shrink-0 items-center gap-2'>
              {actions}
              <Button
                size='icon-lg'
                variant='ghost'
                onClick={onClose}
                aria-label='Tutup (Esc)'
                title='Tutup (Esc)'
                className='rounded-full text-background hover:bg-white/15 hover:text-background'
              >
                <X className='size-5' />
              </Button>
            </div>
          </header>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className='pointer-events-none relative z-10 flex min-h-0 flex-1 flex-col'
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}

/** Translucent pill button used in viewer toolbars. */
export function ViewerButton({
  label,
  onClick,
  disabled,
  children,
}: {
  label: string
  onClick: () => void
  disabled?: boolean
  children: ReactNode
}) {
  return (
    <Button
      size='icon'
      variant='ghost'
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
      className='rounded-full text-background hover:bg-white/15 hover:text-background'
    >
      {children}
    </Button>
  )
}
