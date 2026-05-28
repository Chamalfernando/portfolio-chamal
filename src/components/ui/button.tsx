import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-tight ring-offset-background transition-all duration-200 active:scale-[0.95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-sb-accent text-white hover:bg-sb-accent/90 border border-sb-accent",
        hero: "bg-sb-accent text-white hover:bg-sb-accent/90 shadow-sb-card border border-sb-accent",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 border border-destructive",
        outline:
          "border border-sb-accent bg-transparent text-sb-accent hover:bg-sb-accent/10",
        secondary:
          "bg-sb-ceramic text-sb-text-black hover:bg-sb-ceramic/80 border border-sb-ceramic",
        ghost: "hover:bg-sb-ceramic hover:text-sb-text-black",
        link: "text-sb-accent underline-offset-4 hover:underline",
        // Starbucks brand specific buttons
        sbFilled: "bg-sb-accent text-white hover:bg-sb-accent/90 border border-sb-accent",
        sbOutline: "border border-sb-accent bg-transparent text-sb-accent hover:bg-sb-accent/10",
        sbBlack: "bg-black text-white hover:bg-black/90 border border-black",
        sbDarkOutline: "border border-sb-text-black bg-transparent text-sb-text-black hover:bg-sb-text-black/5",
        sbWhiteGreen: "bg-white text-sb-accent hover:bg-white/90 border border-white",
        sbWhiteOutline: "border border-white bg-transparent text-white hover:bg-white/10",
      },
      size: {
        default: "h-10 px-6 py-2 text-sm",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
