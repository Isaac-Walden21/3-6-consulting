import SectionHeading from "../ui/SectionHeading";
import Container from "../layout/Container";

export default function ContactHero() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-bg-secondary relative">
      <Container className="text-center">
        <SectionHeading
          title="GET IN TOUCH"
          subtitle="Ready to discuss your security training needs? We'd love to hear from you."
        />
      </Container>
    </section>
  );
}
