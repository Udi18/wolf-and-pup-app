import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { AboutSection } from "@/components/sections/about-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { NewsletterSection } from "@/components/sections/newsletter-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  )
}

