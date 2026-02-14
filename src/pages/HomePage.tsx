import { PageTransition } from "../components/animation";
import Hero from "../components/home/Hero";
import MissionStatement from "../components/home/MissionStatement";
import StatsBanner from "../components/home/StatsBanner";
import CourseOverview from "../components/home/CourseOverview";
import HomeCTA from "../components/home/HomeCTA";
import usePageTitle from "../hooks/usePageTitle";

export default function HomePage() {
  usePageTitle();
  return (
    <PageTransition>
      <Hero />
      <MissionStatement />
      <StatsBanner />
      <CourseOverview />
      <HomeCTA />
    </PageTransition>
  );
}
