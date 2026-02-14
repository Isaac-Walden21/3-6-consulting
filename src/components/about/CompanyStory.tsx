import { ScrollReveal, ParallaxLayer } from "../animation";
import Container from "../layout/Container";

export default function CompanyStory() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column — image */}
          <ParallaxLayer>
            <div className="bg-bg-tertiary rounded-xl aspect-[4/3] overflow-hidden">
              <img
                src="/images/story.jpg"
                alt="Security professional"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </ParallaxLayer>

          {/* Right column — story */}
          <ScrollReveal direction="right">
            <h3 className="font-heading text-3xl md:text-4xl text-off-white uppercase">
              OUR STORY
            </h3>
            <div className="w-16 h-1 bg-gold mt-4 mb-6" aria-hidden="true" />
            <div className="space-y-4">
              <p className="text-light-gray leading-relaxed">
                3-6 Consulting was born from a simple observation: churches,
                schools, and workplaces across America were unprepared for the
                security challenges of the modern world. Founded by law
                enforcement professionals with decades of combined experience,
                we set out to change that.
              </p>
              <p className="text-light-gray leading-relaxed">
                Our name comes from the biblical principle found in Nehemiah
                3-6, where the people of Jerusalem rebuilt their walls while
                standing guard — working with a tool in one hand and a weapon in
                the other. We believe in that same spirit of preparedness:
                protecting what matters most while building for the future.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
