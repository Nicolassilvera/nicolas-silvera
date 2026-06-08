import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        {
          "bg-[#E0E0E0] text-[#2D2D2D]": variant === "default",
          "bg-[#FF8C00]/10 text-[#FF8C00] border border-[#FF8C00]/20": variant === "primary",
          "border border-[#E0E0E0] text-[#2D2D2D]": variant === "outline",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
