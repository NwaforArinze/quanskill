import Image from "next/image";

export default function PipelineCard({
  label,
  title,
  description,
  bullets,
  icon,
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#14100D] p-7.5">
      {/* Top Left Corner */}
      <div className="absolute left-3 top-3 h-3 w-3 border-l-2 border-t-2 border-[#F89A17]" />

      {/* Bottom Right Corner */}
      <div className="absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-[#FF91008C]" />

      {/* Icon */}
      <div className="absolute right-4 top-12 lg:right-8 lg:top-8 hidden lg:flex">
        <Image src={icon} alt="" width={100} height={100} />
      </div>
      <div className="lg:hidden pb-3">
        <Image src={icon} alt="" width={100} height={100} />
      </div>

      <p className="font-light text-xs uppercase tracking-[1.12px] text-[#FF9100]">
        {label}
      </p>

      <h3 className="mt-2 text-sm text-[#F4EFE9B2] font-light">{title}</h3>

      <p className="mt-2 text-sm lg:max-w-[70%] 2xl:max-w-[50%] leading-5 text-[#F4EFE9B2] tracking-[-0.8px]">
        {description}
      </p>

      <ul className="mt-5 space-y-3">
        {bullets.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 font-light text-sm text-[#F4EFE999] tracking-[-0.2px] leading-5"
          >
            <span className="mt-2 h-1 w-1 rounded-full bg-[#F4EFE980]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
