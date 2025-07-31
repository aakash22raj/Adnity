import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string
}

export const Button = ({ className, ...props }: ButtonProps) => (
  <button
    className={cn(
      "px-6 py-3 rounded-xl font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
      className
    )}
    {...props}
  />
)
