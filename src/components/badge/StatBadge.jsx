export default function StatBadge({ number, label }) {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-[#FF910052] bg-[#F4EFE91F] px-4 py-2 uppercase">
      <span className="rounded-lg bg-[#FF910024] px-1.5 font-heading text-[18px] 2xl:text-[20px] font-bold text-[#FF9100]">
        {number}
      </span>

      <span className="text-[12px] 2xl:text-[14px] font-light tracking-[0.56px] text-[#F4EFE9]">
        {label}
      </span>
    </div>
  );
}
