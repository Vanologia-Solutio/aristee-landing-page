import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

export function AccentLabel({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <p
      className={cn(
        'text-xs uppercase font-medium tracking-wider text-accent',
        className,
      )}
    >
      {children}
    </p>
  )
}
