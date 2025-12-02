import MotionSection from '../components/MotionSection'

const KeySpeakers = () => {
  return (
    <div className="space-y-6 xs:space-y-8 sm:space-y-10 md:space-y-12">
      <MotionSection className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-[0_25px_80px_rgba(15,61,145,0.08)] xs:rounded-3xl xs:p-6 sm:rounded-[32px] sm:p-8 md:p-10">
        <p className="eyebrow text-[10px] xs:text-xs">Key Speakers</p>
        <h1 className="mt-3 font-display text-2xl text-slate-900 xs:mt-4 xs:text-3xl sm:text-4xl">Voices shaping the future of resilient technology.</h1>
        <p className="mt-4 text-sm text-slate-600 xs:mt-5 xs:text-base sm:text-lg">
          FESCIS curates cross-sector leaders who blend research depth with deployment experience. The 2026 line-up bridges
          public infrastructure, advanced communications, and responsible automation.
        </p>
      </MotionSection>

      <MotionSection className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-center xs:rounded-3xl xs:p-5 sm:p-6 md:p-8">
        <p className="text-xs uppercase tracking-[0.3em] text-smvit-accent xs:text-sm xs:tracking-[0.4em]">Announcement</p>
        <h3 className="mt-3 font-display text-2xl text-slate-900 xs:mt-4 xs:text-3xl">Key speakers to be announced.</h3>
        <p className="mt-2 text-sm text-slate-600 xs:mt-3 xs:text-base">
          Stay tuned for the official reveal of the keynote roster. We are finalizing collaborations with visionary leaders across academia,
          government, and industry.
        </p>
      </MotionSection>

      <MotionSection className="rounded-2xl border border-slate-200 bg-white/80 p-4 xs:rounded-3xl xs:p-5 sm:p-6">
        <h3 className="text-lg font-semibold text-slate-900 xs:text-xl">Speaker nominations</h3>
        <p className="mt-2 text-xs text-slate-600 xs:mt-3 xs:text-sm">
          Recommend visionary speakers or alumni innovators via <a href="mailto:speakers@sirsmvit.edu" className="font-semibold text-smvit-primary underline">speakers@sirsmvit.edu</a>.
          Please include the proposed topic, short bio, and how the session aligns with the conference themes.
        </p>
      </MotionSection>
    </div>
  )
}

export default KeySpeakers

