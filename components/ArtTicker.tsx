import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "./Container";
import CalligraphyTitle from "./CalligraphyTitle";
import { artWallImages } from "@/lib/data/artwall";

function ArtTile({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) {
  return (
    <div className="relative h-72 w-72 shrink-0 overflow-hidden border border-border sm:h-80 sm:w-80 md:h-[22rem] md:w-[22rem]">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 768px) 288px, 352px"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export default function ArtTicker() {
  const tiles = [...artWallImages, ...artWallImages];

  return (
    <div className="py-10 sm:py-14 md:py-16">
      <Container className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.35em] text-muted sm:text-base">
          welcome to
        </p>
        <CalligraphyTitle text="New Media Center" className="mt-2 sm:mt-3" />
      </Container>

      <Container className="mt-10 sm:mt-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent-2">
          Student Art Wall
        </p>
        <p className="mt-2 max-w-lg text-base leading-relaxed text-muted">
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

      <div
        className="relative mt-8 sm:mt-10"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee gap-5 px-6 sm:gap-6 sm:px-8">
          {tiles.map((image, i) => (
            <ArtTile key={i} {...image} />
          ))}
        </div>
      </div>
    </div>
  );
}
