import Link from "next/link";
import Image from "next/image";
import { Link2, Mail } from "lucide-react";
import InstagramIcon from "./icons/InstagramIcon";
import Container from "./Container";
import { navLinks, siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background-alt">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2 md:col-span-2">
          <div className="flex items-center gap-2 text-lg font-bold">
            <span className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full">
              <Image
                src="/logo.png"
                alt={`${siteConfig.shortName} logo`}
                fill
                sizes="32px"
                className="object-cover"
              />
            </span>
            {siteConfig.name}
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            {siteConfig.description}
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
              aria-label="Instagram"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <Link
              href="/links"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
              aria-label="All links"
            >
              <Link2 size={18} />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-muted">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-foreground/80 hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-muted">
            Connect
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-foreground/80">
            <li>{siteConfig.location}</li>
            <li>
              <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="hover:text-accent">
                {siteConfig.instagramHandle}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-accent">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-border py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.name}. Built by club members, for club members.
          {" "}&middot;{" "}
          <a
            href={siteConfig.brandbookUrl}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-border underline-offset-2 hover:text-accent hover:decoration-accent"
          >
            Brandbook
          </a>
        </p>
        <p>RIT Croatia &middot; New Media Design</p>
      </Container>
    </footer>
  );
}
