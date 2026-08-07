import Section from "../ui/Section";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import FeatureCard from "../ui/FeatureCard";

import startingPoints from "@/constants/startingPoints";
import AnimatedSection from "../ui/AnimatedSection";

export default function StartingPoint() {
  return (
    <Section id="quansolution">
      <Container>
        <div className="items-start bg-[url('/images/backgrounds/starting-bg.webp')] bg-cover bg-center bg-no-repeat gap-24 rounded-2xl border border-[#FF91006B] px-6 lg:px-16 2xl:px-30 py-15 lg:py-23">
          <AnimatedSection>
            <SectionHeader
              align="center"
              eyebrow="// Pick Your Starting Point"
              title={
                <div className="lg:w-[80%] lg:w-[50%] m-auto font-heading text-2xl lg:text-4xl font-bold tracking-[-0.88px] 2xl:text-[44px] 2xl:leading-[48.4px]">
                  Three ways in. Every one ends at a system running in
                  production.
                </div>
              }
            />
          </AnimatedSection>
          <div className="border border-[#F4EFE929] bg-[#F4EFE91F] rounded-[22px] p-4 lg:p-7 2xl:p-8.5 mt-10 lg:mt-16 shadow-[0_34px_90px_0_rgba(0,0,0,0.5)] backdrop-blur-[20px]">
            <AnimatedSection>
              <div className=" grid gap-3.5 lg:grid-cols-3">
                {startingPoints.map((item) => (
                  <FeatureCard
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    button={item.button}
                    variant={item.variant}
                  />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </Section>
  );
}
