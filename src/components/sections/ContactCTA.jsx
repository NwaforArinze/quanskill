import { Phone, Mail } from "lucide-react";
import Container from "../ui/Container";

export default function ContactCTA() {
  return (
    <section>
      <Container>
        <div className="bg-[#14100D] relative mx-auto text-center rounded-2xl border border-[#FF91006B] p-6 lg:px-14 py-15 lg:py-20">
          <div className="absolute left-3 top-3 h-6 w-6 border-l-2 border-t-2 border-[#FF91008C]" />
          <div className="absolute bottom-3 right-3 h-6 w-6 border-b-2 border-r-2 border-[#FF91008C]" />

          <p className="font-heading mx-auto max-w-5xl text-2xl leading-10 lg:text-5xl font-bold lg:leading-14 text-[#FF9100]">
            Tell us the problem. Not the technology. Describe what&apos;s
            costing your organisation money, time or risk today. We&apos;ll tell
            you honestly whether AI is the right solution.
          </p>

          <div className="mt-12 pl-7 lg:pl-0 lg:mt-16 flex flex-col items-start lg:justify-center gap-8 md:flex-row md:gap-20">
            <div className="flex items-center justify-center gap-3">
              <Phone
                size={35}
                className="text-[#FF9100] p-2 rounded-[10px] bg-[#FF910024] border border-[#FF910073]"
              />

              <div className="text-left">
                <p className="text-xs uppercase tracking-[0.7px] text-[#F4EFE98C]">
                  Phone
                </p>

                <p className="text-[#F4EFE9] mt-1">+84 942 322 620</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <Mail
                size={35}
                className="text-[#FF9100] p-2 rounded-[10px] bg-[#FF910024] border border-[#FF910073]"
              />

              <div className="text-left">
                <p className="text-xs uppercase tracking-[0.7px] text-[#F4EFE98C]">
                  Email
                </p>

                <p className="text-[#F4EFE9] mt-1 uppercase">
                  info@quanskill.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
