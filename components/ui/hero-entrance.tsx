"use client";

import { type ReactNode } from "react";

interface HeroEntranceProps {
  children: ReactNode;
  className?: string;
}

export default function HeroEntrance({ children, className = "" }: HeroEntranceProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export function HeroItem({
  children,
  delay = 0,
  animation = "fade-up",
}: {
  children: ReactNode;
  delay?: number;
  animation?: string;
}) {
  return (
    <div
      style={{
        animation: `${animation} 700ms ease-out ${delay}ms both`,
      }}
    >
      {children}
    </div>
  );
}
