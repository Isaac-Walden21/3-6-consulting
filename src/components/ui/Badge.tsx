import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "gold" | "slate";
  className?: string;
}

const variantStyles: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default: "bg-white/10 text-off-white",
  gold: "bg-gold/20 text-gold",
  slate: "bg-slate-blue/30 text-light-gray",
};

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
