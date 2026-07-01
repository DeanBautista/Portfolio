import Reveal from "../Reveal";

export default function ProjectCTA({ links, onNext }) {
  return (
    <div
      style={{
        padding: "20px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 12,
      }}
    >
      <Reveal delay={0} y={14} threshold={0} rootMargin="0px">
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a
            href={links.demo}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "11px 22px",
              fontSize: 12,
              fontFamily: "'Courier New', monospace",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: "pointer",
              borderRadius: 2,
              background: "#a8e63d",
              border: "1px solid #a8e63d",
              color: "#0a0a0a",
              fontWeight: 900,
              textDecoration: "none",
            }}
            target="_blank"
          >
            ↗ Live Demo
          </a>
          <a
            href={links.github}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "11px 22px",
              fontSize: 12,
              fontFamily: "'Courier New', monospace",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: "pointer",
              borderRadius: 2,
              background: "transparent",
              border: "1px solid rgba(245,240,232,0.3)",
              color: "#f5f0e8",
              textDecoration: "none",
            }}
            target="_blank"
          >
            GitHub ↗
          </a>
        </div>
      </Reveal>

      <Reveal delay={80} y={14} threshold={0} rootMargin="0px">
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button
            onClick={onNext}
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "9px 16px",
              fontSize: 11,
              fontFamily: "'Courier New', monospace",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: "pointer",
              borderRadius: 2,
              background: "transparent",
              border: "1px solid rgba(245,240,232,0.3)",
              color: "#f5f0e8",
            }}
          >
            Next project →
          </button>
        </div>
      </Reveal>
    </div>
  );
}