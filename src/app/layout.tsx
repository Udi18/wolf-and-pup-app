import type React from "react"
import type { Metadata } from "next"
// Using Next.js default font until Geist is installed
import { Inter } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "../components/theme-provider"
import { Header } from "../components/layout/header"
import { Footer } from "../components/layout/footer"

const inter = Inter({ subsets: ['latin'], variable: '--font-geist-sans' })

// Define font variables that are used in CSS
const charoeFont = {
  variable: "--font-charoe",
}

const heyComicFont = {
  variable: "--font-hey-comic",
}

const singlongFont = {
  variable: "--font-singlong",
}

export const metadata: Metadata = {
  title: "Wolf & Pup Coffee Shop",
  description: "A community-focused coffee shop with workspaces, play areas for kids and pets, and event spaces.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${charoeFont.variable} ${heyComicFont.variable} ${singlongFont.variable} font-sans min-h-screen flex flex-col`}
      >
        <ThemeProvider defaultTheme="light" storageKey="wolf-and-pup-theme">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

