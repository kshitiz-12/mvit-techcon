export const CONFERENCE_FULL_NAME =
  '2026 International Conference on Future Electronics, Sustainable Computing & Intelligent Systems'

export const CONFERENCE_SHORT = 'FESCIS 2026'

export const CONFERENCE_DATES = '17th & 18th December 2026'

export const CONFERENCE_VENUE = 'Sir M. Visvesvaraya Institute of Technology, Bengaluru'

/** Conference kickoff — 17 Dec 2026, 9:00 AM IST */
export const CONFERENCE_START_ISO = '2026-12-17T09:00:00+05:30'

export const CONFERENCE_SEO_TITLE = `${CONFERENCE_SHORT} | ${CONFERENCE_FULL_NAME}`

export const conferencePageTitle = (page: string) => `${page} | ${CONFERENCE_SHORT}`

export const conferenceDescription = (detail: string) =>
  `${CONFERENCE_SHORT} — ${CONFERENCE_FULL_NAME}. ${detail}`
