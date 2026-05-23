import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { PropsWithChildren } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

type MotionSectionProps = PropsWithChildren<{
  className?: string
  id?: string
  delay?: number
}>

const MotionSection = ({ children, className = '', id, delay = 0 }: MotionSectionProps) => {
  const ref = useRef<HTMLElement | null>(null)
  const inView = useInView(ref, { once: true, amount: 0.12 })
  const reduced = useReducedMotion()

  if (reduced) {
    return (
      <section id={id} ref={ref} className={className}>
        {children}
      </section>
    )
  }

  return (
    <motion.section
      id={id}
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 48, rotateX: 10 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 48, rotateX: 10 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformPerspective: 1400, transformStyle: 'preserve-3d' }}
    >
      {children}
    </motion.section>
  )
}

export default MotionSection
