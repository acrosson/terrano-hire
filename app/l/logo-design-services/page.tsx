import { Suspense } from 'react'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { GetWorkDoneHero } from '../../components/get-work-done-hero/GetWorkDoneHero'
import { TrustedBy } from '../../components/trusted-by/TrustedBy'
import { Testimonials } from '../../components/testimonials/Testimonials'
import { WhyWereBetter } from '../../components/why-were-better/WhyWereBetter'
import { PromoCta } from '../../components/promo-cta/PromoCta'

export default function LogoDesignServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />
      <main className="flex-1">
        <Suspense>
          <GetWorkDoneHero
            heading="Logo Design Services. Custom Logos <u>Crafted by Experts</u>."
            subheading="Get custom logo design services from vetted expert designers. Describe your brand and receive a unique, high-quality logo tailored to your business."
            placeholder="Describe your business, industry, style preferences, and any colours or ideas you have in mind..."
            sequences={[
              'Custom Logo Design',
              2000,
              'Brand Identity Design',
              2000,
              'Wordmark Logo Design',
              2000,
              'Icon Logo Design',
              2000,
              'Monogram Logo Design',
              2000,
              'Mascot Logo Design',
              2000,
              'Vintage Logo Design',
              2000,
              'Modern Logo Design',
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
