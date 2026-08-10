import { useReducedMotion } from '../hooks/useReducedMotion'

/** Update these counts as registrations and submissions come in */
const registrationStats = [
  { value: '120+', label: 'papers submitted' },
  { value: '85+', label: 'papers registered' },
  { value: '350+', label: 'delegates registered' },
  { value: '18+', label: 'countries represented' },
  { value: '45+', label: 'institutions participating' },
]

const statItems = registrationStats.map(({ value, label }) => `${value} ${label}`)

const TextCarousel = () => {
  const reduced = useReducedMotion()

  return (
    <section
      aria-label="Registration statistics"
      className="relative z-20 shrink-0 border-y border-smvit-primary/10 bg-gradient-to-r from-smvit-primary via-smvit-primaryDark to-smvit-primary py-2.5 shadow-[0_8px_32px_rgba(11,61,145,0.15)] sm:py-3"
    >
      <div className="flex items-center gap-4 overflow-hidden">
        <div className="shrink-0 border-r border-white/20 bg-smvit-accent px-4 py-1.5 xs:px-5 sm:px-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white xs:text-xs sm:tracking-[0.35em]">
            Live Stats
          </span>
        </div>

        <div className="relative min-w-0 flex-1 overflow-hidden">
          {reduced ? (
            <p className="truncate px-4 text-xs font-medium text-white/90 xs:text-sm">
              {statItems.join(' · ')}
            </p>
          ) : (
            <div className="text-carousel-track flex w-max items-center gap-8 whitespace-nowrap px-4">
              {[...registrationStats, ...registrationStats].map((stat, index) => (
                <span key={`${stat.label}-${index}`} className="inline-flex items-center gap-8 text-xs font-medium text-white/90 xs:text-sm">
                  <span>
                    <span className="font-bold text-white">{stat.value}</span>
                    {' '}
                    {stat.label}
                  </span>
                  <span aria-hidden="true" className="text-smvit-accent">◆</span>
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default TextCarousel
