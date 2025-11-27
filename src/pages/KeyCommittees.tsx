import MotionSection from '../components/MotionSection'

const committees = [
  {
    title: 'Conference Leadership',
    people: [
      'XYZ Leadership Team · Conference Chair Group',
      'XYZ Strategy Council · Research & Development',
      'XYZ IEEE Student Branch Counselors',
    ],
  },
  {
    title: 'Technical Program Committee',
    people: [
      'XYZ Reviewer Cohort · Intelligent Infrastructure',
      'XYZ Reviewer Cohort · Multimedia Systems',
      'XYZ Reviewer Cohort · Information Technology',
      'XYZ Advisory Panel · Global Academia',
      'XYZ Advisory Panel · Industry Research',
    ],
  },
  {
    title: 'Industry & Outreach',
    people: [
      'XYZ Experience Studio',
      'XYZ Partnership Desk',
      'XYZ Student Executive Collective',
      'XYZ Civic Innovation Partners',
    ],
  },
  {
    title: 'Publication & Proceedings',
    people: [
      'XYZ Publication Leads · Editorial Operations',
      'XYZ Proceedings Review Desk',
      'XYZ IEEE Compliance Desk',
      'XYZ Graphics & Layout Team',
      'XYZ Digital Library Liaisons',
    ],
  },
  {
    title: 'Experience & Hospitality',
    people: [
      'XYZ Registration & Protocol Desk',
      'XYZ Accessibility Team',
      'XYZ Volunteer Corps',
    ],
  },
]

const KeyCommittees = () => {
  return (
    <div className="space-y-12">
      <MotionSection className="rounded-[32px] border border-slate-200 bg-white/80 p-10 shadow-[0_25px_80px_rgba(15,61,145,0.08)]">
        <p className="eyebrow">Key Committees</p>
        <h1 className="mt-4 font-display text-4xl text-slate-900">Global expertise steering MVIT-TECHCON.</h1>
        <p className="mt-5 text-lg text-slate-600">
          The organizing framework blends campus leadership with international advisors, ensuring that every technical decision,
          delegate experience, and publication process aligns with IEEE gold standards.
        </p>
      </MotionSection>

      <MotionSection className="grid gap-6 md:grid-cols-2">
        {committees.map((committee) => (
          <div key={committee.title} className="rounded-3xl border border-slate-200 bg-white/80 p-6">
            <h3 className="text-xl font-semibold text-slate-900">{committee.title}</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {committee.people.map((person) => (
                <li key={person} className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-2">
                  {person}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </MotionSection>
    </div>
  )
}

export default KeyCommittees

