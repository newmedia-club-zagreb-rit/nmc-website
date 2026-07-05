import type { MetadataRoute } from "next";
import { navLinks, siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return navLinks.map((link) => ({
    url: `${siteConfig.url}${link.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: link.href === "/" ? 1 : 0.7,
  }));
}
