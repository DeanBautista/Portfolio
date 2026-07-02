import Reveal from "../Reveal";

export default function ProjectStack({ stack }) {
  return (
    <div className="border-r border-white/10 p-6">
      <Reveal delay={0} y={14}>
        <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#f5f0e8]/40">
          Stack
        </div>
      </Reveal>
      <div className="flex flex-col gap-2.5">
        {stack.map((s, i) => (
          <Reveal key={s.layer} delay={80 + i * 60} y={12}>
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#f5f0e8]/50">
                  {s.layer}
                </span>
                <span className="font-mono text-xs text-[#f5f0e8]">
                  {s.tech}
                </span>
              </div>
              {i < stack.length - 1 && (
                <div className="mt-2.5 h-px bg-white/[0.06]" />
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}