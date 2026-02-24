import Image from 'next/image'

export function HumanMachine() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="relative w-full min-h-[320px]">
            <Image
              src="/images/part_human_part_machine.jpg"
              alt="Human and technology working together"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-black sm:text-5xl">
              Human when you need it. Technology when you don&apos;t.
            </h2>
            <p className="text-lg leading-8 text-zinc-800">
              You get the human touch where it matters — and AI speed where it counts.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
