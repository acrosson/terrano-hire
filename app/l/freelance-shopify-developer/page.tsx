import { Suspense } from 'react'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { GetWorkDoneHero } from '../../components/get-work-done-hero/GetWorkDoneHero'
import { TrustedBy } from '../../components/trusted-by/TrustedBy'
import { Testimonials } from '../../components/testimonials/Testimonials'
import { WhyWereBetter } from '../../components/why-were-better/WhyWereBetter'
import { PromoCta } from '../../components/promo-cta/PromoCta'

export default function FreelanceShopifyDeveloperPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />
      <main className="flex-1">
        <Suspense>
          <GetWorkDoneHero
            heading="Find a Freelance Shopify Developer <u>You Can Rely On</u>."
            subheading="Freelance platforms are a gamble. Ours aren't. Every Shopify developer in our network is rigorously vetted — so you get expert-level work delivered on time, without the hiring risk."
            sequences={[
              'Build My Shopify Store',
              2000,
              'Develop a Custom Theme',
              2000,
              'Build a Shopify App Integration',
              2000,
              'Migrate My Store to Shopify',
              2000,
              'Add Custom Shopify Features',
              2000,
              'Fix Bugs on My Store',
              2000,
              'Set Up My Shopify Payments',
              2000,
              'Optimize My Store Performance',
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
