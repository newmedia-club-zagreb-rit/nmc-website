import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Container from "@/components/Container";
import CtaBanner from "@/components/CtaBanner";
import EventArticleBody from "@/components/EventArticleBody";
import { StatusBadge, Tag } from "@/components/Badge";
import { getProjectArticle } from "@/lib/data/project-articles";
import { getProjectBySlug } from "@/lib/data/projects";

export default function ProjectArticleLayout({
  slug,
  eyebrow,
}: {
  slug: string;
  eyebrow: string;
}) {
  const project = getProjectBySlug(slug);
  const article = getProjectArticle(slug);

  if (!project || !article) {
    notFound();
  }

  return (
    <Container className="py-20">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-accent"
      >
        <ArrowLeft size={16} /> Back to Projects
      </Link>

      <header className="mx-auto mt-10 max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-mauve">{eyebrow}</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">{article.dek}</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <StatusBadge status={project.status} />
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
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
          title="Need design help for your club?"
          description="NMC collaborates across campus, posters, reels, branding, and more. Get in touch or join to be part of the next project."
          primaryHref="/participate"
          primaryLabel="Submit a collaboration idea"
          secondaryHref="/join"
          secondaryLabel="Join the club"
        />
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
        >
          See more projects <ArrowUpRight size={16} />
        </Link>
      </div>
    </Container>
  );
}
