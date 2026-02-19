import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { VSLHero } from '../../components/vsl-hero/VSLHero'
import { SayGoodbyeTo } from '../../components/say-goodbye-to/SayGoodbyeTo'
import { CostInHouse } from '../../components/cost-in-house/CostInHouse'
import { WhatEADoes } from '../../components/what-ea-does/WhatEADoes'
import { HumanMachine } from '../../components/human-machine/HumanMachine'
import { SupportedIntegrations } from '../../components/supported-integrations/SupportedIntegrations'
import { Pricing } from '../../components/pricing/Pricing'
import { Guarantee } from '../../components/guarantee/Guarantee'
import { HowItWorks } from '../../components/how-it-works/HowItWorks'
import { FAQ } from '../../components/faq/FAQ'

export default function OfficeAdministratorPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />
      <main className="flex-1">
        <VSLHero
          preheading="Office Administrator Service"
          heading="Get an Office Administrator. Offload your Busy Work. Save Money."
          postHeading="Give us the work you don't want to do. We'll do it fast with guaranteed accuracy."
          videoUrl="https://terrano-ai.s3.us-east-1.amazonaws.com/prod/assets/videos/executive_assistant_vsl_720p.mp4"
          ctaText="Get My Office Admin"
          ctaHref="#pricing"
        />
        <SayGoodbyeTo text="Say Goodbye To Office Chaos" />
        <CostInHouse />
        <WhatEADoes assistantLabel="OA" />
        <HumanMachine />
        <SupportedIntegrations assistantLabel="OA" />
        <Pricing
          assistantLabel="OA"
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
        <Guarantee assistantLabel="office administrator" />
        <HowItWorks />
        <FAQ assistantLabel="OA" />
      </main>
      <Footer />
    </div>
  )
}
