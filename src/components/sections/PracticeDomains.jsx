import Section from "../ui/Section";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import PracticeCard from "../ui/PracticeCard";

import practices from "@/constants/practices";
import AnimatedSection from "../ui/AnimatedSection";

export default function PracticeDomains() {
  return (
    <Section id="practice">
      <Container>
        <div className="rounded-2xl border bg-[#14100D] border-[#FF91006B] px-6 py-15 lg:px-14 lg:py-20">
          <AnimatedSection>
            <SectionHeader
              align="center"
              eyebrow="// Six Practice Domains"
              title={
                <span className="text-[26px] leading-[34.4px] lg:text-[40px] lg:leading-[44.4px] font-bold tracking-[-0.88px]">
                  Each framed as a business problem, designed
                  <br /> by QuanSkill, engineered by QuanSolutions.
                </span>
              }
            />
          </AnimatedSection>

          <AnimatedSection>
            <div className="mt-10 lg:mt-15 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {practices.map((practice) => (
                <PracticeCard key={practice.id} {...practice} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </Section>
  );
}
