'use client'

import { useEffect } from 'react'

export function HashScroll() {
  useEffect(() => {
    function scrollToHash() {
      const hash = window.location.hash
      if (hash) {
        const element = document.getElementById(hash.substring(1))
        if (element) {
          // Small delay to ensure page is fully rendered
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }, 100)
        }
      }
    }

    // Scroll on mount
    scrollToHash()

    // Also handle hash changes
    window.addEventListener('hashchange', scrollToHash)

    return () => {
      window.removeEventListener('hashchange', scrollToHash)
    }
  }, [])

  return null
}
