import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Creative technology, branding, and design projects from the New Media Design Club at RIT Croatia.",
};

export default function ProjectsPage() {
  return (
    <Container className="py-20">
      <SectionHeading
        eyebrow="Projects in Motion"
        title="What we're building"
        description="From data-driven hardware installations to campus branding collaborations, here's everything the club has shipped, is shipping, or is dreaming up next."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Container>
  );
}
