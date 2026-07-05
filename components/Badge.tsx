import clsx from "clsx";
import { ProjectStatus } from "@/lib/data/projects";

const statusStyles: Record<ProjectStatus, string> = {
  "in-progress": "bg-accent/15 text-accent border-accent/30",
  concept: "bg-accent-2/15 text-accent-2 border-accent-2/30",
  completed: "bg-foreground/10 text-foreground border-foreground/20",
};

const statusLabels: Record<ProjectStatus, string> = {
  "in-progress": "In Progress",
  concept: "Concept",
  completed: "Completed",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        statusStyles[status]
      )}
    >
      {statusLabels[status]}
    </span>
  );
}

export function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs text-muted">
      {children}
    </span>
  );
}
