import { PageTransition } from "../components/animation";
import CoursesHero from "../components/courses/CoursesHero";
import CoursesList from "../components/courses/CoursesList";
import Container from "../components/layout/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import usePageTitle from "../hooks/usePageTitle";

export default function CoursesPage() {
  usePageTitle("Training Programs");
  return (
    <PageTransition>
      <CoursesHero />
      <Container>
        <CoursesList />
      </Container>
      {/* CTA section */}
      <section className="py-24 bg-bg-secondary text-center">
        <Container>
          <SectionHeading
            title="READY TO GET STARTED?"
            subtitle="Take the first step toward a safer congregation. Our team is ready to build a training plan for your church."
          />
          <div className="mt-8">
            <Button href="/contact" size="lg">
              Contact Us Today
            </Button>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}
