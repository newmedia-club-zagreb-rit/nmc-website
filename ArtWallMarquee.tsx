import SiteImage from "@/components/SiteImage";
import { artWallImages, type ArtWallImage } from "@/lib/data/artwall";

/** First tiles are on-screen at rest; the rest load as the marquee moves. */
const EAGER_TILE_COUNT = 3;

function ArtTile({
  src,
  alt,
  eager = false,
  highPriority = false,
}: Pick<ArtWallImage, "src" | "alt"> & { eager?: boolean; highPriority?: boolean }) {
  return (
    <div className="relative h-72 w-72 shrink-0 overflow-hidden border border-border bg-background-alt sm:h-80 sm:w-80 md:h-[22rem] md:w-[22rem]">
      <SiteImage
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, 352px"
        className="object-cover"
        loading={eager ? "eager" : "lazy"}
        fetchPriority={highPriority ? "high" : "auto"}
        decoding="async"
      />
    </div>
  );
}

export default function ArtWallMarquee() {
  const tiles = [...artWallImages, ...artWallImages];

  return (
    <div
      className="relative mt-6 sm:mt-8"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
      }}
    >
      <div className="flex w-max animate-marquee gap-5 px-6 sm:gap-6 sm:px-8">
        {tiles.map((image, i) => (
          <ArtTile
            key={`${image.src}-${i}`}
            src={image.src}
            alt={image.alt}
            eager={i < EAGER_TILE_COUNT}
            highPriority={i === 0}
          />
        ))}
      </div>
    </div>
  );
}
