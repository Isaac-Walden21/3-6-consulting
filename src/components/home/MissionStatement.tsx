import { ParallaxLayer, TextReveal } from "../animation";
import SectionHeading from "../ui/SectionHeading";
import Container from "../layout/Container";

export default function MissionStatement() {
  return (
    <section className="py-24 lg:py-32 bg-bg-secondary">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div>
            <SectionHeading title="OUR MISSION" centered={false} />
            <div className="w-20 h-1 bg-gold mt-6 mb-8" aria-hidden="true" />
            <TextReveal
              text="We exist to equip churches, schools, and organizations with the training, knowledge, and confidence to protect the people they serve. Through scenario-based instruction and real-world expertise, we prepare security teams to respond decisively when it matters most."
              className="text-light-gray text-lg leading-relaxed"
              delay={0.2}
            />
          </div>

          {/* Right column — image */}
          <ParallaxLayer speed={0.2}>
            <div className="rounded-lg overflow-hidden bg-bg-tertiary aspect-video">
              <img
                src="/images/mission.jpg"
                alt="Security training team"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </ParallaxLayer>
        </div>
      </Container>
    </section>
  );
}
