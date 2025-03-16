import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface CustomButtonProps extends ButtonProps {
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost"
}

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "rounded-xl font-medium transition-all shadow-soft",
          variant === "primary" && "bg-primary text-primary-foreground hover:opacity-90",
          variant === "secondary" && "bg-secondary text-secondary-foreground hover:opacity-90",
          variant === "accent" && "bg-accent text-accent-foreground hover:opacity-90",
          variant === "outline" && "border-2 border-primary text-primary bg-transparent hover:bg-primary/10",
          variant === "ghost" && "bg-transparent text-foreground hover:bg-muted",
          className,
        )}
        {...props}
      >
        {children}
      </Button>
    )
  },
)

CustomButton.displayName = "CustomButton"

export { CustomButton }

