import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description && (
        <div className="mt-4 space-y-3 text-base leading-relaxed text-muted">
          {description}
        </div>
      )}
    </div>
  );
}
