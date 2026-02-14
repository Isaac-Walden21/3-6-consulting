import { ScrollReveal, MagneticButton } from "../animation";
import Button from "../ui/Button";
import Container from "../layout/Container";

export default function HomeCTA() {
  return (
    <section className="bg-gold py-16">
      <Container className="text-center">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-bg-primary uppercase">
            Ready to Protect Your Congregation?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-bg-primary/80 max-w-2xl mx-auto mt-4">
            Take the first step toward a safer church. Our team is ready to
            design a training program tailored to your specific needs.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-8">
            <MagneticButton>
              <Button
                variant="outline"
                size="lg"
                href="/contact"
                className="border-bg-primary text-bg-primary hover:bg-bg-primary hover:text-gold"
              >
                Get Started Today
              </Button>
            </MagneticButton>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
