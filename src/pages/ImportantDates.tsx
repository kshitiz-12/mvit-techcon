import MotionSection from '../components/MotionSection'

const milestones = [
  { phase: 'Last Date for Full Paper Submission', date: '1st August 2026', status: 'Upcoming', detail: 'All papers must be submitted via the submission portal before the deadline.' },
  { phase: 'Acceptance Notification', date: '1st October 2026', status: 'Upcoming', detail: 'Authors will be notified of paper acceptance decisions.' },
  { phase: 'Last Date for Registration', date: '7th October 2026', status: 'Upcoming', detail: 'One author per paper must complete registration and payment.' },
  { phase: 'Camera Ready Paper', date: '15th October 2026', status: 'Upcoming', detail: 'Final camera-ready papers must be submitted with all corrections.' },
  { phase: 'Conference Date', date: '3rd and 4th December 2026', status: 'Event', detail: 'FESCIS 2026 will be held at Sir M. Visvesvaraya Institute of Technology, Bengaluru.' },
]

const reminders = [
  'Workshops, tutorials, and demos follow the same submission timelines unless specified otherwise.',
  'Visa support letters will be issued within five working days after author registration is confirmed.',
  'For special requests (accessibility, hardware shipments, poster printing) contact logistics@sirsmvit.edu.',
]

const ImportantDates = () => {
  return (
    <div className="space-y-12">
      <MotionSection className="rounded-[32px] border border-slate-200 bg-white/80 p-10 shadow-[0_25px_80px_rgba(15,61,145,0.08)]">
        <p className="eyebrow">Important Dates</p>
        <h1 className="mt-4 font-display text-4xl text-slate-900">Stay aligned with the FESCIS cadence.</h1>
        <p className="mt-5 text-lg text-slate-600">
          The Technical Program Committee operates on a transparent, high-touch schedule so that authors, reviewers, and partners can
          plan travel, visa, and production timelines in advance.
        </p>
      </MotionSection>

      <section className="grid gap-6 md:grid-cols-2">
        {milestones.map((item) => (
          <div key={item.phase} className="rounded-3xl border border-slate-200 bg-white/80 p-6">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.35em] text-smvit-accent">{item.status}</p>
              <span className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-500">{item.date}</span>
            </div>
            <h3 className="mt-3 text-xl font-semibold text-slate-900">{item.phase}</h3>
            <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white/80 p-6">
        <h3 className="text-xl font-semibold text-slate-900">Reminders</h3>
        <ul className="mt-4 space-y-3 text-sm text-slate-600">
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

