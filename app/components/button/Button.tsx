import Link from 'next/link'

interface ButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

export function Button({ href, children, variant = 'primary', className = '' }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium transition-colors'
  const variantStyles = variant === 'primary'
    ? 'bg-black text-white hover:bg-zinc-800'
    : 'bg-white text-black border border-black hover:bg-zinc-50'

  const isExternal = href.startsWith('http://') || href.startsWith('https://')

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${variantStyles} ${className}`}
      >
        {children}
      </a>
    )
  }

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {children}
    </Link>
  )
}
