import SectionHeading from "../ui/SectionHeading";
import Container from "../layout/Container";

export default function CoursesHero() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-bg-secondary relative">
      <Container className="text-center">
        <SectionHeading
          title="TRAINING PROGRAMS"
          subtitle="Six specialized courses designed to prepare your security team for any situation."
        />
      </Container>
    </section>
  );
}
