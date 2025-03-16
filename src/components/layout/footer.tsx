import Link from "next/link"
import { Coffee, Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Coffee className="h-8 w-8 text-primary" />
              <span className="font-charoe text-xl font-bold">Wolf & Pup</span>
            </Link>
            <p className="text-muted-foreground">
              A community-focused coffee shop with workspaces, play areas for kids and pets, and event spaces.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-medium">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#menu" className="text-muted-foreground hover:text-foreground transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-muted-foreground hover:text-foreground transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-medium">Hours</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Monday - Friday: 7am - 8pm</li>
              <li>Saturday: 8am - 9pm</li>
              <li>Sunday: 8am - 6pm</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-medium">Contact</h4>
            <address className="not-italic text-muted-foreground">
              <p>123 Coffee Street</p>
              <p>Barkville, WP 12345</p>
              <p className="mt-2">info@wolfandpup.com</p>
              <p>(555) 123-4567</p>
            </address>
            <div className="mt-4 flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-muted">
        <div className="container py-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Wolf & Pup Coffee Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

