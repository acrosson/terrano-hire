import { Suspense } from 'react'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { GetWorkDoneHero } from '../../components/get-work-done-hero/GetWorkDoneHero'
import { TrustedBy } from '../../components/trusted-by/TrustedBy'
import { Testimonials } from '../../components/testimonials/Testimonials'
import { WhyWereBetter } from '../../components/why-were-better/WhyWereBetter'
import { PromoCta } from '../../components/promo-cta/PromoCta'

export default function LogoMakerPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />
      <main className="flex-1">
        <Suspense>
          <GetWorkDoneHero
            heading="Logo Maker — Create a Professional Logo <u>You'll Love</u>."
            subheading="Make a logo for your brand in minutes. Describe your business and our expert designers will craft something you'll be proud to put on everything."
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
