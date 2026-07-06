import SiteImage from "@/components/SiteImage";
import { artWallImages, type ArtWallImage } from "@/lib/data/artwall";

function ArtTile({ src, alt, width, height }: ArtWallImage) {
  return (
    <div className="relative h-72 w-72 shrink-0 overflow-hidden border border-border sm:h-80 sm:w-80 md:h-[22rem] md:w-[22rem]">
      <SiteImage
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
          <ArtTile key={i} {...image} />
        ))}
      </div>
    </div>
  );
}
