import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
}

const pageMetadata: Record<string, SEOHeadProps> = {
  '/': {
    title: 'FESCIS 2026 | International Conference on Future Electronics, Sustainable Computing & Intelligent Systems',
    description: 'FESCIS 2026 - International Conference on Future Electronics, Sustainable Computing & Intelligent Systems. December 3-4, 2026 at Sir M. Visvesvaraya Institute of Technology, Bengaluru.',
    keywords: 'FESCIS 2026, IEEE conference, Future Electronics, Sustainable Computing, Intelligent Systems, Bengaluru, SMVIT',
  },
  '/about-conference': {
    title: 'About Conference | FESCIS 2026',
    description: 'Learn about FESCIS 2026 conference, its objectives, tracks, and highlights. Join us for this premier IEEE conference in Bengaluru.',
    keywords: 'FESCIS 2026, about conference, IEEE conference, research tracks, conference highlights',
  },
  '/paper-submission': {
    title: 'Paper Submission | FESCIS 2026',
    description: 'Submit your research papers to FESCIS 2026. Learn about submission guidelines, tracks, and publication in IEEE Xplore.',
    keywords: 'paper submission, research papers, IEEE Xplore, conference submission, FESCIS 2026',
  },
  '/important-dates': {
    title: 'Important Dates | FESCIS 2026',
    description: 'Important dates and deadlines for FESCIS 2026 conference including paper submission, acceptance notification, and registration dates.',
    keywords: 'important dates, deadlines, paper submission deadline, registration deadline, FESCIS 2026',
  },
  '/registration': {
    title: 'Registration Fees | FESCIS 2026',
    description: 'Registration fees and payment information for FESCIS 2026 conference participants, authors, and students.',
    keywords: 'registration fees, conference registration, payment, FESCIS 2026',
  },
  '/key-committees': {
    title: 'Key Committees | FESCIS 2026',
    description: 'Meet the organizing committee, technical program committee, and advisory board of FESCIS 2026.',
    keywords: 'organizing committee, TPC, advisory board, conference committees, FESCIS 2026',
  },
  '/key-speakers': {
    title: 'Key Speakers | FESCIS 2026',
    description: 'Renowned keynote speakers and invited speakers at FESCIS 2026 conference.',
    keywords: 'keynote speakers, invited speakers, conference speakers, FESCIS 2026',
  },
  '/contact': {
    title: 'Contact Us | FESCIS 2026',
    description: 'Contact information for FESCIS 2026 conference organizing committee, TPC, and registration desk.',
    keywords: 'contact, conference contact, FESCIS 2026 contact information',
  },
}

const SEOHead = ({ title, description, keywords, image }: SEOHeadProps) => {
  const location = useLocation()
  const defaultMeta = pageMetadata[location.pathname] || pageMetadata['/']
  
  const finalTitle = title || defaultMeta.title || 'FESCIS 2026'
  const finalDescription = description || defaultMeta.description || ''
  const finalKeywords = keywords || defaultMeta.keywords || ''
  const finalImage = image || '/SIR-LOGO.webp'

  useEffect(() => {
    // Update document title
    document.title = finalTitle

    // Update or create meta tags
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

    // Update primary meta tags
    updateMetaTag('title', finalTitle)
    updateMetaTag('description', finalDescription)
    if (finalKeywords) updateMetaTag('keywords', finalKeywords)

    // Update Open Graph tags
    updateMetaTag('og:title', finalTitle, true)
    updateMetaTag('og:description', finalDescription, true)
    updateMetaTag('og:image', finalImage, true)
    updateMetaTag('og:url', window.location.href, true)

    // Update Twitter Card tags
    updateMetaTag('twitter:title', finalTitle, true)
    updateMetaTag('twitter:description', finalDescription, true)
    updateMetaTag('twitter:image', finalImage, true)
  }, [location.pathname, finalTitle, finalDescription, finalKeywords, finalImage])

  // Add structured data for the event
  useEffect(() => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: 'FESCIS 2026 - International Conference on Future Electronics, Sustainable Computing & Intelligent Systems',
      description: 'Premier IEEE conference bringing together researchers, scientists, and industry experts in intelligent computing and information technology.',
      startDate: '2026-12-03T09:00:00+05:30',
      endDate: '2026-12-04T18:00:00+05:30',
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

