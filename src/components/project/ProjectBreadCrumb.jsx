export default function ProjectBreadcrumb({ onBack, name }) {
  return (
    <div className="flex items-center gap-2.5 border-b border-white/10 px-6 py-4">
      <button
        onClick={onBack}
        className="cursor-pointer p-0 font-mono text-[11px] uppercase tracking-[0.1em] text-[#f5f0e8]/40"
      >
        ← Back
      </button>

      <span className="text-[11px] text-white/15">/</span>

      <span className="font-mono text-[11px] tracking-[0.08em] text-[#f5f0e8]/40">
        Projects
      </span>

      <span className="text-[11px] text-white/15">/</span>

      <span className="font-mono text-[11px] tracking-[0.08em] text-[#a8e63d]">
        {Array.isArray(name) ? name.join("") : name}
      </span>
    </div>
  );
}