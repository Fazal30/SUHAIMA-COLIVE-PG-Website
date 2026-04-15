import * as React from "react"
import { cn } from "../../lib/utils"

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-2xl border border-slate-200 bg-white text-slate-950 shadow-sm", className)} {...props} />
))
const CardHeader = ({ className, ...props }) => <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
const CardTitle = ({ className, ...props }) => <h3 className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
const CardContent = ({ className, ...props }) => <div className={cn("p-6 pt-0", className)} {...props} />
const CardFooter = ({ className, ...props }) => <div className={cn("flex items-center p-6 pt-0", className)} {...props} />

export { Card, CardHeader, CardFooter, CardTitle, CardContent }