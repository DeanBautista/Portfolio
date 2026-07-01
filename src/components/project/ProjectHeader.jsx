import { useNavigate } from "react-router-dom";
import Reveal from "../Reveal";

export default function ProjectHeader({ name, tags, description }) {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px 24px 0" }}>
      <Reveal delay={0} y={12}>
        <button
          onClick={() => {
            navigate(-1);
          }}
          style={{
            background: "none",
            border: "none",
            color: "#a8e63d",
            cursor: "pointer",
            fontFamily: "'Courier New', monospace",
            fontSize: 13,
            marginBottom: 24,
          }}
        >
          ← Back
        </button>
      </Reveal>

      <Reveal delay={80} y={12}>
        <div
          style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}
        >
          {tags.map((t, i) => (
            <span
              key={t}
              style={{
                display: "inline-block",
                border: `1px solid ${
                  i === 0 ? "#a8e63d" : "rgba(245,240,232,0.2)"
                }`,
                padding: "4px 12px",
                fontSize: 11,
                fontFamily: "'Courier New', monospace",
                letterSpacing: "0.08em",
                color: i === 0 ? "#a8e63d" : "rgba(245,240,232,0.6)",
                borderRadius: 2,
                textTransform: "uppercase",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal delay={150} y={20}>
        <div style={{ overflow: "hidden" }}>
          <h1
            style={{
              fontSize: "clamp(2.6rem, 9vw, 7rem)",
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 0.92,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            {name[0]}
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "2px #f5f0e8",
              }}
            >
              {name[1]}.
            </span>
          </h1>
        </div>
      </Reveal>

      <Reveal delay={260} y={16}>
        <p
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: 13,
            color: "rgba(245,240,232,0.6)",
            lineHeight: 1.7,
            marginTop: 20,
            maxWidth: 560,
          }}
        >
          {description}
        </p>
      </Reveal>
    </div>
  );
}