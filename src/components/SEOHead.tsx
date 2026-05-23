import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  CONFERENCE_FULL_NAME,
  CONFERENCE_SHORT,
  CONFERENCE_SEO_TITLE,
  conferenceDescription,
  conferencePageTitle,
} from '../constants/conference'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
}

const pageMetadata: Record<string, SEOHeadProps> = {
  '/': {
    title: CONFERENCE_SEO_TITLE,
    description: conferenceDescription(
      '17th & 18th December 2026 at Sir M. Visvesvaraya Institute of Technology, Bengaluru. IEEE Xplore indexed.',
    ),
    keywords: 'FESCIS 2026, IEEE conference, Future Electronics, Sustainable Computing, Intelligent Systems, Bengaluru, SMVIT',
  },
  '/about-conference': {
    title: conferencePageTitle('About Conference'),
    description: conferenceDescription(
      'Learn about objectives, tracks, and highlights. Join us for this premier IEEE conference in Bengaluru.',
    ),
    keywords: 'FESCIS 2026, about conference, IEEE conference, research tracks, conference highlights',
  },
  '/paper-submission': {
    title: conferencePageTitle('Paper Submission'),
    description: conferenceDescription(
      'Submit your research papers. Learn about submission guidelines, tracks, and publication in IEEE Xplore.',
    ),
    keywords: 'paper submission, research papers, IEEE Xplore, conference submission, FESCIS 2026',
  },
  '/important-dates': {
    title: conferencePageTitle('Important Dates'),
    description: conferenceDescription(
      'Important dates and deadlines including paper submission, acceptance notification, and registration.',
    ),
    keywords: 'important dates, deadlines, paper submission deadline, registration deadline, FESCIS 2026',
  },
  '/registration': {
    title: conferencePageTitle('Registration Fees'),
    description: conferenceDescription(
      'Registration fees and payment information for participants, authors, and students.',
    ),
    keywords: 'registration fees, conference registration, payment, FESCIS 2026',
  },
  '/key-committees': {
    title: conferencePageTitle('Key Committees'),
    description: conferenceDescription(
      'Meet the organizing committee, technical program committee, and advisory board.',
    ),
    keywords: 'organizing committee, TPC, advisory board, conference committees, FESCIS 2026',
  },
  '/key-speakers': {
    title: conferencePageTitle('Key Speakers'),
    description: conferenceDescription('Renowned keynote speakers and invited speakers.'),
    keywords: 'keynote speakers, invited speakers, conference speakers, FESCIS 2026',
  },
  '/contact': {
    title: conferencePageTitle('Contact Us'),
    description: conferenceDescription(
      'Contact information for the organizing committee, TPC, and registration desk.',
    ),
    keywords: 'contact, conference contact, FESCIS 2026 contact information',
  },
}

const SEOHead = ({ title, description, keywords, image }: SEOHeadProps) => {
  const location = useLocation()
  const defaultMeta = pageMetadata[location.pathname] || pageMetadata['/']
  
  const finalTitle = title || defaultMeta.title || CONFERENCE_SHORT
  const finalDescription = description || defaultMeta.description || ''
  const finalKeywords = keywords || defaultMeta.keywords || ''
  const finalImage = image || '/SIR-LOGO.webp'

  useEffect(() => {
    document.title = finalTitle

    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name'
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    updateMetaTag('title', finalTitle)
    updateMetaTag('description', finalDescription)
    if (finalKeywords) updateMetaTag('keywords', finalKeywords)

    updateMetaTag('og:title', finalTitle, true)
    updateMetaTag('og:description', finalDescription, true)
    updateMetaTag('og:image', finalImage, true)
    updateMetaTag('og:url', window.location.href, true)

    updateMetaTag('twitter:title', finalTitle, true)
    updateMetaTag('twitter:description', finalDescription, true)
    updateMetaTag('twitter:image', finalImage, true)
  }, [location.pathname, finalTitle, finalDescription, finalKeywords, finalImage])

  useEffect(() => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: CONFERENCE_FULL_NAME,
      alternateName: CONFERENCE_SHORT,
      description: conferenceDescription(
        'Premier IEEE conference bringing together researchers, scientists, and industry experts.',
      ),
      startDate: '2026-12-17T09:00:00+05:30',
      endDate: '2026-12-18T18:00:00+05:30',
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: {
        '@type': 'Place',
        name: 'Sir M. Visvesvaraya Institute of Technology',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Krishnadevaraya Nagar, Hunasamaranahalli, International Airport Road',
          addressLocality: 'Bengaluru',
          postalCode: '562157',
          addressCountry: 'IN',
        },
      },
      organizer: {
        '@type': 'Organization',
        name: 'Sir M. Visvesvaraya Institute of Technology',
        url: 'https://www.sirmvit.edu',
      },
      image: finalImage,
      url: window.location.href,
    }

    let scriptTag = document.querySelector('script[type="application/ld+json"]')
    if (!scriptTag) {
      scriptTag = document.createElement('script')
      scriptTag.setAttribute('type', 'application/ld+json')
      document.head.appendChild(scriptTag)
    }
    scriptTag.textContent = JSON.stringify(structuredData)
  }, [finalImage])

  return null
}

export default SEOHead
