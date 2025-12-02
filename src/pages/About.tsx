import MotionSection from '../components/MotionSection'

const values = [
  {
    title: 'Research-first mindset',
    detail: '45 funded labs across aerospace, cyber-physical systems, and sustainable infrastructure.',
  },
  {
    title: 'IEEE-powered community',
    detail: 'Active Student Branch since 2005 with award-winning Affinity Groups and Society Chapters.',
  },
  {
    title: 'City-scale living labs',
    detail: 'Co-created pilots with civic agencies, enabling rapid deployment of resilient technology.',
  },
]

const leadership = [
  'XYZ Leadership Council · Conference Stewardship',
  'XYZ Research & Development Council',
  'XYZ IEEE Student Branch Mentors',
  'XYZ Innovation & Incubation Office',
]

const About = () => {
  return (
    <div className="space-y-8 xs:space-y-10 sm:space-y-12 md:space-y-16">
      <MotionSection className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-[0_25px_80px_rgba(15,61,145,0.08)] xs:rounded-3xl xs:p-6 sm:rounded-[32px] sm:p-8 md:p-10">
        <p className="eyebrow text-[10px] xs:text-xs">About Sir M. Visvesvaraya Institute of Technology</p>
        <h1 className="mt-3 font-display text-2xl text-smvit-slate xs:mt-4 xs:text-3xl sm:text-4xl">A heritage campus shaping future-ready engineers.</h1>
        <p className="mt-4 text-sm text-slate-600 xs:mt-5 xs:text-base sm:mt-6 sm:text-lg">
          Established in 1986, Sir M. Visvesvaraya Institute of Technology (SMVIT) stands on the vision of Bharat Ratna Sir M.
          Visvesvaraya—engineering excellence devoted to nation building. The institute is affiliated to Visvesvaraya Technological
          University, accredited by NAAC with A grade, and recognized by AICTE. With a 133-acre green campus near Kempegowda
          International Airport, SMVIT blends heritage with a future-forward research culture.
        </p>
        <p className="mt-3 text-sm text-slate-600 xs:mt-4 xs:text-base sm:text-lg">
          FESCIS carries forward this spirit by convening researchers, practitioners, alumni founders, and
          policymakers to co-design responsible technology stacks for society.
        </p>
      </MotionSection>

      <MotionSection className="grid gap-4 xs:gap-5 sm:gap-6 md:gap-8 md:grid-cols-3">
        {values.map((value) => (
          <div key={value.title} className="glass-card p-4 xs:p-5 sm:p-6">
            <h3 className="text-lg font-semibold text-smvit-slate xs:text-xl">{value.title}</h3>
            <p className="mt-2 text-xs text-slate-600 xs:mt-3 xs:text-sm">{value.detail}</p>
          </div>
        ))}
      </MotionSection>

      <MotionSection className="grid gap-4 xs:gap-5 sm:gap-6 md:gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 xs:rounded-3xl xs:p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-smvit-slate xs:text-2xl">Our academic DNA</h3>
          <ul className="mt-3 space-y-3 text-sm text-slate-600 xs:mt-4 xs:space-y-4 xs:text-base">
            <li>
              <strong className="text-smvit-primary">Innovation Commons:</strong> incubation pods dedicated to mobility, deep-tech, and
              climate resilience with alumni-led mentorship.
            </li>
            <li>
              <strong className="text-smvit-primary">Global partnerships:</strong> live MoUs with universities in Singapore, Europe, and
              Latin America enabling exchange semesters and joint studios.
            </li>
            <li>
              <strong className="text-smvit-primary">Impact-focused outreach:</strong> IEEE humanitarian technology challenges, rural
              innovation fellowships, and women-in-tech leadership circles.
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-smvit-cream to-white p-4 shadow-glow xs:rounded-3xl xs:p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-smvit-slate xs:text-2xl">Conference leadership</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 xs:mt-4 xs:space-y-3 xs:text-base">
            {leadership.map((person) => (
              <li key={person} className="rounded-xl border border-slate-200 bg-white/70 p-2.5 xs:rounded-2xl xs:p-3">{person}</li>
            ))}
          </ul>
        </div>
      </MotionSection>

      <MotionSection className="rounded-2xl border border-slate-200 bg-white/80 p-4 xs:rounded-3xl xs:p-6 sm:rounded-[32px] sm:p-8 md:p-10">
        <div className="grid gap-4 xs:gap-5 sm:gap-6 md:gap-8 md:grid-cols-2">
          <div>
            <p className="eyebrow text-[10px] xs:text-xs">Campus commitments</p>
            <h2 className="section-heading text-xl xs:text-2xl sm:text-3xl md:text-4xl">Formal, inclusive, and sustainability-first.</h2>
            <p className="mt-3 text-sm text-slate-600 xs:mt-4 xs:text-base">
              SMVIT orchestrates IEEE-grade hospitality, accessibility desks, green mobility dashboards, and zero-waste experiences
              for every delegate. Formal protocol teams coordinate curated visits for dignitaries, start-up founders, and student
              innovators alike.
            </p>
          </div>
          <div className="grid gap-3 xs:gap-4 md:grid-cols-2">
            {['Hybrid studio-grade broadcasts', 'Sustainability playbook', 'Women in Tech leadership circle', 'City innovation trail'].map(
              (item) => (
                <div key={item} className="rounded-xl border border-slate-200 bg-white/70 p-3 text-xs text-slate-600 xs:rounded-2xl xs:p-4 xs:text-sm">
                  {item}
                </div>
              ),
            )}
          </div>
        </div>
      </MotionSection>
    </div>
  )
}

export default About

