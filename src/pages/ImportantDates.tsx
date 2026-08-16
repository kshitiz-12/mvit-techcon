import MotionSection from '../components/MotionSection'
import CountdownTimer from '../components/CountdownTimer'
const milestones = [
  { phase: 'Full Paper Submission Date', date: '15th August 2026', status: 'Upcoming', detail: 'All papers must be submitted via the submission portal before the deadline.' },
  { phase: 'Notification of Acceptance', date: '15th October 2026', status: 'Upcoming', detail: 'Authors will be notified of paper acceptance decisions.' },
  { phase: 'Final Paper Submission Date', date: '22nd October 2026', status: 'Upcoming', detail: 'Final camera-ready papers must be uploaded before the deadline.' },
  { phase: 'Final Registration Date', date: '22nd October 2026', status: 'Upcoming', detail: 'Authors and delegates must complete registration before the final deadline.' },
]

const reminders = [
  'Workshops, tutorials, and demos follow the same submission timelines unless specified otherwise.',
  'Visa support letters will be issued within five working days after author registration is confirmed.',
]

const ImportantDates = () => {
  return (
    <div className="space-y-6 xs:space-y-8 sm:space-y-10 md:space-y-12">
      <MotionSection className="rounded-2xl border border-smvit-primary/15 bg-gradient-to-br from-smvit-primary/8 via-white to-smvit-accent/8 p-4 shadow-[0_25px_80px_rgba(15,61,145,0.08)] xs:rounded-3xl xs:p-6 sm:rounded-[32px] sm:p-8 md:p-10">
        <CountdownTimer variant="page" />
      </MotionSection>

      <section className="grid gap-4 xs:gap-5 sm:gap-6 md:grid-cols-2">
        {milestones.map((item, index) => (
          <div
            key={item.phase}
            className={`rounded-2xl border p-4 xs:rounded-3xl xs:p-5 sm:p-6 ${
              index % 2 === 0
                ? 'border-smvit-primary/20 bg-gradient-to-br from-smvit-primary/10 to-white'
                : 'border-smvit-accent/25 bg-gradient-to-br from-smvit-accent/10 to-white'
            }`}
          >
            <div className="flex flex-col gap-2 xs:flex-row xs:items-center xs:justify-between">
              <p
                className={`text-[10px] uppercase tracking-[0.25em] xs:text-xs xs:tracking-[0.35em] ${
                  index % 2 === 0 ? 'text-smvit-primary' : 'text-smvit-accent'
                }`}
              >
                {item.status}
              </p>
              {index === 0 ? (
          <div className="flex flex-col items-end leading-tight">
              <span className="text-[10px] text-slate-700 line-through xs:text-xs">
              {item.date}
             </span>

            <span className="text-[10px] font-semibold text-blue-600 xs:text-xs">
            15th September 2026
            </span>
          </div>
) : (
  <span
    className={`rounded-full border px-2 py-1 text-[10px] xs:px-3 xs:text-xs ${
      index % 2 === 0
        ? 'border-smvit-primary/25 bg-smvit-primary/5 text-smvit-primaryDark'
        : 'border-smvit-accent/30 bg-smvit-accent/10 text-smvit-primaryDark'
    }`}
  >
    {item.date}
  </span>
)}
            </div>
            <h3 className="mt-2 text-lg font-semibold text-slate-900 xs:mt-3 xs:text-xl">{item.phase}</h3>
            <p className="mt-1.5 text-xs text-slate-600 xs:mt-2 xs:text-sm">{item.detail}</p>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white/80 p-4 xs:rounded-3xl xs:p-5 sm:p-6">
        <h3 className="text-lg font-semibold text-slate-900 xs:text-xl">Reminders</h3>
        <ul className="mt-3 space-y-2 text-xs text-slate-600 xs:mt-4 xs:space-y-3 xs:text-sm">
          {reminders.map((note) => (
            <li key={note} className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-smvit-accent" />
              {note}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default ImportantDates

