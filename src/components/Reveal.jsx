import { useEffect, useRef, useState } from "react";

/** Shared, one-time reveal for section copy. */
export default function Reveal({
  as = "div",
  delay = 0,
  className = "",
  children,
  variants: _variants,
  ...rest
}) {
  const elementRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const Element = as;

  useEffect(() => {
    const element = elementRef.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Element
      ref={elementRef}
      className={`${className} editorial-reveal ${
        revealed ? "is-revealed" : ""
      }`.trim()}
      style={{ "--reveal-delay": `${delay}s` }}
      {...rest}
    >
      {children}
    </Element>
  );
}
