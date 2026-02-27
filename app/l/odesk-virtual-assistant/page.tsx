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

export default function ODeskVirtualAssistantPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />
      <main className="flex-1">
        <VSLHero
          preheading="A Better Alternative to oDesk Virtual Assistants"
          heading="Beyond oDesk: Get a Dedicated Virtual Assistant. 10x Faster & $79/week."
          postHeading="No more freelancer platforms. Get a fully-managed VA that delivers guaranteed results."
          altPreheading="AI Supercharged Alternative to oDesk Virtual Assistants"
          altHeading="Beyond oDesk: Get an AI Supercharged Virtual Assistant. 10x Faster & $79/week."
          altPostHeading="No more freelancer platforms. Get a fully-managed VA with AI-powered accuracy."
          videoUrl="https://terrano-ai.s3.us-east-1.amazonaws.com/prod/assets/videos/executive_assistant_vsl_720p.mp4"
          ctaText="Try For Free"
          ctaHref="https://cal.com/terrano/free-trial"
        />
        <TrustedBy />
        <Testimonials />
        <CtaBanner
          href="/apply"
          buttonText="Get Started for Free"
          heading="Join the #1 Virtual Assistant Service"
          subtext="No contracts. Cancel anytime."
          style="blueSolid"
        />
        <SayGoodbyeTo text="Say Goodbye To Freelancer Platform Headaches" />
        <CostInHouse />
        <CtaBanner
          href="/apply"
          buttonText="Try for FREE"
          heading="Stop overpaying for admin work."
          subtext="Start your free week today — no credit card required."
          style="blackOutline"
        />
        <WhatEADoes assistantLabel="VA" />
        <HumanMachine />
        <CtaBanner
          href="/apply"
          buttonText="Get 1 Week Free Trial"
          heading="Experience the difference for yourself."
          style="dark"
        />
        <SupportedIntegrations assistantLabel="VA" />
        <Pricing
          assistantLabel="VA"
          corePrice={79}
          coreHours={10}
          growthPrice={129}
          growthHours={20}
          proPrice={199}
          proHours={30}
          coreCtaText="Get Core"
          coreCtaHref="https://buy.stripe.com/cNi7sLcnf2c5g52d8feQM00"
          growthCtaHref="https://buy.stripe.com/7sY7sLevn2c51a8ecjeQM04"
          proCtaHref="https://buy.stripe.com/7sY7sL5YR2c5bOM7NVeQM01"
          subheading="Traditional virtual assistants charge upwards of $6k per month. We're redefining virtual assistance for the modern world."
          traditionalFreeTrialHref="/apply"
          traditionalFreeTrialCtaText="Get Free Trial"
          traditionalFreeTrialSubtext="Try for one week for free."
        />
        <Guarantee assistantLabel="virtual assistant" />
        <CtaBanner
          href="/apply"
          buttonText="Get Started for Free"
          heading="No risk. All reward."
          subtext="100% satisfaction guaranteed or your money back."
          style="blueOutline"
        />
        <HowItWorks />
        <FAQ assistantLabel="VA" />
      </main>
      <Footer />
    </div>
  )
}
