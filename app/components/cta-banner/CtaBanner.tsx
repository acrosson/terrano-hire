import { Button } from '../button/Button'

type CtaBannerStyle = 'blueSolid' | 'blackOutline' | 'dark' | 'blueOutline'

interface CtaBannerProps {
  href: string
  buttonText: string
  heading: string
  subtext?: string
  style?: CtaBannerStyle
}

const bgStyles: Record<CtaBannerStyle, string> = {
  blueSolid: 'bg-[#e9f1ff]',
  blackOutline: 'bg-white border-y border-zinc-200',
  dark: 'bg-black',
  blueOutline: 'bg-zinc-50'
}

const headingStyles: Record<CtaBannerStyle, string> = {
  blueSolid: 'text-black',
  blackOutline: 'text-black',
  dark: 'text-white',
  blueOutline: 'text-black'
}

const subtextStyles: Record<CtaBannerStyle, string> = {
  blueSolid: 'text-zinc-600',
  blackOutline: 'text-zinc-600',
  dark: 'text-zinc-400',
  blueOutline: 'text-zinc-600'
}

const buttonVariants: Record<CtaBannerStyle, 'primary' | 'secondary' | 'blue' | 'blueOutline'> = {
  blueSolid: 'blue',
  blackOutline: 'secondary',
  dark: 'secondary',
  blueOutline: 'blueOutline'
}

export function CtaBanner({
  href,
  buttonText,
  heading,
  subtext,
  style = 'blueSolid'
}: CtaBannerProps) {
  return (
    <section className={`w-full py-14 px-4 md:px-16 ${bgStyles[style]}`}>
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-4">
        <h2 className={`text-2xl md:text-3xl font-semibold ${headingStyles[style]}`}>
          {heading}
        </h2>
        {subtext && (
          <p className={`text-base ${subtextStyles[style]}`}>{subtext}</p>
        )}
        <Button href={href} variant={buttonVariants[style]}>
          {buttonText}
        </Button>
      </div>
    </section>
  )
}
