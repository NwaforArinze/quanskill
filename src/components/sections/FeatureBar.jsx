import Container from "../ui/Container";
import features from "@/constants/features";

export default function FeatureBar() {
  return (
    <section className="relative overflow-hidden">
      <Container className="max-w-none px-10">
        <div className="marquee rounded-2xl border border-[#FF91006B] bg-[#14100D] px-8 lg:px-16 2xl:px-30 py-15 lg:py-18 2xl:py-20">
          <div className="m-auto font-heading mb-7 max-w-3xl text-center text-lg 2xl:text-xl font-bold tracking-[-0.4px] text-[#F4EFE9]">
            <h2>
              Built by AI engineers, product architects and domain specialists.
            </h2>
          </div>
          <div className="marquee px-14">
            <div className="marquee-track">
              {[...features, ...features].map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 whitespace-nowrap"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF910024]">
                      <Icon size={16} className="text-[#FF9100]" />
                    </div>

                    <span className="font-bold text-base 2xl:text-lg tracking-[-0.36px] text-[#F4EFE999]">
                      {feature.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
