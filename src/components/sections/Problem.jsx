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
        <div className="overflow-hidden bg-[#F2EDE6] rounded-2xl border border-[#FF91006B] px-6 py-14 lg:px-16 lg:py-20">
          <div className="grid items-center gap-4 lg:grid-cols-2">
            {/* LEFT */}

            <div>
              <AnimatedSection>
                <SectionHeader
                  theme="light"
                  eyebrow="// Customer's Pain"
                  title={
                    <>
                      Most AI Projects Never Reach Production Companies
                      don&apos;t struggle because AI doesn&apos;t work.
                      <br /> They struggle because discovery, engineering, and
                      ownership are disconnected.
                    </>
                  }
                  description=""
                />
              </AnimatedSection>
              <AnimatedSection>
                <Button className="mt-8">More About Us</Button>
              </AnimatedSection>

              <AnimatedSection>
                <div className="mt-16">
                  <Accordion items={problems} />
                </div>
              </AnimatedSection>
            </div>

            {/* RIGHT */}

            <div className="relative">
              <Image
                src="/images/problem/customer-pain.png"
                alt="Problem Illustration"
                width={700}
                height={700}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
