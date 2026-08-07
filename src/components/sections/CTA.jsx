import Image from "next/image";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";

export default function CTASection() {
  return (
    <section className="py-1">
      <Container>
        <div>
          <div className="relative overflow-hidden rounded-2xl border border-[#FF91006B]">
            <div className="absolute left-3 top-3 h-6 w-6 border-l-2 border-t-2 border-[#FF91008C]" />
            <div className="absolute bottom-3 right-3 h-6 w-6 border-b-2 border-r-2 border-[#FF91008C]" />
            <div className="absolute top-3 right-3 h-6 w-6 border-t-2 border-r-2 border-[#FF91008C]" />
            <div className="absolute bottom-3 left-3 h-6 w-6 border-b-2 border-l-2 border-[#FF91008C]" />
            <Image
              src="/images/backgrounds/get-started.webp"
              alt="People discussing AI solutions"
              width={1600}
              height={700}
              className="w-full min-h-96 object-cover"
            />

            {/* Content */}

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="lg:w-[85%] px-10 py-25 bg-black/50">
                <SectionHeader
                  theme="dark"
                  eyebrow="// Get Started"
                  title={
                    <span className="mt-6 text-[32px] lg:text-[80px] 2xl:text-[80px]  font-bold tracking-[-1.68px] leading-none">
                      Tell us the problem.
                      <br />
                      Not the technology
                    </span>
                  }
                  description={
                    <span className="font-heading font-medium text-base mt-5 lg:tracking-[-0.36px] leading-7">
                      Describe what is costing you money, time or risk today. We
                      will tell you honestly whether AI is the right instrument
                    </span>
                  }
                />

                <Button className="mt-10">Start a Conversation</Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
