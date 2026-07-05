import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import EventCard from "@/components/EventCard";
import ArtTicker from "@/components/ArtTicker";
import CtaBanner from "@/components/CtaBanner";
import { StatusBadge } from "@/components/Badge";
import { getFeaturedProject, projects } from "@/lib/data/projects";
import { getCaseStudy } from "@/lib/data/case-studies";
import { getRecentEvents } from "@/lib/data/events";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  const featured = getFeaturedProject();
  const featuredCaseStudy = getCaseStudy(featured.slug);
  const otherProjects = projects.filter((p) => p.slug !== featured.slug).slice(0, 3);
  const recentEvents = getRecentEvents(3);

  return (
    <>
      {/* Student art wall, first thing visitors see */}
      <section className="bg-noise relative -mt-[var(--header-height)] overflow-hidden border-b border-border pt-[var(--header-height)]">
        <ArtTicker />
      </section>

      {/* Join us today */}
      <section className="border-b border-border">
        <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="flex min-w-0 flex-col items-start gap-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted">
              <Sparkles size={14} className="text-accent" /> RIT Croatia &middot;{" "}
              {siteConfig.instagramHandle}
            </span>
            <h1 className="max-w-3xl text-5xl font-black tracking-tight text-balance sm:text-6xl md:text-7xl">
              Join us <span className="text-accent">today</span>.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted">
              {siteConfig.name} is RIT Croatia&apos;s creative community for design,
              photography, videography, game development, branding, and everything in between. We
              make things, learn from each other, and share it with the world.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
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
                See our projects
              </Link>
            </div>
          </div>

          <figure className="min-w-0 w-full">
            <Image
              src="/home/join-club-room.jpg"
              alt="NMC club hangout space with games and a cozy setup"
              width={339}
              height={339}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full"
              priority
            />
          </figure>
        </Container>
      </section>

      {/* Featured project */}
      <section className="border-b border-border py-20">
        <Container>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Projects in Motion
          </p>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4">
                <StatusBadge status={featured.status} />
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {featuredCaseStudy ? (
                  <Link href={`/projects/${featured.slug}`} className="hover:text-accent">
                    {featured.title}
                  </Link>
                ) : (
                  featured.title
                )}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">{featured.description}</p>
              <Link
                href={featuredCaseStudy ? `/projects/${featured.slug}` : "/projects"}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
              >
                {featuredCaseStudy ? "Read the full case study" : "Explore all projects"}{" "}
                <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2">
              {otherProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section className="border-b border-border py-20">
        <Container className="grid gap-12 lg:grid-cols-3">
          <SectionHeading
            eyebrow="Why we exist"
            title="A creative, interdisciplinary community"
            description="We foster a community of students who enjoy creative practice, experimentation, and learning beyond the classroom, through projects, peer learning, and industry exposure."
          />
          <div className="grid gap-6 sm:grid-cols-3 lg:col-span-2 lg:grid-cols-3">
            {[
              {
                title: "Creative community",
                copy: "Weekly meetings, workshops, and open calls for artwork keep the community connected and creating.",
              },
              {
                title: "Professional development",
                copy: "Artist talks and studio visits connect students with alumni and industry professionals.",
              },
              {
                title: "Creative technology",
                copy: "Hands-on projects mix hardware, software, data, and design, like our Flight Radar Display.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-background-alt p-6"
              >
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.copy}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Recent activity */}
      <section className="border-b border-border py-20">
        <Container>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="From the archive" title="Recent activity" />
            <Link
              href="/archive"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
            >
              View full archive <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {recentEvents.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20">
        <Container>
          <CtaBanner
            title="Got something to share?"
            description="Submit your artwork, doodles, photography, or projects to be featured on our page, or join the club to start creating with us."
            primaryHref="/participate"
            primaryLabel="Submit your artwork"
            secondaryHref="/join"
            secondaryLabel="Join the club"
          />
        </Container>
      </section>
    </>
  );
}
