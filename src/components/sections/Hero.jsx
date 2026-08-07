import Container from "../ui/Container";
import Button from "../ui/Button";
import Image from "next/image";
import StatBadge from "../badge/StatBadge";
import AnimatedSection from "../ui/AnimatedSection";

const stats = [
  { number: 6, label: "Practice Domains" },
  { number: 2, label: "Companies" },
  { number: 1, label: "Delivery Pipeline" },
  { number: 0, label: "Dead Prototypes" },
];
export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-17 lg:pt-18 py-1">
      <Container>
        <div className="grid min-h-[700px] items-start gap-12 2xl:gap-100 lg:gap-24 lg:grid-cols-[1.8fr_1.2fr] rounded-2xl border border-[#FF91006B] px-6 lg:px-16 2xl:px-30 py-15 bg-[url('/images/hero/hero-background.webp')] bg-cover bg-center bg-no-repeat bg-[#0D0908]/40 bg-blend-multiply">
          {/* Left */}
          <AnimatedSection>
            <div className="lg:pb-50">
              <>
                <h1 className="max-w-full text-[33px] lg:text-5xl font-bold leading-[0.95] tracking-tight text-white lg:text-[62px] lg:leading-[69.2px] 2xl:text-7xl 2xl:leading-[79.2px] font-heading">
                  You bring the business problem. We deliver the working AI
                  system
                </h1>

                <p className="font-heading font-normal mt-4 max-w-xl text-base 2xl:text-[18px] leading-6 tracking-[-0.36px] text-[#F4EFE9D1]">
                  QuanSkill finds the right AI opportunity and designs the
                  solution. QuanSolutions builds it, deploys it and keeps it
                  running. One team, start to finish — no gaps, no handoffs, no
                  dead prototypes.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Button size="md">Start a Conversation</Button>

                  <Button variant="outline" size="md">
                    See our Delivery Pipeline
                  </Button>
                </div>
              </>
            </div>
          </AnimatedSection>

          {/* Right */}
          <AnimatedSection>
            <div className="w-full flex justify-center lg:self-end lg:mt-70 2xl:mt-80">
              <div className="space-y-6">
                <div>
                  <Image
                    src="/images/hero/hero-image.png"
                    alt="Hero Image"
                    width={400}
                    height={400}
                  />
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {stats.map((stat) => (
                    <StatBadge
                      key={stat.label}
                      number={stat.number}
                      label={stat.label}
                    />
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
