import { CheckCircle } from "lucide-react";
import type { Course } from "../../types";
import { ScrollReveal } from "../animation";
import Container from "../layout/Container";
import Badge from "../ui/Badge";

interface CourseCardProps {
  course: Course;
  index: number;
  reversed: boolean;
}

export default function CourseCard({ course, index, reversed }: CourseCardProps) {
  return (
    <Container>
      <div
        className={`flex flex-col lg:gap-12 gap-8 ${
          reversed ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        {/* Image side */}
        <div className="lg:w-1/2">
          <ScrollReveal direction={reversed ? "right" : "left"}>
            <div className="bg-bg-tertiary rounded-xl aspect-video overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Content side */}
        <div className="lg:w-1/2 p-0 lg:p-8 flex flex-col justify-center">
          <ScrollReveal direction={reversed ? "left" : "right"}>
            {/* Number badge */}
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gold text-bg-primary font-heading text-lg">
              {index + 1}
            </span>

            {/* Title */}
            <h3 className="font-heading text-2xl md:text-3xl text-off-white uppercase mt-4">
              {course.title}
            </h3>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mt-3">
              <Badge variant="gold">{course.duration}</Badge>
              <Badge variant="slate">{course.type}</Badge>
            </div>

            {/* Description */}
            <p className="text-light-gray leading-relaxed mt-4">
              {course.description}
            </p>

            {/* Topics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-6">
              {course.topics.map((topic) => (
                <div key={topic} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                  <span className="text-sm text-light-gray">{topic}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </Container>
  );
}
