import { Button } from '../button/Button'
import { FaDollarSign } from 'react-icons/fa'
import { HiCheckCircle } from 'react-icons/hi'

interface PricingProps {
  starterPrice?: number
  proPrice?: number
  normalEAPrice?: number
  starterCtaText?: string
  proCtaText?: string
  starterCtaHref?: string
  proCtaHref?: string
  assistantLabel?: string
}

export function Pricing({
  starterPrice = 169,
  proPrice = 279,
  normalEAPrice = 5998,
  starterCtaText = 'Get Starter',
  proCtaText = 'Get Pro',
  starterCtaHref = 'https://buy.stripe.com/cNi7sLcnf2c5g52d8feQM00',
  proCtaHref = 'https://buy.stripe.com/7sY7sL5YR2c5bOM7NVeQM01',
  assistantLabel = 'EA',
}: PricingProps) {
  const starterSavings = Math.round((normalEAPrice / 4.3) - starterPrice)
  const starterSavingsPercentage = Math.round((starterSavings / (normalEAPrice / 4.3)) * 100)
  const proSavings = Math.round((normalEAPrice / 4.3) - proPrice)
  const proSavingsPercentage = Math.round((proSavings / (normalEAPrice / 4.3)) * 100)

  return (
    <section className="w-full bg-white py-16 px-4 md:px-16">
      <div className="max-w-6xl mx-auto" id="pricing">
        <h2 className="text-3xl font-semibold text-black text-center mb-12">
          Pricing
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
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
          <div className="p-8 border-2 border-blue-500 rounded-lg bg-zinc-50">
            <div className="flex items-center gap-2 mb-2">
              <FaDollarSign className="text-xl text-black" />
              <h3 className="text-xl font-semibold text-black">Terrano {assistantLabel} - Starter</h3>
            </div>
            <p className="text-4xl font-bold text-black mb-2">
              ${starterPrice.toLocaleString()}
              <span className="text-lg font-normal text-zinc-600">/week</span>
            </p>
            <p className="text-base text-zinc-700 mb-4">
              20 Hours/Week
            </p>
            <div className="flex items-center gap-2 mb-4">
              <HiCheckCircle className="text-xl text-black" />
              <p className="text-lg font-semibold text-black">
                Save ${starterSavings.toLocaleString()}/week ({starterSavingsPercentage}% less)
              </p>
            </div>
            <p className="text-sm text-zinc-700 mb-6">
              That's 1/5 the price of a normal {assistantLabel}
            </p>
            <Button href={starterCtaHref}>
              {starterCtaText}
            </Button>
          </div>
          <div className="p-8 border-2 border-blue-500 rounded-lg bg-zinc-50">
            <div className="flex items-center gap-2 mb-2">
              <FaDollarSign className="text-xl text-black" />
              <h3 className="text-xl font-semibold text-black">Terrano {assistantLabel} - Pro</h3>
            </div>
            <p className="text-4xl font-bold text-black mb-2">
              ${proPrice.toLocaleString()}
              <span className="text-lg font-normal text-zinc-600">/week</span>
            </p>
            <p className="text-base text-zinc-700 mb-4">
              40 Hours/Week
            </p>
            <div className="flex items-center gap-2 mb-4">
              <HiCheckCircle className="text-xl text-black" />
              <p className="text-lg font-semibold text-black">
                Save ${proSavings.toLocaleString()}/week ({proSavingsPercentage}% less)
              </p>
            </div>
            <p className="text-sm text-zinc-700 mb-6">
              That's 1/5 the price of a normal {assistantLabel}
            </p>
            <Button href={proCtaHref}>
              {proCtaText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
