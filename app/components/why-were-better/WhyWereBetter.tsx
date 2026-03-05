import { FiUsers, FiClock, FiDollarSign, FiAward, FiZap, FiUserCheck } from 'react-icons/fi'

const valueProps = [
  {
    icon: FiUserCheck,
    title: 'Dedicated Account Manager',
    description:
      'From day one, you\'ll have a real, U.S.-based account manager in your corner — someone who knows your goals, manages your tasks end-to-end, and holds every worker accountable to the quality and speed you expect.',
  },
  {
    icon: FiUsers,
    title: 'Top Expert Talent',
    description:
      'We only recruit the top 1%. Every worker on our platform is rigorously vetted — screened for skill, communication, and professionalism before they ever touch your work.',
  },
  {
    icon: FiClock,
    title: 'U.S. Working Hours',
    description:
      'All of our workers operate on U.S. hours so you\'re never waiting overnight for a reply. Your dedicated account manager is available around the clock.',
  },
  {
    icon: FiDollarSign,
    title: 'Best Price',
    description:
      "We'll give you an accurate quote fast — and show you exactly how it stacks up against other platforms. Exceptional work doesn't have to cost a fortune.",
  },
  {
    icon: FiAward,
    title: 'Highest Quality',
    description:
      "We obsess over quality at every budget level. If you're not satisfied, we make it right. That's not a marketing line — it's our guarantee.",
  },
  {
    icon: FiZap,
    title: 'Fastest Turnaround',
    description:
      "We move with urgency because your time is money. From kickoff to delivery, we're relentlessly focused on helping you ship faster and grow your business.",
  },
]

export function WhyWereBetter() {
  return (
    <section
      className="w-full py-24 px-4"
      style={{ background: 'linear-gradient(160deg, #060d1f 0%, #0a1628 50%, #071220 100%)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#38bdf8' }}>
            The Difference
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-white mb-6">
            Why We&apos;re Better Than{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #38bdf8, #34d399)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Anyone Else
            </span>
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#94a3b8' }}>
            Most freelance platforms are flooded with low-skilled workers who barely speak English, take weeks to
            deliver mediocre results, and leave you chasing them down for updates. You end up spending more time
            managing people than actually growing your business. We built something entirely different — a platform
            where elite talent meets radical accountability, so you can focus on what matters.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {valueProps.map((prop, i) => {
            const Icon = prop.icon
            const isLast = i === valueProps.length - 1
            const isSecondToLast = i === valueProps.length - 2

            return (
              <div
                key={prop.title}
                className={`relative rounded-2xl p-7 flex flex-col gap-4 overflow-hidden
                  ${isLast ? 'sm:col-span-2 lg:col-span-1' : ''}
                  ${isSecondToLast && valueProps.length % 3 === 2 ? 'lg:col-start-1' : ''}
                `}
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {/* Subtle glow top-left */}
                <div
                  className="absolute -top-8 -left-8 w-32 h-32 rounded-full pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)' }}
                  aria-hidden="true"
                />

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'linear-gradient(135deg, rgba(56,189,248,0.2), rgba(52,211,153,0.15))' }}
                >
                  <Icon size={20} style={{ color: '#38bdf8' }} />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-semibold text-white">{prop.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
                    {prop.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-7 h-[2px] w-12 rounded-full"
                  style={{ background: 'linear-gradient(90deg, #38bdf8, #34d399)' }}
                  aria-hidden="true"
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
