import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import EventCard from "@/components/EventCard";
import { groupEventsBySemester } from "@/lib/data/events";

export const metadata: Metadata = {
  title: "Archive",
  description: "A timeline of events, workshops, talks, and collaborations from the New Media Design Club.",
};

export default function ArchivePage() {
  const grouped = groupEventsBySemester();

  return (
    <Container className="py-20">
      <SectionHeading
        eyebrow="Archive"
        title="Everything we've done, semester by semester"
        description="A living record of talks, workshops, visits, and collaborations, proof that a small club can build a lot in a year."
      />

      <div className="mt-14 space-y-16">
        {grouped.map((group) => (
          <div key={group.semester}>
            <h2 className="text-xl font-bold tracking-tight">{group.semester}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.events.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
