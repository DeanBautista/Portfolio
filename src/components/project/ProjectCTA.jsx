import Reveal from "../Reveal";

export default function ProjectCTA({ links, onNext }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-5">
      <Reveal delay={0} y={14} threshold={0} rootMargin="0px">
        <div className="flex flex-wrap gap-2.5">
          <a
            href={links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[2px] border border-[#a8e63d] bg-[#a8e63d] px-[22px] py-[11px] font-mono text-xs font-black uppercase tracking-[0.1em] text-[#0a0a0a] no-underline"
          >
            ↗ Live Demo
          </a>

          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[2px] border border-white/30 bg-transparent px-[22px] py-[11px] font-mono text-xs uppercase tracking-[0.1em] text-[#f5f0e8] no-underline"
          >
            GitHub ↗
          </a>
        </div>
      </Reveal>

      <Reveal delay={80} y={14} threshold={0} rootMargin="0px">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={onNext}
            className="inline-flex cursor-pointer items-center rounded-[2px] border border-white/30 bg-transparent px-4 py-[9px] font-mono text-[11px] uppercase tracking-[0.1em] text-[#f5f0e8]"
          >
            Next project →
          </button>
        </div>
      </Reveal>
    </div>
  );
}