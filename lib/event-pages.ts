import { getEventArticle } from "@/lib/data/event-articles";

const customEventPages: Record<string, string> = {
  "nmd-day-promotion": "/archive/nmd-day-promotion",
};

/** Returns an archive article URL when the slug has a full write-up page. */
export function getEventHref(slug: string): string | null {
  if (customEventPages[slug]) {
    return customEventPages[slug];
  }
  if (getEventArticle(slug)) {
    return `/archive/${slug}`;
  }
  return null;
}
