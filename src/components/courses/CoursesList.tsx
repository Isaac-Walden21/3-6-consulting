import { courses } from "../../data/courses";
import CourseCard from "./CourseCard";

export default function CoursesList() {
  return (
    <div className="space-y-16 lg:space-y-24 py-8">
      {courses.map((course, index) => (
        <CourseCard
          key={course.id}
          course={course}
          index={index}
          reversed={index % 2 !== 0}
        />
      ))}
    </div>
  );
}
