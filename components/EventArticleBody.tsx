import SiteImage from "@/components/SiteImage";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import InstagramEmbed from "@/components/InstagramEmbed";
import InstagramIcon from "@/components/icons/InstagramIcon";
import type { EventArticleSection } from "@/lib/data/event-articles";
import { assetPath } from "@/lib/asset-path";

function ArticleParagraph({ text }: { text: string }) {
  return <p className="text-base leading-[1.85] text-muted">{text}</p>;
}

function ArticleImage({
  src,
  alt,
  width,
  height,
  caption,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-border bg-white">
      <SiteImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 768px) 100vw, 672px"
        className="h-auto w-full object-cover"
      />
      {caption ? (
        <figcaption className="border-t border-border px-4 py-3 text-sm text-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function ArticleInstagram({
  url,
  caption,
}: {
  url: string;
  caption?: string;
}) {
  const cleanUrl = url.split("?")[0].replace(/\/$/, "");

  return (
    <figure className="space-y-4">
      {caption ? <p className="text-sm leading-relaxed text-muted">{caption}</p> : null}
      <InstagramEmbed url={url} />
      <figcaption className="text-center">
        <Link
          href={cleanUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-maroon hover:underline"
        >
          Watch on Instagram <ArrowUpRight size={14} />
        </Link>
      </figcaption>
    </figure>
  );
}

function ArticleInstagramProfile({
  url,
  handle,
  caption,
}: {
  url: string;
  handle: string;
  caption?: string;
}) {
  const cleanUrl = url.split("?")[0].replace(/\/$/, "");

  return (
    <figure className="space-y-4">
      {caption ? <p className="text-sm leading-relaxed text-muted">{caption}</p> : null}
      <Link
        href={cleanUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group block rounded-2xl border border-border bg-background-alt p-8 text-center transition-colors hover:border-accent/50"
      >
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
          <InstagramIcon size={24} />
        </span>
        <p className="mt-4 font-semibold transition-colors group-hover:text-accent">{handle}</p>
        <p className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-muted group-hover:text-accent">
          Follow on Instagram <ArrowUpRight size={14} />
        </p>
      </Link>
    </figure>
  );
}

function ArticleExternalLink({
  url,
  label,
  caption,
}: {
  url: string;
  label: string;
  caption?: string;
}) {
  return (
    <figure className="space-y-3">
      {caption ? <p className="text-sm leading-relaxed text-muted">{caption}</p> : null}
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between gap-4 border border-border bg-background-alt px-6 py-4 transition-colors hover:border-accent/50"
      >
        <span className="font-semibold transition-colors group-hover:text-accent">{label}</span>
        <ArrowUpRight size={18} className="shrink-0 text-muted transition-colors group-hover:text-accent" />
      </Link>
    </figure>
  );
}

function ArticleSpotifyEmbed({
  embedUrl,
  title = "Spotify playlist",
  caption,
  height = 352,
}: {
  embedUrl: string;
  title?: string;
  caption?: string;
  height?: number;
}) {
  return (
    <figure className="space-y-3">
      {caption ? <p className="text-sm leading-relaxed text-muted">{caption}</p> : null}
      <div className="overflow-hidden rounded-xl border border-border bg-background-alt">
        <iframe
          src={embedUrl}
          width="100%"
          height={height}
          frameBorder={0}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title={title}
          className="w-full"
        />
      </div>
    </figure>
  );
}

function pdfEmbedSrc(src: string): string {
  if (src.startsWith("http")) {
    const driveMatch = src.match(/drive\.google\.com\/file\/d\/([^/]+)/);
    if (driveMatch) {
      return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
    }
    return src;
  }
  return assetPath(src);
}

function pdfOpenUrl(src: string): string {
  return src.startsWith("http") ? src : assetPath(src);
}

function ArticlePdfEmbed({
  src,
  title = "PDF document",
  caption,
  height = 720,
}: {
  src: string;
  title?: string;
  caption?: string;
  height?: number;
}) {
  const embedSrc = pdfEmbedSrc(src);
  const openUrl = pdfOpenUrl(src);

  return (
    <figure className="space-y-3">
      {caption ? <p className="text-sm leading-relaxed text-muted">{caption}</p> : null}
      <div className="overflow-hidden rounded-xl border border-border bg-background-alt">
        <iframe
          src={embedSrc}
          width="100%"
          height={height}
          loading="lazy"
          title={title}
          className="w-full"
        />
      </div>
      <figcaption className="text-center">
        <Link
          href={openUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
        >
          Open full PDF <ArrowUpRight size={14} />
        </Link>
      </figcaption>
    </figure>
  );
}

export default function EventArticleBody({ sections }: { sections: EventArticleSection[] }) {
  return (
    <div className="mx-auto max-w-2xl space-y-8">
      {sections.map((section, index) => {
        switch (section.type) {
          case "paragraph":
            return <ArticleParagraph key={index} text={section.text} />;
          case "heading":
            return (
              <h2 key={index} className="pt-4 text-2xl font-bold tracking-tight">
                {section.text}
              </h2>
            );
          case "image":
            return (
              <ArticleImage
                key={index}
                src={section.src}
                alt={section.alt}
                width={section.width}
                height={section.height}
                caption={section.caption}
              />
            );
          case "instagram":
            return (
              <ArticleInstagram
                key={index}
                url={section.url}
                caption={section.caption}
              />
            );
          case "instagramProfile":
            return (
              <ArticleInstagramProfile
                key={index}
                url={section.url}
                handle={section.handle}
                caption={section.caption}
              />
            );
          case "externalLink":
            return (
              <ArticleExternalLink
                key={index}
                url={section.url}
                label={section.label}
                caption={section.caption}
              />
            );
          case "spotifyEmbed":
            return (
              <ArticleSpotifyEmbed
                key={index}
                embedUrl={section.embedUrl}
                title={section.title}
                caption={section.caption}
                height={section.height}
              />
            );
          case "pdfEmbed":
            return (
              <ArticlePdfEmbed
                key={index}
                src={section.src}
                title={section.title}
                caption={section.caption}
                height={section.height}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
