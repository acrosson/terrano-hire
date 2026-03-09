import { Suspense } from 'react'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { GetWorkDoneHero } from '../../components/get-work-done-hero/GetWorkDoneHero'
import { TrustedBy } from '../../components/trusted-by/TrustedBy'
import { Testimonials } from '../../components/testimonials/Testimonials'
import { WhyWereBetter } from '../../components/why-were-better/WhyWereBetter'
import { PromoCta } from '../../components/promo-cta/PromoCta'

export default function HireWebDesignerPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />
      <main className="flex-1">
        <Suspense>
          <GetWorkDoneHero
            heading="Hire a Top Web Designer — <u>Without the Hiring Headache</u>."
            subheading="Skip the job boards, the endless interviews, and the overpriced agencies. Our vetted web designers are ready to build something great for your business — fast, on budget, and exactly how you want it."
            sequences={[
              'Design a Landing Page',
              2000,
              'Build My Business Website',
              2000,
              'Redesign My Homepage',
              2000,
              'Create a Portfolio Site',
              2000,
              'Design an E-Commerce Store',
              2000,
              'Build a Pricing Page',
              2000,
              'Create a Sales Funnel',
              2000,
              'Design My Web App UI',
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
