import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { VSLHero } from '../../components/vsl-hero/VSLHero'
import { CostInHouse } from '../../components/cost-in-house/CostInHouse'
import { WhatEADoes } from '../../components/what-ea-does/WhatEADoes'
import { HumanMachine } from '../../components/human-machine/HumanMachine'
import { SupportedIntegrations } from '../../components/supported-integrations/SupportedIntegrations'
import { Pricing } from '../../components/pricing/Pricing'
import { Guarantee } from '../../components/guarantee/Guarantee'
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
          videoUrl=""
          ctaText="Schedule Call"
          ctaHref="https://cal.com/crosson/30min"
        />
        <CostInHouse />
        <WhatEADoes />
        <HumanMachine />
        <SupportedIntegrations />
        <Pricing />
        <Guarantee />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
