import { Coffee, Users, Calendar, Briefcase, Dog, Baby } from "lucide-react"
import { FeatureCard } from "@/components/ui/feature-card"

export function FeaturesSection() {
  const features = [
    {
      title: "Premium Coffee",
      description: "Ethically sourced beans, expertly roasted and brewed to perfection by our skilled baristas.",
      icon: Coffee,
    },
    {
      title: "Community Events",
      description: "Regular workshops, meetups, and social gatherings to bring our community together.",
      icon: Calendar,
    },
    {
      title: "Workspace",
      description: "Comfortable, quiet areas with high-speed Wi-Fi perfect for remote work or studying.",
      icon: Briefcase,
    },
    {
      title: "Pet Friendly",
      description: "Dedicated play area for your furry friends to socialize while you enjoy your coffee.",
      icon: Dog,
    },
    {
      title: "Kids Zone",
      description: "Safe, supervised play area for children with educational toys and activities.",
      icon: Baby,
    },
    {
      title: "Inclusive Space",
      description: "A welcoming environment for everyone in our diverse community.",
      icon: Users,
    },
  ]

  return (
    <section className="py-16 md:py-24" id="features">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-charoe text-3xl font-bold tracking-tight md:text-4xl">
            What Makes Us <span className="text-primary">Special</span>
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            More than just great coffee, we&apos;re a community hub for everyone.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} />
          ))}
        </div>
      </div>
    </section>
  )
}

