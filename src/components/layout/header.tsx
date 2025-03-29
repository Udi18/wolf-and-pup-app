"use client"

import { useState } from "react"
import Link from "next/link"
import { Coffee, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { CustomButton } from "@/components/ui/custom-button"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Cafe", href: "/#cafe" },
  { label: "Work", href: "/#work" },
  { label: "The Glades", href: "/#play" },
  { label: "Membership", href: "/#membership" },
  { label: "Calendar", href: "/events" },
  { label: "Party", href: "/#party" },
  { label: "Contact", href: "/contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-muted bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Coffee className="h-8 w-8 text-primary" />
          <span className="font-charoe text-xl font-bold">Wolf & Pup</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <CustomButton className="hidden md:flex">Order Now</CustomButton>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-50 bg-background md:hidden transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <nav className="container flex flex-col gap-4 p-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg font-medium py-2 border-b border-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <CustomButton className="mt-4">Order Now</CustomButton>
        </nav>
      </div>
    </header>
  )
}

