export default function Panel({
  children,
  className = "",
  variant = "dark",
  hover = true,
}) {
  const variants = {
    dark: "bg-[#18120F] border border-[#3B2C1E]",

    light: "bg-[#F5F1EC] border border-[#DDD7D1]",

    orange: "bg-[#F89A17]",
  };

  return (
    <div
      className={`
        rounded-[16px]
        ${variants[variant]}
        p-8
        transition-all
        duration-300
        ${hover ? "hover:-translate-y-1 hover:border-[#F89A17]" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
