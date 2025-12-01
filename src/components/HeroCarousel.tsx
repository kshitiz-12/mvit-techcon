import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const carouselImages = [
  '/Campus view.JPG',
  '/campus view 2.JPG',
  '/campus view 3.JPG',
  '/lib 1.JPG',
]

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Preload images for better quality and performance
  useEffect(() => {
    carouselImages.forEach((img) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = img
      document.head.appendChild(link)
    })
  }, [])

  return (
    <div className="relative h-[87vh] w-full overflow-hidden max-h-screen" style={{ minHeight: '500px' }}>
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
              style={{
                imageRendering: 'auto',
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)',
                willChange: 'opacity',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
              }}
              loading={index === 0 || index === currentIndex ? 'eager' : 'lazy'}
              decoding="async"
              fetchPriority={index === currentIndex ? 'high' : 'auto'}
            />
          </div>
        ))}
      </div>

      {/* IEEE Bangalore Logo Overlay */}
      {/* <div className="absolute right-4 top-4 z-20 animate-fade-in sm:right-8 sm:top-8">
        <div className="rounded-lg border border-white/20 bg-white/95 p-1.5 shadow-glow-lg backdrop-blur-md transition-transform hover:scale-105 sm:rounded-xl sm:p-2">
          <img
            src="/IEEE.jpg"
            alt="IEEE Bangalore Section"
            className="h-8 w-auto sm:h-12 lg:h-16"
          />
        </div>
      </div> */}

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:bottom-6">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all touch-manipulation sm:h-2 ${
              index === currentIndex ? 'w-6 bg-white sm:w-8' : 'w-1.5 bg-white/50 sm:w-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex items-center px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl text-center text-white">
          <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] sm:text-4xl md:text-5xl lg:text-6xl">
            FESCIS 2026
          </h1>
          <p className="mt-4 text-sm font-medium leading-relaxed text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] sm:mt-6 sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            International Conference on Future Electronics, Sustainable Computing & Intelligent Systems
          </p>
          <div className="mt-4 flex flex-col items-center gap-2 sm:mt-6 sm:gap-3">
            <div className="inline-flex items-center gap-2 rounded-xl border-2 border-white/40 bg-gradient-to-r from-smvit-primary/90 via-smvit-primaryDark/90 to-smvit-primary/90 px-4 py-2 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.4)] sm:gap-3 sm:rounded-2xl sm:px-6 sm:py-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0 text-white sm:h-6 sm:w-6 lg:h-7 lg:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-display text-base font-bold text-white sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                3–4 December 2026
              </span>
            </div>
            <p className="text-xs font-medium text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] sm:text-sm md:text-base">
              Sir M. Visvesvaraya Institute of Technology, Bengaluru
            </p>
          </div>
          <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:justify-center sm:gap-4">
            <Link
              to="/paper-submission"
              className="group relative w-full max-w-xs overflow-hidden rounded-xl bg-smvit-primary px-6 py-3 text-sm font-semibold text-white shadow-glow-lg transition-all duration-300 active:scale-95 hover:bg-smvit-primaryLight hover:shadow-glow-accent sm:w-auto sm:px-8 sm:py-4 sm:text-base"
            >
              <span className="relative z-10">Explore Program</span>
              <div className="absolute inset-0 bg-gradient-to-r from-smvit-accent/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
            </Link>
            <Link
              to="/important-dates"
              className="w-full max-w-xs rounded-xl border-2 border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 active:scale-95 hover:border-white/50 hover:bg-white/20 hover:shadow-lg sm:w-auto sm:px-8 sm:py-4 sm:text-base"
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

