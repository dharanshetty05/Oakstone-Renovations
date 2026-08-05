// components/ui/Button.tsx

import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "default" | "large";
}

export function Button({
  variant = "primary",
  size = "default",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        // Base
        "inline-flex items-center justify-center rounded-2xl font-semibold transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-primary/20",
        "disabled:pointer-events-none disabled:opacity-50",

        // Variant
        variant === "primary" &&
          "bg-primary text-white hover:bg-primary/90",

        variant === "secondary" &&
          "border border-border bg-white text-text-primary hover:bg-surface",

        // Size
        size === "default" && "h-13 px-7 text-base",

        size === "large" && "h-15 px-8 text-lg",

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}