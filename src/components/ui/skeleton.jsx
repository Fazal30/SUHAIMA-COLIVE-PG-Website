import * as React from "react"
import * as SelectPrimitive from "../radix-ui/react-select"
import { ChevronDown } from "lucide-react"
import { cn } from "../../lib/utils"

const Select = SelectPrimitive.Root
const SelectValue = SelectPrimitive.Value
const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger ref={ref} className={cn("flex h-10 w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary", className)} {...props}>
    {children}
    <ChevronDown className="h-4 w-4 opacity-50" />
  </SelectPrimitive.Trigger>
))
const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content ref={ref} className={cn("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white shadow-md", className)} position={position} {...props}>
      <SelectPrimitive.Viewport className="p-1">{children}</SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item ref={ref} className={cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-slate-100", className)} {...props}>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))

export { Select, SelectValue, SelectTrigger, SelectContent, SelectItem }