import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { StaggerChildren } from "../animation";
import SectionHeading from "../ui/SectionHeading";
import Badge from "../ui/Badge";
import Container from "../layout/Container";
import { courses } from "../../data/courses";

export default function CourseOverview() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <SectionHeading
          title="TRAINING PROGRAMS"
          subtitle="Comprehensive courses designed for security teams of every experience level."
        />

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {courses.map((course) => {
            const Icon = course.icon;

            return (
              <Link
                key={course.id}
                to="/courses"
                className="bg-bg-secondary rounded-xl p-6 border border-white/5 group hover:border-gold/30 transition-all duration-300 block"
              >
                <Icon className="w-12 h-12 text-gold mb-4" />

                <h3 className="font-heading text-xl text-off-white uppercase">
                  {course.title}
                </h3>

                <div className="flex gap-2 mt-2">
                  <Badge variant="slate">{course.duration}</Badge>
                  <Badge variant="gold">{course.type}</Badge>
                </div>

                <p className="text-light-gray text-sm mt-4 line-clamp-3">
                  {course.description}
                </p>

                <span className="text-gold text-sm font-medium mt-4 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            );
          })}
        </StaggerChildren>
      </Container>
    </section>
  );
}
