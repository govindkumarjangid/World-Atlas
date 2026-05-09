export const DetailRow = ({ label, value, mono = false }) => (
    <div className="flex flex-col gap-0.5 py-2 border-b border-slate-700/30 last:border-b-0 sm:flex-row sm:gap-4">
        <span className="min-w-[160px] text-sm font-semibold text-slate-300 shrink-0">{label}</span>
        <span className={`text-sm text-slate-100 break-words ${mono ? "font-mono" : ""}`}>{value || "N/A"}</span>
    </div>
);
