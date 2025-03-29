import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { AboutSection } from "@/components/sections/about-section"
import { CafeSection } from "@/components/sections/cafe-section"
import { WorkSection } from "@/components/sections/work-section"
import { PlaySection } from "@/components/sections/play-section"
import { MembershipSection } from "@/components/sections/membership-section"
import { PartySection } from "@/components/sections/party-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { NewsletterSection } from "@/components/sections/newsletter-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <CafeSection />
      <WorkSection />
      <PlaySection />
      <MembershipSection />
      <PartySection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  )
}

