import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface TestimonialCardProps {
  quote: string
  author: string
  role?: string
  avatarSrc?: string
  className?: string
}

export function TestimonialCard({ quote, author, role, avatarSrc, className }: TestimonialCardProps) {
  return (
    <Card className={cn("transition-all hover:shadow-medium", className)}>
      <CardContent className="pt-6">
        <blockquote className="text-lg italic text-muted-foreground">&quot;{quote}&quot;</blockquote>
      </CardContent>
      <CardFooter className="flex items-center gap-4">
        {avatarSrc && (
          <div className="h-10 w-10 overflow-hidden rounded-full">
            <Image
              src={avatarSrc || "/placeholder.svg"}
              alt={author}
              width={40}
              height={40}
              className="h-full w-full object-cover"
            />
          </div>
        )}
        <div>
          <p className="font-medium">{author}</p>
          {role && <p className="text-sm text-muted-foreground">{role}</p>}
        </div>
      </CardFooter>
    </Card>
  )
}

