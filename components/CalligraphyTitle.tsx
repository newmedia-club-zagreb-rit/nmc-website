"use client";

import { useEffect, useRef } from "react";

export default function CalligraphyTitle({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const textRef = useRef<SVGTextElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const length = Math.ceil(el.getComputedTextLength() * 1.15);
    el.style.setProperty("--stroke-length", `${length}`);
    el.style.strokeDasharray = `${length}`;
    el.style.strokeDashoffset = `${length}`;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.strokeDashoffset = "0";
      el.style.fill = "var(--accent)";
      return;
    }

    el.classList.add("marker-title-animate");
  }, [text]);

  return (
    <div className={className}>
      <svg
        className="marker-title-svg mx-auto w-full max-w-6xl"
        viewBox="0 0 800 160"
        role="img"
        aria-label={text}
      >
        <text ref={textRef} x="400" y="110" textAnchor="middle" className="marker-title-text">
          {text}
        </text>
      </svg>
    </div>
  );
}
