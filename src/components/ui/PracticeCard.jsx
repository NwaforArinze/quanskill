import Image from "next/image";
import Panel from "./Panel";

export default function PracticeCard({ icon, title, description }) {
  return (
    <Panel className="relative min-h-[250px] bg-[#1B1611]">
      <div className="absolute right-3 top-3 h-3 w-3 border-r border-t border-[#FF910080]" />
      <Image src={icon} alt={title} width={80} height={80} className="mb-10" />

      <h3 className="text-base uppercase font-bold tracking-[0.56px] text-white">
        {title}
      </h3>

      <p className="mt-6 pr-10 text-base tracking-[-0.36px] leading-6 text-[#F4EFE9B2]">
        {description}
      </p>
    </Panel>
  );
}
