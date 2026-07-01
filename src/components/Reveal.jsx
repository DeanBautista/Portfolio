import useScrollReveal from "../hooks/useScrollReveal";
import { useLocation } from "react-router-dom";
import "../animation.css";

/**
 * Reveal
 * Wraps any block in a fade + slide-up that fires once when scrolled into view.
 * Base look (opacity/transform/transition timing) comes from the `.reveal` /
 * `.reveal--visible` classes in animation.css. `delay` and `y` are per-instance
 * overrides applied inline since every Reveal in a stagger needs a different value.
 *
 * <Reveal delay={100}><SomeCard /></Reveal>
 */
export default function Reveal({
  children,
  delay = 0,
  y = 20,
  duration,
  className = "",
  as: Tag = "div",
  threshold,
  rootMargin,
}) {
  const { pathname } = useLocation();
  const [ref, isVisible] = useScrollReveal({ threshold, rootMargin, resetKey: pathname });

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? "reveal--visible" : ""} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        // Only override the default transform distance / duration when explicitly passed,
        // otherwise let the animation.css defaults (20px / 700ms) apply.
        ...(y !== 20 && !isVisible ? { transform: `translateY(${y}px)` } : {}),
        ...(duration ? { transitionDuration: `${duration}ms` } : {}),
      }}
    >
      {children}
    </Tag>
  );
}