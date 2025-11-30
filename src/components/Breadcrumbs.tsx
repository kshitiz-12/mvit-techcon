import { Link, useLocation } from 'react-router-dom'

const Breadcrumbs = () => {
  const location = useLocation()
  
  // Don't show breadcrumbs on home page
  if (location.pathname === '/') {
    return null
  }

  const pathnames = location.pathname.split('/').filter((x) => x)
  
  const routeLabels: Record<string, string> = {
    'about-conference': 'About Conference',
    'paper-submission': 'Paper Submission',
    'important-dates': 'Important Dates',
    'registration': 'Registration Fees',
    'key-committees': 'Key Committees',
    'key-speakers': 'Key Speakers',
    'contact': 'Contact',
  }

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        <li>
          <Link to="/" className="text-slate-600 hover:text-smvit-primary transition-colors">
            Home
          </Link>
        </li>
        {pathnames.map((pathname, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
          const isLast = index === pathnames.length - 1
          const label = routeLabels[pathname] || pathname

          return (
            <li key={routeTo} className="flex items-center gap-2">
              <span className="text-slate-400">/</span>
              {isLast ? (
                <span className="font-semibold text-slate-900" aria-current="page">
                  {label}
                </span>
              ) : (
                <Link to={routeTo} className="text-slate-600 hover:text-smvit-primary transition-colors">
                  {label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumbs

