import Image from "next/image";

import Section from "../ui/Section";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import Accordion from "../ui/Accordion";

import problems from "@/constants/problem";
import AnimatedSection from "../ui/AnimatedSection";

export default function Problem() {
  return (
    <Section id="about">
      <Container>
        <div className="overflow-hidden bg-[#F2EDE6] rounded-2xl border border-[#FF91006B] px-6 lg:px-16 2xl:px-30 py-14 lg:py-20">
          <div className="grid items-stretch gap-8 2xl:gap-13 lg:grid-cols-2">
            {/* LEFT */}

            <div className="flex flex-col justify-between">
              <div>
                <AnimatedSection>
                  <SectionHeader
                    theme="light"
                    eyebrow="// Customer's Pain"
                    title={
                      <span className="inline-block lg:max-w-md 2xl:max-w-lg">
                        Most AI Projects Never Reach Production Companies
                        don&apos;t struggle because AI doesn&apos;t work.
                        <br /> They struggle because discovery, engineering, and
                        ownership are disconnected.
                      </span>
                    }
                    description=""
                  />
                </AnimatedSection>
                <AnimatedSection>
                  <Button className="mt-7">More About Us</Button>
                </AnimatedSection>
              </div>

              <AnimatedSection>
                <div className="mt-auto pt-8">
                  <Accordion items={problems} />
                </div>
              </AnimatedSection>
            </div>

            {/* RIGHT */}

            <div>
              <Image
                src="/images/problem/customer-pain.webp"
                alt="Problem Illustration"
                width={700}
                height={700}
                className="w-full border-[24px] bg-[#14100D] rounded-[18px] shadow-[0px_30px_80px_0px_#00000066]"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
