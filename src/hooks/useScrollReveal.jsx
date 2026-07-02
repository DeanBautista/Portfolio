import { useEffect, useRef, useState } from "react";

export function useScrollReveal({
  threshold = 0.18,
  rootMargin = "0px 0px -10% 0px",
  resetKey,
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
  }, [resetKey]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

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

    const rect = node.getBoundingClientRect();
    const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
    if (inViewport) {
      setIsVisible(true);
      observer.disconnect();
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, resetKey]);

  return [ref, isVisible];
}

export default useScrollReveal;