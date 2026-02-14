import { User } from "lucide-react";
import { StaggerChildren } from "../animation";
import SectionHeading from "../ui/SectionHeading";
import Container from "../layout/Container";
import { teamMembers } from "../../data/team";

export default function TeamSection() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <SectionHeading
          title="MEET THE TEAM"
          subtitle="Experienced professionals dedicated to your church's safety."
        />

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-bg-secondary rounded-xl overflow-hidden border border-white/5 group"
            >
              {/* Photo placeholder */}
              <div className="bg-bg-tertiary aspect-square flex items-center justify-center">
                <User className="w-16 h-16 text-light-gray/30" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="font-heading text-xl text-off-white">
                  {member.name}
                </h4>
                <p className="text-gold text-sm font-medium mt-1">
                  {member.role}
                </p>
                <p className="text-light-gray text-sm mt-3 line-clamp-4">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
