import { Calendar, Clock, MapPin, Tag } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CustomButton } from "@/components/ui/custom-button"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

// Mock events data
const events = [
  {
    id: 1,
    title: "Coffee Brewing Workshop",
    description:
      "Learn the art of brewing the perfect cup of coffee with our expert baristas. From pour-over to French press, discover techniques to elevate your coffee game.",
    date: "March 25, 2025",
    time: "2:00 PM - 4:00 PM",
    location: "Wolf & Pup Cafe Area",
    category: "Cafe",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Pet Adoption Day",
    description:
      "Join us for a special event in partnership with the local animal shelter. Meet adorable pets looking for their forever homes while enjoying special pet-themed treats.",
    date: "April 2, 2025",
    time: "11:00 AM - 3:00 PM",
    location: "The Glades - Pet Haven",
    category: "Play",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Community Book Club",
    description:
      "Our monthly book club meeting where we'll discuss 'The Midnight Library' by Matt Haig. New members always welcome!",
    date: "April 10, 2025",
    time: "6:30 PM - 8:00 PM",
    location: "Wolf & Pup Reading Corner",
    category: "Community",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Live Music Night",
    description:
      "Enjoy an evening of acoustic performances by local musicians while sipping on our special evening menu offerings.",
    date: "April 15, 2025",
    time: "7:00 PM - 9:00 PM",
    location: "Wolf & Pup Main Space",
    category: "Entertainment",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "Kids Craft Morning",
    description:
      "A fun-filled morning of arts and crafts for children ages 5-12. All materials provided, and parents get a free coffee!",
    date: "April 22, 2025",
    time: "10:00 AM - 12:00 PM",
    location: "The Glades - Kids Zone",
    category: "Play",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    title: "Entrepreneur Networking",
    description:
      "Connect with local entrepreneurs, freelancers, and remote workers in this casual networking event designed to build community.",
    date: "April 30, 2025",
    time: "5:30 PM - 7:30 PM",
    location: "Work Space - Meeting Area",
    category: "Work",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 7,
    title: "Membership Open House",
    description:
      "Learn about our membership options, tour the facilities, and enjoy special promotions for new sign-ups during this informational event.",
    date: "May 5, 2025",
    time: "12:00 PM - 6:00 PM",
    location: "Throughout Wolf & Pup",
    category: "Membership",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 8,
    title: "Private Event Showcase",
    description:
      "See our event spaces set up for different occasions and meet with our events team to learn about our party packages and custom event options.",
    date: "May 12, 2025",
    time: "4:00 PM - 7:00 PM",
    location: "Wolf & Pup Event Areas",
    category: "Party",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 9,
    title: "Seasonal Menu Tasting",
    description:
      "Be among the first to sample our new seasonal menu items and give feedback to our culinary team. Includes coffee, food, and dessert tastings.",
    date: "May 18, 2025",
    time: "3:00 PM - 5:00 PM",
    location: "Wolf & Pup Cafe Area",
    category: "Cafe",
    image: "/placeholder.svg?height=400&width=600",
  }
]

export default function EventsPage() {
  // Extract unique categories
  const categories = ["All", ...new Set(events.map(event => event.category))].sort();

  return (
    <>
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-charoe text-4xl font-bold tracking-tight md:text-5xl">
              Community <span className="text-primary">Calendar</span>
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Discover workshops, meetups, and community gatherings at Wolf & Pup.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Filter by Category</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button 
                  key={category} 
                  variant="outline" 
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <Card key={event.id} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                  <div className="absolute top-2 right-2 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                    {event.category}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{event.description}</p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <CustomButton asChild>
                    <Link href={`/events/${event.id}`}>Register</Link>
                  </CustomButton>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

