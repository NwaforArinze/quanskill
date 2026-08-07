import Image from "next/image";

export default function MetricCard({ image, value, title, description }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-[#0F0C0A] ">
      <Image
        src={image}
        alt={title}
        width={500}
        height={500}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* <div className="absolute inset-0 bg-gradient-to-t from-[#0F0C0A]/90 via-[#0F0C0A]/30 to-transparent" /> */}
      <div className="absolute inset-x-0 bottom-9 p-6 w-[75%] 2xl:w-[55%]">
        <h3 className="font-heading text-3xl font-bold text-[#F89A17]">
          {value}
        </h3>

        <p className="mt-3 text-xs tracking-[-0.68px] text-[#D8D1CB]">
          {title}
        </p>
        <p className="text-xs tracking-[-0.68px] text-[#d8D1CB95]">
          {description}
        </p>
      </div>
    </div>
  );
}
