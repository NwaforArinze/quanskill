import Section from "../ui/Section";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import AlertCard from "../ui/AlertCard";

import failureModes from "@/constants/failureModes";
import AnimatedSection from "../ui/AnimatedSection";

export default function FailureModes() {
  return (
    <Section id="why">
      <Container>
        <div className="rounded-2xl border border-[#FF91006B] bg-[url('/images/backgrounds/failure-bg.webp')] bg-cover bg-center bg-no-repeat px-6 lg:px-16 2xl:px-30 py-15 lg:py-20">
          <div className="absolute left-6 lg:left-12 top-3 h-5 w-5 border-l-2 border-t-2 border-[#1A120DB8]" />
          <div className="absolute top-3 right-6 lg:right-12 h-5 w-5 border-t-2 border-r-2 border-[#1A120DB8]" />
          <AnimatedSection>
            <SectionHeader
              theme="light"
              eyebrow="// Why AI Projects Stall"
              title={
                <span className="font-heading font-bold text-[26px] leading-[34px] lg:text-[36px] lg:leading-[42px] tracking-[-0.76px] 2xl:text-[38px]">
                  Four failure modes behind
                  <br /> nearly every abandoned AI
                  <br /> initiative.
                </span>
              }
              className="max-w-2xl"
            />
          </AnimatedSection>

          <AnimatedSection>
            <div className="mt-7 lg:mt-10 grid gap-3 lg:gap-5 md:grid-cols-2 xl:grid-cols-4">
              {failureModes.map((item) => (
                <AlertCard key={item.id} text={item.text} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </Section>
  );
}
