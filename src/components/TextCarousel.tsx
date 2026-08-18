const TextCarousel = () => {
  return (
    <section
      aria-label="Registration statistics"
      className="relative z-20 shrink-0 border-y border-smvit-primary/10 bg-gradient-to-r from-smvit-primary via-smvit-primaryDark to-smvit-primary py-2.5 shadow-[0_8px_32px_rgba(11,61,145,0.15)] sm:py-3"
    >
      <div className="flex items-center justify-center px-4">
        <div className="flex items-center gap-3 sm:gap-5">

          {/* Live indicator */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400"></span>
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 sm:text-xs">
              Live Update
            </span>
          </div>

          {/* Divider */}
          <span className="h-5 w-px bg-white/20" />

          {/* Main statistic */}
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-extrabold tracking-tight text-white sm:text-xl">
              1000+
            </span>

            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80 sm:text-xs">
              Papers Submitted
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}

export default TextCarousel