import { PageTransition, ScrollReveal } from "../components/animation";
import TestimonialsHero from "../components/testimonials/TestimonialsHero";
import TestimonialCard from "../components/testimonials/TestimonialCard";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import Container from "../components/layout/Container";
import { testimonials } from "../data/testimonials";
import usePageTitle from "../hooks/usePageTitle";

export default function TestimonialsPage() {
  usePageTitle("Testimonials");
  return (
    <PageTransition>
      <TestimonialsHero />

      <section className="py-24">
        <Container>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="break-inside-avoid">
                <ScrollReveal delay={index * 0.1}>
                  <TestimonialCard testimonial={testimonial} />
                </ScrollReveal>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-bg-secondary text-center">
        <Container>
          <SectionHeading
            title="READY TO TRAIN YOUR TEAM?"
            subtitle="Join the growing number of churches that trust 3-6 Consulting for their security training needs."
          />
          <div className="mt-8">
            <Button href="/contact" variant="primary" size="lg">
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}
