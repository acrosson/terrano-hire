import Image from 'next/image'

const companyLogos = [
  { src: '/images/companies_logos/rbc_logo.png', width: 40, height: 54 },
  { src: '/images/companies_logos/polymath_logo.png', width: 80, height: 40 },
  { src: '/images/companies_logos/mudflap_logo.png', width: 120, height: 40 },
  { src: '/images/companies_logos/uber_logo.png', width: 80, height: 40 },
  { src: '/images/companies_logos/heygen_logo.png', width: 80, height: 40 },
  { src: '/images/companies_logos/kitchen_no_more_logo.png', width: 80, height: 40 },
  { src: '/images/companies_logos/food_rocket_logo.png', width: 80, height: 40 },
]

export function TrustedBy() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-16 bg-zinc-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-black text-center mb-12">
          Trusted By Operators Who&apos;ve Worked At These Companies
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {companyLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={logo.src}
                alt={`Company logo ${index + 1}`}
                width={logo.width}
                height={logo.height}
                className="object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
