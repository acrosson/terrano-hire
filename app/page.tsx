import { Suspense } from 'react'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { GetWorkDoneHero } from './components/get-work-done-hero/GetWorkDoneHero'
import { TrustedBy } from './components/trusted-by/TrustedBy'
import { Testimonials } from './components/testimonials/Testimonials'
import { WhyWereBetter } from './components/why-were-better/WhyWereBetter'
import { PromoCta } from './components/promo-cta/PromoCta'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />
      <main className="flex-1">
        <Suspense>
          <GetWorkDoneHero
            heading="Launch and Grow Your Brand. Ads and Design Done Right."
            subheading="From logos and branding to ads and web design, our expert team delivers everything you need to market your business."
          />
        </Suspense>
        <TrustedBy />
        <Testimonials />
        <WhyWereBetter />
        <PromoCta />
      </main>
      <Footer />
    </div>
  )
}
