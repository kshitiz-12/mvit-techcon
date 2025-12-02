import MotionSection from '../components/MotionSection'

const milestones = [
  { phase: 'Conference Date', date: '3rd and 4th December 2026', status: 'Event', detail: 'FESCIS 2026 will be held at Sir M. Visvesvaraya Institute of Technology, Bengaluru.' },
  { phase: 'Last Date for Full Paper Submission', date: '1st August 2026', status: 'Upcoming', detail: 'All papers must be submitted via the submission portal before the deadline.' },
  { phase: 'Acceptance Notification', date: '1st October 2026', status: 'Upcoming', detail: 'Authors will be notified of paper acceptance decisions.' },
  { phase: 'Last Date for Registration', date: '7th October 2026', status: 'Upcoming', detail: 'One author per paper must complete registration and payment.' },
]

const reminders = [
  'Workshops, tutorials, and demos follow the same submission timelines unless specified otherwise.',
  'Visa support letters will be issued within five working days after author registration is confirmed.',
  'For special requests (accessibility, hardware shipments, poster printing) contact logistics@sirsmvit.edu.',
]

const ImportantDates = () => {
  return (
    <div className="space-y-6 xs:space-y-8 sm:space-y-10 md:space-y-12">
      <MotionSection className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-[0_25px_80px_rgba(15,61,145,0.08)] xs:rounded-3xl xs:p-6 sm:rounded-[32px] sm:p-8 md:p-10">
        <p className="eyebrow text-[10px] xs:text-xs">Important Dates</p>
        <h1 className="mt-3 font-display text-2xl text-slate-900 xs:mt-4 xs:text-3xl sm:text-4xl">Stay aligned with the FESCIS cadence.</h1>
        <p className="mt-4 text-sm text-slate-600 xs:mt-5 xs:text-base sm:text-lg">
          The Technical Program Committee operates on a transparent, high-touch schedule so that authors, reviewers, and partners can
          plan travel, visa, and production timelines in advance.
        </p>
      </MotionSection>

      <section className="grid gap-4 xs:gap-5 sm:gap-6 md:grid-cols-2">
        {milestones.map((item) => (
          <div key={item.phase} className="rounded-2xl border border-slate-200 bg-white/80 p-4 xs:rounded-3xl xs:p-5 sm:p-6">
            <div className="flex flex-col gap-2 xs:flex-row xs:items-center xs:justify-between">
              <p className="text-[10px] uppercase tracking-[0.25em] text-smvit-accent xs:text-xs xs:tracking-[0.35em]">{item.status}</p>
              <span className="rounded-full border border-slate-200 px-2 py-1 text-[10px] text-slate-500 xs:px-3 xs:text-xs">{item.date}</span>
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

