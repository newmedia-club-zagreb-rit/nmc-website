import type { Metadata } from "next";
import { ArrowUpRight, Upload, Image as ImageIcon, MessageCircle } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Participate",
  description: "Submit your artwork to be featured on the New Media Design Club page.",
};

const ways = [
  {
    icon: ImageIcon,
    title: "Artwork & doodles",
    copy: "Sketches, digital art, or anything from the doodle yearbook, all skill levels welcome.",
    href: siteConfig.artworkFormUrl,
  },
  {
    icon: Upload,
    title: "Photography & video",
    copy: "Campus life, events, personal projects, share what you've been shooting.",
    href: siteConfig.photoVideoFormUrl,
  },
  {
    icon: MessageCircle,
    title: "Project ideas",
    copy: "Have a creative technology concept? Pitch it and we might build it together.",
    href: siteConfig.projectIdeaFormUrl,
  },
];

export default function ParticipatePage() {
  return (
    <Container className="py-20">
      <SectionHeading
        eyebrow="Participate"
        title="Submit your artwork to be featured"
        description="Each category has its own quick form, pick the one that fits what you're sharing."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {ways.map((way) => (
          <a
            key={way.title}
            href={way.href}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col rounded-2xl border border-border bg-background-alt p-6 transition-colors hover:border-accent/50"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
              <way.icon size={18} />
            </div>
            <h3 className="mt-4 font-semibold">{way.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{way.copy}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent opacity-80 transition-opacity group-hover:opacity-100">
              Open the form <ArrowUpRight size={16} />
            </span>
          </a>
        ))}
      </div>

      <div className="bg-noise mt-16 rounded-3xl border border-border bg-background-alt p-10 text-center sm:p-16">
        <h2 className="text-2xl font-bold sm:text-3xl">Not sure where it fits?</h2>
        <p className="mx-auto mt-3 max-w-md text-muted">
          Pick the closest category above, or just DM us on Instagram and we&apos;ll sort it out.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            DM us on Instagram
          </a>
        </div>
      </div>
    </Container>
  );
}
