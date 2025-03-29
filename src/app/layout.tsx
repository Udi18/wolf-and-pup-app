import type React from "react"
import type { Metadata } from "next"
// import { GeistSans } from "geist/font/sans"
import "./globals.css"
import { ThemeProvider } from "../components/theme-provider"
import { Header } from "../components/layout/header"
import { Footer } from "../components/layout/footer"

// Mock fonts for the example
// const localFont = require("next/font/local")

// const charoeFont = localFont({
//   src: "../fonts/charoe.woff2",
//   variable: "--font-charoe",
//   display: "swap",
// })

// const heyComicFont = localFont({
//   src: "../fonts/hey-comic.woff2",
//   variable: "--font-hey-comic",
//   display: "swap",
// })

// const singlongFont = localFont({
//   src: "../fonts/singlong.woff2",
//   variable: "--font-singlong",
//   display: "swap",
// })

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
        className={`font-sans min-h-screen flex flex-col`}
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

