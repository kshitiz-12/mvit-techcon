import { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import CountdownTimer from './CountdownTimer'
import { CONFERENCE_IEEE_ID, CONFERENCE_TOPIC } from '../constants/conference'
import { useReducedMotion } from '../hooks/useReducedMotion'

const carouselImages = [
  '/Campus view.JPG',
  '/campus view 2.JPG',
  '/campus view 3.JPG',
  '/lib 1.JPG',
  '/WhatsApp Image 2025-12-01 at 15.50.43_50fce849.jpg',
]

interface ImageLoadState {
  loaded: boolean
  error: boolean
  retryCount: number
}

const MAX_RETRIES = 3
const RETRY_DELAY = 2000

const HeroCarousel = () => {
  const reduced = useReducedMotion()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imageStates, setImageStates] = useState<ImageLoadState[]>(
    carouselImages.map(() => ({ loaded: false, error: false, retryCount: 0 }))
  )

  // Load image with retry logic
  const loadImage = useCallback((src: string, index: number, retryCount: number = 0): Promise<void> => {
    return new Promise((resolve, reject) => {
      const img = new Image()
      
      img.onload = () => {
        setImageStates((prev) => {
          const newStates = [...prev]
          newStates[index] = { loaded: true, error: false, retryCount }
          return newStates
        })
        resolve()
      }
      
      img.onerror = () => {
        if (retryCount < MAX_RETRIES) {
          setTimeout(() => {
            setImageStates((prev) => {
              const newStates = [...prev]
              newStates[index] = { ...prev[index], retryCount: retryCount + 1 }
              return newStates
            })
            loadImage(src, index, retryCount + 1).then(resolve).catch(reject)
          }, RETRY_DELAY)
        } else {
          setImageStates((prev) => {
            const newStates = [...prev]
            newStates[index] = { loaded: false, error: true, retryCount }
            return newStates
          })
          reject(new Error(`Failed to load image after ${MAX_RETRIES} retries`))
        }
      }
      
      img.src = src
    })
  }, [])

  // Progressive image loading: Load first image immediately, others in background
  useEffect(() => {
    let isMounted = true

    // Preload first image with highest priority - start immediately
    const firstImg = new Image()
    firstImg.fetchPriority = 'high'
    firstImg.decoding = 'sync'
    firstImg.onload = () => {
      if (isMounted) {
        setImageStates((prev) => {
          const newStates = [...prev]
          newStates[0] = { loaded: true, error: false, retryCount: 0 }
          return newStates
        })
      }
    }
    firstImg.onerror = () => {
      // Fallback to loadImage function if direct loading fails
      if (isMounted) {
        loadImage(carouselImages[0], 0).catch(() => {})
      }
    }
    firstImg.src = carouselImages[0]

    // Load remaining images immediately (browser will handle prioritization)
    const loadRemainingImages = async () => {
      for (let i = 1; i < carouselImages.length; i++) {
        if (!isMounted) break
        
        // Start loading all images immediately, browser will prioritize
        try {
          loadImage(carouselImages[i], i).catch(() => {
            // Errors handled in loadImage
          })
        } catch (error) {
          console.error(`Failed to initiate load for image ${i}:`, error)
        }
      }
    }

    // Start loading remaining images immediately (don't delay)
    loadRemainingImages()

    return () => {
      isMounted = false
    }
  }, [loadImage])

  // Preload next image before transitioning
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % carouselImages.length
    const nextImageState = imageStates[nextIndex]
    
    // Preload next image if not already loaded
    if (!nextImageState.loaded && !nextImageState.error) {
      loadImage(carouselImages[nextIndex], nextIndex).catch(() => {
        // Silently handle errors, retry logic is in loadImage
      })
    }
  }, [currentIndex, imageStates, loadImage])

  // Smooth transition - always transition, show loading state if image not ready
  // Use ref to avoid re-rendering interval on every currentIndex change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        return (prevIndex + 1) % carouselImages.length
      })
    }, 5000)
    return () => clearInterval(interval)
  }, []) // Empty dependency array - interval created once

  return (
    <div className="relative h-[85vh] w-full overflow-hidden" style={{ minHeight: '-webkit-fill-available' }}>
      {/* Carousel Images */}
      <div className="relative h-full w-full">
        {carouselImages.map((img, index) => {
          const imageState = imageStates[index]
          const isActive = index === currentIndex
          const showImage = imageState.loaded && !imageState.error

          return (
            <div
              key={img}
              className={`absolute inset-0 ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
              style={{
                transition: 'opacity 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                transform: isActive ? 'scale(1)' : 'scale(1.05)',
                willChange: 'opacity, transform',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                perspective: '1000px',
              }}
            >
              {/* Loading placeholder - show when image is not loaded and is active */}
              {!showImage && isActive && !imageState.error && (
                <div className="absolute inset-0 bg-gradient-to-br from-smvit-primary/20 via-smvit-primaryDark/20 to-smvit-primary/20 animate-pulse flex items-center justify-center">
                  <div className="text-white/50 text-sm">Loading image...</div>
                </div>
              )}
              
              {/* Error placeholder */}
              {imageState.error && isActive && (
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 flex items-center justify-center">
                  <div className="text-white/70 text-sm text-center px-4">
                    Image unavailable
                  </div>
                </div>
              )}
              
              {/* Actual image - always render to allow browser to load it */}
              <img
                src={img}
                alt={`MVIT Campus ${index + 1}`}
                className="h-full w-full object-cover"
                style={{
                  imageRendering: 'auto',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'translateZ(0)',
                  willChange: 'opacity, transform',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  transition: 'opacity 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  opacity: isActive && showImage ? 1 : 0,
                  visibility: isActive && showImage ? 'visible' : 'hidden',
                }}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding={index === 0 ? 'sync' : 'async'}
                fetchPriority={index === 0 ? 'high' : 'auto'}
                onLoad={() => {
                  setImageStates((prev) => {
                    if (!prev[index].loaded) {
                      const newStates = [...prev]
                      newStates[index] = { loaded: true, error: false, retryCount: prev[index].retryCount }
                      return newStates
                    }
                    return prev
                  })
                }}
                onError={() => {
                  setImageStates((prev) => {
                    const newStates = [...prev]
                    newStates[index] = { loaded: false, error: true, retryCount: prev[index].retryCount }
                    return newStates
                  })
                }}
              />
            </div>
          )
        })}
      </div>

      {/* IEEE partner logos */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 px-3 pt-3 sm:px-5 sm:pt-5 md:px-6 md:pt-6">
        <div className="pointer-events-auto mx-auto flex max-w-7xl items-center justify-between gap-2 sm:gap-4">
          <div
            className="animate-fade-in rounded-lg border border-white/40 bg-white/95 p-2 shadow-[0_8px_32px_rgba(0,0,0,0.28)] backdrop-blur-md transition-transform duration-300 hover:scale-[1.02] sm:rounded-xl sm:p-2.5 md:p-3"
            style={{ animationDelay: '0.1s' }}
          >
            <img
              src="/ieee-bangalore-section.png"
              alt="IEEE Bangalore Section"
              className="h-8 w-auto object-contain sm:h-10 md:h-12 lg:h-14"
              loading="eager"
              decoding="async"
            />
          </div>
          <div
            className="animate-fade-in rounded-lg border border-white/40 bg-white/95 p-2 shadow-[0_8px_32px_rgba(0,0,0,0.28)] backdrop-blur-md transition-transform duration-300 hover:scale-[1.02] sm:rounded-xl sm:p-2.5 md:p-3"
            style={{ animationDelay: '0.2s' }}
          >
            <img
              src="/ieee-comsoc-bangalore.png"
              alt="IEEE ComSoc Bangalore Chapter"
              className="h-8 w-auto max-w-[120px] object-contain object-left sm:h-10 sm:max-w-[160px] md:h-11 md:max-w-[200px] lg:h-12 lg:max-w-[240px]"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:bottom-6">
        {carouselImages.map((img, index) => (
            <button
            key={img}
            type="button"
            onClick={() => {
              setCurrentIndex(index)
            }}
            className="relative flex items-center justify-center rounded-full touch-manipulation transition-all duration-300 ease-in-out"
            style={{
              minWidth: '44px',
              minHeight: '44px',
              padding: '20px 10px',
            }}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className={`h-1.5 rounded-full transition-all duration-300 ease-in-out sm:h-2 ${
              index === currentIndex ? 'w-6 bg-white sm:w-8' : 'w-1.5 bg-white/50 sm:w-2'
            }`}></span>
          </button>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-[15] flex items-center px-3 sm:px-4 md:px-6">
        <motion.div
          className="mx-auto w-full max-w-6xl text-center text-white"
          style={{ transformPerspective: 1200, transformStyle: 'preserve-3d' }}
          initial={reduced ? false : { opacity: 0, y: 36, rotateX: 12 }}
          animate={reduced ? undefined : { opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <h1 className="hero-float font-display text-2xl font-bold leading-tight tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] [text-shadow:_0_2px_8px_rgba(0,0,0,0.8),_0_4px_16px_rgba(0,0,0,0.6)] xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            FESCIS 2026
          </h1>
          <div className="mt-3 text-xs font-medium leading-relaxed text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] [text-shadow:_0_1px_4px_rgba(0,0,0,0.8),_0_2px_8px_rgba(0,0,0,0.6)] xs:mt-4 xs:text-sm sm:mt-6 sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            <p className="text-center">2026 International Conference</p>
            <p className="text-center">On</p>
            <p className="text-center px-2">
              {CONFERENCE_TOPIC} {CONFERENCE_IEEE_ID}
            </p>
          </div>
          <div className="mt-3 flex flex-col items-center gap-2 xs:mt-4 sm:mt-6 sm:gap-3">
            <div className="inline-flex items-center gap-1.5 rounded-lg border-2 border-white/40 bg-gradient-to-r from-smvit-primary/90 via-smvit-primaryDark/90 to-smvit-primary/90 px-3 py-1.5 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.4)] xs:gap-2 xs:rounded-xl xs:px-4 xs:py-2 sm:gap-3 sm:rounded-2xl sm:px-6 sm:py-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 text-white xs:h-5 xs:w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-display text-sm font-bold text-white xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                17th & 18th December 2026
              </span>
            </div>
            <p className="text-center text-xs font-medium text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] [text-shadow:_0_1px_4px_rgba(0,0,0,0.8),_0_2px_6px_rgba(0,0,0,0.6)] xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl px-2">
              Sir M. Visvesvaraya Institute of Technology, Bengaluru
            </p>
            <CountdownTimer variant="hero" />
          </div>
          <div className="mt-4 flex flex-col items-center gap-2.5 xs:mt-5 sm:mt-6 sm:flex-row sm:justify-center sm:gap-4 sm:mt-8">
            <motion.div whileHover={reduced ? undefined : { scale: 1.04, translateZ: 8 }} whileTap={reduced ? undefined : { scale: 0.97 }}>
              <Link
                to="/paper-submission"
                className="group relative block w-full max-w-[280px] overflow-hidden rounded-lg bg-smvit-primary px-5 py-2.5 text-xs font-semibold text-white shadow-glow-lg transition-all duration-300 hover:bg-smvit-primaryLight hover:shadow-glow-accent xs:max-w-xs xs:rounded-xl xs:px-6 xs:py-3 xs:text-sm sm:w-auto sm:px-8 sm:py-4 sm:text-base"
                style={{ transform: 'translateZ(0)' }}
              >
                <span className="relative z-10">Explore Program</span>
                <div className="absolute inset-0 bg-gradient-to-r from-smvit-accent/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              </Link>
            </motion.div>
            <motion.div whileHover={reduced ? undefined : { scale: 1.04, translateZ: 8 }} whileTap={reduced ? undefined : { scale: 0.97 }}>
              <Link
                to="/important-dates"
                className="block w-full max-w-[280px] rounded-lg border-2 border-white/30 bg-white/10 px-5 py-2.5 text-xs font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-white/20 hover:shadow-lg xs:max-w-xs xs:rounded-xl xs:px-6 xs:py-3 xs:text-sm sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                Important Dates
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroCarousel
