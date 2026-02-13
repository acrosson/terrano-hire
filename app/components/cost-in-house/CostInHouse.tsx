import { FaDollarSign } from 'react-icons/fa'
import { HiClock } from 'react-icons/hi'

export function CostInHouse() {
  return (
    <section className="w-full bg-white py-16 px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-black text-center mb-12">
          The Cost of Doing It In House
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="p-6 border border-zinc-200 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <FaDollarSign className="text-2xl text-black" />
              <h3 className="text-xl font-semibold text-black">Hiring Full-Time</h3>
            </div>
            <ul className="space-y-3 text-zinc-800">
              <li>• $50,000 - $80,000+ annual salary</li>
              <li>• Benefits and insurance costs</li>
              <li>• Office space and equipment</li>
              <li>• Training and onboarding time</li>
              <li>• Risk of turnover</li>
            </ul>
          </div>
          <div className="p-6 border border-zinc-200 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <HiClock className="text-2xl text-black" />
              <h3 className="text-xl font-semibold text-black">Your Time</h3>
            </div>
            <ul className="space-y-3 text-zinc-800">
              <li>• Hours spent on administrative tasks</li>
              <li>• Opportunity cost of your time</li>
              <li>• Stress and mental overhead</li>
              <li>• Delayed strategic work</li>
              <li>• Burnout risk</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
