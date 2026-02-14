import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { ScrollReveal, ParallaxLayer } from "../animation";

export default function ContactInfo() {
  return (
    <section className="py-24 lg:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <ParallaxLayer speed={0.15}>
          <img src="/logo.png" alt="" className="w-96 h-96 opacity-[0.03]" />
        </ParallaxLayer>
      </div>

      <div className="relative max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <ScrollReveal>
          <h3 className="font-heading text-2xl md:text-3xl text-off-white uppercase">
            REACH OUT DIRECTLY
          </h3>

          <div className="w-16 h-1 bg-gold mx-auto mt-4 mb-8" aria-hidden="true" />

          <p className="text-light-gray leading-relaxed mb-12">
            Whether you&apos;re looking to schedule a training session, have
            questions about our courses, or want to discuss a custom program for
            your organization, we&apos;re here to help.
          </p>

          <motion.a
            href="mailto:michael@3-6consulting.com"
            className="inline-block text-2xl md:text-3xl lg:text-4xl font-heading text-gold hover:text-gold-dark transition-colors duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            michael@3-6consulting.com
          </motion.a>

          <Mail className="w-8 h-8 text-gold/40 mx-auto mt-6" />
        </ScrollReveal>
      </div>
    </section>
  );
}
