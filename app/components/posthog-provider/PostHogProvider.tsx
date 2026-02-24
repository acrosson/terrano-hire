'use client'

import { useEffect } from 'react'
import posthog from 'posthog-js'

interface PostHogProviderProps {
  children: React.ReactNode
}

export function PostHogProvider({ children }: PostHogProviderProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY
      const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST

      if (posthogKey) {
        posthog.init(posthogKey, {
          api_host: posthogHost || 'https://app.posthog.com',
          loaded: (posthog) => {
            if (process.env.NODE_ENV === 'development') {
              posthog.debug()
              // Expose posthog globally for testing in browser console
              if (typeof window !== 'undefined') {
                ;(window as unknown as Window & { posthog: typeof posthog }).posthog = posthog
              }
            }
          }
        })
        // Also expose posthog immediately for testing
        if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
          ;(window as unknown as Window & { posthog: typeof posthog }).posthog = posthog
        }
      }
    }
  }, [])

  return <>{children}</>
}
