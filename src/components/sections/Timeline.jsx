import Section from "../ui/Section";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import TimelineStep from "../ui/TimelineStep";

import timeline from "@/constants/timeline";
import AnimatedSection from "../ui/AnimatedSection";

export default function Timeline() {
  return (
    <Section id="quanverse">
      <Container>
        <div className="items-start gap-24 rounded-2xl border border-[#FF91006B] px-6 py-15 lg:px-14 lg:py-20 bg-[#14100D]">
          <AnimatedSection>
            <SectionHeader
              align="center"
              eyebrow="// Six Stages. One Handoff."
              title={
                <span className=" font-bold text-[25px] leading-[36.8px] lg:text-[40px] lg:leading-[44.8px] tracking-[-0.88px]">
                  Every engagement follows the same production pathway.
                </span>
              }
            />
          </AnimatedSection>

          {/* Legend */}
          <AnimatedSection>
            <div className="font-heading mt-8 lg:mt-14 flex flex-col lg:flex-row justify-center gap-4 lg:gap-11 text-base font-normal">
              <div className="flex items-center gap-2 tracking-[-0.36px]">
                <span className="h-3 w-3 rounded-full bg-[#2D7DD2]" />
                <span className="text-sm lg:text-base text-[#F2EDE6]">
                  QuanSkill — Discovery & Design
                </span>
              </div>

              <div className=" font-mono flex items-center gap-2 tracking-[-0.36px]">
                <span className="h-3 w-3 rounded-full bg-[#FF9100]" />
                <span className="text-sm lg:text-base text-[#F2EDE6]">
                  QuanSolutions — Engineering & Delivery
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Timeline */}
          <AnimatedSection>
            <div className="relative mt-13">
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-6">
                {timeline.map((step) => (
                  <TimelineStep key={step.id} {...step} />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </Section>
  );
}
