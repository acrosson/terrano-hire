import { Suspense } from 'react'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { GetWorkDoneHero } from '../../components/get-work-done-hero/GetWorkDoneHero'
import { TrustedBy } from '../../components/trusted-by/TrustedBy'
import { Testimonials } from '../../components/testimonials/Testimonials'
import { WhyWereBetter } from '../../components/why-were-better/WhyWereBetter'
import { PromoCta } from '../../components/promo-cta/PromoCta'

export default function FreelanceGraphicDesignerPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />
      <main className="flex-1">
        <Suspense>
          <GetWorkDoneHero
            heading="Hire a Top Freelance Graphic Designer — <u>Without the Hassle</u>."
            subheading="Get stunning logos, branding, social media graphics, brochures and more — designed by vetted experts, delivered fast, at a price that makes sense."
            sequences={[
              'Design a Logo',
              2000,
              'Create a Brand Identity',
              2000,
              'Design a Brochure',
              2000,
              'Create Social Media Graphics',
              2000,
              'Design a Flyer',
              2000,
              'Create a Pitch Deck',
              2000,
              'Design a Business Card',
              2000,
              'Create Marketing Materials',
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
