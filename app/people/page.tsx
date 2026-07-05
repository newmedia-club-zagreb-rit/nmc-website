import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import PersonCard from "@/components/PersonCard";
import CtaBanner from "@/components/CtaBanner";
import { people } from "@/lib/data/people";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "People",
  description: "Meet the officers and members behind the New Media Design Club at RIT Croatia.",
};

export default function PeoplePage() {
  return (
    <Container className="py-20">
      <SectionHeading
        eyebrow="The people"
        title="Who's behind NMC"
        description={
          <>
            <p>
              NMC Zagreb is a small part of the larger RIT Croatia community. We run events and
              projects for both learning and fun! Throughout the semester, we organize workshops,
              artist talks, and other creative gatherings open to everyone interested in media,
              art, and technology.
            </p>
            <p>
              You don&apos;t need to be a member to attend our events or be part of our directory
             , everyone&apos;s welcome to join in.
            </p>
            <p>
              If you&apos;re an RIT Croatia student, fill out this{" "}
              <a
                href={siteConfig.joinFormUrl}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
              >
                form
              </a>{" "}
              to join!
            </p>
          </>
        }
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {people.map((person) => (
          <PersonCard key={person.name + person.role} person={person} />
        ))}
      </div>

      <div className="mt-20">
        <CtaBanner
          title="Want to be part of this list?"
          description="Members can take on roles as the club grows, from creative technology to events to social media."
          primaryHref="/join"
          primaryLabel="Join the club"
        />
      </div>
    </Container>
  );
}
