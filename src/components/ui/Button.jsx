export default function Button({
  children,
  className = "",
  variant = "primary",
  size = "md",
}) {
  const base =
    "inline-flex items-center gap-2 rounded-[10px] text-sm font-bold transition-all duration-300 uppercase tracking-[0.28px]";

  const variants = {
    primary: "bg-[#FF9100] text-[#14100D] hover:brightness-110",

    outline:
      "border border-[#4A3B31] bg-transparent text-white font-normal hover:border-[#F89A17] ",
  };

  const sizes = {
    sm: "pl-[15px] pr-[5px] py-[8px]",
    md: "px-5 py-3",
    lg: "px-8 py-4",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}
