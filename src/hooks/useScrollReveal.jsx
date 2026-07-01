import { useEffect, useRef, useState } from "react";

/**
 * useScrollReveal
 * Fires `true` once an element crosses the given viewport threshold, then
 * disconnects — animation plays once per page load, not on every scroll pass.
 *
 * @param {Object} opts
 * @param {number} opts.threshold - 0–1, how much of the element must be visible
 * @param {string} opts.rootMargin - shifts the trigger point (negative = trigger later)
 * @param {*} opts.resetKey - when this value changes, isVisible resets to false
 *   and the observer re-attaches. Pass something route-scoped (e.g. `pathname`
 *   from useLocation) so reveals replay when navigating between pages that
 *   reuse the same component instance (e.g. client-side route params).
 * @returns {[React.RefObject, boolean]} [ref, isVisible]
 */
export function useScrollReveal({
  threshold = 0.18,
  rootMargin = "0px 0px -10% 0px",
  resetKey,
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Reset visibility whenever resetKey changes (e.g. route/slug change),
  // so the element can animate in again instead of staying stuck visible.
  useEffect(() => {
    setIsVisible(false);
  }, [resetKey]);

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
  }, [threshold, rootMargin, resetKey]);

  return [ref, isVisible];
}

export default useScrollReveal;