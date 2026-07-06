"use client";

import Link from "next/link";
import SiteImage from "@/components/SiteImage";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import Container from "./Container";
import { navLinks, siteConfig } from "@/lib/site-config";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 py-4 sm:py-6">
      <Container className="flex items-center justify-between gap-3 md:justify-center md:gap-4">
        {/* Logo, circle, same height as the pills */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="glass relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full transition-transform hover:scale-105"
          aria-label={siteConfig.name}
        >
          <SiteImage
            src="/logo.png"
            alt={`${siteConfig.shortName} logo`}
            fill
            sizes="56px"
            className="object-cover"
            priority
          />
        </Link>

        {/* Center pill nav, desktop only, sits in the same clustered group
            as the logo and Join button (no absolute positioning needed). */}
        <nav className="glass hidden items-center gap-1 rounded-full p-1.5 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "flex h-11 items-center rounded-full px-3 text-sm font-medium whitespace-nowrap transition-colors",
                  active
                    ? "bg-foreground text-background"
                    : "text-foreground/80 hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Join us pill, desktop only */}
        <Link
          href="/join"
          className="glass-accent hidden h-14 shrink-0 items-center rounded-full px-6 text-sm font-semibold text-accent transition-transform hover:scale-105 md:inline-flex"
        >
          Join us
        </Link>

        {/* Mobile menu toggle */}
        <button
          className="glass flex h-14 w-14 shrink-0 items-center justify-center rounded-full md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {/* Mobile dropdown */}
      {open && (
        <Container className="mt-3 md:hidden">
          <div className="glass flex flex-col gap-1 rounded-3xl p-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  "rounded-2xl px-4 py-3 text-base font-medium",
                  pathname === link.href
                    ? "bg-foreground text-background"
                    : "text-foreground/80"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/join"
              onClick={() => setOpen(false)}
              className="glass-accent mt-1 rounded-2xl px-4 py-3 text-center text-sm font-semibold text-accent"
            >
              Join us
            </Link>
          </div>
        </Container>
      )}
    </header>
  );
}
