import { type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "../../lib/utils";

type Direction = "up" | "down" | "left" | "right";

interface ScrollRevealProps {
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  children: ReactNode;
}

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
};

export default function ScrollReveal({
  direction = "up",
  delay = 0,
  duration = 0.6,
  className,
  children,
}: ScrollRevealProps) {
  const { x, y } = offsets[direction];

  const variants: Variants = {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
