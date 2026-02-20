import Image from 'next/image'
import { HiCheckCircle } from 'react-icons/hi'

interface WhatEADoesProps {
  tasks?: string[]
  assistantLabel?: string
}

const defaultTasks = [
  'Email management and filtering',
  'Calendar scheduling and coordination',
  'Travel planning and booking',
  'Research and data gathering',
  'Document preparation and formatting',
  'Customer communication',
  'Project coordination',
  'Expense tracking and reporting',
  'Social media management',
  'CRM data entry and maintenance'
]

export function WhatEADoes({ tasks = defaultTasks, assistantLabel = 'EA' }: WhatEADoesProps) {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-16">
      <div className="max-w-4xl mx-auto">
      <div className="flex justify-center mb-12">
          <Image
            src="/images/review_rating.png"
            alt="Review rating"
            width={220}
            height={48}
            className="mx-auto"
            unoptimized
          />
        </div>
        <h2 className="text-3xl font-semibold text-black text-center mb-6">
          What Your {assistantLabel} Does
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="p-4 border-l-4 border-black bg-zinc-50 rounded flex items-start gap-3"
            >
              <HiCheckCircle className="text-xl text-black flex-shrink-0 mt-0.5" />
              <p className="text-zinc-800">{task}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
