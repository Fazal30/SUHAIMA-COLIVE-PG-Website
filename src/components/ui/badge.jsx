import * as React from "react"
import { cn } from "../../lib/utils"

function Badge({ className, variant = "default", ...props }) {
  const variants = {
    default: "border-transparent bg-primary text-white",
    secondary: "border-transparent bg-slate-100 text-slate-900",
    outline: "text-slate-950 border-slate-200",
  }
  return (
    <div className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none", variants[variant], className)} {...props} />
  )
}

export { Badge }