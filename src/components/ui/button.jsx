import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "../../lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  const variants = {
    default: "bg-primary text-white shadow hover:bg-primary/90",
    outline: "border border-slate-200 bg-white hover:bg-slate-100 text-slate-900",
    ghost: "hover:bg-slate-100 text-slate-700",
  }
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3",
    lg: "h-12 px-8 text-lg",
    icon: "h-10 w-10",
  }

  return (
    <Comp
      ref={ref}
      className={cn("inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50", variants[variant], sizes[size], className)}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }