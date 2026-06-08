"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "secondary";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
          {
            "bg-[#FF8C00] text-white hover:bg-[#e07b00] shadow-md hover:shadow-lg hover:-translate-y-0.5":
              variant === "primary",
            "border-2 border-[#FF8C00] text-[#FF8C00] hover:bg-[#FF8C00] hover:text-white":
              variant === "outline",
            "border-2 border-white text-white hover:bg-white hover:text-[#2D2D2D]":
              variant === "ghost",
            "bg-[#2D2D2D] text-white hover:bg-[#1a1a1a]":
              variant === "secondary",
          },
          {
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
