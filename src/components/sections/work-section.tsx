import Image from "next/image"
import { CustomButton } from "@/components/ui/custom-button"
import { Card } from "@/components/ui/card"
import { Wifi, Phone, Users, Monitor, Clock, Coffee } from "lucide-react"

export function WorkSection() {
  return (
    <section className="py-16 md:py-24 bg-muted" id="work">
      <div className="container">
        <h2 className="text-center font-charoe text-4xl font-bold tracking-tight md:text-5xl mb-6">
          Work <span className="text-primary">Space</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Whether you need a quiet spot to focus, a professional meeting room, or a collaborative
          environment, our thoughtfully designed workspaces have everything you need to be productive.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          <WorkspaceFeature 
            icon={<Wifi />}
            title="High-Speed WiFi"
            description="Secure, reliable high-speed internet throughout the entire space."
          />
          <WorkspaceFeature 
            icon={<Phone />}
            title="Phone Booths"
            description="Private, soundproof booths for calls and virtual meetings."
          />
          <WorkspaceFeature 
            icon={<Users />}
            title="Meeting Rooms"
            description="Fully equipped meeting spaces for 2-10 people with booking options."
          />
          <WorkspaceFeature 
            icon={<Monitor />}
            title="Tech Amenities"
            description="Display screens, charging stations, and printing services available."
          />
          <WorkspaceFeature 
            icon={<Clock />}
            title="Flexible Hours"
            description="Extended hours for early birds and night owls alike."
          />
          <WorkspaceFeature 
            icon={<Coffee />}
            title="Coffee Service"
            description="Complimentary coffee and tea for workspace members."
          />
        </div>

        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-medium">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Wolf & Pup workspace areas"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-charoe text-3xl font-bold tracking-tight mb-4">
              Membership <span className="text-primary">Options</span>
            </h3>
            <div className="space-y-4 text-muted-foreground mb-6">
              <p>
                Choose from flexible membership options to suit your working style. From daily passes to
                dedicated desks and private offices, we have the perfect setup for freelancers, remote workers,
                and small teams.
              </p>
              <p>
                All workspace members enjoy premium amenities, networking opportunities, and special discounts
                on food and beverages from our cafe. Our community managers are always on hand to help you
                make the most of your Wolf & Pup experience.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <CustomButton asChild>
                <a href="#membership">View Membership Plans</a>
              </CustomButton>
              <CustomButton variant="outline" asChild>
                <a href="/contact">Schedule a Tour</a>
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WorkspaceFeature({ icon, title, description }) {
  return (
    <Card className="p-6">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="font-charoe text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  )
}