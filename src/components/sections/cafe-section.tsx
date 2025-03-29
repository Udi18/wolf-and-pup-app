import Image from "next/image"
import { CustomButton } from "@/components/ui/custom-button"
import { Card } from "@/components/ui/card"
import { Coffee, UtensilsCrossed, Cake } from "lucide-react"

export function CafeSection() {
  return (
    <section className="py-16 md:py-24" id="cafe">
      <div className="container">
        <h2 className="text-center font-charoe text-4xl font-bold tracking-tight md:text-5xl mb-6">
          Our <span className="text-primary">Cafe</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Enjoy our carefully crafted menu featuring specialty coffee, delicious food options, and sweet treats.
          We source locally whenever possible and offer options for various dietary preferences.
        </p>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          <MenuCategory
            icon={<Coffee className="h-8 w-8" />}
            title="Coffee & Drinks"
            description="Expertly crafted coffee and specialty beverages made with locally roasted beans."
            items={[
              { name: "Espresso", price: "$3.50" },
              { name: "Cappuccino", price: "$4.75" },
              { name: "Pour Over", price: "$4.50" },
              { name: "Cold Brew", price: "$5.25" },
              { name: "Matcha Latte", price: "$5.50" },
              { name: "Chai Latte", price: "$4.75" },
            ]}
          />
          
          <MenuCategory
            icon={<UtensilsCrossed className="h-8 w-8" />}
            title="Food"
            description="Fresh, made-to-order breakfast and lunch options to fuel your day."
            items={[
              { name: "Avocado Toast", price: "$8.50" },
              { name: "Breakfast Sandwich", price: "$9.75" },
              { name: "Grain Bowl", price: "$12.50" },
              { name: "Turkey Club", price: "$11.25" },
              { name: "Veggie Wrap", price: "$10.50" },
              { name: "Daily Soup", price: "$6.75" },
            ]}
          />
          
          <MenuCategory
            icon={<Cake className="h-8 w-8" />}
            title="Pastries & Treats"
            description="House-made and locally sourced sweet and savory treats to satisfy any craving."
            items={[
              { name: "Croissant", price: "$3.95" },
              { name: "Banana Bread", price: "$4.25" },
              { name: "Chocolate Chip Cookie", price: "$3.50" },
              { name: "Seasonal Muffin", price: "$4.50" },
              { name: "Cinnamon Roll", price: "$5.25" },
              { name: "Blueberry Scone", price: "$4.25" },
            ]}
          />
        </div>

        <div className="bg-muted rounded-2xl p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="font-charoe text-3xl font-bold tracking-tight mb-4">
                Special <span className="text-primary">Dietary Needs</span>
              </h3>
              <div className="space-y-4 text-muted-foreground mb-6">
                <p>
                  We're proud to offer a variety of options for all dietary preferences and restrictions.
                  Our menu includes clearly marked vegetarian, vegan, gluten-free, and dairy-free choices.
                </p>
                <p>
                  We're happy to accommodate special requests whenever possible—just ask our friendly staff!
                  We want everyone to find something delicious to enjoy at Wolf & Pup.
                </p>
              </div>
              <CustomButton>View Full Menu</CustomButton>
            </div>
            <div className="relative h-[300px] w-full rounded-2xl overflow-hidden shadow-medium">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Wolf & Pup specialty food options"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MenuCategory({ icon, title, description, items }) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-primary">{icon}</div>
        <h3 className="font-charoe text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-muted-foreground mb-6">{description}</p>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex justify-between">
            <span>{item.name}</span>
            <span className="font-medium">{item.price}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}