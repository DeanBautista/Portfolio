import { useEffect, useRef, useState } from "react";

/**
 * useScrollReveal
 * Fires `true` once an element crosses the given viewport threshold, then
 * disconnects — animation plays once per page load, not on every scroll pass.
 *
 * @param {Object} opts
 * @param {number} opts.threshold - 0–1, how much of the element must be visible
 * @param {string} opts.rootMargin - shifts the trigger point (negative = trigger later)
 * @returns {[React.RefObject, boolean]} [ref, isVisible]
 */
export function useScrollReveal({ threshold = 0.18, rootMargin = "0px 0px -10% 0px" } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect users who've asked for reduced motion — show immediately, no animation
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}

export default useScrollReveal;