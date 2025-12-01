import { useEffect, useState } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const CountdownTimer = () => {
  const targetDate = new Date('2026-12-03T09:00:00+05:30').getTime()

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
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

  return (
    <div className="mt-6 flex flex-wrap justify-center gap-4 sm:gap-6">
      {timeUnits.map((unit) => (
        <div
          key={unit.label}
          className="flex flex-col items-center rounded-xl border border-white/30 bg-white/10 px-4 py-3 backdrop-blur-md sm:px-6 sm:py-4"
        >
          <span className="font-display text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            {String(unit.value).padStart(2, '0')}
          </span>
          <span className="mt-1 text-xs font-medium text-white/90 sm:text-sm">{unit.label}</span>
        </div>
      ))}
    </div>
  )
}

export default CountdownTimer


