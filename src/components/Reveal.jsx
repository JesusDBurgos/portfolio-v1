import { useEffect, useRef, useState } from "react";

const shouldShowImmediately = () =>
  typeof window === "undefined" ||
  typeof IntersectionObserver === "undefined" ||
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Reveal = ({ as: Element = "div", children, className = "", delay = 0 }) => {
  const elementRef = useRef(null);
  const [visible, setVisible] = useState(shouldShowImmediately);

  useEffect(() => {
    if (visible || !elementRef.current) return undefined;

    const element = elementRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <Element
      ref={elementRef}
      className={`transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Element>
  );
};

export default Reveal;