"use client";

import { useEffect, useRef, useState, Children, type ReactNode } from "react";

interface StaggerChildrenProps {
  children: ReactNode;
  staggerDelay?: number;
  animation?: string;
  duration?: number;
  threshold?: number;
  className?: string;
}

export default function StaggerChildren({
  children,
  staggerDelay = 80,
  animation = "fade-up",
  duration = 500,
  threshold = 0.1,
  className = "",
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, i) => (
        <div
          style={{
            opacity: isVisible ? undefined : 0,
            animation: isVisible
              ? `${animation} ${duration}ms ease-out ${i * staggerDelay}ms both`
              : "none",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
