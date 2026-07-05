import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CtaBanner({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <div className="bg-noise relative overflow-hidden rounded-3xl border border-border bg-background-alt p-10 text-center sm:p-16">
      <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-muted">{description}</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href={primaryHref}
          className="inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-transform hover:scale-105"
        >
          {primaryLabel} <ArrowUpRight size={16} />
        </Link>
        {secondaryHref && secondaryLabel && (
          <Link
            href={secondaryHref}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            {secondaryLabel}
          </Link>
        )}
      </div>
    </div>
  );
}
