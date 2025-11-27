import { motion } from 'framer-motion'
import MotionSection from '../components/MotionSection'
import HeroCarousel from '../components/HeroCarousel'

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
    <>
      <section id="hero" className="relative h-screen w-full overflow-hidden">
        <HeroCarousel />
      </section>
      <div className="relative">
      
      <div className="relative mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-slate-50/50 to-white" />
        <div className="absolute inset-0 -z-10 opacity-30 bg-grid-overlay bg-[size:120px_120px]" />
        <div className="absolute left-0 top-0 -z-10 h-96 w-96 rounded-full bg-smvit-primary/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-smvit-accent/5 blur-3xl"></div>

      <MotionSection className="mt-20 grid gap-6 md:grid-cols-4">
        {stats.map((item, index) => (
          <motion.div
            key={item.label}
            className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50/50 p-6 transition-all duration-300 hover:scale-105 hover:border-smvit-primary/30 hover:shadow-glow"
            style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-smvit-accent/10 blur-3xl"></div>
            <p className="relative text-xs font-semibold uppercase tracking-[0.35em] text-smvit-accent">{item.label}</p>
            <p className="relative mt-4 font-display text-5xl font-bold text-smvit-primary">{item.value}</p>
            <p className="relative mt-3 text-sm leading-relaxed text-slate-600">{item.detail}</p>
          </motion.div>
        ))}
      </MotionSection>

      <MotionSection id="about" className="mt-24 grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <p className="eyebrow">Why SMVIT 2026</p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            A campus engineered for immersive research exchanges.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Sir M. Visvesvaraya Institute of Technology blends four decades of engineering excellence with a student-led innovation
            ecosystem. Expect curated lab tours, IEEE student branch showcases, and mentorship pairings that turn submissions into
            journal-ready outcomes.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50/50 p-6 transition-all duration-300 hover:scale-[1.02] hover:border-smvit-primary/30 hover:shadow-glow"
                style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute right-0 top-0 h-24 w-24 -translate-y-1/2 translate-x-1/2 rounded-full bg-smvit-accent/10 blur-2xl"></div>
                <h3 className="relative text-lg font-bold text-smvit-slate">{area.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-slate-600">{area.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-smvit-cream via-white to-slate-50/50 p-8 shadow-glow-lg">
          <div className="absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-smvit-accent/10 blur-3xl"></div>
          <h3 className="relative font-display text-3xl font-bold text-smvit-slate">What to expect</h3>
          <ul className="relative mt-6 space-y-5 text-slate-700">
            <li className="flex items-start gap-4">
              <div className="mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-smvit-accent/20">
                <span className="h-2 w-2 rounded-full bg-smvit-accent"></span>
              </div>
              <span className="leading-relaxed">Experiential studios pairing faculty with civic partners for live prototyping.</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-smvit-accent/20">
                <span className="h-2 w-2 rounded-full bg-smvit-accent"></span>
              </div>
              <span className="leading-relaxed">Curated mentorship hours focusing on storytelling, policy, and fundraising.</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-smvit-accent/20">
                <span className="h-2 w-2 rounded-full bg-smvit-accent"></span>
              </div>
              <span className="leading-relaxed">Publication-ready templates, design systems, and data visualization support.</span>
            </li>
          </ul>
          <div className="relative mt-8 rounded-2xl border border-slate-200/80 bg-white/90 p-5 text-sm leading-relaxed text-slate-600 shadow-sm">
            IEEE-compliant peer-review is powered by Microsoft CMT with dedicated accessibility desks and asynchronous review sprints
            for global members.
          </div>
        </div>
      </MotionSection>

      <MotionSection id="tracks" className="mt-24 space-y-12">
        <div className="max-w-3xl">
          <p className="eyebrow">Program Architecture</p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Curated tracks with executive feedback loops.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Authors are encouraged to align submissions with the following research constellations. Interdisciplinary proposals gain
            priority for plenary storytelling.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50/50 p-8 transition-all duration-300 hover:scale-[1.02] hover:border-smvit-primary/30 hover:shadow-glow-lg"
              style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="absolute right-0 top-0 h-40 w-40 -translate-y-1/2 translate-x-1/2 rounded-full bg-smvit-accent/10 blur-3xl"></div>
              <div className="relative mb-6 text-5xl">{track.icon}</div>
              <h3 className="relative text-2xl font-bold text-smvit-slate">{track.title}</h3>
              <p className="relative mt-4 text-sm leading-relaxed text-slate-600">{track.description}</p>
              <ul className="relative mt-6 space-y-3 text-sm font-medium text-smvit-primary">
                {track.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-smvit-accent/20">
                      <span className="h-1.5 w-1.5 rounded-full bg-smvit-accent"></span>
                    </div>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </MotionSection>

      <MotionSection id="timeline" className="mt-24 space-y-10">
        <div className="max-w-3xl">
          <p className="eyebrow">Important Dates</p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            High-touch review cadence with rolling updates.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {timeline.map((item, index) => (
            <motion.div
              key={item.phase}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50/50 p-8 transition-all duration-300 hover:scale-[1.02] hover:border-smvit-primary/30 hover:shadow-glow"
              style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-smvit-accent/10 blur-3xl"></div>
              <p className="relative text-sm font-semibold uppercase tracking-wide text-smvit-accent">{item.phase}</p>
              <p className="relative mt-4 text-3xl font-bold text-smvit-primary">{item.date}</p>
              <p className="relative mt-4 text-sm leading-relaxed text-slate-600">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </MotionSection>
      </div>
      </div>
    </>
  )
}

export default Home

