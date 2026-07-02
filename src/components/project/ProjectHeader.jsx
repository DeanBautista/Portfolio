import { useNavigate } from "react-router-dom";
import Reveal from "../Reveal";

export default function ProjectHeader({ name, tags, description }) {
  const navigate = useNavigate();

  return (
    <div className="px-6 pt-10">
      <Reveal delay={0} y={12}>
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="mb-6 border-none bg-transparent font-mono text-[13px] text-[#a8e63d] cursor-pointer"
        >
          ← Back
        </button>
      </Reveal>

      <Reveal delay={80} y={12}>
        <div className="mb-5 flex flex-wrap gap-2">
          {tags.map((t, i) => (
            <span
              key={t}
              className={`inline-block rounded-sm border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.08em] ${
                i === 0
                  ? "border-[#a8e63d] text-[#a8e63d]"
                  : "border-[#f5f0e8]/20 text-[#f5f0e8]/60"
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal delay={150} y={20}>
        <div className="overflow-hidden">
          <h1 className="m-0 text-[clamp(2.6rem,9vw,7rem)] font-black uppercase leading-[0.92] tracking-[-0.02em]">
            {name[0]}
            <span className="text-transparent [-webkit-text-stroke:2px_#f5f0e8]">
              {name[1]}.
            </span>
          </h1>
        </div>
      </Reveal>

      <Reveal delay={260} y={16}>
        <p className="mt-5 max-w-[560px] font-mono text-[13px] leading-[1.7] text-[#f5f0e8]/60">
          {description}
        </p>
      </Reveal>
    </div>
  );
}