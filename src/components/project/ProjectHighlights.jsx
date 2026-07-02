import Reveal from "../Reveal";

export default function ProjectHighlights({ highlights }) {
  return (
    <div className="p-6">
      <Reveal delay={0} y={14}>
        <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#f5f0e8]/40">
          Highlights
        </div>
      </Reveal>
      <div className="flex flex-col gap-2.5">
        {highlights.map((h, i) => (
          <Reveal key={h} delay={80 + i * 60} y={12}>
            <div className="flex items-start gap-2.5">
              <span className="mt-px flex-shrink-0 font-mono text-xs text-[#a8e63d]">
                →
              </span>
              <span className="font-mono text-xs leading-[1.5] text-[#f5f0e8]/70">
                {h}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}