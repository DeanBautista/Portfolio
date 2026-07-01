export default function ProjectBreadcrumb({ onBack, name }) {
  return (
    <div
      style={{
        padding: "16px 24px",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      <button
        onClick={onBack}
        style={{
          background: "none",
          border: "none",
          color: "rgba(245,240,232,0.4)",
          fontFamily: "'Courier New', monospace",
          fontSize: 11,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          cursor: "pointer",
          padding: 0,
        }}
      >
        ← Back
      </button>
      <span style={{ color: "rgba(255,255,255,0.15)", fontSize: 11 }}>/</span>
      <span
        style={{
          fontFamily: "'Courier New', monospace",
          fontSize: 11,
          letterSpacing: "0.08em",
          color: "rgba(245,240,232,0.4)",
        }}
      >
        Projects
      </span>
      <span style={{ color: "rgba(255,255,255,0.15)", fontSize: 11 }}>/</span>
      <span
        style={{
          fontFamily: "'Courier New', monospace",
          fontSize: 11,
          letterSpacing: "0.08em",
          color: "#a8e63d",
        }}
      >
        {name.join("")}
      </span>
    </div>
  );
}