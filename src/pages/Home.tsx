import { motion } from 'framer-motion'
import MotionSection from '../components/MotionSection'
import HeroCarousel from '../components/HeroCarousel'
import FAQ from '../components/FAQ'
import AnimatedCounter from '../components/AnimatedCounter'

const chiefPatrons = [
  { name: 'Dr. A. C. Chandrashekar Raju', role: 'Founder Trustee', image: '/AC-Chandrashekhar-Raju.jpg' },
  { name: 'Sri K. Syama Raju', role: 'Founder Trustee', image: '/k-syama-raju.jpg' },
  { name: 'Sri V. Srinivasa Raju', role: 'Founder Trustee', image: '/srinivasa-raju.jpg' },
  { name: 'Sri L. K. Raju', role: 'Founder Trustee', image: '/LK-Raju.jpg' },
  { name: 'Sri K. Narayana Raju', role: 'Founder Trustee', image: '/k-narayana-raju.jpg' },
  { name: 'Sri K. V. Sekhar Raju', role: 'Founder Trustee', image: '/sekhar-raju.jpg' },
  { name: 'Sri M. Venkataramana Raju', role: 'Founder Trustee', image: '/venkataramana-raju.jpg' },
  { name: 'Sri Bhaskar N. Raju', role: 'Trustee', image: '/bhaskar-n-raju.jpg' },
  { name: 'Sri Sanjay K. Raju', role: 'Trustee', image: '/sanjay-k-raju.jpg' },
  { name: 'Sri N. G. Raju', role: 'Trustee', image: '/NG-Raju.jpg' },
  { name: 'Sri G. Prabhakar Raju', role: 'Trustee', image: '/prabhakar-raju.jpg' },
  { name: 'Sri C. S. Sunder Raju', role: 'Trustee', image: '/CS-SUNDER-RAJU.jpg' },
  { name: 'Sri V. Madhu', role: 'Trustee', image: '/madhu.jpg' },
  { name: 'Sri K. C. Chandrashekar Raju', role: 'Trustee', image: '/K.-C.-Chandrashekar-Raju.jpg' },
  { name: 'Sri Chandrashekar V.', role: 'Trustee', image: '/CHANDRASHEKAR-V.jpg' },
  { name: 'Sri Y. Jagadish Raju', role: 'Trustee', image: '/jagadish-raju.jpg' },
  { name: 'Sri M. Sudarshan', role: 'Trustee', image: '/Sri.-M.-Sudarshan.jpeg' },
  { name: 'Sri G. Pradeep Raju', role: 'Trustee', image: '/edu.in_.jpg' },
  { name: 'Sri S.A.L. Vinay', role: 'Trustee', image: '/edu.in2_.jpg' },
]

const stats = [
  { label: 'Years of Excellence', value: '40+', detail: 'Academic heritage since 1986' },
  { label: 'Research Collaborations', value: '120+', detail: 'MoUs with industry & academia' },
  { label: 'Innovation Studios', value: '8', detail: 'Immersive labs across campus' },
  { label: 'Global Delegates', value: '25+', detail: 'Across 4 continents (2025 data)' },
  { label: 'University Ranks', value: '114+', detail: 'Top ranked engineering institute' },
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

      <MotionSection className="mt-4 grid gap-3 xs:mt-6 xs:gap-4 sm:mt-6 sm:gap-6 md:mt-8 md:grid-cols-2 lg:grid-cols-5">
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
              <ul className="space-y-3 text-xs leading-relaxed text-slate-700 xs:space-y-3.5 xs:text-sm sm:space-y-4 sm:text-base md:text-lg">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-900"></span>
                  <span>Explore, enhance and empower multi-disciplinary and multi-institutional research in Future Electronics, Sustainable Computing & Intelligent Systems.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-900"></span>
                  <span>Provide recent developments in intelligent networks, multimedia processing, and information systems in emerging fields of Engineering & Technology.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-900"></span>
                  <span>Focus on identifying challenges and solutions through an integrated approach, shaping the path for new research dimensions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-900"></span>
                  <span>Foster collaboration between academia and industry to drive innovation and societal progress.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="mt-8 xs:mt-10 sm:mt-16 md:mt-24">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white via-slate-50/30 to-white p-6 shadow-[0_25px_80px_rgba(15,61,145,0.08)] xs:rounded-3xl xs:p-8 sm:rounded-[32px] sm:p-10 md:p-12">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-smvit-primary/5 via-transparent to-smvit-accent/5"></div>
          <div className="absolute top-0 right-0 -z-10 h-64 w-64 rounded-full bg-smvit-primary/5 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -z-10 h-64 w-64 rounded-full bg-smvit-accent/5 blur-3xl"></div>
          
          <div className="mb-8 text-center xs:mb-10 sm:mb-12">
            <h2 className="font-display text-xl font-bold text-slate-900 xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl">CHIEF PATRONS</h2>
            <div className="mx-auto mt-3 h-1 w-20 bg-gradient-to-r from-transparent via-red-600 to-transparent xs:mt-4 xs:w-24"></div>
          </div>

          <div className="grid grid-cols-2 gap-4 xs:gap-5 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5 lg:gap-7">
            {chiefPatrons.map((patron, index) => (
              <motion.div
                key={patron.name}
                className="group relative flex min-h-[200px] flex-col overflow-hidden rounded-2xl border border-slate-200/60 bg-white/80 p-4 backdrop-blur-sm transition-all duration-300 hover:border-smvit-primary/40 hover:bg-white hover:shadow-xl hover:-translate-y-1 xs:min-h-[220px] xs:rounded-3xl xs:p-5 sm:min-h-[240px] sm:rounded-3xl sm:p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-smvit-primary/0 via-smvit-accent/0 to-smvit-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:from-smvit-primary/5 group-hover:via-smvit-accent/5 group-hover:to-smvit-primary/5"></div>
                
                <div className="relative mb-4 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-smvit-primary/20 to-smvit-accent/20 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-slate-200/60 bg-gradient-to-br from-slate-50 to-white p-1 shadow-inner transition-all duration-300 group-hover:border-smvit-primary/40 group-hover:shadow-lg xs:h-28 xs:w-28 sm:h-32 sm:w-32">
                      <img
                        src={patron.image}
                        alt={patron.name}
                        className="h-full w-full rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-1 flex-col justify-between">
                  <h4 className="mb-2 text-center text-xs font-semibold text-slate-900 leading-tight transition-colors duration-300 group-hover:text-smvit-primary xs:text-sm sm:text-base">
                    {patron.name}
                  </h4>
                  <p className="mt-auto text-center text-[10px] font-medium uppercase tracking-wide text-slate-500 transition-colors duration-300 group-hover:text-slate-600 xs:text-xs sm:text-sm">
                    {patron.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </MotionSection>

      <FAQ />
      </div>
      </div>
    </>
  )
}

export default Home

