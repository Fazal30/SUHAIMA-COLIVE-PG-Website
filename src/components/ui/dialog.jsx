import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { cn } from "../../lib/utils"

const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogPortal = DialogPrimitive.Portal

const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
    <DialogPrimitive.Content
      ref={ref}
      className={cn("fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg duration-200 rounded-3xl", className)}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100">
        <X className="h-4 w-4" />
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))

const DialogHeader = ({ className, ...props }) => <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
const DialogTitle = ({ className, ...props }) => <DialogPrimitive.Title className={cn("text-lg font-semibold", className)} {...props} />

export { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle }