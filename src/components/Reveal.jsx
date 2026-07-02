import useScrollReveal from "../hooks/useScrollReveal";
import "../animation.css";

export default function Reveal({
  children,
  delay = 0,
  y = 20,
  duration,
  className = "",
  as: Tag = "div",
  threshold,
  rootMargin,
  resetKey, // now opt-in; pass explicitly only where you want replay-on-change (e.g. Project's slug)
}) {
  const [ref, isVisible] = useScrollReveal({ threshold, rootMargin, resetKey });

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? "reveal--visible" : ""} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        ...(y !== 20 && !isVisible ? { transform: `translateY(${y}px)` } : {}),
        ...(duration ? { transitionDuration: `${duration}ms` } : {}),
      }}
    >
      {children}
    </Tag>
  );
}