import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { VSLHero } from '../../components/vsl-hero/VSLHero'
import { TrustedBy } from '../../components/trusted-by/TrustedBy'
import { SayGoodbyeTo } from '../../components/say-goodbye-to/SayGoodbyeTo'
import { CostInHouse } from '../../components/cost-in-house/CostInHouse'
import { WhatEADoes } from '../../components/what-ea-does/WhatEADoes'
import { HumanMachine } from '../../components/human-machine/HumanMachine'
import { SupportedIntegrations } from '../../components/supported-integrations/SupportedIntegrations'
import { Pricing } from '../../components/pricing/Pricing'
import { Guarantee } from '../../components/guarantee/Guarantee'
import { HowItWorks } from '../../components/how-it-works/HowItWorks'
import { FAQ } from '../../components/faq/FAQ'

export default function ExecutiveAssistantPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />
      <main className="flex-1">
        <VSLHero
          preheading="Executive Assistant Service"
          heading="Get an Executive Assistant. Offload your Busy Work. Save Money."
          postHeading="Give us the work you don't want to do. We'll do it fast with guaranteed accuracy."
          videoUrl="https://terrano-ai.s3.us-east-1.amazonaws.com/prod/assets/videos/executive_assistant_vsl_720p.mp4"
          ctaText="Get My Assistant"
          ctaHref="#pricing"
        />
        <TrustedBy />
        <SayGoodbyeTo text="Say Goodbye To Overwhelming Workloads" />
        <CostInHouse />
        <WhatEADoes />
        <HumanMachine />
        <SupportedIntegrations />
        <Pricing
          corePrice={79}
          coreHours={10}
          growthPrice={139}
          growthHours={20}
          proPrice={229}
          proHours={40}
          coreCtaHref="https://buy.stripe.com/9B600j0Exg2Vg527NVeQM06"
          growthCtaHref="https://buy.stripe.com/5kQfZhfzrg2V0644BJeQM07"
          proCtaHref="https://buy.stripe.com/cNicN59b3181g526JReQM08"
        />
        <Guarantee />
        <HowItWorks />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
