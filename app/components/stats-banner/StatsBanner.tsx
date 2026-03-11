interface Stat {
  value: string
  label: string
}

interface StatsBannerProps {
  stats?: Stat[]
}

const defaultStats: Stat[] = [
  { value: 'Top 1%', label: 'Vetted Talent Only' },
  { value: '< 48hrs', label: 'Time to Get Matched' },
  { value: 'U.S. Hours', label: 'All Experts Work' },
  { value: '100%', label: 'Satisfaction Guaranteed' },
]

export function StatsBanner({ stats = defaultStats }: StatsBannerProps) {
  return (
    <section className="w-full border-y border-zinc-100 bg-white py-10 px-4 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center text-center gap-1">
            <span className="text-3xl font-bold text-zinc-900">{stat.value}</span>
            <span className="text-sm text-zinc-500">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
