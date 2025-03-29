import Image from "next/image"
import { CustomButton } from "@/components/ui/custom-button"
import { Card } from "@/components/ui/card"
import { Cake, Users, Clock, Palette, Gift, CalendarCheck } from "lucide-react"

export function PartySection() {
  return (
    <section className="py-16 md:py-24" id="party">
      <div className="container">
        <h2 className="text-center font-charoe text-4xl font-bold tracking-tight md:text-5xl mb-6">
          Private <span className="text-primary">Events</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Host your next celebration, workshop, or meeting in our versatile event spaces. 
          From birthday parties to corporate gatherings, we'll help create memorable experiences.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          <PackageCard 
            icon={<Cake />}
            title="Kids' Birthday Package"
            price="Starting at $299"
            features={[
              "2-hour exclusive use of The Glades play area",
              "Dedicated party host",
              "Custom cake and decorations",
              "Food and beverage options for kids and adults",
              "Party favors for all children",
              "Add-on activities available"
            ]}
          />
          
          <PackageCard 
            icon={<Users />}
            title="Corporate Events"
            price="Starting at $499"
            features={[
              "4-hour use of meeting space and common areas",
              "AV equipment and tech support",
              "Customized catering options",
              "Coffee and tea service throughout event",
              "Networking space setup",
              "Optional team-building activities"
            ]}
          />
          
          <PackageCard 
            icon={<Palette />}
            title="Workshop & Classes"
            price="Starting at $199"
            features={[
              "3-hour use of flexible event space",
              "Seating for up to 20 participants",
              "Basic materials provided",
              "Beverage service options",
              "Marketing support through our channels",
              "Registration management available"
            ]}
          />
        </div>

        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1">
            <h3 className="font-charoe text-3xl font-bold tracking-tight mb-4">
              Custom <span className="text-primary">Events</span>
            </h3>
            <div className="space-y-4 text-muted-foreground mb-6">
              <p>
                Every event is unique, and our team specializes in creating custom experiences 
                tailored to your specific needs and vision. From intimate gatherings to large 
                celebrations, we'll work with you to design the perfect event.
              </p>
              <p>
                Our spaces can be transformed to accommodate a variety of setups, and our partnerships 
                with local vendors allow us to offer everything from specialty catering to professional 
                photography and entertainment options.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-6">
              <EventFeature 
                icon={<Clock />}
                title="Flexible Hours"
                description="Evening and weekend availability for private events"
              />
              <EventFeature 
                icon={<Gift />}
                title="Custom Packages"
                description="Tailor services to meet your specific event needs"
              />
              <EventFeature 
                icon={<CalendarCheck />}
                title="Easy Booking"
                description="Simple reservation process with dedicated coordinator"
              />
              <EventFeature 
                icon={<Users />}
                title="Capacity"
                description="Space for intimate gatherings or events up to 75 people"
              />
            </div>
            
            <CustomButton asChild>
              <a href="/contact">Inquire About Events</a>
            </CustomButton>
          </div>
          
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-medium order-1 md:order-2">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Wolf & Pup event space"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function PackageCard({ icon, title, price, features }) {
  return (
    <Card className="p-6">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="font-charoe text-xl font-semibold mb-2">{title}</h3>
      <p className="font-medium mb-4">{price}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, i) => (
          <li key={i} className="text-muted-foreground text-sm">• {feature}</li>
        ))}
      </ul>
      <CustomButton variant="outline" className="w-full">Learn More</CustomButton>
    </Card>
  )
}

function EventFeature({ icon, title, description }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <div className="text-primary">{icon}</div>
        <h4 className="font-medium">{title}</h4>
      </div>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  )
}