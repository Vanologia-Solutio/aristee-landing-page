'use client'

import { motion, type Variants } from 'motion/react'
import type { ComponentProps } from 'react'

const EASE_OUT = [0.21, 0.47, 0.32, 0.98] as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
}

type FadeInProps = ComponentProps<typeof motion.div> & {
  delay?: number
  y?: number
  once?: boolean
  amount?: number
}

/** Fades an element up into place the first time it scrolls into view. */
export function FadeIn({
  delay = 0,
  y = 32,
  once = true,
  amount = 0.2,
  transition,
  children,
  ...props
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.6, ease: EASE_OUT, delay, ...transition }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

type FadeInStaggerProps = ComponentProps<typeof motion.div> & {
  once?: boolean
  amount?: number
}

/** Wraps a group of FadeInItem children and staggers their entrance. */
export function FadeInStagger({
  once = true,
  amount = 0.2,
  children,
  ...props
}: FadeInStaggerProps) {
  return (
    <motion.div
      initial='hidden'
      whileInView='show'
      viewport={{ once, amount }}
      variants={staggerContainer}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function FadeInItem({
  children,
  ...props
}: ComponentProps<typeof motion.div>) {
  return (
    <motion.div variants={fadeUp} {...props}>
      {children}
    </motion.div>
  )
}
