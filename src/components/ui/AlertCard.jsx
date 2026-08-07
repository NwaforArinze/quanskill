export default function AlertCard({ text }) {
  return (
    <div className="relative rounded-2xl border border-[#FF910038] bg-[#1B1611] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg pr-10">
      <div className="absolute right-3 top-3 h-3 w-3 border-r border-t border-[#FF910080]" />
      <p className="font-mono text-xs 2xl:text-base uppercase leading-6 tracking-[0.12em] text-[#F3EFEA]">
        {text}
      </p>
    </div>
  );
}
