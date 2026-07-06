import type { Metadata } from "next";
import { ArrowUpRight, Mail, Calendar } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Join",
  description: "Join the New Media Design Club at RIT Croatia, no experience necessary.",
};

const steps = [
  {
    icon: Calendar,
    title: "Come to a meeting",
    copy: "We meet weekly, bring an idea, a sketchbook, or just curiosity.",
  },
  {
    icon: Mail,
    title: "Fill out the join form",
    copy: "Takes two minutes. We'll add you to the group chat and mailing list.",
  },
  {
    icon: InstagramIcon,
    title: "Follow along",
    copy: `Follow ${siteConfig.instagramHandle} for meeting times, events, and open calls.`,
  },
];

export default function JoinPage() {
  return (
    <Container className="py-20">
      <SectionHeading
        eyebrow="Join us today"
        title="No experience necessary, just curiosity"
        description="NMC is open to every RIT Croatia student interested in design, photography, video, code, branding, or creative technology. Here's how to get involved."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {steps.map((step) => (
          <div key={step.title} className="rounded-2xl border border-border bg-background-alt p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
              <step.icon size={18} />
            </div>
            <h3 className="mt-4 font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{step.copy}</p>
          </div>
        ))}
      </div>

      <div className="bg-noise mt-16 rounded-3xl border border-border bg-background-alt p-10 text-center sm:p-16">
        <h2 className="text-2xl font-bold sm:text-3xl">Ready to join?</h2>
        <p className="mx-auto mt-3 max-w-md text-muted">
          Fill out the short join form and we&apos;ll get you added to the group.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={siteConfig.joinFormUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-transform hover:scale-105"
          >
            Open the join form <ArrowUpRight size={16} />
          </a>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            <InstagramIcon size={16} /> {siteConfig.instagramHandle}
          </a>
        </div>
      </div>
    </Container>
  );
}
