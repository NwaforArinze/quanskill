export default function TimelineStep({
  id,
  title,
  description,
  color,
  hasLine,
}) {
  const isBlue = color === "blue";

  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Line */}
      {hasLine && (
        <div
          className={`absolute top-8 left-1/2 hidden xl:block h-[2px] ${
            isBlue ? "bg-[#2E8BFF]" : "bg-[#F89A17]"
          }`}
          style={{
            transform: "translateX(32px)",
            width: "calc(100% - 16px)",
          }}
        />
      )}
      {/* Circle */}
      <div
        className={`z-10 flex h-14 w-14 xl:h-16 xl:w-16 xl:text-xl items-center justify-center rounded-full border-2 tracking-[-0.76px] font-heading text-xl font-bold ${
          isBlue
            ? "border-[#2D7DD2] text-[#2D7DD2]"
            : "border-[#FF9100] text-[#FF9100]"
        } bg-[#14100D]`}
      >
        {id}
      </div>

      <h3 className="text-base 2xl:text-[18px] mt-6 font-bold uppercase tracking-[0.56px] text-white">
        {title}
      </h3>

      <p className="font-heading font-light mt-4 max-w-[220px] text-sm 2xl:text-base leading-6 text-[#F4EFE9] tracking-[-0.36px] 2xl:max-w-[300px]">
        {description}
      </p>
    </div>
  );
}
