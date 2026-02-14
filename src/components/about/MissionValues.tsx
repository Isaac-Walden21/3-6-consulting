import { Cross, Award, ShieldCheck, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ScrollReveal, StaggerChildren } from "../animation";
import Container from "../layout/Container";

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    icon: Cross,
    title: "Faith-Driven",
    description:
      "Our work is rooted in faith and service to the church community.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We deliver the highest standard of training, informed by real-world experience.",
  },
  {
    icon: ShieldCheck,
    title: "Preparedness",
    description:
      "We believe preparation today prevents tragedy tomorrow.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We build relationships and support networks among church security teams.",
  },
];

export default function MissionValues() {
  return (
    <section className="py-24 lg:py-32 bg-bg-secondary">
      <Container className="text-center">
        {/* Mission quote */}
        <ScrollReveal>
          <blockquote className="max-w-4xl mx-auto">
            <span
              className="text-gold text-6xl font-heading leading-none block"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <p className="font-heading text-2xl md:text-3xl text-off-white uppercase italic -mt-6">
              To equip every house of worship with the training and confidence
              to protect their congregation.
            </p>
            <span
              className="text-gold text-6xl font-heading leading-none block mt-2"
              aria-hidden="true"
            >
              &rdquo;
            </span>
          </blockquote>
        </ScrollReveal>

        {/* Value cards */}
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-bg-tertiary rounded-xl p-6 text-center border border-white/5"
            >
              <value.icon className="w-10 h-10 text-gold mx-auto mb-4" />
              <h4 className="font-heading text-lg text-off-white uppercase">
                {value.title}
              </h4>
              <p className="text-light-gray text-sm mt-2">
                {value.description}
              </p>
            </div>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
