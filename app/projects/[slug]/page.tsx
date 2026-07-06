import type { Metadata } from "next";
import SiteImage from "@/components/SiteImage";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Lightbulb,
  Compass,
  PenTool,
  GitBranch,
  Wrench,
  Flag,
} from "lucide-react";
import Container from "@/components/Container";
import { StatusBadge, Tag } from "@/components/Badge";
import { getProjectBySlug } from "@/lib/data/projects";
import { getCaseStudy, caseStudies } from "@/lib/data/case-studies";

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project || !getCaseStudy(slug)) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const caseStudy = getCaseStudy(slug);

  if (!project || !caseStudy) {
    notFound();
  }

  return (
    <>
      {caseStudy.heroImage ? (
        <div className="relative -mt-[var(--header-height)] h-[42vh] min-h-[260px] max-h-[520px] w-full overflow-hidden border-b border-border pt-[var(--header-height)]">
          <SiteImage
            src={caseStudy.heroImage.src}
            alt={caseStudy.heroImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent"
          />
        </div>
      ) : null}

      <Container className="py-20">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-accent"
      >
        <ArrowLeft size={16} /> Back to Projects
      </Link>

      {/* Header */}
      <div className="mt-6 max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
          Case Study
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
        {caseStudy.prototypeLink ? (
          <Link
            href={caseStudy.prototypeLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-5 py-2.5 text-sm font-semibold text-accent transition-colors hover:border-accent hover:bg-accent/15"
          >
            {caseStudy.prototypeLink.label ?? "View prototype"} <ArrowUpRight size={16} />
          </Link>
        ) : null}
      </div>

      {/* Motivation */}
      <section className="mt-16 max-w-3xl">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
            <Lightbulb size={18} />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">Motivation</h2>
        </div>
        <p className="mt-4 text-base leading-relaxed text-muted">{caseStudy.motivation}</p>
      </section>

      {/* Real-world examples */}
      <section className="mt-16">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-2/15 text-accent-2">
            <Compass size={18} />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">Real-World Examples</h2>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {caseStudy.realWorldExamples.map((example) => (
            <div key={example.title} className="rounded-2xl border border-border bg-background-alt p-6">
              <h3 className="font-semibold">{example.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{example.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sketches */}
      <section className="mt-16">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mauve/15 text-mauve">
            <PenTool size={18} />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">Sketches & Early Concepts</h2>
        </div>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
          {caseStudy.prototypeLink
            ? "Explore the interactive Figma prototype below, or browse the concept notes."
            : "Placeholder slots below, swap these for photos of the real sketches whenever they&apos;re scanned in."}
        </p>
        {caseStudy.prototypeLink ? (
          <Link
            href={caseStudy.prototypeLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
          >
            {caseStudy.prototypeLink.label ?? "View prototype"} <ArrowUpRight size={14} />
          </Link>
        ) : null}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {caseStudy.sketches.map((sketch) => (
            <div
              key={sketch.caption}
              className="flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-border p-4 text-center"
            >
              <PenTool size={20} className="text-muted" />
              <p className="text-xs text-muted">{sketch.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Directions considered */}
      <section className="mt-16">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-taupe/15 text-taupe">
            <GitBranch size={18} />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">Directions We Considered</h2>
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {caseStudy.directionsConsidered.map((direction) => (
            <div key={direction.title} className="flex flex-col rounded-2xl border border-border bg-background-alt p-6">
              <h3 className="font-semibold">{direction.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{direction.description}</p>
              <div className="mt-4 rounded-xl border border-maroon/25 bg-maroon/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-maroon">
                  Why we dropped it
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground/80">
                  {direction.whyDropped}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Problems & solutions */}
      <section className="mt-16">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
            <Wrench size={18} />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">Problems & Solutions</h2>
        </div>
        <div className="mt-6 space-y-4">
          {caseStudy.problems.map((item) => (
            <div
              key={item.problem}
              className="grid gap-4 rounded-2xl border border-border bg-background-alt p-6 sm:grid-cols-2"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">Problem</p>
                <p className="mt-1.5 text-sm leading-relaxed">{item.problem}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">Solution</p>
                <p className="mt-1.5 text-sm leading-relaxed">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final result */}
      <section className="mt-16 max-w-3xl">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-2/15 text-accent-2">
            <Flag size={18} />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">Where It Stands Today</h2>
        </div>
        <p className="mt-4 text-base leading-relaxed text-muted">{caseStudy.finalResult}</p>
      </section>

      {/* Closing CTA */}
      <div className="bg-noise mt-20 rounded-3xl border border-border bg-background-alt p-10 text-center sm:p-16">
        <h2 className="text-2xl font-bold sm:text-3xl">Want to help build what&apos;s next?</h2>
        <p className="mx-auto mt-3 max-w-md text-muted">
          Join the club to work on projects like this one, or share feedback and ideas of your own.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/join"
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-transform hover:scale-105"
          >
            Join the club <ArrowUpRight size={16} />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            See more projects
          </Link>
        </div>
      </div>
    </Container>
    </>
  );
}
