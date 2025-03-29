import { CustomButton } from "@/components/ui/custom-button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Full-width Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/placeholder.svg?height=1080&width=1920" 
          alt="Wolf & Pup Coffee Shop" 
          fill 
          className="object-cover brightness-75"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="container relative z-10">
        <div className="max-w-3xl text-white backdrop-blur-sm bg-black/30 p-8 md:p-12 rounded-xl">
          <h1 className="font-charoe text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6">
            Where Community <span className="text-primary">Brews</span> Together
          </h1>
          <p className="text-xl mb-8">
            A unique coffee experience for humans, kids, and furry friends alike. 
            Work, play, and connect in our welcoming space.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <CustomButton asChild size="lg">
              <Link href="/#cafe">Explore Our Menu</Link>
            </CustomButton>
            <CustomButton asChild variant="outline" size="lg" className="bg-white/10 text-white border-white hover:bg-white/20">
              <Link href="/events">Upcoming Events</Link>
            </CustomButton>
          </div>
        </div>
      </div>

      {/* Image Gallery Preview (Overlapping the Bottom) */}
      <div className="absolute bottom-[-40px] md:bottom-[-60px] left-0 right-0 z-10 container hidden md:block">
        <div className="flex justify-center gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="relative w-32 h-32 md:w-48 md:h-48 rounded-xl overflow-hidden shadow-lg border-4 border-background">
              <Image
                src={`/placeholder.svg?height=200&width=200&text=Image${i}`}
                alt={`Wolf & Pup gallery image ${i}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

