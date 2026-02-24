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

export default function VirtualAssistantPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />
      <main className="flex-1">
        <VSLHero
          preheading="Virtual Assistant Service"
          heading="Get an Virtual Assistant. Offload your Busy Work. 10x Faster & 1/5th the Cost."
          postHeading="Give us the work you don't want to do. We'll do it fast with guaranteed accuracy."
          altPreheading="AI Supercharged Virtual Assistant Service"
          altHeading="Get an AI Supercharged Virtual Assistant. Offload your Busy Work. 10x Faster & 1/5th the Cost."
          altPostHeading="Give us the work you don't want to do. We'll do it fast with AI-powered accuracy."
          videoUrl="https://terrano-ai.s3.us-east-1.amazonaws.com/prod/assets/videos/executive_assistant_vsl_720p.mp4"
          ctaText="Try For Free"
          ctaHref="https://cal.com/terrano/free-trial"
        />
        <TrustedBy />
        <Testimonials />
        <SayGoodbyeTo text="Say Goodbye To Administrative Overhead" />
        <CostInHouse />
        <WhatEADoes assistantLabel="VA" />
        <HumanMachine />
        <SupportedIntegrations assistantLabel="VA" />
        <Pricing
          assistantLabel="VA"
          corePrice={79}
          coreHours={10}
          growthPrice={129}
          growthHours={20}
          proPrice={199}
          proHours={30}
          coreCtaHref="https://buy.stripe.com/cNi7sLcnf2c5g52d8feQM00"
          growthCtaHref="https://buy.stripe.com/7sY7sLevn2c51a8ecjeQM04"
          proCtaHref="https://buy.stripe.com/7sY7sL5YR2c5bOM7NVeQM01"
        />
        <Guarantee assistantLabel="virtual assistant" />
        <HowItWorks />
        <FAQ assistantLabel="VA" />
      </main>
      <Footer />
    </div>
  )
}
