'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Header } from '../components/header/Header'
import { Footer } from '../components/footer/Footer'
import { Button } from '../components/button/Button'
import Image from 'next/image'

declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

export default function SchedulePage() {
  const searchParams = useSearchParams()
  const serviceType = searchParams.get('service_type')
  const calUrl = serviceType
    ? `https://cal.com/terrano/onboarding?service_type=${encodeURIComponent(serviceType)}`
    : 'https://cal.com/terrano/onboarding'

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      // Extract session_id from URL query parameters (from Stripe payment link)
      const urlParams = new URLSearchParams(window.location.search)
      const sessionId = urlParams.get('session_id') || ''
      
      window.gtag('event', 'conversion', {
        'send_to': 'AW-16979578926/jzBwCIyJ7_obEK6gv6A_',
        'value': 1.0,
        'currency': 'USD',
        'transaction_id': sessionId
      })
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-semibold text-black mb-6">
              Awesome! Now Schedule Your Onboarding Call
            </h1>
            <div className="space-y-4 mb-8">
              <p className="text-lg text-zinc-800 leading-relaxed">
                The onboarding call may take up to 30 minutes to complete. During this call, we will ask you to walk through your business, workflows, and tools.
              </p>
              <p className="text-lg text-zinc-800 leading-relaxed">
                This comprehensive discussion helps us understand your unique needs and ensures we can match you with the perfect assistant who will seamlessly integrate into your operations.
              </p>
            </div>
            <Button href={calUrl}>
              Schedule Onboarding Call
            </Button>
          </div>
          <div className="relative w-full min-h-[400px]">
            <Image
              src="/images/part_human_part_machine.jpg"
              alt="Onboarding call"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
