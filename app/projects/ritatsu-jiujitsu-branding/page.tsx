import type { Metadata } from "next";
import ProjectArticleLayout from "@/components/ProjectArticleLayout";

export const metadata: Metadata = {
  title: "RITatsu Jiujitsu Branding",
  description:
    "Promotional posters designed in collaboration with RITatsu Jiujitsu Club.",
};

export default function RitatsuJiujitsuBrandingPage() {
  return (
    <ProjectArticleLayout
      slug="ritatsu-jiujitsu-branding"
      eyebrow="Collaboration · November 2025"
    />
  );
}
