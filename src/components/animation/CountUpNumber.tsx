import { useEffect, useRef } from "react";
import {
  useInView,
  useMotionValue,
  useTransform,
  animate,
  motion,
} from "framer-motion";
import { cn } from "../../lib/utils";

interface CountUpNumberProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export default function CountUpNumber({
  end,
  duration = 2,
  suffix,
  className,
}: CountUpNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, end, {
      duration,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [isInView, motionValue, end, duration]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${latest}${suffix ?? ""}`;
      }
    });

    return () => unsubscribe();
  }, [rounded, suffix]);

  return (
    <motion.span ref={ref} className={cn(className)}>
      0{suffix ?? ""}
    </motion.span>
  );
}
