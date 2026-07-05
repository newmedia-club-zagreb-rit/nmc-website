import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Container from "@/components/Container";
import CtaBanner from "@/components/CtaBanner";
import EventArticleBody from "@/components/EventArticleBody";
import { getEventArticle, eventArticles } from "@/lib/data/event-articles";
import { getEventBySlug } from "@/lib/data/events";
import { siteConfig } from "@/lib/site-config";

const categoryLabels = {
  talk: "Talk",
  workshop: "Workshop",
  visit: "Company Visit",
  collaboration: "Collaboration",
  promotion: "Promotion",
} as const;

export function generateStaticParams() {
  return Object.keys(eventArticles).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  const article = getEventArticle(slug);
  if (!event || !article) return {};
  return {
    title: event.title,
    description: article.dek,
  };
}

export default async function EventArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  const article = getEventArticle(slug);

  if (!event || !article) {
    notFound();
  }

  const categoryLabel = categoryLabels[event.category];

  return (
    <Container className="py-20">
      <Link
        href="/archive"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-accent"
      >
        <ArrowLeft size={16} /> Back to Archive
      </Link>

      <header className="mx-auto mt-10 max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-maroon">
          {categoryLabel} &middot; {event.date}
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          {event.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">{article.dek}</p>
      </header>

      <div className="mt-14 border-t border-border pt-14">
        <EventArticleBody sections={article.sections} />
      </div>

      {article.closing ? (
        <p className="mx-auto mt-14 max-w-2xl border-t border-border pt-14 text-base leading-[1.85] text-muted">
          {article.closing}
        </p>
      ) : null}

      <div className="mt-20">
        <CtaBanner
          title="Want to come on the next visit?"
          description="Join the club to hear about studio tours, artist talks, and everything else we're planning this semester."
          primaryHref="/join"
          primaryLabel="Join the club"
          secondaryHref={siteConfig.instagram}
          secondaryLabel="Follow on Instagram"
        />
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/archive"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
        >
          Browse the full archive <ArrowUpRight size={16} />
        </Link>
      </div>
    </Container>
  );
}
