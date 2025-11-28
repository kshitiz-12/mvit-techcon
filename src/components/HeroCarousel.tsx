import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const carouselImages = [
  '/smvit_slider1.jpg',
  '/Sirmvit-About-Header-img-500x350.jpg',
  '/sir-m-visvesvaraya-institute-of-technology-mvit-bengaluru-500x300.jpg',
  '/2021-02-11.webp',
]

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Carousel Images */}
      <div className="relative h-full w-full">
        {carouselImages.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={img}
              alt={`MVIT Campus ${index + 1}`}
              className="h-full w-full object-cover brightness-110"
            />
          </div>
        ))}
      </div>

      {/* IEEE Bangalore Logo Overlay */}
      <div className="absolute right-8 top-8 z-20 animate-fade-in">
        <div className="rounded-xl border border-white/20 bg-white/95 p-2 shadow-glow-lg backdrop-blur-md transition-transform hover:scale-105">
          <img
            src="/IEEE.jpg"
            alt="IEEE Bangalore Section"
            className="h-12 w-auto lg:h-16"
          />
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="mx-auto max-w-6xl px-6 text-center text-white">
  
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] md:text-5xl lg:text-6xl">
            FESCIS 2026
          </h1>
          <p className="mt-6 text-lg font-medium text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] md:text-xl lg:text-2xl">
            International Conference on Future Electronics, Sustainable Computing & Intelligent Systems
          </p>
          <div className="mt-6 flex flex-col items-center gap-3">
            <div className="inline-flex items-center gap-3 rounded-2xl border-2 border-white/40 bg-gradient-to-r from-smvit-primary/90 via-smvit-primaryDark/90 to-smvit-primary/90 px-6 py-3 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white lg:h-7 lg:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-display text-xl font-bold text-white md:text-2xl lg:text-3xl">
                3–4 December 2026
              </span>
            </div>
            <p className="text-base font-medium text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] md:text-lg">
              Sir M. Visvesvaraya Institute of Technology, Bengaluru
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/paper-submission"
              className="group relative overflow-hidden rounded-xl bg-smvit-primary px-8 py-4 font-semibold text-white shadow-glow-lg transition-all duration-300 hover:scale-105 hover:bg-smvit-primaryLight hover:shadow-glow-accent"
            >
              <span className="relative z-10">Explore Program</span>
              <div className="absolute inset-0 bg-gradient-to-r from-smvit-accent/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
            </Link>
            <Link
              to="/important-dates"
              className="rounded-xl border-2 border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/50 hover:bg-white/20 hover:shadow-lg"
            >
              Important Dates
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroCarousel

