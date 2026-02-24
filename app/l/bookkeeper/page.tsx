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
          heading="Get a Bookkeeper. Offload your Busy Work. 10x Faster & 1/5th the Cost."
          postHeading="Give us the work you don't want to do. We'll do it fast with guaranteed accuracy."
          altPreheading="AI Supercharged Bookkeeper Service"
          altHeading="Get an AI Supercharged Bookkeeper. Offload your Busy Work. 10x Faster & 1/5th the Cost."
          altPostHeading="Give us the work you don't want to do. We'll do it fast with AI-powered accuracy."
          videoUrl="https://terrano-ai.s3.us-east-1.amazonaws.com/prod/assets/videos/bookkeeper_vsl_720p.mp4"
          ctaText="Try For Free"
          ctaHref="https://cal.com/terrano/free-trial"
        />
        <TrustedBy />
        <Testimonials />
        <SayGoodbyeTo text="Say Goodbye To Bookkeeping Stress" />
        <CostInHouse />
        <WhatEADoes assistantLabel="Bookkeeper" tasks={bookkeepingTasks} />
        <HumanMachine />
        <SupportedIntegrations assistantLabel="Bookkeeper" />
        <AccountingIntegrations />
        <Pricing
          assistantLabel="Bookkeeper"
          corePrice={49}
          coreHours={5}
          growthPrice={79}
          growthHours={10}
          proPrice={139}
          proHours={20}
          coreCtaHref="https://buy.stripe.com/bJe14n0ExaIB2ec6JReQM02"
          growthCtaHref="https://buy.stripe.com/00w9ATbjb8At9GEb07eQM05"
          proCtaHref="https://buy.stripe.com/14AaEX72VeYRcSQecjeQM03"
        />
        <Guarantee assistantLabel="bookkeeper" />
        <HowItWorks />
        <FAQ assistantLabel="Bookkeeper" />
      </main>
      <Footer />
    </div>
  )
}
