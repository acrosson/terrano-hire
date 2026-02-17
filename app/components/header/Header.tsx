import Image from 'next/image'

export function Header() {
  return (
    <header className="w-full bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-16 py-6">
        <Image
          src="/images/Terrano_logo_black.png"
          alt="Terrano Labs"
          width={100}
          height={25}
          priority
        />
      </div>
    </header>
  )
}
