import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-b from-[hsl(var(--background))] to-[hsl(var(--pup-pink)/20%)]">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <h1 className="text-5xl md:text-6xl font-title mb-6 bg-gradient-to-r from-[hsl(var(--wolf-brown))] via-[hsl(var(--pup-orange))] to-[hsl(var(--wolf-green))] text-transparent bg-clip-text">
          Wolf & Pup Coffee
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-[hsl(var(--foreground)/80%)]">
          Where community, workspaces, and playtime for kids & pets blend perfectly with exceptional coffee
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="default" size="lg" className="transition-all hover:scale-105">
            Visit Us Today
          </Button>
          <Button variant="secondary" size="lg" className="transition-all hover:scale-105">
            Upcoming Events
          </Button>
        </div>
      </div>

      <Separator className="my-12 max-w-4xl mx-auto h-[2px] bg-gradient-to-r from-transparent via-[hsl(var(--border))] to-transparent" />

      {/* Feature Tabs */}
      <div className="max-w-5xl mx-auto my-12">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="w-full justify-center mb-8 bg-[hsl(var(--muted)/50%)] p-1">
            <TabsTrigger value="about" className="flex-1 data-[state=active]:bg-[hsl(var(--pup-pink)/30%)]">About Us</TabsTrigger>
            <TabsTrigger value="services" className="flex-1 data-[state=active]:bg-[hsl(var(--pup-orange)/30%)]">Services</TabsTrigger>
            <TabsTrigger value="community" className="flex-1 data-[state=active]:bg-[hsl(var(--wolf-green)/30%)]">Community</TabsTrigger>
          </TabsList>
          
          <TabsContent value="about" className="animate-in fade-in slide-in-from-bottom-2">
            <Card className="border-[hsl(var(--wolf-brown)/20%)] shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-[hsl(var(--wolf-brown))]">Our Story</CardTitle>
                <CardDescription>A cozy community space in the heart of the city</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Wolf & Pup Coffee was founded with a simple idea: create a place where everyone - from busy professionals to families with children and pets - can feel at home while enjoying premium coffee and healthy food options.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="border-[hsl(var(--wolf-brown)/50%)] hover:bg-[hsl(var(--wolf-brown)/10%)]">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="services" className="animate-in fade-in slide-in-from-bottom-2">
            <Card className="border-[hsl(var(--pup-orange)/20%)] shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-[hsl(var(--secondary))]">What We Offer</CardTitle>
                <CardDescription>Everything you need under one roof</CardDescription>
              </CardHeader>
              <CardContent>
                <p>From our specialty coffee and artisanal pastries to dedicated workspaces and playgrounds for kids and pets, we've created a multipurpose space that adapts to your needs throughout the day.</p>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" className="hover:bg-[hsl(var(--pup-orange)/80%)]">
                  See Menu
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="community" className="animate-in fade-in slide-in-from-bottom-2">
            <Card className="border-[hsl(var(--wolf-green)/20%)] shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-[hsl(var(--accent))]">Events & Workshops</CardTitle>
                <CardDescription>Join our thriving community</CardDescription>
              </CardHeader>
              <CardContent>
                <p>We host regular events including coffee tastings, local artist showcases, family game nights, and workshops for all ages. Our space is designed to bring people together and foster connections.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="border-[hsl(var(--wolf-green)/50%)] hover:bg-[hsl(var(--wolf-green)/10%)]">
                  View Calendar
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Brand Colors Showcase */}
      <div className="max-w-6xl mx-auto mt-16 mb-8">
        <h2 className="text-3xl font-title mb-8 text-center">Our Brand Palette</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Wolf Brand Colors */}
          <Card className="overflow-hidden border border-[hsl(var(--border))] hover:shadow-md transition-all">
            <div className="h-24 bg-gradient-to-r from-[hsl(var(--wolf-brown))] via-[hsl(var(--wolf-gray))] to-[hsl(var(--wolf-green))]"></div>
            <CardHeader>
              <CardTitle>Wolf Colors</CardTitle>
              <CardDescription>Earthy & sophisticated tones</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[hsl(var(--wolf-brown))] ring-2 ring-[hsl(var(--wolf-brown)/20%)]" />
                <span>Wolf Brown</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[hsl(var(--wolf-gray))] ring-2 ring-[hsl(var(--wolf-gray)/20%)]" />
                <span>Wolf Gray</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[hsl(var(--wolf-green))] ring-2 ring-[hsl(var(--wolf-green)/20%)]" />
                <span>Wolf Green</span>
              </div>
            </CardContent>
          </Card>

          {/* Pup Brand Colors */}
          <Card className="overflow-hidden border border-[hsl(var(--border))] hover:shadow-md transition-all">
            <div className="h-24 bg-gradient-to-r from-[hsl(var(--pup-orange))] via-[hsl(var(--pup-green))] to-[hsl(var(--pup-pink))]"></div>
            <CardHeader>
              <CardTitle>Pup Colors</CardTitle>
              <CardDescription>Playful & warm accents</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[hsl(var(--pup-orange))] ring-2 ring-[hsl(var(--pup-orange)/20%)]" />
                <span>Pup Orange</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[hsl(var(--pup-green))] ring-2 ring-[hsl(var(--pup-green)/20%)]" />
                <span>Pup Green</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[hsl(var(--pup-pink))] ring-2 ring-[hsl(var(--pup-pink)/20%)]" />
                <span>Pup Pink</span>
              </div>
            </CardContent>
          </Card>

          {/* Theme Colors */}
          <Card className="overflow-hidden border border-[hsl(var(--border))] hover:shadow-md transition-all">
            <div className="h-24 bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--secondary))] to-[hsl(var(--accent))]"></div>
            <CardHeader>
              <CardTitle>Theme Colors</CardTitle>
              <CardDescription>Primary UI elements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[hsl(var(--primary))] ring-2 ring-[hsl(var(--primary)/20%)]" />
                <span>Primary (Wolf Gray)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[hsl(var(--secondary))] ring-2 ring-[hsl(var(--secondary)/20%)]" />
                <span>Secondary (Pup Orange)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[hsl(var(--accent))] ring-2 ring-[hsl(var(--accent)/20%)]" />
                <span>Accent (Wolf Green)</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto mt-16 px-8 py-12 bg-[hsl(var(--card))] rounded-2xl border border-[hsl(var(--border))] shadow-lg text-center">
        <h2 className="text-3xl font-title mb-4">Join Our Community</h2>
        <p className="mb-8 text-[hsl(var(--foreground)/80%)]">Sign up for our newsletter to receive updates on events, special offers, and community activities.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" variant="default" className="bg-[hsl(var(--wolf-brown))] hover:bg-[hsl(var(--wolf-brown)/90%)]">
            Subscribe
          </Button>
          <Button size="lg" variant="outline" className="border-[hsl(var(--pup-orange))] text-[hsl(var(--pup-orange))] hover:bg-[hsl(var(--pup-orange)/10%)]">
            Contact Us
          </Button>
        </div>
      </div>
    </main>
  );
}