'use client'

import { type ComponentProps, Fragment, useState } from 'react'
import { Button } from '../ui/button'
import { ImageViewerOverlay } from './image-viewer-overlay'

/** Button that opens `src` in the image viewer, for use from server components. */
export default function ImageViewerButton({
  src,
  title,
  subtitle,
  ...buttonProps
}: Omit<ComponentProps<typeof Button>, 'onClick'> & {
  src: string
  title: string
  subtitle?: string
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Fragment>
      <Button {...buttonProps} onClick={() => setIsOpen(true)} />
      <ImageViewerOverlay
        open={isOpen}
        onClose={() => setIsOpen(false)}
        src={src}
        title={title}
        subtitle={subtitle}
      />
    </Fragment>
  )
}
