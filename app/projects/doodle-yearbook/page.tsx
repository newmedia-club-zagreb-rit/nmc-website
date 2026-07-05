import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Container from "@/components/Container";
import DoodleGallery from "@/components/DoodleGallery";
import { StatusBadge, Tag } from "@/components/Badge";
import { getGallery } from "@/lib/data/galleries";
import { getProjectBySlug } from "@/lib/data/projects";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Doodle Yearbook",
  description:
    "A community-built archive of member doodles and artwork, collected all year long.",
};

export default function DoodleYearbookPage() {
  const slug = "doodle-yearbook";
  const project = getProjectBySlug(slug);
  const gallery = getGallery(slug);

  if (!project || !gallery) {
    notFound();
  }

  return (
    <>
      <Container className="pt-20 pb-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-accent"
        >
          <ArrowLeft size={16} /> Back to Projects
        </Link>

        <div className="mt-6 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Community Archive
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">{project.summary}</p>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <StatusBadge status={project.status} />
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
      </Container>

      <section aria-label="Doodle gallery" className="pb-20">
        <DoodleGallery images={gallery.images} />
      </section>

      <Container className="pb-20">
        <div className="bg-noise rounded-3xl border border-border bg-background-alt p-10 text-center sm:p-16">
          <h2 className="text-2xl font-bold sm:text-3xl">Got a doodle to add?</h2>
          <p className="mx-auto mt-3 max-w-md text-muted">
            Join the club or drop off a scan at the next meeting, every page helps the yearbook
            grow.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/join"
              className="inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-transform hover:scale-105"
            >
              Join the club <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/participate"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              How to participate
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
