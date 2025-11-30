import { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedCounterProps {
  value: string // e.g., "40+", "120+", "8", "25+"
  duration?: number // Animation duration in milliseconds
  className?: string
}

const AnimatedCounter = ({ value, duration = 2000, className = '' }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const hasAnimated = useRef(false)

  // Extract numeric value and suffix from string
  const extractValueAndSuffix = (val: string) => {
    const match = val.match(/^(\d+)(.*)$/)
    if (match) {
      return {
        numericValue: parseInt(match[1], 10),
        suffix: match[2] || '',
      }
    }
    return { numericValue: 0, suffix: '' }
  }

  const { numericValue, suffix } = extractValueAndSuffix(value)

  useEffect(() => {
    if (!isInView || hasAnimated.current || numericValue === 0) {
      return
    }

    hasAnimated.current = true

    const startTime = Date.now()
    const startValue = 0
    const endValue = numericValue

    const animate = () => {
      const now = Date.now()
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation (ease-out)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)

      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart)
      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(endValue)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, numericValue, duration])

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  )
}

export default AnimatedCounter

