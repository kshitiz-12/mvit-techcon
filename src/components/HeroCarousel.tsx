import { useEffect, useState } from 'react'

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
              className="h-full w-full object-cover"
            />
            {/* Sophisticated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-smvit-primary/70 via-black/50 to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* IEEE Bangalore Logo Overlay */}
      <div className="absolute right-8 top-8 z-20 animate-fade-in">
        <div className="rounded-2xl border border-white/20 bg-white/95 p-4 shadow-glow-lg backdrop-blur-md transition-transform hover:scale-105">
          <img
            src="/IEEE.jpg"
            alt="IEEE Bangalore Section"
            className="h-20 w-auto lg:h-28"
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
  
          <h1 className="font-display text-5xl font-bold leading-tight tracking-tight drop-shadow-2xl md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent">
              MVIT-TECHCON 2026
            </span>
          </h1>
          <p className="mt-6 text-xl font-medium text-white/95 md:text-2xl lg:text-3xl">
            Conference on Network, Multimedia and Information Technology
          </p>
          <p className="mt-4 text-lg text-white/85 md:text-xl">
            5–7 June 2026 · Sir M. Visvesvaraya Institute of Technology, Bengaluru
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#tracks"
              className="group relative overflow-hidden rounded-xl bg-smvit-primary px-8 py-4 font-semibold text-white shadow-glow-lg transition-all duration-300 hover:scale-105 hover:bg-smvit-primaryLight hover:shadow-glow-accent"
            >
              <span className="relative z-10">Explore Program</span>
              <div className="absolute inset-0 bg-gradient-to-r from-smvit-accent/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
            </a>
            <a
              href="#timeline"
              className="rounded-xl border-2 border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/50 hover:bg-white/20 hover:shadow-lg"
            >
              Important Dates
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroCarousel

