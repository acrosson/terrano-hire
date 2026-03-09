import { Suspense } from 'react'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { GetWorkDoneHero } from '../../components/get-work-done-hero/GetWorkDoneHero'
import { TrustedBy } from '../../components/trusted-by/TrustedBy'
import { Testimonials } from '../../components/testimonials/Testimonials'
import { WhyWereBetter } from '../../components/why-were-better/WhyWereBetter'
import { PromoCta } from '../../components/promo-cta/PromoCta'

export default function HireShopifyDeveloperPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />
      <main className="flex-1">
        <Suspense>
          <GetWorkDoneHero
            heading="Hire a Shopify Developer Who <u>Knows What They're Doing</u>."
            subheading="Stop wasting time on developers who overpromise and underdeliver. Our vetted Shopify experts build, fix, and scale your store — fast, on budget, and without the back-and-forth."
            sequences={[
              'Build My Shopify Store',
              2000,
              'Customize My Shopify Theme',
              2000,
              'Integrate a Shopify App',
              2000,
              'Fix My Shopify Store',
              2000,
              'Optimize My Store Speed',
              2000,
              'Set Up My Checkout Flow',
              2000,
              'Migrate to Shopify',
              2000,
              'Build a Custom Shopify Feature',
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
