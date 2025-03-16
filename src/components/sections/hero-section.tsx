import { CustomButton } from "@/components/ui/custom-button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <Image src="/placeholder.svg?height=1080&width=1920" alt="" fill className="object-cover" aria-hidden="true" />
      </div>

      <div className="container grid gap-8 md:grid-cols-2 md:items-center">
        <div className="flex flex-col gap-6">
          <h1 className="font-charoe text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Where Community <span className="text-primary">Brews</span> Together
          </h1>
          <p className="text-xl text-muted-foreground">
            A unique coffee experience for humans, kids, and furry friends alike. Work, play, and connect in our
            welcoming space.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <CustomButton asChild size="lg">
              <Link href="/#menu">Explore Our Menu</Link>
            </CustomButton>
            <CustomButton asChild variant="outline" size="lg">
              <Link href="/events">Upcoming Events</Link>
            </CustomButton>
          </div>
        </div>
        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-medium">
          <Image
            src="/placeholder.svg?height=800&width=600"
            alt="Wolf & Pup Coffee Shop interior"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}

