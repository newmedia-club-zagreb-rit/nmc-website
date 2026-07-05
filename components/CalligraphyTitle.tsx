"use client";

import { useEffect, useRef } from "react";

const GRADIENT_ID = "calligraphy-gradient";

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
    el.style.strokeDasharray = `${length}`;
    el.style.strokeDashoffset = `${length}`;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.strokeDashoffset = "0";
      el.style.fill = `url(#${GRADIENT_ID})`;
      return;
    }

    el.classList.add("calligraphy-animate");
  }, [text]);

  return (
    <div className={className}>
      <svg
        className="calligraphy-svg mx-auto w-full max-w-4xl"
        viewBox="0 0 800 96"
        role="img"
        aria-label={text}
      >
        <defs>
          <linearGradient id={GRADIENT_ID} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4e36a1" />
            <stop offset="35%" stopColor="#8c546b" />
            <stop offset="68%" stopColor="#9d4825" />
            <stop offset="100%" stopColor="#743435" />
          </linearGradient>
        </defs>
        <text ref={textRef} x="400" y="68" textAnchor="middle" className="calligraphy-text">
          {text}
        </text>
      </svg>
    </div>
  );
}
