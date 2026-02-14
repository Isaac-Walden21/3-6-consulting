import { cn } from "../../lib/utils";
import ScrollReveal from "../animation/ScrollReveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <ScrollReveal>
      <div className={cn(centered && "text-center", className)}>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-off-white uppercase tracking-wide">
          {title}
        </h2>
        <div
          className={cn("w-16 h-1 bg-gold mt-4", centered && "mx-auto")}
          aria-hidden="true"
        />
        {subtitle && (
          <p
            className={cn(
              "text-light-gray text-lg mt-4 max-w-2xl",
              centered && "mx-auto"
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}
