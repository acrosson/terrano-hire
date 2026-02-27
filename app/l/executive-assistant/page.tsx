import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { VSLHero } from '../../components/vsl-hero/VSLHero'
import { TrustedBy } from '../../components/trusted-by/TrustedBy'
import { Testimonials } from '../../components/testimonials/Testimonials'
import { SayGoodbyeTo } from '../../components/say-goodbye-to/SayGoodbyeTo'
import { CostInHouse } from '../../components/cost-in-house/CostInHouse'
import { WhatEADoes } from '../../components/what-ea-does/WhatEADoes'
import { HumanMachine } from '../../components/human-machine/HumanMachine'
import { SupportedIntegrations } from '../../components/supported-integrations/SupportedIntegrations'
import { Pricing } from '../../components/pricing/Pricing'
import { Guarantee } from '../../components/guarantee/Guarantee'
import { HowItWorks } from '../../components/how-it-works/HowItWorks'
import { FAQ } from '../../components/faq/FAQ'
import { CtaBanner } from '../../components/cta-banner/CtaBanner'

export default function ExecutiveAssistantPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />
      <main className="flex-1">
        <VSLHero
          preheading="Executive Assistant Service"
          heading="Get an Executive Assistant. Offload your Busy Work. 10x Faster & $79/week."
          postHeading="Give us the work you don't want to do. We'll do it fast with guaranteed accuracy."
          altPreheading="AI Supercharged Executive Assistant Service"
          altHeading="Get an AI Supercharged Executive Assistant. Offload your Busy Work. 10x Faster & $79/week."
          altPostHeading="Give us the work you don't want to do. We'll do it fast with AI-powered accuracy."
          videoUrl="https://terrano-ai.s3.us-east-1.amazonaws.com/prod/assets/videos/executive_assistant_vsl_720p.mp4"
          ctaText="Try For Free"
          ctaHref="https://cal.com/terrano/free-trial"
        />
        <TrustedBy />
        <Testimonials />
        <CtaBanner
          href="/apply"
          buttonText="Get Started for Free"
          heading="Join the #1 Executive Assistant Service"
          subtext="No contracts. Cancel anytime."
          style="blueSolid"
        />
        <SayGoodbyeTo text="Say Goodbye To Overwhelming Workloads" />
        <CostInHouse />
        <CtaBanner
          href="/apply"
          buttonText="Try for FREE"
          heading="Stop overpaying for admin work."
          subtext="Start your free week today — no credit card required."
          style="blackOutline"
        />
        <WhatEADoes />
        <HumanMachine />
        <CtaBanner
          href="/apply"
          buttonText="Get 1 Week Free Trial"
          heading="Experience the difference for yourself."
          style="dark"
        />
        <SupportedIntegrations />
        <Pricing
          corePrice={79}
          coreHours={10}
          growthPrice={139}
          growthHours={20}
          proPrice={229}
          proHours={40}
          coreCtaText="Get Core"
          coreCtaHref="https://buy.stripe.com/9B600j0Exg2Vg527NVeQM06"
          growthCtaHref="https://buy.stripe.com/5kQfZhfzrg2V0644BJeQM07"
          proCtaHref="https://buy.stripe.com/cNicN59b3181g526JReQM08"
          subheading="Traditional executive assistants charge upwards of $6k per month. We're redefining executive support for the modern world."
          traditionalFreeTrialHref="/apply"
          traditionalFreeTrialCtaText="Get Free Trial"
          traditionalFreeTrialSubtext="Try for one week for free."
        />
        <Guarantee />
        <CtaBanner
          href="/apply"
          buttonText="Get Started for Free"
          heading="No risk. All reward."
          subtext="100% satisfaction guaranteed or your money back."
          style="blueOutline"
        />
        <HowItWorks />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
