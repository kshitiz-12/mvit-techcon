import { motion } from 'framer-motion'
import MotionSection from '../components/MotionSection'

const stats = [
  { label: 'Years of Excellence', value: '40+', detail: 'Academic heritage since 1986' },
  { label: 'Research Collaborations', value: '120+', detail: 'MoUs with industry & academia' },
  { label: 'Innovation Studios', value: '8', detail: 'Immersive labs across campus' },
  { label: 'Global Delegates', value: '25+', detail: 'Across 4 continents (2025 data)' },
]

const tracks = [
  {
    title: 'Intelligent Infrastructure & Networks',
    description:
      'Resilient mobility stacks, 6G-ready architectures, and secure edge deployments designed for civic resilience.',
    highlights: ['Autonomous mobility twins', 'Secure maritime grids', 'UAV corridors'],
    icon: '🔗',
  },
  {
    title: 'Immersive Media & Sensing',
    description: 'Spatial computing, volumetric media, and sensing pipelines for human-centric decision support.',
    highlights: ['Bio-inspired sensing', 'Holographic classrooms', 'Signal intelligence'],
    icon: '🛰️',
  },
  {
    title: 'Trusted Intelligence & Systems',
    description: 'Applied AI, responsible automation, and dependable software for public-good deployments.',
    highlights: ['Green cloud-native stacks', 'Multi-agent safety', 'Explainable public platforms'],
    icon: '🛡️',
  },
]

const focusAreas = [
  {
    title: 'Campus AI Hub',
    detail: 'NVIDIA-powered GPU pods, data stewards, and publishing-ready workflows for accepted cohorts.',
  },
  {
    title: 'Industry Studio Hours',
    detail: 'One-on-one design reviews with alumni at ISRO, BEL, and frontier startups.',
  },
  {
    title: 'Scholars in Residence',
    detail: 'Residency for doctoral fellows to co-design masterclasses with SMVIT faculty.',
  },
]

const timeline = [
  { phase: 'Call for Papers Opens', date: '15 December 2025', detail: 'Abstract mentoring desk active' },
  { phase: 'Full Paper Deadline', date: '15 March 2026', detail: '6-page IEEE format, double blind review' },
  { phase: 'Camera Ready', date: '25 April 2026', detail: 'Workshops & demos confirmed' },
  { phase: 'Conference Week', date: '5-7 June 2026', detail: 'Hybrid experience from Bengaluru campus' },
]

const Home = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-smvit-cream via-white to-slate-100" />
      <div className="absolute inset-0 -z-10 opacity-40 bg-grid-overlay bg-[size:160px_160px]" />

      <MotionSection
        id="hero"
        className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-white/90 px-6 py-14 shadow-[0_30px_80px_rgba(15,61,145,0.08)] md:px-16"
      >
        <div className="absolute right-10 top-10 hidden h-48 w-48 rounded-full bg-smvit-accent/20 blur-[90px] md:block" />
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <h1 className="font-display text-4xl leading-tight tracking-tight text-smvit-slate md:text-5xl lg:text-6xl">
              Sir M. Visvesvaraya Institute of Technology presents MVIT-TECHCON 2026.
            </h1>
            <p className="mt-6 text-lg text-slate-600 md:text-xl">
              5–7 June 2026 · Bengaluru · Hybrid access featuring immersive studio broadcasts, curated labs, and industry studio
              hours. Every submission receives editorial coaching and access to the SMVIT AI Sandbox.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#tracks"
                className="rounded-full bg-smvit-primary px-6 py-3 font-semibold text-white shadow shadow-smvit-primary/40 transition hover:-translate-y-0.5 hover:bg-[#0a3380]"
              >
                Explore Program
              </a>
              <a
                href="#timeline"
                className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-smvit-primary transition hover:bg-smvit-accent/10"
              >
                Important Dates
              </a>
            </div>
          </div>

          <div className="space-y-5">
            <motion.div
              className="glass-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <p className="text-sm uppercase tracking-[0.25em] text-smvit-accent">Spotlight Theme</p>
              <h3 className="mt-3 text-2xl font-semibold text-smvit-slate">Connected Intelligence for Resilient Cities</h3>
              <p className="mt-3 text-sm text-slate-600">
                Cohorts co-design playbooks for blended physical-digital infrastructure—from campus mobility to defense-grade sensor
                fabrics.
              </p>
            </motion.div>
            <motion.div
              className="glass-card border-smvit-accent/30"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Featured Partner Lab</p>
                  <p className="text-lg font-semibold text-smvit-slate">Visvesvaraya Center for Responsible AI</p>
                </div>
                <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  New
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-600">
                Hands-on residencies, policy sandboxes, and civic deployments in collaboration with IEEE Bangalore Section.
              </p>
            </motion.div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="mt-16 grid gap-6 rounded-[32px] border border-slate-200 bg-white/80 p-6 md:grid-cols-4 md:p-10">
        {stats.map((item) => (
          <div key={item.label} className="rounded-2xl border border-slate-100 bg-white/80 p-5 shadow-sm">
            <p className="text-xs uppercase tracking-[0.35em] text-smvit-accent">{item.label}</p>
            <p className="mt-3 font-display text-4xl text-smvit-slate">{item.value}</p>
            <p className="mt-2 text-sm text-slate-500">{item.detail}</p>
          </div>
        ))}
      </MotionSection>

      <MotionSection id="about" className="mt-20 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <p className="eyebrow">Why SMVIT 2026</p>
          <h2 className="section-heading">A campus engineered for immersive research exchanges.</h2>
          <p className="mt-4 text-lg text-slate-600">
            Sir M. Visvesvaraya Institute of Technology blends four decades of engineering excellence with a student-led innovation
            ecosystem. Expect curated lab tours, IEEE student branch showcases, and mentorship pairings that turn submissions into
            journal-ready outcomes.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {focusAreas.map((area) => (
              <div key={area.title} className="glass-card">
                <h3 className="text-lg font-semibold text-smvit-slate">{area.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{area.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-smvit-cream to-white p-8 shadow-glow">
          <h3 className="font-display text-3xl text-smvit-slate">What to expect</h3>
          <ul className="mt-4 space-y-4 text-slate-600">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-smvit-accent" />
              Experiential studios pairing faculty with civic partners for live prototyping.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-smvit-accent" />
              Curated mentorship hours focusing on storytelling, policy, and fundraising.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-smvit-accent" />
              Publication-ready templates, design systems, and data visualization support.
            </li>
          </ul>
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white/80 p-5 text-sm text-slate-500">
            IEEE-compliant peer-review is powered by Microsoft CMT with dedicated accessibility desks and asynchronous review sprints
            for global members.
          </div>
        </div>
      </MotionSection>

      <MotionSection id="tracks" className="mt-20 space-y-10">
        <div className="max-w-3xl">
          <p className="eyebrow">Program Architecture</p>
          <h2 className="section-heading">Curated tracks with executive feedback loops.</h2>
          <p className="mt-4 text-lg text-slate-600">
            Authors are encouraged to align submissions with the following research constellations. Interdisciplinary proposals gain
            priority for plenary storytelling.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {tracks.map((track) => (
            <motion.div
              key={track.title}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-4xl">{track.icon}</span>
              <h3 className="mt-4 text-2xl font-semibold text-smvit-slate">{track.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{track.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-smvit-primary">
                {track.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-smvit-accent" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </MotionSection>

      <MotionSection id="timeline" className="mt-20 space-y-8">
        <div className="max-w-3xl">
          <p className="eyebrow">Important Dates</p>
          <h2 className="section-heading">High-touch review cadence with rolling updates.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {timeline.map((item) => (
            <div key={item.phase} className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
              <p className="text-sm text-smvit-accent">{item.phase}</p>
              <p className="mt-2 text-2xl font-semibold text-smvit-slate">{item.date}</p>
              <p className="mt-3 text-sm text-slate-600">{item.detail}</p>
            </div>
          ))}
        </div>
      </MotionSection>
    </div>
  )
}

export default Home

