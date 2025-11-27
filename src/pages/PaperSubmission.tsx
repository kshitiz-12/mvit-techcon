import MotionSection from '../components/MotionSection'

const tracks = [
  {
    title: 'Track 1 · Intelligent Networks',
    bullets: [
      '6G-ready heterogeneous networks',
      'Cyber-physical security & maritime systems',
      'Software-defined networking and virtualization',
    ],
  },
  {
    title: 'Track 2 · Immersive Multimedia',
    bullets: [
      'Spatial computing & volumetric media',
      'Signal processing for resilient communications',
      'Biomedical imaging, geo-informatics, and sensing',
    ],
  },
  {
    title: 'Track 3 · Trusted Information Systems',
    bullets: [
      'Cloud, grid, and green compute fabrics',
      'AI/ML for public-good deployments',
      'Embedded, autonomous, and secure software stacks',
    ],
  },
]

const checkpoints = [
  {
    title: 'Submission format',
    detail:
      'Full-length original research or review papers up to six pages following the IEEE double-column conference template. Overlength manuscripts must include justification and may incur additional page charges.',
  },
  {
    title: 'Submission portal',
    detail:
      'All papers must be uploaded via Microsoft CMT at https://cmt3.research.microsoft.com/MVITTECHCON2026. Authors are responsible for ensuring metadata accuracy and conflict declarations.',
  },
  {
    title: 'Review policy',
    detail:
      'Double-blind peer review managed by the Technical Program Committee. Each paper receives a minimum of three reviews plus a meta-review before the final decision.',
  },
  {
    title: 'Publication',
    detail:
      'Accepted papers will be submitted to IEEE Xplore subject to satisfying scope and quality requirements. Proceedings are indexed with major databases including Scopus.',
  },
]

const PaperSubmission = () => {
  return (
    <div className="space-y-12">
      <MotionSection className="rounded-[32px] border border-slate-200 bg-white/80 p-10 shadow-[0_25px_80px_rgba(15,61,145,0.08)]">
        <p className="eyebrow">Paper Submission</p>
        <h1 className="mt-4 font-display text-4xl text-slate-900">Submit your work to MVIT-TECHCON 2026.</h1>
        <p className="mt-5 text-lg text-slate-600">
          We invite original research contributions, visionary case studies, and practice-led insights that align with the three
          flagship tracks. Interdisciplinary submissions that bridge multiple tracks are prioritized for plenary storytelling.
        </p>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white/70 p-5 text-sm text-slate-600">
          Need help? Write to <a href="mailto:tpc@sirsmvit.edu" className="font-semibold text-smvit-primary underline">tpc@sirsmvit.edu</a> with the subject line “MVIT-TECHCON Submission”.
        </div>
      </MotionSection>

      <section className="grid gap-8 rounded-[32px] border border-slate-200 bg-white/80 p-6 md:grid-cols-3 md:p-10">
        {tracks.map((track) => (
          <div key={track.title} className="glass-card">
            <h3 className="text-xl font-semibold text-slate-900">{track.title}</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {track.bullets.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-smvit-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {checkpoints.map((item) => (
          <div key={item.title} className="rounded-3xl border border-slate-200 bg-white/80 p-6">
            <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-3 text-sm text-slate-600">{item.detail}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default PaperSubmission

