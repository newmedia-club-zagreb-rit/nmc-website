import { Person } from "@/lib/data/people";
import InstagramIcon from "./icons/InstagramIcon";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function PersonCard({ person }: { person: Person }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-border bg-background-alt p-6 text-center transition-colors hover:border-accent/50">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-lg font-bold text-on-accent">
        {initials(person.name)}
      </div>
      <h3 className="mt-4 font-semibold">{person.name}</h3>
      <p className="text-sm text-accent">{person.role}</p>
      {person.bio && <p className="mt-2 text-xs leading-relaxed text-muted">{person.bio}</p>}
      {person.instagram && (
        <a
          href={person.instagram}
          target="_blank"
          rel="noreferrer"
          className="mt-3 text-muted hover:text-accent"
          aria-label={`${person.name} on Instagram`}
        >
          <InstagramIcon size={16} />
        </a>
      )}
    </div>
  );
}
