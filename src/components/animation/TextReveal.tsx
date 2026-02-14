import { motion, type Variants } from "framer-motion";
import { cn } from "../../lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function TextReveal({
  text,
  className,
  delay = 0,
}: TextRevealProps) {
  const words = text.split(" ");

  return (
    <motion.p
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delayChildren: delay }}
      className={cn(className)}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={wordVariants}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}
