import { TestimonialCard } from "@/components/ui/testimonial-card"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Wolf & Pup has become my go-to workspace. The coffee is amazing, and my dog loves the play area!",
      author: "Sarah Johnson",
      role: "Freelance Designer",
      avatarSrc: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "As a parent, finding a coffee shop where my kids can play while I relax is a game-changer. Highly recommend!",
      author: "Michael Chen",
      role: "Parent & Coffee Lover",
      avatarSrc: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The community events at Wolf & Pup have helped me meet so many wonderful people. It's more than just coffee.",
      author: "Aisha Patel",
      role: "Local Resident",
      avatarSrc: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-charoe text-3xl font-bold tracking-tight md:text-4xl">
            What Our <span className="text-primary">Community</span> Says
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Don&apos;t just take our word for it - hear from our regular visitors.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              avatarSrc={testimonial.avatarSrc}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

