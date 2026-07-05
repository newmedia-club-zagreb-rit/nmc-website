export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProjectGallery {
  /** Ordered for a balanced masonry flow in a multi-column layout. */
  images: GalleryImage[];
}

/**
 * Full-page project galleries, keyed by project slug (see lib/data/projects.ts).
 * Add an entry here when a project should open a gallery page at /projects/[slug].
 */
export const galleries: Record<string, ProjectGallery> = {
  "doodle-yearbook": {
    images: [
      {
        src: "/doodles/doodle-art-2.png",
        alt: "Member doodle, wide sketch",
        width: 2048,
        height: 1128,
      },
      {
        src: "/doodles/doodle-art-6.png",
        alt: "Member doodle, tall sketch",
        width: 1201,
        height: 2048,
      },
      {
        src: "/doodles/doodle-art-4.png",
        alt: "Member doodle, wide sketch",
        width: 2411,
        height: 1193,
      },
      {
        src: "/doodles/doodle-art-1.png",
        alt: "Member doodle, tall sketch",
        width: 726,
        height: 1024,
      },
      {
        src: "/doodles/doodle-art-5.png",
        alt: "Member doodle, tall sketch",
        width: 1024,
        height: 1365,
      },
      {
        src: "/doodles/doodle-art-7.png",
        alt: "Member doodle, wide sketch",
        width: 2048,
        height: 1436,
      },
      {
        src: "/doodles/doodle-art-3.png",
        alt: "Member doodle, tall sketch",
        width: 733,
        height: 1024,
      },
    ],
  },
};

export function getGallery(slug: string): ProjectGallery | undefined {
  return galleries[slug];
}

export function hasProjectPage(slug: string): boolean {
  return Boolean(galleries[slug]);
}
