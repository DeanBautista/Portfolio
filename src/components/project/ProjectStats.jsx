import Reveal from "../Reveal";

export default function ProjectStats({ stats }) {
  return (
    <div
      style={{
        borderTop: "1px solid rgba(255,255,255,0.1)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        marginTop: 32,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
        }}
      >
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 70} y={14}>
            <div
              style={{
                padding: "20px 24px",
                borderRight:
                  i < stats.length - 1
                    ? "1px solid rgba(255,255,255,0.1)"
                    : "none",
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  fontFamily: "'Courier New', monospace",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(245,240,232,0.4)",
                  marginBottom: 6,
                }}
              >
                {s.label}
              </div>
              {s.accent ? (
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#a8e63d",
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 900,
                      color: "#a8e63d",
                    }}
                  >
                    {s.value}
                  </span>
                </div>
              ) : (
                <div
                  style={{
                    fontSize: s.value.length > 5 ? 15 : 22,
                    fontWeight: 900,
                    color: "#f5f0e8",
                    lineHeight: 1,
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