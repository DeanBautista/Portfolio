import Reveal from "../Reveal";

export default function ProjectStats({ stats }) {
  return (
    <div className="mt-8 border-y border-white/10 max-w-[1900px] mx-auto">
      <div
        className="grid"
        style={{ gridTemplateColumns: `repeat(${stats.length}, 1fr)` }}
      >
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 70} y={14}>
            <div
              className={`px-6 py-5 ${
                i < stats.length - 1 ? "border-r border-white/10" : ""
              }`}
            >
              <div className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-[#f5f0e8]/40">
                {s.label}
              </div>
              {s.accent ? (
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#a8e63d]" />
                  <span className="text-[15px] font-black text-[#a8e63d]">
                    {s.value}
                  </span>
                </div>
              ) : (
                <div
                  className="font-black leading-none text-[#f5f0e8]"
                  style={{
                    fontSize: s.value.length > 5 ? 15 : 22,
                    paddingTop: s.value.length > 5 ? 4 : 0,
                  }}
                >
                  {s.value}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}