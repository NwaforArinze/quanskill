export default function Section({
  id,
  children,
  className = "",
  background = "",
}) {
  return (
    <section id={id} className={`relative ${background} ${className} mt-1`}>
      {children}
    </section>
  );
}
