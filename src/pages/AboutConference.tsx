import MotionSection from '../components/MotionSection'

const highlights = [
  {
    title: 'Immersive Hybrid Production',
    detail:
      'Studio-grade broadcasts, interaction pods for remote delegates, and on-demand translation ensure inclusivity without compromising formality.',
  },
  {
    title: 'IEEE-aligned Review Stack',
    detail:
      'Double-blind peer review on Microsoft CMT, editorial coaches for every accepted paper, and compliance with IEEE Event Conduct policy.',
  },
  {
    title: 'Campus Innovation Trails',
    detail: 'Curated lab tours across AI, autonomous mobility, aerospace systems, and responsible tech incubators.',
  },
]

const formats = [
  { name: 'Keynotes & fireside dialogues', detail: 'Visionary perspectives from academia, government, and industry.' },
  { name: 'Technical paper sessions', detail: 'Parallel tracks with structured Q&A, live whiteboarding, and archival recording.' },
  { name: 'Demos & city studios', detail: 'Scenario-based walkthroughs with civic partners and impact juries.' },
  { name: 'Scholars-in-residence labs', detail: 'Deep dives hosted by doctoral mentors and alumni founders.' },
]

const awards = [
  'IEEE India Council Outstanding Student Branch Award · 2024 (IEEE SB MVIT)',
  'IEEE Bangalore Section Outstanding Medium Student Branch · 2023 (IEEE SB MVIT)',
  'Vibrant Pilot – Grand Entry winner at IEEE YESIST12 Grand Finale, Egypt · 2023 (MVIT Innovation Team)',
]

const legacyStats = [
  {
    title: 'About the MVIT-TECHCON legacy',
    detail:
      'MVIT-TECHCON has hosted flagship editions focused on networks, multimedia, and information systems with the IEEE Bangalore Section since 2023. The 2026 chapter builds on that momentum with a design-forward take on emerging technologies.',
  },
  {
    title: 'IEEE Student Branch impact',
    detail:
      'IEEE SB Sir M. Visvesvaraya Institute of Technology (Stb64731) was established in 2005 to spark research seminars, workshops, and competitions that expose students to global experts. A highlight was securing $75,000 from the IEEE Aerospace and Electronic Systems Society under the Distributed Sensing Technology and Education Initiatives for Region 10.',
  },
]

const AboutConference = () => {
  return (
    <div className="space-y-14">
      <MotionSection className="rounded-[32px] border border-slate-200 bg-white/80 p-10 shadow-[0_25px_80px_rgba(15,61,145,0.08)]">
        <p className="eyebrow">About MVIT-TECHCON</p>
        <h1 className="mt-4 font-display text-4xl text-slate-900">Designing resilient, human-centered technology futures.</h1>
        <p className="mt-5 text-lg text-slate-600">
          The primary goal of MVIT-TECHCON 2026 is to promote research and developmental activities across Network, Multimedia, and
          Information Technology, while enabling scientific interchange between researchers, developers, engineers, students, and
          practitioners worldwide. It provides a forum to deliberate on the latest trends, spot research problems, and nurture young
          innovators.
        </p>
        <p className="mt-4 text-lg text-slate-600">
          MVIT-TECHCON extends the legacy of previous IEEE-backed editions, retaining their rigor and IEEE Bangalore Section partnership
          while adding immersive studio-grade experiences hosted from Sir M. Visvesvaraya Institute of Technology.
        </p>
      </MotionSection>

      <MotionSection className="grid gap-8 md:grid-cols-3">
        {highlights.map((item) => (
          <div key={item.title} className="glass-card">
            <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-3 text-sm text-slate-600">{item.detail}</p>
          </div>
        ))}
      </MotionSection>

      <MotionSection className="rounded-[32px] border border-slate-200 bg-white/80 p-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="eyebrow">Conference objectives</p>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-slate-600">
              <li>Promote research exchange across networked intelligence, multimedia systems, and information technology.</li>
              <li>Provide a launchpad for young researchers to access mentoring, publishing pipelines, and venture partners.</li>
              <li>Showcase IEEE Student Branch innovations and collaborations with civic agencies.</li>
              <li>Co-create responsible technology playbooks that can be adopted by cities, campuses, and enterprises.</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Experience layers</p>
            <ul className="mt-4 space-y-4 text-slate-600">
              {formats.map((format) => (
                <li key={format.name} className="rounded-2xl border border-slate-200 bg-white/70 p-4">
                  <span className="font-semibold text-smvit-primary">{format.name}</span>
                  <p className="text-sm text-slate-600">{format.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="grid gap-8 md:grid-cols-2">
        {legacyStats.map((item) => (
          <div key={item.title} className="rounded-3xl border border-slate-200 bg-white/80 p-6">
            <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-3 text-sm text-slate-600">{item.detail}</p>
          </div>
        ))}
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6">
          <h3 className="text-xl font-semibold text-slate-900">Honors & awards</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {awards.map((award) => (
              <li key={award} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-smvit-accent" />
                {award}
              </li>
            ))}
          </ul>
        </div>
      </MotionSection>

      <MotionSection className="rounded-[32px] border border-slate-200 bg-white/80 p-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="eyebrow">Previous publications</p>
            <p className="mt-3 text-lg text-slate-600">
              All papers presented through the legacy editions have been submitted to the IEEE Xplore Digital Library (subject to scope
              and quality checks) and indexed on Scopus. MVIT-TECHCON 2026 continues this pathway, ensuring archival visibility for every
              accepted submission.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">Browse previous proceedings</p>
            <a
              href="https://ieeexplore.ieee.org/xpl/conhome/1851010/all-proceedings"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-smvit-primary underline"
            >
              IEEE Xplore · MVIT-TECHCON archives
            </a>
            <p className="mt-3">
              Proceedings include the previous MVIT-TECHCON editions; the 2026 manuscripts will follow the same archival workflow with
              camera-ready compliance checks.
            </p>
          </div>
        </div>
      </MotionSection>
    </div>
  )
}

export default AboutConference

