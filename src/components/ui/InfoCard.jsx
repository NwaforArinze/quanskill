export default function InfoCard({ label, title, description }) {
  return (
    <div className="rounded-3xl border border-[#E6E1DB] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#A89F98]">
        {label}
      </p>

      <h3 className="mt-4 text-3xl font-bold text-[#14110F]">{title}</h3>

      <p className="mt-4 leading-7 text-[#5C5652]">{description}</p>
    </div>
  );
}
