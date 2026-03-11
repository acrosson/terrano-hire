import {
  FiSearch, FiTarget, FiPhoneCall, FiFileText, FiSliders, FiBarChart2, FiMapPin, FiShield,
} from 'react-icons/fi'

const items = [
  {
    icon: FiSearch,
    title: 'Plumbing Keyword Research',
    description: 'We build your campaign around high-intent terms like "emergency plumber near me" and "drain cleaning service" — and an extensive negative keyword list that stops wasted spend on irrelevant searches.',
  },
  {
    icon: FiTarget,
    title: 'Search & Local Services Ads',
    description: 'We run both Google Search Ads and Google Local Services Ads (LSAs) so your business appears at every placement that drives calls — including the coveted "Google Guaranteed" badge.',
  },
  {
    icon: FiMapPin,
    title: 'Service-Area Campaign Structure',
    description: 'Your ads are structured by service and location so every dollar targets the right job type in the right neighbourhood. No broad match spray-and-pray.',
  },
  {
    icon: FiFileText,
    title: 'Dedicated Landing Pages',
    description: 'We build conversion-focused landing pages for each service (drain cleaning, water heaters, emergency calls) — matched to the ad so Quality Score stays high and cost-per-click stays low.',
  },
  {
    icon: FiPhoneCall,
    title: 'Call Tracking & Recording',
    description: 'Every call is tracked back to the exact keyword and ad that drove it. You always know which campaigns are filling your schedule and which need to be cut.',
  },
  {
    icon: FiSliders,
    title: 'Bid Strategy & Budget Optimisation',
    description: 'We manage bids daily — not monthly. Smart bidding strategies are layered with manual adjustments so your budget is always working hardest when demand is highest.',
  },
  {
    icon: FiBarChart2,
    title: 'Monthly Reporting',
    description: 'Plain-English reports that show leads, cost per lead, booked jobs, and ROI. No vanity metrics — just the numbers that tell you if your ad spend is making you money.',
  },
  {
    icon: FiShield,
    title: 'You Own Everything',
    description: 'Your ad account, your data, your landing pages. If you ever leave (you won\'t want to), you take it all with you. No lock-in, no hostage accounts.',
  },
]

export function PlumberWhatsIncluded() {
  return (
    <section
      className="w-full py-24 px-4"
      style={{ background: 'linear-gradient(160deg, #060d1f 0%, #0a1628 50%, #071220 100%)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#38bdf8' }}>
            What&apos;s Included
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-white mb-6">
            Everything You Need to{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #38bdf8, #34d399)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Dominate Your Market
            </span>
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#94a3b8' }}>
            Every engagement includes the full stack — no add-on fees, no surprises. Here&apos;s exactly what we build and manage for your plumbing business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="relative rounded-2xl p-7 flex flex-col gap-4 overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div
                  className="absolute -top-8 -left-8 w-32 h-32 rounded-full pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)' }}
                  aria-hidden="true"
                />
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'linear-gradient(135deg, rgba(56,189,248,0.2), rgba(52,211,153,0.15))' }}
                >
                  <Icon size={20} style={{ color: '#38bdf8' }} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>{item.description}</p>
                </div>
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
