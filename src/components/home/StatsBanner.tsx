import { ShieldCheck, Target, Users, GraduationCap } from "lucide-react";
import { ScrollReveal, StaggerChildren } from "../animation";
import Container from "../layout/Container";

interface ValueProp {
  icon: typeof ShieldCheck;
  title: string;
  description: string;
}

const valueProps: ValueProp[] = [
  {
    icon: Target,
    title: "Scenario-Based Training",
    description:
      "Realistic drills and simulations that prepare your team for real-world threats.",
  },
  {
    icon: Users,
    title: "Tailored Programs",
    description:
      "Custom training built around your facility, your team, and your unique risks.",
  },
  {
    icon: ShieldCheck,
    title: "Real-World Expertise",
    description:
      "Led by professionals with law enforcement and military backgrounds.",
  },
  {
    icon: GraduationCap,
    title: "Certified Instructors",
    description:
      "Every instructor is trained, vetted, and committed to excellence.",
  },
];

export default function StatsBanner() {
  return (
    <section className="bg-slate-blue py-16 lg:py-20">
      <Container>
        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl text-off-white text-center uppercase mb-12">
            WHY 3-6 CONSULTING
          </h2>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop) => {
            const Icon = prop.icon;
            return (
              <div key={prop.title} className="text-center">
                <Icon className="w-10 h-10 text-gold mx-auto mb-4" />
                <h3 className="font-heading text-lg text-off-white uppercase tracking-wide">
                  {prop.title}
                </h3>
                <p className="text-sm text-off-white/70 mt-2 leading-relaxed">
                  {prop.description}
                </p>
              </div>
            );
          })}
        </StaggerChildren>
      </Container>
    </section>
  );
}
