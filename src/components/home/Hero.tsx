import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  ParallaxLayer,
  TextReveal,
  ScrollReveal,
  MagneticButton,
} from "../animation";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background with parallax */}
      <ParallaxLayer speed={0.4} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-bg-tertiary">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.03) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(255,255,255,0.02) 0%, transparent 50%)",
            }}
          />
        </div>
      </ParallaxLayer>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <ScrollReveal delay={0.1}>
          <Badge variant="gold" className="mb-8">
            Church Security Training
          </Badge>
        </ScrollReveal>

        <TextReveal
          text="PROTECTING WHAT MATTERS MOST"
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-off-white uppercase leading-tight"
          delay={0.2}
        />

        <ScrollReveal delay={0.5}>
          <p className="text-light-gray text-lg md:text-xl max-w-2xl mx-auto mt-6">
            Professional security training and consulting for houses of worship.
            Because every congregation deserves to feel safe.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.7}>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <MagneticButton>
              <Button variant="primary" size="lg" href="/courses">
                View Courses
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button variant="outline" size="lg" href="/contact">
                Contact Us
              </Button>
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDown className="w-6 h-6 text-off-white/50" />
      </motion.div>
    </section>
  );
}
