import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/Container";
import ArtWallMarquee from "./ArtWallMarquee";

export default function ArtWallSection() {
  return (
    <>
      <Container className="mt-10 sm:mt-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent-2">
          Student Art Wall
        </p>
      </Container>

      <ArtWallMarquee />

      <Container className="mt-8 sm:mt-10">
        <p className="max-w-lg text-base leading-relaxed text-muted">
          Lowkey your art could be up here. Drop a doodle, a photo, whatever you made, and get
          featured on the site. No gatekeeping, just vibes.
        </p>
        <Link
          href="/participate"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-2 transition-colors hover:text-accent"
        >
          Upload your artwork <ArrowUpRight size={16} />
        </Link>
      </Container>
    </>
  );
}
