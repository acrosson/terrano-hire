import { HiCheckCircle, HiClipboardList, HiCalendar, HiSparkles } from 'react-icons/hi'

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Choose Your Plan',
      description: 'Select the plan that best fits your needs—Starter for 20 hours per week or Pro for 40 hours per week.',
      icon: HiCheckCircle
    },
    {
      number: 2,
      title: 'Submit Your Application',
      description: 'Fill out a quick application form to help us understand your business needs and requirements.',
      icon: HiClipboardList
    },
    {
      number: 3,
      title: 'Schedule Your Onboarding Call',
      description: 'Book a 1-hour onboarding call where we\'ll walk through your business, workflows, and tools together.',
      icon: HiCalendar
    },
    {
      number: 4,
      title: 'Go Live With Your Assistant',
      description: 'Start working with your dedicated assistant within 24-48 hours after your onboarding call.',
      icon: HiSparkles
    }
  ]

  return (
    <section className="w-full bg-white py-16 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-black text-center mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
                    <Icon className="text-2xl text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-sm font-semibold text-white">{step.number}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  Step {step.number} - {step.title}
                </h3>
                <p className="text-zinc-800 leading-relaxed">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
