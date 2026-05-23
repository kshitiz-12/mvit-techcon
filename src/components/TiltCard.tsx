import { useRef, useState, type CSSProperties, type MouseEvent, type ReactNode } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

type TiltCardProps = {
  children: ReactNode
  className?: string
  maxTilt?: number
  lift?: number
}

const TiltCard = ({ children, className = '', maxTilt = 10, lift = 14 }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState<CSSProperties>({})
  const reduced = useReducedMotion()

  const reset = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
      transition: 'transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)',
    })
  }

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reduced || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5

    setStyle({
      transform: `perspective(1000px) rotateX(${(-y * maxTilt).toFixed(2)}deg) rotateY(${(x * maxTilt).toFixed(2)}deg) translateZ(${lift}px)`,
      transition: 'transform 0.12s ease-out',
    })
  }

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={reduced ? undefined : style}
    >
      <div className="tilt-card-inner h-full w-full">{children}</div>
    </div>
  )
}

export default TiltCard
