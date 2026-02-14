import SectionHeading from "../ui/SectionHeading";
import Container from "../layout/Container";

export default function TestimonialsHero() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-bg-secondary relative">
      <Container className="text-center">
        <SectionHeading
          title="WHAT OUR CLIENTS SAY"
          subtitle="Hear from the leaders and security directors who have trained with us."
        />
      </Container>
    </section>
  );
}
