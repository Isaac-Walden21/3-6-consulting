import SectionHeading from "../ui/SectionHeading";
import Container from "../layout/Container";

export default function AboutHero() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-bg-secondary relative">
      <Container className="text-center">
        <SectionHeading
          title="ABOUT 3-6 CONSULTING"
          subtitle="Faith-driven security training built on real-world experience."
        />
      </Container>
    </section>
  );
}
