import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon?: LucideIcon
  className?: string
  iconClassName?: string
}

export function FeatureCard({ title, description, icon: Icon, className, iconClassName }: FeatureCardProps) {
  return (
    <Card className={cn("transition-all hover:shadow-medium", className)}>
      <CardHeader>
        {Icon && (
          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Icon className={cn("h-6 w-6 text-primary", iconClassName)} />
          </div>
        )}
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

