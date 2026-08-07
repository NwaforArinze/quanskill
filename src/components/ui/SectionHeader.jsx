export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "dark",
  className = "",
}) {
  const colors = {
    dark: {
      title: "text-[#F4EFE9]",
      description: "text-[#F4EFE9D1]",
      eyebrow: "text-[#F4EFE9D1]",
    },
    light: {
      title: "text-[#1A120D]",
      description: "text-[#1A120DB8]",
      eyebrow: "text-[#1A120DB8]",
    },
  };
  return (
    <div
      className={`${
        align === "center" ? "text-center mx-auto" : ""
      } ${className}`}
    >
      {eyebrow && (
        <p
          className={`mb-3 text-xs uppercase tracking-[2.24px] ${colors[theme].eyebrow}`}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={`font-heading text-xl lg:text-2xl leading-[30px] 2xl:leading-[33.8px] ${colors[theme].title} 2xl:text-[26px] font-medium tracking-[-1.3px]`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-3 text-base leading-6 lg:text-lg lg:leading-8 ${colors[theme].description}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
