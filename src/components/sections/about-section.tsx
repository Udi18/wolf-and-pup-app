import Image from "next/image"
import { CustomButton } from "@/components/ui/custom-button"
import Link from "next/link"

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-muted" id="about">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-medium order-2 md:order-1">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Wolf & Pup Coffee Shop story"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-charoe text-3xl font-bold tracking-tight md:text-4xl">
              Our <span className="text-primary">Story</span>
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Wolf & Pup was born from a simple idea: create a space where everyone in the community could feel at
                home, regardless of age or species.
              </p>
              <p>
                Founded in 2020 by coffee enthusiasts and community advocates, we set out to build more than just a
                coffee shop. We wanted to create a hub where people could work, families could gather, and pets could
                play—all under one roof.
              </p>
              <p>
                Today, Wolf & Pup stands as a testament to our commitment to quality coffee, community connection, and
                inclusive spaces. We&apos;re proud to be your neighborhood&apos;s living room.
              </p>
            </div>
            <CustomButton asChild className="mt-6">
              <Link href="/contact">Get in Touch</Link>
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  )
}

