import { motion } from 'framer-motion'
import MotionSection from '../components/MotionSection'
import HeroCarousel from '../components/HeroCarousel'
import FAQ from '../components/FAQ'
import AnimatedCounter from '../components/AnimatedCounter'

const stats = [
  { label: 'Years of Excellence', value: '40+', detail: 'Academic heritage since 1986' },
  { label: 'Research Collaborations', value: '120+', detail: 'MoUs with industry & academia' },
  { label: 'Innovation Studios', value: '8', detail: 'Immersive labs across campus' },
  { label: 'Global Delegates', value: '25+', detail: 'Across 4 continents (2025 data)' },
]

const Home = () => {
  return (
    <>
      <section id="hero" className="relative h-screen w-full overflow-hidden" style={{ minHeight: '-webkit-fill-available' }}>
        <HeroCarousel />
      </section>
      <div className="relative">
      
      <div className="relative mx-auto max-w-6xl px-3 py-6 xs:px-4 xs:py-8 sm:px-6 sm:py-12 md:py-16">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-slate-50/50 to-white" />
        <div className="absolute inset-0 -z-10 opacity-30 bg-grid-overlay bg-[size:120px_120px]" />
        <div className="absolute left-0 top-0 -z-10 h-96 w-96 rounded-full bg-smvit-primary/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-smvit-accent/5 blur-3xl"></div>

      <MotionSection className="mt-4 grid gap-3 xs:mt-6 xs:gap-4 sm:mt-6 sm:gap-6 md:mt-8 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <motion.div
            key={item.label}
            className="group relative overflow-hidden rounded-lg border border-slate-200/80 bg-gradient-to-br from-white to-slate-50/50 p-3 transition-all duration-300 active:scale-95 xs:rounded-xl xs:p-4 sm:rounded-2xl sm:p-6 sm:hover:scale-105 sm:hover:border-smvit-primary/30 sm:hover:shadow-glow"
            style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-smvit-accent/10 blur-3xl"></div>
            <p className="relative text-[9px] font-semibold uppercase tracking-[0.2em] text-smvit-accent xs:text-[10px] xs:tracking-[0.25em] sm:text-xs sm:tracking-[0.35em]">{item.label}</p>
            <p className="relative mt-2 font-display text-2xl font-bold text-smvit-primary xs:mt-3 xs:text-3xl sm:mt-4 sm:text-4xl md:text-5xl">
              <AnimatedCounter value={item.value} duration={2000} />
            </p>
            <p className="relative mt-1.5 text-[10px] leading-relaxed text-slate-600 xs:mt-2 xs:text-xs sm:mt-3 sm:text-sm">{item.detail}</p>
          </motion.div>
        ))}
      </MotionSection>

      <MotionSection className="mt-8 xs:mt-10 sm:mt-16 md:mt-24">
        <div className="bg-white p-4 xs:p-5 sm:p-6 sm:p-8 md:p-12">
          <div className="mb-4 text-center xs:mb-5 sm:mb-6 sm:mb-10">
            <h2 className="font-display text-xl font-bold text-slate-900 xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl">ABOUT US</h2>
            <div className="mx-auto mt-2 h-1 w-16 bg-red-600 xs:mt-3 xs:w-20"></div>
          </div>
          
          <div className="grid gap-4 xs:gap-5 sm:gap-6 sm:gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="text-xs leading-relaxed text-slate-700 xs:text-sm sm:text-base md:text-lg">
                Sir M. Visvesvaraya Institute of Technology (SMVIT) was established in 1986 and has been a beacon of excellence in engineering education for over four decades. Located in the vibrant city of Bengaluru, the institute spans across a sprawling green campus and has established itself as a premier institution for technical education.
              </p>
              <p className="mt-3 text-xs leading-relaxed text-slate-700 xs:mt-4 xs:text-sm sm:text-base md:text-lg">
                The institute offers a comprehensive range of undergraduate, postgraduate, and doctoral programs across various engineering disciplines. With state-of-the-art infrastructure, modern laboratories, and experienced faculty, SMVIT is committed to nurturing innovation, research, and academic excellence. The institute is recognized by AICTE, UGC, and NAAC accredited, ensuring the highest standards of education.
              </p>
            </div>
            
            <div className="relative overflow-hidden rounded-xl xs:rounded-2xl">
              <img
                src="/Sirmvit-About-Header-img-500x350.jpg"
                alt="Sir M. Visvesvaraya Institute of Technology Campus showing modern buildings and green spaces"
                className="h-full w-full object-cover shadow-lg"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="mt-8 xs:mt-10 sm:mt-16 md:mt-24">
        <div className="bg-white p-4 xs:p-5 sm:p-6 sm:p-8 md:p-12">
          <div className="mb-4 text-center xs:mb-5 sm:mb-6 sm:mb-10 md:text-right">
            <h2 className="font-display text-xl font-bold text-slate-900 xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl">OBJECTIVE OF THE CONFERENCE</h2>
            <div className="mx-auto mt-2 h-1 w-16 bg-red-600 xs:mt-3 xs:w-20 md:ml-auto md:mr-0"></div>
          </div>
          
          <div className="grid gap-4 xs:gap-5 sm:gap-6 md:gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div className="relative overflow-hidden rounded-xl order-2 xs:rounded-2xl md:order-1">
              <img
                src="/sir-m-visvesvaraya-institute-of-technology-mvit-bengaluru-500x300.jpg"
                alt="Sir M. Visvesvaraya Institute of Technology campus entrance with architectural buildings"
                className="h-full w-full object-cover shadow-lg"
                loading="lazy"
                decoding="async"
              />
            </div>
            
            <div className="order-1 md:order-2">
              <p className="text-xs leading-relaxed text-slate-700 xs:text-sm sm:text-base md:text-lg">
                FESCIS 2026 serves as a premier platform for researchers, scientists, academicians, and industry experts to share opinions, new ideas, frameworks, and innovative technologies in intelligent computing and information technology. The conference aims to address critical problems in engineering sciences and healthcare, making a revolutionary contribution to social welfare through science and technology.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-700 xs:mt-3 xs:text-sm sm:mt-4 sm:text-base md:text-lg">
                The conference has a high impact on the IEEE Bangalore Section regarding advances in intelligent computing for engineering, sciences, healthcare, energy, and environment. The scope includes interdisciplinary, emerging, and thrust areas focusing on cognitive computing for complex problem-solving, deeper understanding of current trends in intelligent computation, and multi-disciplinary research on national growth towards healthcare solutions.
              </p>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="mt-8 xs:mt-10 sm:mt-16 md:mt-24">
        <div className="bg-white p-4 xs:p-5 sm:p-6 sm:p-8 md:p-12">
          <div className="mb-4 text-center xs:mb-5 sm:mb-6 sm:mb-10">
            <h2 className="font-display text-lg font-bold text-slate-900 xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">CONFERENCE HIGHLIGHTS, SCOPE AND EXPECTED OUTCOMES</h2>
            <div className="mx-auto mt-2 h-1 w-12 bg-red-600 xs:w-16 sm:mt-3 sm:w-20"></div>
          </div>
          
          <ul className="space-y-2 text-xs leading-relaxed text-slate-700 xs:space-y-2.5 xs:text-sm sm:space-y-3 sm:text-base md:text-lg">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-900"></span>
              <span>This Conference is a distinctive effort to explore, enhance and empower multi-disciplinary and multi-institutional research based on Network Technologies, Multimedia Systems, and Information Technology in contemporary engineering and computing domains.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-900"></span>
              <span>This conference will provide recent developments in the area of intelligent networks, multimedia processing, and information systems in emerging fields of Engineering & Technology.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-900"></span>
              <span>The convergence of network architectures, multimedia technologies, data analytics, and high-performance computing provides the capability to solve complex problems.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-900"></span>
              <span>Neoteric and latest developments in the area of intelligent computing in engineering, network systems, and multimedia domains.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-900"></span>
              <span>Focuses on identifying challenges and solutions through an integrated approach, shaping the path for new research dimensions.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-900"></span>
              <span>Cognitive computing techniques for solving various problems in the field of engineering, network systems, and multimedia applications.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-900"></span>
              <span>An advanced procedure to address and enhance available methods in network optimization, multimedia processing, and information management.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-900"></span>
              <span>A deeper understanding of current trends in intelligent computing techniques within the domain of engineering, network technologies, and multimedia systems.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-900"></span>
              <span>Future prospect of intelligent computing in engineering and technology through best practices and innovative solutions.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-900"></span>
              <span>Intelligent systems based on knowledge engineering and data-driven approaches for network and multimedia applications.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-900"></span>
              <span>This conference will provide an open forum to researchers, academicians, industry professionals, and students to share knowledge and collaborate on cutting-edge research.</span>
            </li>
          </ul>
        </div>
      </MotionSection>

      <FAQ />
      </div>
      </div>
    </>
  )
}

export default Home

