"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
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
      {/* Logo Section */}
      <div className="container border-b border-muted">
        <div className="flex justify-between items-center py-3 md:justify-end">
          {/* Mobile Logo (left-aligned) */}
          <Link href="/" className="flex items-center gap-2 md:hidden">
            <div className="relative w-10 h-10">
              <Image
                src="/logo-placeholder.svg"
                alt="Wolf & Pup Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <span className="font-charoe text-xl font-bold">Wolf & Pup</span>
          </Link>
          
          {/* Desktop Logo (right-aligned) */}
          <div className="hidden md:flex md:flex-col md:items-end">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-14 h-14">
                <Image
                  src="/logo-placeholder.svg"
                  alt="Wolf & Pup Logo"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
              <span className="font-charoe text-2xl font-bold">Wolf & Pup</span>
            </Link>
            <CustomButton variant="outline" size="sm" className="mt-1">
              Sign In
            </CustomButton>
          </div>
        </div>
      </div>
      
      {/* Navigation Section */}
      <div className="container flex h-16 items-center justify-between">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 mx-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-between w-full md:w-auto md:justify-end">
          {/* Mobile Sign In Button */}
          <CustomButton variant="outline" size="sm" className="md:hidden">
            Sign In
          </CustomButton>
          
          <div className="flex items-center">
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="ml-2 md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-[7.5rem] z-50 bg-background md:hidden transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <nav className="container flex flex-col gap-4 p-6">
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-muted">
            <div className="relative w-10 h-10">
              <Image
                src="/logo-placeholder.svg"
                alt="Wolf & Pup Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-charoe text-xl font-bold">Wolf & Pup</span>
          </div>
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
          <CustomButton className="mt-4" variant="outline">
            Sign In
          </CustomButton>
        </nav>
      </div>
    </header>
  )
}

