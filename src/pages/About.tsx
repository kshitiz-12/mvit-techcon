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
    <div className="space-y-16">
      <MotionSection className="rounded-[32px] border border-slate-200 bg-white/80 p-10 shadow-[0_25px_80px_rgba(15,61,145,0.08)]">
        <p className="eyebrow">About Sir M. Visvesvaraya Institute of Technology</p>
        <h1 className="mt-4 font-display text-4xl text-smvit-slate">A heritage campus shaping future-ready engineers.</h1>
        <p className="mt-6 text-lg text-slate-600">
          Established in 1986, Sir M. Visvesvaraya Institute of Technology (SMVIT) stands on the vision of Bharat Ratna Sir M.
          Visvesvaraya—engineering excellence devoted to nation building. The institute is affiliated to Visvesvaraya Technological
          University, accredited by NAAC with A grade, and recognized by AICTE. With a 133-acre green campus near Kempegowda
          International Airport, SMVIT blends heritage with a future-forward research culture.
        </p>
        <p className="mt-4 text-lg text-slate-600">
          MVIT-TECHCON carries forward this spirit by convening researchers, practitioners, alumni founders, and
          policymakers to co-design responsible technology stacks for society.
        </p>
      </MotionSection>

      <MotionSection className="grid gap-8 md:grid-cols-3">
        {values.map((value) => (
          <div key={value.title} className="glass-card">
            <h3 className="text-xl font-semibold text-smvit-slate">{value.title}</h3>
            <p className="mt-3 text-sm text-slate-600">{value.detail}</p>
          </div>
        ))}
      </MotionSection>

      <MotionSection className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-8">
          <h3 className="text-2xl font-semibold text-smvit-slate">Our academic DNA</h3>
          <ul className="mt-4 space-y-4 text-slate-600">
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
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-smvit-cream to-white p-8 shadow-glow">
          <h3 className="text-2xl font-semibold text-smvit-slate">Conference leadership</h3>
          <ul className="mt-4 space-y-3 text-slate-600">
            {leadership.map((person) => (
              <li key={person} className="rounded-2xl border border-slate-200 bg-white/70 p-3">{person}</li>
            ))}
          </ul>
        </div>
      </MotionSection>

      <MotionSection className="rounded-[32px] border border-slate-200 bg-white/80 p-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="eyebrow">Campus commitments</p>
            <h2 className="section-heading">Formal, inclusive, and sustainability-first.</h2>
            <p className="mt-4 text-slate-600">
              SMVIT orchestrates IEEE-grade hospitality, accessibility desks, green mobility dashboards, and zero-waste experiences
              for every delegate. Formal protocol teams coordinate curated visits for dignitaries, start-up founders, and student
              innovators alike.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {['Hybrid studio-grade broadcasts', 'Sustainability playbook', 'Women in Tech leadership circle', 'City innovation trail'].map(
              (item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white/70 p-4 text-sm text-slate-600">
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

