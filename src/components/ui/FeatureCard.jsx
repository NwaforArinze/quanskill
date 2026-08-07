import Button from "./Button";

export default function FeatureCard({
  title,
  description,
  button,
  variant = "default",
}) {
  const active = variant === "active";

  return (
    <div
      className={`
        group
        rounded-2xl
        border
        p-6
        lg:p-8
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[#F89A17]
        ${
          active
            ? "border-[#FF910038] bg-[#FF91000D]"
            : "border-[#F4EFE929] bg-[#1A120DB8]"
        }
      `}
    >
      <h3 className="lg:h-20 font-heading text-[25px] leading-[32px] lg:text-3xl lg:leading-[40px] text-[#F4EFE9] transition-colors duration-300 group-hover:text-[#F89A17]">
        {title}
      </h3>

      <p className="mt-2 2xl:pr-19 lg:mt-3 font-light text-sm text-[#F4EFE999] tracking-[0.8px] leading-5">
        {description}
      </p>

      <Button size="md" className="mt-13 lg:mt-16">
        {button}
      </Button>
    </div>
  );
}
