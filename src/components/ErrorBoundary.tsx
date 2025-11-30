import { Component } from 'react'
import type { ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
          <div className="max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-lg">
            <div className="mb-4 text-6xl">⚠️</div>
            <h1 className="mb-2 font-display text-2xl font-bold text-slate-900">Something went wrong</h1>
            <p className="mb-6 text-slate-600">
              We're sorry for the inconvenience. Please refresh the page or contact support if the problem persists.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="rounded-xl bg-smvit-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-smvit-primaryDark"
            >
              Refresh Page
            </button>
            <button
              onClick={() => (window.location.href = '/')}
              className="ml-3 rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition-colors hover:bg-slate-100"
            >
              Go Home
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

