import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import { learnTopics, industryConnections } from "@/lib/data/learn";

export const metadata: Metadata = {
  title: "Learn",
  description: "Workshops, skills, and industry connections offered by the New Media Design Club at RIT Croatia.",
};

export default function LearnPage() {
  return (
    <Container className="py-20">
      <SectionHeading
        eyebrow="Learn"
        title="Skills worth picking up"
        description="Whether you're brand new to design tools or already deep into game dev, these are the topics we run workshops on and want to explore more."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {learnTopics.map((topic) => (
          <div
            key={topic.title}
            className="rounded-2xl border border-border bg-background-alt p-6"
          >
            <h3 className="font-semibold">{topic.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{topic.description}</p>
            {topic.links?.length ? (
              <ul className="mt-5 space-y-4 border-t border-border pt-5">
                {topic.links.map((link) => (
                  <li key={link.url}>
                    <Link
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 font-semibold text-accent hover:underline"
                    >
                      {link.title}
                      <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{link.intro}</p>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>

      <div className="mt-20">
        <SectionHeading
          eyebrow="Stay connected"
          title="Industry & community links"
          description="Communities our members have connected with through studio visits and industry talks."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {industryConnections.map((c) => (
            <div key={c.name} className="rounded-2xl border border-border bg-background-alt p-5">
              <h3 className="font-semibold">{c.name}</h3>
              <p className="mt-1 text-sm text-muted">{c.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <CtaBanner
          title="Have a skill to teach, or one you want to learn?"
          description="Suggest a workshop topic or volunteer to run one at a weekly meeting."
          primaryHref="/join"
          primaryLabel="Get involved"
          secondaryHref="/archive"
          secondaryLabel="See past workshops"
        />
      </div>
    </Container>
  );
}
