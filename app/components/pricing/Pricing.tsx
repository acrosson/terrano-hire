import { Button } from '../button/Button'
import { FaDollarSign } from 'react-icons/fa'
import { HiCheckCircle } from 'react-icons/hi'

interface Plan {
  name: string
  price: number
  hours: number
  ctaText?: string
  ctaHref?: string
}

interface PricingProps {
  corePrice?: number
  coreHours?: number
  growthPrice?: number
  growthHours?: number
  proPrice?: number
  proHours?: number
  normalEAPrice?: number
  coreCtaText?: string
  growthCtaText?: string
  proCtaText?: string
  coreCtaHref?: string
  growthCtaHref?: string
  proCtaHref?: string
  assistantLabel?: string
}

export function Pricing({
  corePrice = 49,
  coreHours = 5,
  growthPrice = 79,
  growthHours = 10,
  proPrice = 229,
  proHours = 40,
  normalEAPrice = 5998,
  coreCtaText = 'Get Core',
  growthCtaText = 'Get Growth',
  proCtaText = 'Get Pro',
  coreCtaHref = 'https://buy.stripe.com/cNi7sLcnf2c5g52d8feQM00',
  growthCtaHref = 'https://buy.stripe.com/7sY7sL5YR2c5bOM7NVeQM01',
  proCtaHref = 'https://buy.stripe.com/7sY7sL5YR2c5bOM7NVeQM01',
  assistantLabel = 'EA',
}: PricingProps) {
  const plans: Plan[] = [
    {
      name: 'Core',
      price: corePrice,
      hours: coreHours,
      ctaText: coreCtaText,
      ctaHref: coreCtaHref
    },
    {
      name: 'Growth',
      price: growthPrice,
      hours: growthHours,
      ctaText: growthCtaText,
      ctaHref: growthCtaHref
    },
    {
      name: 'Pro',
      price: proPrice,
      hours: proHours,
      ctaText: proCtaText,
      ctaHref: proCtaHref
    }
  ]

  const calculateSavings = (price: number) => {
    const savings = Math.round((normalEAPrice / 4.3) - price)
    const savingsPercentage = Math.round((savings / (normalEAPrice / 4.3)) * 100)
    return { savings, savingsPercentage }
  }

  return (
    <section className="w-full bg-white py-16 px-4 md:px-16">
      <div className="max-w-6xl mx-auto" id="pricing">
        <h2 className="text-3xl font-semibold text-black text-center mb-12">
          Pricing
        </h2>
        <div className="grid gap-8 md:grid-cols-4">
          <div className="p-8 border-2 border-zinc-300 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <FaDollarSign className="text-xl text-zinc-600" />
              <h3 className="text-xl font-semibold text-zinc-600">Traditional {assistantLabel}</h3>
            </div>
            <p className="text-4xl font-bold text-black mb-4">
              <span className="line-through">${normalEAPrice.toLocaleString()}</span>
              <span className="text-lg font-normal text-zinc-600">/month</span>
            </p>
            <ul className="space-y-2 text-zinc-800 mb-6">
              <li>• Full-time employee costs</li>
              <li>• Benefits and overhead</li>
              <li>• Office space required</li>
            </ul>
          </div>
          {plans.map((plan, index) => {
            const { savings, savingsPercentage } = calculateSavings(plan.price)
            const isPro = plan.name === 'Pro'
            return (
              <div
                key={plan.name}
                className={`p-8 border-2 rounded-lg ${isPro ? 'border-blue-500 bg-zinc-50' : 'border-zinc-300'}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <FaDollarSign className={`text-xl ${isPro ? 'text-black' : 'text-zinc-600'}`} />
                  <h3 className={`text-xl font-semibold ${isPro ? 'text-black' : 'text-zinc-600'}`}>
                    Terrano {assistantLabel} - {plan.name}
                  </h3>
                </div>
                <p className={`text-4xl font-bold mb-2 ${isPro ? 'text-black' : 'text-zinc-800'}`}>
                  ${plan.price.toLocaleString()}
                  <span className="text-lg font-normal text-zinc-600">/week</span>
                </p>
                <p className="text-base text-zinc-700 mb-4">
                  {plan.hours} Hours/Week
                </p>
                {isPro && (
                  <>
                    <div className="flex items-center gap-2 mb-4">
                      <HiCheckCircle className="text-xl text-black" />
                      <p className="text-lg font-semibold text-black">
                        Save ${savings.toLocaleString()}/week ({savingsPercentage}% less)
                      </p>
                    </div>
                    <p className="text-sm text-zinc-700 mb-6">
                      That's 1/5 the price of a normal {assistantLabel}
                    </p>
                  </>
                )}
                <Button href={plan.ctaHref || '#'}>
                  {plan.ctaText || `Get ${plan.name}`}
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
