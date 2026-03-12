import { Suspense } from 'react'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { LogoHero } from '../../components/logo-hero/LogoHero'
import { TrustedBy } from '../../components/trusted-by/TrustedBy'
import { Testimonials } from '../../components/testimonials/Testimonials'
import { WhyWereBetter } from '../../components/why-were-better/WhyWereBetter'
import { PromoCta } from '../../components/promo-cta/PromoCta'

export default function ConstructionLogoMakerPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />
      <main className="flex-1">
        <Suspense>
          <LogoHero
            heading="Construction Logo Maker. Build a Brand <u>That Stands Out</u>."
            subheading="Create a professional logo for your construction, contracting, or trades business. Describe your company and our expert designers will craft a logo that builds trust and wins jobs."
            backgroundImage="/images/hero_construction_man.jpeg"
            sequences={[
              'General Contractor Logo',
              2000,
              'Roofing Company Logo',
              2000,
              'Plumbing Business Logo',
              2000,
              'Electrical Contractor Logo',
              2000,
              'HVAC Company Logo',
              2000,
              'Landscaping Business Logo',
              2000,
              'Home Builder Logo',
              2000,
              'Renovation Company Logo',
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
