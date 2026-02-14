import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";

interface ParallaxLayerProps {
  speed?: number;
  className?: string;
  children: ReactNode;
}

export default function ParallaxLayer({
  speed = 0.3,
  className,
  children,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
