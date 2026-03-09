import { Suspense } from 'react'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { GetWorkDoneHero } from '../../components/get-work-done-hero/GetWorkDoneHero'
import { TrustedBy } from '../../components/trusted-by/TrustedBy'
import { Testimonials } from '../../components/testimonials/Testimonials'
import { WhyWereBetter } from '../../components/why-were-better/WhyWereBetter'
import { PromoCta } from '../../components/promo-cta/PromoCta'

export default function RoofingPpcAgencyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />
      <main className="flex-1">
        <Suspense>
          <GetWorkDoneHero
            heading="Roofing Google Ads That Turn Clicks Into <u>Booked Jobs</u>."
            subheading="Roofing is one of the most competitive and expensive verticals on Google Ads — and generic agencies don't know the difference between a repair lead and a full replacement. We specialize in home service businesses, with proven campaign structures, storm damage targeting, and landing pages built to convert high-intent searches into revenue."
            sequences={[
              'Fill My Calendar With Roofing Jobs',
              2000,
              'Set Up My Google Ads',
              2000,
              'Launch a Local Services Ad',
              2000,
              'Book More Roof Replacements',
              2000,
              'Run a Storm Damage Campaign',
              2000,
              'Lower My Cost Per Lead',
              2000,
              'Build a High-Converting Landing Page',
              2000,
              'Audit My Existing Ad Account',
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
