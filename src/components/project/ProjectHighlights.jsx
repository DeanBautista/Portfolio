import Reveal from "../Reveal";

export default function ProjectHighlights({ highlights }) {
  return (
    <div style={{ padding: 24 }}>
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
          Highlights
        </div>
      </Reveal>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {highlights.map((h, i) => (
          <Reveal key={h} delay={80 + i * 60} y={12}>
            <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span
                style={{
                  color: "#a8e63d",
                  fontSize: 12,
                  fontFamily: "'Courier New', monospace",
                  marginTop: 1,
                  flexShrink: 0,
                }}
              >
                →
              </span>
              <span
                style={{
                  fontSize: 12,
                  fontFamily: "'Courier New', monospace",
                  color: "rgba(245,240,232,0.7)",
                  lineHeight: 1.5,
                }}
              >
                {h}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}