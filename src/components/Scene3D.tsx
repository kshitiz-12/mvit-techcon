import { useReducedMotion } from '../hooks/useReducedMotion'

type Scene3DProps = {
  variant?: 'page' | 'hero'
}

const Scene3D = ({ variant = 'page' }: Scene3DProps) => {
  const reduced = useReducedMotion()
  if (reduced) return null

  const isHero = variant === 'hero'
  const opacity = isHero ? 'opacity-[0.35]' : 'opacity-[0.22]'

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${opacity}`}
      aria-hidden="true"
    >
      <div className={`scene-3d-stage absolute inset-0 ${isHero ? 'scene-hero' : ''}`}>
        <div className="scene-shape scene-ring scene-ring-a" />
        <div className="scene-shape scene-ring scene-ring-b" />
        <div className="scene-shape scene-cube scene-cube-a" />
        <div className="scene-shape scene-cube scene-cube-b" />
        <div className="scene-shape scene-hex scene-hex-a" />
        {!isHero && <div className="scene-shape scene-grid-plane" />}
      </div>
    </div>
  )
}

export default Scene3D
