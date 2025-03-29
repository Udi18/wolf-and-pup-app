import { CustomButton } from "@/components/ui/custom-button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

export function MembershipSection() {
  return (
    <section className="py-16 md:py-24 bg-muted" id="membership">
      <div className="container">
        <h2 className="text-center font-charoe text-4xl font-bold tracking-tight md:text-5xl mb-6">
          Membership <span className="text-primary">Plans</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Choose the perfect membership level to enhance your Wolf & Pup experience. From casual visitors 
          to daily regulars, we have flexible options designed to suit your lifestyle.
        </p>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          <MembershipCard
            title="Occasional Visitor"
            price="$15"
            period="Day Pass"
            description="Perfect for those who visit occasionally or want to try our spaces before committing to a membership."
            features={[
              "Access to cafe and common areas",
              "2 hours of workspace use",
              "1 hour of play area access (kids or pets)",
              "High-speed WiFi",
              "10% discount on food and drinks"
            ]}
            buttonText="Purchase Day Pass"
            popular={false}
          />
          
          <MembershipCard
            title="Regular"
            price="$99"
            period="Monthly"
            description="Our most popular option for those who visit weekly and want to enjoy all Wolf & Pup has to offer."
            features={[
              "Unlimited cafe and common area access",
              "20 hours of workspace use monthly",
              "10 hours of play area access monthly",
              "Access to phone booths",
              "15% discount on food and drinks",
              "4 guest passes per month",
              "Exclusive member events"
            ]}
            buttonText="Choose Regular Plan"
            popular={true}
          />
          
          <MembershipCard
            title="Premium"
            price="$199"
            period="Monthly"
            description="The ultimate Wolf & Pup experience with dedicated resources and maximum flexibility."
            features={[
              "All Regular membership benefits",
              "Unlimited workspace access",
              "20 hours of play area access monthly",
              "Priority booking for meeting rooms",
              "2 hours of meeting room use monthly",
              "Dedicated desk option available",
              "20% discount on food and drinks",
              "8 guest passes per month",
              "10% discount on event bookings"
            ]}
            buttonText="Choose Premium Plan"
            popular={false}
          />
        </div>

        <div className="bg-background rounded-2xl p-8 md:p-12">
          <h3 className="text-center font-charoe text-2xl font-bold tracking-tight mb-6">
            Additional <span className="text-primary">Benefits</span>
          </h3>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <BenefitCard
              title="Family Add-Ons"
              description="Add family members to your membership for a reduced rate."
            />
            <BenefitCard
              title="Flexible Hours"
              description="Extended access hours for Premium members."
            />
            <BenefitCard
              title="Member Events"
              description="Exclusive networking and social events for members only."
            />
            <BenefitCard
              title="Loyalty Rewards"
              description="Earn points with every purchase towards free products and services."
            />
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              All memberships can be paused or canceled at any time. We also offer corporate memberships 
              and group rates for teams and organizations.
            </p>
            <CustomButton asChild>
              <a href="/contact">Contact Us About Memberships</a>
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  )
}

function MembershipCard({ title, price, period, description, features, buttonText, popular }) {
  return (
    <Card className={`p-6 ${popular ? 'border-primary ring-1 ring-primary relative' : ''}`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-primary text-white font-medium px-4 py-1 text-sm rounded-bl-lg rounded-tr-lg">
          Most Popular
        </div>
      )}
      <h3 className="font-charoe text-xl font-bold mb-2">{title}</h3>
      <div className="flex items-end gap-1 mb-4">
        <span className="font-charoe text-3xl font-bold">{price}</span>
        <span className="text-muted-foreground">/{period}</span>
      </div>
      <p className="text-muted-foreground mb-6">{description}</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
            <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <CustomButton className="w-full" variant={popular ? "default" : "outline"}>
        {buttonText}
      </CustomButton>
    </Card>
  )
}

function BenefitCard({ title, description }) {
  return (
    <div className="text-center p-4">
      <h4 className="font-charoe text-lg font-semibold mb-2">{title}</h4>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}