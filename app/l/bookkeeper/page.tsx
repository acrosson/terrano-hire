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
import { AccountingIntegrations } from '../../components/accounting-integrations/AccountingIntegrations'
import { Pricing } from '../../components/pricing/Pricing'
import { Guarantee } from '../../components/guarantee/Guarantee'
import { HowItWorks } from '../../components/how-it-works/HowItWorks'
import { FAQ } from '../../components/faq/FAQ'
import { CtaBanner } from '../../components/cta-banner/CtaBanner'

const bookkeepingTasks = [
  'Accounts payable and receivable management',
  'Invoice creation and tracking',
  'Bank reconciliation',
  'Expense categorization and tracking',
  'Financial reporting and statements',
  'Payroll processing',
  'Tax preparation support',
  'Chart of accounts maintenance',
  'Budget tracking and analysis',
  'Cash flow management'
]

export default function BookkeeperPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />
      <main className="flex-1">
        <VSLHero
          preheading="Bookkeeper Service"
          heading="Get a Bookkeeper. Offload your Busy Work. 10x Faster. $29/week."
          postHeading="Give us the work you don't want to do. We'll do it fast with guaranteed accuracy."
          altPreheading="AI Supercharged Bookkeeper Service"
          altHeading="Get an AI Supercharged Bookkeeper. Offload your Busy Work. 10x Faster. $29/week."
          altPostHeading="Give us the work you don't want to do. We'll do it fast with AI-powered accuracy."
          videoUrl="https://terrano-ai.s3.us-east-1.amazonaws.com/prod/assets/videos/bookkeeper_vsl_720p.mp4"
          ctaText="Try For Free"
          ctaHref="https://cal.com/terrano/free-trial"
          applyHref="/apply/bookkeeper"
        />
        <TrustedBy />
        <Testimonials />
        <CtaBanner
          href="/apply/bookkeeper"
          buttonText="Get Started for Free"
          heading="Join the #1 Bookkeeping Service"
          subtext="No contracts. Cancel anytime."
          style="blueSolid"
        />
        <SayGoodbyeTo text="Say Goodbye To Bookkeeping Stress" />
        <CostInHouse />
        <CtaBanner
          href="/apply/bookkeeper"
          buttonText="Try for FREE"
          heading="Stop overpaying for bookkeeping."
          subtext="Start your free week today — no credit card required."
          style="blackOutline"
        />
        <WhatEADoes assistantLabel="Bookkeeper" tasks={bookkeepingTasks} />
        <HumanMachine />
        <CtaBanner
          href="/apply/bookkeeper"
          buttonText="Get 1 Week Free Trial"
          heading="Experience the difference for yourself."
          style="dark"
        />
        <SupportedIntegrations assistantLabel="Bookkeeper" />
        <AccountingIntegrations />
        <Pricing
          assistantLabel="Bookkeeper"
          corePrice={29}
          coreHours={5}
          growthPrice={79}
          growthHours={10}
          proPrice={139}
          proHours={20}
          coreCtaText="Get Core"
          coreCtaHref="https://buy.stripe.com/bJe14n0ExaIB2ec6JReQM02"
          growthCtaHref="https://buy.stripe.com/00w9ATbjb8At9GEb07eQM05"
          proCtaHref="https://buy.stripe.com/14AaEX72VeYRcSQecjeQM03"
          subheading="Traditional bookkeepers charge upwards of $6k per month. We're redefining bookkeeping for the modern world."
          traditionalFreeTrialHref="/apply/bookkeeper"
          traditionalFreeTrialCtaText="Get Free Trial"
          traditionalFreeTrialSubtext="Try for one week for free."
        />
        <Guarantee assistantLabel="bookkeeper" />
        <CtaBanner
          href="/apply/bookkeeper"
          buttonText="Get Started for Free"
          heading="No risk. All reward."
          subtext="100% satisfaction guaranteed or your money back."
          style="blueOutline"
        />
        <HowItWorks />
        <FAQ assistantLabel="Bookkeeper" />
      </main>
      <Footer />
    </div>
  )
}
