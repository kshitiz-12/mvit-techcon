import { useEffect, useState } from 'react'
import { CONFERENCE_START_ISO, CONFERENCE_VENUE } from '../constants/conference'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

type CountdownTimerProps = {
  variant?: 'hero' | 'page'
}

const CountdownTimer = ({ variant = 'hero' }: CountdownTimerProps) => {
  const targetDate = new Date(CONFERENCE_START_ISO).getTime()
  const isHero = variant === 'hero'

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = Date.now()
      const difference = targetDate - now

      if (difference > 0) {
        setHasStarted(false)
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        setHasStarted(true)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const interval = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  const unitClass = isHero
    ? 'flex min-w-[4.5rem] flex-col items-center rounded-xl border border-white/35 bg-white/15 px-3 py-2.5 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.25)] xs:min-w-[5rem] xs:px-4 xs:py-3 sm:min-w-[5.5rem] sm:rounded-2xl sm:px-5 sm:py-4'
    : 'flex min-w-[4.5rem] flex-col items-center rounded-xl border border-smvit-primary/20 bg-gradient-to-b from-smvit-primary/10 to-white px-3 py-2.5 shadow-premium xs:min-w-[5rem] xs:px-4 xs:py-3 sm:rounded-2xl sm:px-5 sm:py-4'

  const valueClass = isHero
    ? 'font-display text-2xl font-bold tabular-nums text-white xs:text-3xl sm:text-4xl'
    : 'font-display text-2xl font-bold tabular-nums text-smvit-primary xs:text-3xl sm:text-4xl'

  const labelClass = isHero
    ? 'mt-1 text-[10px] font-semibold uppercase tracking-wider text-white/90 xs:text-xs'
    : 'mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500 xs:text-xs'

  const wrapperClass = isHero ? 'mt-4 w-full xs:mt-5 sm:mt-6' : 'w-full'

  const headingClass = isHero
    ? 'text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-white/90 xs:text-xs sm:tracking-[0.35em]'
    : 'text-center text-xs font-semibold uppercase tracking-[0.3em] text-smvit-accent'

  const subClass = isHero
    ? 'mt-1 text-center text-[10px] text-white/80 xs:text-xs'
    : 'mt-1 text-center text-xs text-slate-600'

  return (
    <div className={wrapperClass} role="timer" aria-live="polite">
      <p className={headingClass}>
        {hasStarted ? 'The conference is underway' : 'Event begins in'}
      </p>
      {!isHero && <p className={subClass}>{CONFERENCE_VENUE}</p>}

      {!hasStarted && (
        <div className="mt-3 flex flex-wrap justify-center gap-2 xs:mt-4 xs:gap-3 sm:gap-4">
          {timeUnits.map((unit) => (
            <div key={unit.label} className={unitClass}>
              <span className={valueClass}>{String(unit.value).padStart(2, '0')}</span>
              <span className={labelClass}>{unit.label}</span>
            </div>
          ))}
        </div>
      )}

      {hasStarted && (
        <p
          className={
            isHero
              ? 'mt-3 text-center text-sm font-medium text-white drop-shadow-md xs:text-base'
              : 'mt-3 text-center text-sm font-medium text-slate-700 xs:text-base'
          }
        >
          Thank you for joining us at FESCIS 2026.
        </p>
      )}
    </div>
  )
}

export default CountdownTimer
