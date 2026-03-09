import { Suspense } from 'react'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { GetWorkDoneHero } from '../../components/get-work-done-hero/GetWorkDoneHero'
import { TrustedBy } from '../../components/trusted-by/TrustedBy'
import { Testimonials } from '../../components/testimonials/Testimonials'
import { WhyWereBetter } from '../../components/why-were-better/WhyWereBetter'
import { PromoCta } from '../../components/promo-cta/PromoCta'

export default function PlumberPpcAgencyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />
      <main className="flex-1">
        <Suspense>
          <GetWorkDoneHero
            heading="Plumber Google Ads That Drive <u>Real Calls and Booked Jobs</u>."
            subheading="Most agencies don't know the plumbing industry — they're guessing at keywords and burning your budget. We specialize in home service businesses, with a proven account structure, an extensive negative keyword list, and conversion-focused landing pages that turn high-intent searches into paying customers."
            sequences={[
              'Fill My Schedule With Leads',
              2000,
              'Set Up My Google Ads',
              2000,
              'Launch a Local Services Ad',
              2000,
              'Lower My Cost Per Lead',
              2000,
              'Build a High-Converting Landing Page',
              2000,
              'Set Up Call Tracking',
              2000,
              'Audit My Existing Ad Account',
              2000,
              'Scale My Ad Spend Profitably',
              2000,
            ]}
          />
        </Suspense>
        <TrustedBy />
        <Testimonials showVideos={false} />
        <WhyWereBetter />
        <PromoCta />
      </main>
      <Footer />
    </div>
  )
}
