import { PageTransition } from "../components/animation";
import AboutHero from "../components/about/AboutHero";
import CompanyStory from "../components/about/CompanyStory";
import MissionValues from "../components/about/MissionValues";
import usePageTitle from "../hooks/usePageTitle";

export default function AboutPage() {
  usePageTitle("About");
  return (
    <PageTransition>
      <AboutHero />
      <CompanyStory />
      <MissionValues />
    </PageTransition>
  );
}
