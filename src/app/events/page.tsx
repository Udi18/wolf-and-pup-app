import { Calendar, Clock, MapPin } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CustomButton } from "@/components/ui/custom-button"
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
        location: "Wolf & Pup Main Space",
        image: "/placeholder.svg?height=400&width=600",
    },
    {
        id: 2,
        title: "Pet Adoption Day",
        description:
            "Join us for a special event in partnership with the local animal shelter. Meet adorable pets looking for their forever homes while enjoying special pet-themed treats.",
        date: "April 2, 2025",
        time: "11:00 AM - 3:00 PM",
        location: "Wolf & Pup Outdoor Patio",
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
        image: "/placeholder.svg?height=400&width=600",
    },
    {
        id: 5,
        title: "Kids Craft Morning",
        description:
            "A fun-filled morning of arts and crafts for children ages 5-12. All materials provided, and parents get a free coffee!",
        date: "April 22, 2025",
        time: "10:00 AM - 12:00 PM",
        location: "Wolf & Pup Kids Zone",
        image: "/placeholder.svg?height=400&width=600",
    },
    {
        id: 6,
        title: "Entrepreneur Networking",
        description:
            "Connect with local entrepreneurs, freelancers, and remote workers in this casual networking event designed to build community.",
        date: "April 30, 2025",
        time: "5:30 PM - 7:30 PM",
        location: "Wolf & Pup Workspace Area",
        image: "/placeholder.svg?height=400&width=600",
    },
]

export default function EventsPage() {
    return (
        <>
            <section className="bg-muted py-16 md:py-24">
                <div className="container">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="font-charoe text-4xl font-bold tracking-tight md:text-5xl">
                            Upcoming <span className="text-primary">Events</span>
                        </h1>
                        <p className="mt-4 text-xl text-muted-foreground">
                            Join us for workshops, meetups, and community gatherings at Wolf & Pup.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {events.map((event) => (
                            <Card key={event.id} className="overflow-hidden">
                                <div className="relative h-48 w-full">
                                    <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
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

