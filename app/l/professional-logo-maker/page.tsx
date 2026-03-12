import { Suspense } from 'react'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { LogoHero } from '../../components/logo-hero/LogoHero'
import { TrustedBy } from '../../components/trusted-by/TrustedBy'
import { Testimonials } from '../../components/testimonials/Testimonials'
import { WhyWereBetter } from '../../components/why-were-better/WhyWereBetter'
import { PromoCta } from '../../components/promo-cta/PromoCta'

export default function ProfessionalLogoMakerPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />
      <main className="flex-1">
        <Suspense>
          <LogoHero
            heading="Professional Logo Maker. Get a Premium Logo You'll Love."
            subheading="Get a professional logo designed for your brand in 24 hours. Describe your business and our expert designers will craft a professional-quality logo you'll be proud to put on everything."
            sequences={[
              'Professional Minimalist Logo',
              2000,
              'Professional Wordmark Logo',
              2000,
              'Professional Monogram Logo',
              2000,
              'Professional Icon + Text Logo',
              2000,
              'Professional Mascot Logo',
              2000,
              'Professional Badge Logo',
              2000,
              'Professional Abstract Logo',
              2000,
              'Professional Lettermark Logo',
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
