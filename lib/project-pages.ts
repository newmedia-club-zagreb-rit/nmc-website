import { getCaseStudy } from "@/lib/data/case-studies";
import { getGallery } from "@/lib/data/galleries";
import { getProjectArticle } from "@/lib/data/project-articles";

/** Returns a project detail URL when the slug has a case study, gallery, or article page. */
export function getProjectHref(slug: string): string | null {
  if (getCaseStudy(slug) || getGallery(slug) || getProjectArticle(slug)) {
    return `/projects/${slug}`;
  }
  return null;
}
