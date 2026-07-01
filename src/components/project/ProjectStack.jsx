import Reveal from "../Reveal";

export default function ProjectStack({ stack }) {
  return (
    <div style={{ padding: 24, borderRight: "1px solid rgba(255,255,255,0.1)" }}>
      <Reveal delay={0} y={14}>
        <div
          style={{
            fontSize: 10,
            fontFamily: "'Courier New', monospace",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(245,240,232,0.4)",
            marginBottom: 16,
          }}
        >
          Stack
        </div>
      </Reveal>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {stack.map((s, i) => (
          <Reveal key={s.layer} delay={80 + i * 60} y={12}>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: 12,
                    color: "rgba(245,240,232,0.5)",
                  }}
                >
                  {s.layer}
                </span>
                <span
                  style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: 12,
                    color: "#f5f0e8",
                  }}
                >
                  {s.tech}
                </span>
              </div>
              {i < stack.length - 1 && (
                <div
                  style={{
                    height: 1,
                    background: "rgba(255,255,255,0.06)",
                    marginTop: 10,
                  }}
                />
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}