import Section from "../ui/Section";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import MetricCard from "../ui/MetricCard";

import marketContext from "@/constants/marketContext";
import AnimatedSection from "../ui/AnimatedSection";

export default function MarketContext() {
  return (
    <Section id="market">
      <Container>
        <div className="rounded-2xl border bg-[#F2EDE6] border-[#FF91006B] px-6 py-15  lg:px-14 lg:py-20">
          {/* Heading Row */}
          <div className="grid gap-3 lg:gap-12 lg:grid-cols-2 lg:items-start">
            <AnimatedSection>
              <SectionHeader
                theme="light"
                eyebrow="// Market Context"
                title={
                  <span className="text-3xl font-bold tracking-[-0.68px] leading-9">
                    AI adoption is growing.
                    <br /> Production is still the
                    <br /> bottleneck.
                  </span>
                }
              />
            </AnimatedSection>

            <p className="max-w-md text-base text-[#1A120DB8] leading-6 lg:mt-10 lg:justify-self-end">
              The market has adopted AI. The gap is between adoption and
              production-grade deployment. That&apos;s exactly where we operate.
            </p>
          </div>

          {/* Metric Cards */}
          <div className="mt-14 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {marketContext.map((item) => (
              <MetricCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
