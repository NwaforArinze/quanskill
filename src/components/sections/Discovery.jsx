import Section from "../ui/Section";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import PipelineCard from "../ui/PipelineCard";

import discoveryCards from "@/constants/discovery";
import AnimatedSection from "../ui/AnimatedSection";

export default function Discovery() {
  return (
    <Section id="pipeline">
      <Container>
        {/* <div className="grid gap-20 lg:grid-cols-2"> */}
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1fr] rounded-2xl border bg-[#F2EDE6] border-[#FF91006B] px-6 lg:px-16 2xl:px-30 py-15">
          {/* LEFT */}

          <div className="lg:sticky top-10 self-start inline-block lg:max-w-[85%] 2xl:max-w-[60%]">
            <AnimatedSection>
              <SectionHeader
                theme="light"
                eyebrow="// TWO COMPANIES. ONE PIPELINE"
                title={
                  <span className="text-[26px] lg:text-4xl 2xl:text-[38px] 2xl:leading-[41.8px] font-bold tracking-[-0.88px] 2xl:text-5xl">
                    Discovery and delivery should never be separate companies.
                  </span>
                }
                description="Most AI failures happen in the gap between advisors and
                  builders. We removed the gap."
              />
            </AnimatedSection>

            <AnimatedSection>
              <Button className="mt-7" size="lg">
                Talk to Our Team
              </Button>
            </AnimatedSection>
          </div>

          {/* RIGHT */}
          <AnimatedSection>
            <div className="space-y-4">
              {discoveryCards.map((card) => (
                <PipelineCard key={card.id} {...card} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </Section>
  );
}
