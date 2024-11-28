import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="pl-0 sm:pl-0">
            <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
              © 2024 KASHIKA CONSULTING. All rights reserved.
            </p>
          </div>
          <nav className="sm:pr-0">
            <ul className="flex space-x-6">
              <li><Link href="/terms" className="text-sm text-foreground hover:text-[#9333EA]">Terms of Service</Link></li>
              <li><Link href="/contact" className="text-sm text-foreground hover:text-[#9333EA]">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}