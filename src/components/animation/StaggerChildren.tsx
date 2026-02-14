import { type ReactNode, Children } from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "../../lib/utils";

interface StaggerChildrenProps {
  staggerDelay?: number;
  className?: string;
  children: ReactNode;
}

const containerVariants: (stagger: number) => Variants = (stagger) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
    },
  },
});

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function StaggerChildren({
  staggerDelay = 0.1,
  className,
  children,
}: StaggerChildrenProps) {
  return (
    <motion.div
      variants={containerVariants(staggerDelay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn(className)}
    >
      {Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
