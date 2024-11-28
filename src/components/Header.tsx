import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="bg-background border-b z-50">
      <div className="pl-6 py-3">
        <Link href="/" className="inline-block">
          <Image
            src="/logo.png"
            alt="Kashi-ka Consulting"
            width={180}
            height={60}
            priority
            className="h-auto"
          />
        </Link>
      </div>
    </header>
  )
}