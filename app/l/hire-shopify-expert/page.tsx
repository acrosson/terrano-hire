import { Suspense } from 'react'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { GetWorkDoneHero } from '../../components/get-work-done-hero/GetWorkDoneHero'
import { TrustedBy } from '../../components/trusted-by/TrustedBy'
import { Testimonials } from '../../components/testimonials/Testimonials'
import { WhyWereBetter } from '../../components/why-were-better/WhyWereBetter'
import { PromoCta } from '../../components/promo-cta/PromoCta'

export default function HireShopifyExpertPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />
      <main className="flex-1">
        <Suspense>
          <GetWorkDoneHero
            heading="Hire a Shopify Expert Who's <u>Done This Before</u>."
            subheading="You don't need a generalist — you need someone who lives and breathes Shopify. Our vetted experts have solved the exact problems you're facing and will get your store performing at its best."
            sequences={[
              'Audit My Shopify Store',
              2000,
              'Boost My Conversion Rate',
              2000,
              'Set Up Shopify Markets',
              2000,
              'Optimize My Product Pages',
              2000,
              'Fix My Checkout Flow',
              2000,
              'Set Up Shopify Analytics',
              2000,
              'Create a Custom Shopify Theme',
              2000,
              'Improve My Store UX',
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
