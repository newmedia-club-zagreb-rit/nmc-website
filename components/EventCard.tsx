import Link from "next/link";
import clsx from "clsx";
import { ClubEvent } from "@/lib/data/events";
import { getEventHref } from "@/lib/event-pages";
import { Sparkles, Users, Building2, Handshake, Megaphone, ArrowUpRight } from "lucide-react";

const categoryIcons = {
  talk: Sparkles,
  workshop: Users,
  visit: Building2,
  collaboration: Handshake,
  promotion: Megaphone,
};

const categoryLabels = {
  talk: "Talk",
  workshop: "Workshop",
  visit: "Company Visit",
  collaboration: "Collaboration",
  promotion: "Promotion",
};

const categoryColors = {
  talk: "bg-accent/15 text-accent",
  workshop: "bg-accent-2/15 text-accent-2",
  visit: "bg-maroon/15 text-maroon",
  collaboration: "bg-mauve/15 text-mauve",
  promotion: "bg-taupe/15 text-taupe",
};

export default function EventCard({
  event,
  spotlight = false,
}: {
  event: ClubEvent;
  spotlight?: boolean;
}) {
  const Icon = categoryIcons[event.category];
  const colorClasses = categoryColors[event.category];
  const textColorClass = colorClasses.split(" ")[1];
  const href = getEventHref(event.slug);

  const content = (
    <>
      <div
        className={`flex shrink-0 items-center justify-center rounded-full ${colorClasses} ${
          spotlight ? "h-16 w-16" : "h-10 w-10"
        }`}
      >
        <Icon size={spotlight ? 28 : 18} />
      </div>
      <div>
        {spotlight ? (
          <p className={`text-xs font-semibold uppercase tracking-widest ${textColorClass}`}>
            {categoryLabels[event.category]} &middot; {event.date}
          </p>
        ) : (
          <>
            <div className="flex flex-wrap items-center gap-2">
              <h3
                className={`font-semibold ${href ? "transition-colors group-hover:text-accent" : ""}`}
              >
                {event.title}
              </h3>
              <span className="text-xs text-muted">&middot; {categoryLabels[event.category]}</span>
            </div>
            <p className={`mt-1 text-xs uppercase tracking-wide ${textColorClass}`}>{event.date}</p>
          </>
        )}
        {spotlight ? (
          <h3
            className={`mt-2 text-2xl font-bold tracking-tight sm:text-3xl ${
              href ? "transition-colors group-hover:text-accent" : ""
            }`}
          >
            {event.title}
          </h3>
        ) : null}
        <p
          className={`leading-relaxed text-muted ${
            spotlight ? "mt-3 max-w-2xl text-base" : "mt-2 text-sm"
          }`}
        >
          {event.summary}
        </p>
        {href && spotlight ? (
          <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
            Read the full story <ArrowUpRight size={14} />
          </p>
        ) : null}
      </div>
    </>
  );

  const spotlightClasses = clsx(
    "flex flex-col gap-6 rounded-3xl border border-border bg-background-alt p-8 sm:flex-row sm:items-start sm:p-10",
    href && "group transition-colors hover:border-accent/50",
  );
  const cardClasses = clsx(
    "flex gap-4 rounded-2xl border border-border bg-background-alt p-5",
    href && "group transition-colors hover:border-accent/50",
  );

  if (href) {
    return (
      <Link href={href} className={spotlight ? spotlightClasses : cardClasses}>
        {content}
      </Link>
    );
  }

  return <div className={spotlight ? spotlightClasses : cardClasses}>{content}</div>;
}
