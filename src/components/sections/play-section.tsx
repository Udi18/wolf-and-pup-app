import Image from "next/image"
import { CustomButton } from "@/components/ui/custom-button"
import { Card } from "@/components/ui/card"
import { Baby, Dog, Calendar, Clock, FileText, ShieldCheck } from "lucide-react"

export function PlaySection() {
  return (
    <section className="py-16 md:py-24" id="play">
      <div className="container">
        <h2 className="text-center font-charoe text-4xl font-bold tracking-tight md:text-5xl mb-6">
          The <span className="text-primary">Glades</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Our supervised play areas provide a safe and stimulating environment for both 
          children and pets to explore, socialize, and have fun while you work or relax.
        </p>

        <div className="grid gap-8 md:grid-cols-2 mb-16">
          <div className="bg-muted rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Baby className="h-6 w-6 text-primary" />
              <h3 className="font-charoe text-2xl font-semibold">Kids' Play Area</h3>
            </div>
            <div className="space-y-4 text-muted-foreground mb-6">
              <p>
                Our spacious, age-appropriate play zones feature creative toys, educational activities, 
                and plenty of room for imagination and adventure. Trained staff members ensure a safe, 
                supervised environment for children ages 1-12.
              </p>
              <p>
                With both indoor and outdoor play options, The Glades keeps kids engaged and happy 
                while you enjoy some productive time or a relaxing coffee break.
              </p>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Open during all business hours</span>
              </li>
              <li className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" />
                <span>Waiver required for all children</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span>Fully trained staff and regular sanitization</span>
              </li>
            </ul>
            <div className="relative h-[200px] w-full rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Wolf & Pup kids' play area"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="bg-muted rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Dog className="h-6 w-6 text-primary" />
              <h3 className="font-charoe text-2xl font-semibold">Pet Haven</h3>
            </div>
            <div className="space-y-4 text-muted-foreground mb-6">
              <p>
                Let your furry friends socialize and burn energy in our designated pet play area. 
                With separate spaces for dogs of different sizes and temperaments, your pets can 
                enjoy a safe and fun environment.
              </p>
              <p>
                Our pet attendants are trained in animal behavior and first aid, ensuring your 
                pets receive proper care and attention while you're just steps away.
              </p>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Reserved sessions available throughout the day</span>
              </li>
              <li className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" />
                <span>Vaccination records and behavioral assessment required</span>
              </li>
              <li className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span>Booking recommended for peak hours</span>
              </li>
            </ul>
            <div className="relative h-[200px] w-full rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Wolf & Pup pet play area"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="font-charoe text-2xl font-bold tracking-tight mb-4">
            Admission & <span className="text-primary">Waivers</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            To ensure everyone's safety and enjoyment, we require completed waivers for all children 
            and pets before using The Glades. Single-day passes and membership options are available.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CustomButton asChild>
              <a href="#membership">View Membership Options</a>
            </CustomButton>
            <CustomButton variant="outline">Download Waiver Forms</CustomButton>
          </div>
        </div>
      </div>
    </section>
  )
}