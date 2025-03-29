"use client"

import type React from "react"

import { useState } from "react"
import { CustomButton } from "@/components/ui/custom-button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSuccess(true)
      setEmail("")
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-primary py-16 text-primary-foreground">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Mail className="mx-auto h-12 w-12 mb-4" />
          <h2 className="font-charoe text-3xl font-bold tracking-tight md:text-4xl">Stay Updated</h2>
          <p className="mt-4 text-xl opacity-90">
            Subscribe to our newsletter for events, promotions, and community news.
          </p>

          {isSuccess ? (
            <div className="mt-8 rounded-xl bg-white/10 p-6">
              <p className="text-lg font-medium">Thanks for subscribing! Check your inbox soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <CustomButton type="submit" disabled={isSubmitting} className="bg-white text-primary hover:bg-white/90">
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </CustomButton>
            </form>
          )}
          {error && <p className="mt-2 text-red-300">{error}</p>}
        </div>
      </div>
    </section>
  )
}

