import { Suspense } from 'react'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { GetWorkDoneHero } from '../../components/get-work-done-hero/GetWorkDoneHero'
import { TrustedBy } from '../../components/trusted-by/TrustedBy'
import { Testimonials } from '../../components/testimonials/Testimonials'
import { WhyWereBetter } from '../../components/why-were-better/WhyWereBetter'
import { PromoCta } from '../../components/promo-cta/PromoCta'

export default function HvacPpcAgencyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />
      <main className="flex-1">
        <Suspense>
          <GetWorkDoneHero
            heading="HVAC Google Ads That <u>Fill Your Schedule</u> and Grow Your Revenue."
            subheading="The average cost per lead on Google Ads for HVAC is over $200 — and most of that gets wasted on the wrong keywords. We specialize exclusively in home service businesses, with proven account structures, an extensive negative keyword list, and landing pages built to convert clicks into booked jobs year-round."
            sequences={[
              'Fill My Schedule With Leads',
              2000,
              'Set Up My Google Ads',
              2000,
              'Launch a Local Services Ad',
              2000,
              'Lower My Cost Per Lead',
              2000,
              'Book More AC Installations',
              2000,
              'Build a High-Converting Landing Page',
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
