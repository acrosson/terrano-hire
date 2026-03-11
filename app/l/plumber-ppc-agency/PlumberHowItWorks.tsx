import { FiClipboard, FiCpu, FiZap, FiTrendingUp } from 'react-icons/fi'

const steps = [
  {
    number: 1,
    icon: FiClipboard,
    title: 'Free Account Audit',
    description: "We start by auditing your existing Google Ads account (or your competitors' if you're starting fresh). We identify wasted spend, missing keywords, and quick wins — at no cost.",
  },
  {
    number: 2,
    icon: FiCpu,
    title: 'Strategy & Build',
    description: 'We build your campaign from the ground up: keyword research, ad copy, campaign structure, negative keyword list, and a dedicated landing page tailored to your services and service area.',
  },
  {
    number: 3,
    icon: FiZap,
    title: 'Launch & Optimise',
    description: "Campaigns go live and we monitor them daily — adjusting bids, pausing underperformers, and testing new ad variations. You'll start seeing calls within the first week.",
  },
  {
    number: 4,
    icon: FiTrendingUp,
    title: 'Scale What Works',
    description: "Once we've identified the keywords and ads driving the best jobs, we scale spend on winners and reinvest savings from losers. Your cost per booked job keeps dropping as the account matures.",
  },
]

export function PlumberHowItWorks() {
  return (
    <section className="w-full bg-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-zinc-400">
            The Process
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-zinc-900">
            How We Get You{' '}
            <span className="text-zinc-400">More Calls</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connecting line — desktop only */}
          <div
            className="hidden lg:block absolute top-[28px] left-[calc(12.5%+22px)] right-[calc(12.5%+22px)] h-[2px]"
            style={{ background: 'linear-gradient(90deg, #e4e4e7, #e4e4e7)' }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="flex flex-col gap-5">
                  {/* Icon + number */}
                  <div className="relative flex items-center gap-4 lg:flex-col lg:items-start">
                    <div className="relative shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center">
                        <Icon size={22} className="text-white" />
                      </div>
                      <div
                        className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                        style={{ background: 'linear-gradient(135deg, #38bdf8, #34d399)' }}
                      >
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold text-zinc-900">{step.title}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
