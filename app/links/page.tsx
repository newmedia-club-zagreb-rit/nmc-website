import type { Metadata } from "next";
import SiteImage from "@/components/SiteImage";
import Link from "next/link";
import { ArrowUpRight, Globe, UserPlus } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Links",
  description: `All the ways to connect with ${siteConfig.name}, join, follow, and stay in the loop.`,
};

type LinkItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
  external?: boolean;
  primary?: boolean;
};

export default function LinksPage() {
  const links: LinkItem[] = [
    {
      label: "Join the club",
      href: siteConfig.joinFormUrl,
      icon: <UserPlus size={18} />,
      external: true,
      primary: true,
    },
    {
      label: "Website",
      href: "/",
      icon: <Globe size={18} />,
    },
    {
      label: "Instagram",
      href: siteConfig.instagram,
      icon: <InstagramIcon size={18} />,
      external: true,
    },
    ...(siteConfig.whatsappCommunityUrl
      ? [
          {
            label: "WhatsApp community",
            href: siteConfig.whatsappCommunityUrl,
            icon: <WhatsAppIcon size={18} />,
            external: true,
          } satisfies LinkItem,
        ]
      : []),
  ];

  return (
    <div className="bg-noise flex min-h-dvh flex-col items-center px-6 py-12 sm:py-16">
      <div className="flex w-full max-w-sm flex-col items-center">
        <span className="relative flex h-24 w-24 shrink-0 overflow-hidden rounded-full ring-4 ring-background-alt ring-offset-2 ring-offset-background">
          <SiteImage
            src="/logo.png"
            alt={`${siteConfig.shortName} logo`}
            fill
            sizes="96px"
            className="object-cover"
            priority
          />
        </span>

        <h1 className="mt-6 text-center text-xl font-bold tracking-tight">{siteConfig.name}</h1>

        <p className="mt-4 text-center text-base leading-relaxed text-muted">
          {siteConfig.linksPageTagline}
        </p>

        <nav aria-label="Club links" className="mt-10 flex w-full flex-col gap-3">
          {links.map((item) => {
            const className = item.primary
              ? "inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-on-accent transition-transform hover:scale-[1.02] active:scale-[0.98]"
              : "inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background-alt px-6 py-3.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent active:scale-[0.98]";

            if (item.external) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={className}
                >
                  {item.icon}
                  {item.label}
                  {item.primary ? <ArrowUpRight size={16} /> : null}
                </a>
              );
            }

            return (
              <Link key={item.label} href={item.href} className={className}>
                {item.icon}
                {item.label}
              </Link>
            );
          })}
        </nav>

        <p className="mt-12 text-center text-xs text-muted">
          RIT Croatia &middot; {siteConfig.instagramHandle}
        </p>
      </div>
    </div>
  );
}
