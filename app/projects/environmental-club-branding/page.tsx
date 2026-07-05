import type { Metadata } from "next";
import ProjectArticleLayout from "@/components/ProjectArticleLayout";

export const metadata: Metadata = {
  title: "Environmental Club Branding",
  description:
    "Visual identity support for a recycling-focused collaborative event with the Environmental Club.",
};

export default function EnvironmentalClubBrandingPage() {
  return (
    <ProjectArticleLayout
      slug="environmental-club-branding"
      eyebrow="Collaboration · Nov/Dec 2025"
    />
  );
}
