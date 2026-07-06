import SiteImage from "@/components/SiteImage";
import type { GalleryImage } from "@/lib/data/galleries";

export default function DoodleGallery({ images }: { images: GalleryImage[] }) {
  return (
    <div className="columns-2 gap-1 sm:columns-3 lg:columns-4 [&>*]:mb-1">
      {images.map((image) => (
        <figure key={image.src} className="break-inside-avoid overflow-hidden bg-white">
          <SiteImage
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="h-auto w-full object-cover"
          />
        </figure>
      ))}
    </div>
  );
}
