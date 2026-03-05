import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { GetWorkDoneHero } from '../../components/get-work-done-hero/GetWorkDoneHero'
import { TrustedBy } from '../../components/trusted-by/TrustedBy'
import { Testimonials } from '../../components/testimonials/Testimonials'
import { WhyWereBetter } from '../../components/why-were-better/WhyWereBetter'
import { PromoCta } from '../../components/promo-cta/PromoCta'

export default function GetWorkDonePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />
      <main className="flex-1">
        <GetWorkDoneHero />
        <TrustedBy />
        <Testimonials />
        <WhyWereBetter />
        <PromoCta href="/apply" />
      </main>
      <Footer />
    </div>
  )
}
