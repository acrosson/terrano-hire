import { Suspense } from 'react'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { GetWorkDoneHero } from '../../components/get-work-done-hero/GetWorkDoneHero'
import { TrustedBy } from '../../components/trusted-by/TrustedBy'
import { Testimonials } from '../../components/testimonials/Testimonials'
import { WhyWereBetter } from '../../components/why-were-better/WhyWereBetter'
import { PromoCta } from '../../components/promo-cta/PromoCta'

export default function AiLogoCreatorPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />
      <main className="flex-1">
        <Suspense>
          <GetWorkDoneHero
            heading="AI Logo Creator. Generate Your Perfect Logo in Minutes."
            subheading="Describe your brand and let AI do the heavy lifting. Our AI-powered logo creator generates professional concepts instantly, then our expert designers refine them to perfection."
            placeholder="Describe your business, industry, style preferences, and any colours or ideas you have in mind..."
            sequences={[
              'Modern Minimalist Logo',
              2000,
              'Bold Wordmark Logo',
              2000,
              'Monogram Logo',
              2000,
              'Icon + Text Logo',
              2000,
              'Mascot Logo',
              2000,
              'Vintage Badge Logo',
              2000,
              'Abstract Mark Logo',
              2000,
              'Lettermark Logo',
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
