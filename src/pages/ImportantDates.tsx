import MotionSection from '../components/MotionSection'

const milestones = [
  { phase: 'Call for Papers Opens', date: '15 December 2025', status: 'Live', detail: 'Mentoring desk activated; abstract clinics weekly.' },
  { phase: 'Full Paper Submission', date: '15 March 2026', status: 'Upcoming', detail: 'CMT portal closes 23:59 IST.' },
  { phase: 'Reviewer Feedback', date: '10 April 2026', status: 'Upcoming', detail: 'Consolidated decisions shared with meta reviews.' },
  { phase: 'Camera Ready & Copyright', date: '25 April 2026', status: 'Upcoming', detail: 'IEEE eCopyright + final PDF upload.' },
  { phase: 'Author Registration Deadline', date: '5 May 2026', status: 'Upcoming', detail: 'One author per paper must complete payment.' },
  { phase: 'Conference Week', date: '5 – 7 June 2026', status: 'Event', detail: 'On-campus + hybrid broadcast from Bengaluru.' },
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
        <h1 className="mt-4 font-display text-4xl text-slate-900">Stay aligned with the MVIT-TECHCON cadence.</h1>
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

