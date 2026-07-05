import Link from "next/link";
import { Project } from "@/lib/data/projects";
import { getProjectHref } from "@/lib/project-pages";
import { StatusBadge, Tag } from "./Badge";

const cardClasses =
  "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-background-alt p-6 transition-colors hover:border-accent/50";

export default function ProjectCard({ project }: { project: Project }) {
  const href = getProjectHref(project.slug);

  const content = (
    <>
      <div>
        <div className="mb-4 flex items-center justify-between gap-2">
          <StatusBadge status={project.status} />
        </div>
        <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/10 blur-2xl transition-transform duration-500 group-hover:scale-150"
      />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cardClasses}>
        {content}
      </Link>
    );
  }

  return <article className={cardClasses}>{content}</article>;
}
