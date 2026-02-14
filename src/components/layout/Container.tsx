import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

export default function Container({
  children,
  as: Tag = "div",
  className,
  ...rest
}: ContainerProps) {
  return (
    <Tag className={cn("max-w-7xl mx-auto px-6 lg:px-12", className)} {...rest}>
      {children}
    </Tag>
  );
}
