"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

function normalizeInstagramUrl(url: string): string {
  const base = url.split("?")[0].replace(/\/$/, "");
  return `${base}/`;
}

export default function InstagramEmbed({ url }: { url: string }) {
  const permalink = normalizeInstagramUrl(url);

  useEffect(() => {
    const processEmbeds = () => window.instgrm?.Embeds.process();

    if (window.instgrm) {
      processEmbeds();
      return;
    }

    const existing = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
    if (existing) {
      existing.addEventListener("load", processEmbeds);
      return () => existing.removeEventListener("load", processEmbeds);
    }

    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = processEmbeds;
    document.body.appendChild(script);
  }, [permalink]);

  return (
    <div className="not-prose flex justify-center">
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink={permalink}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: 3,
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: 1,
          maxWidth: 540,
          minWidth: 326,
          padding: 0,
          width: "99.375%",
        }}
      >
        <a
          href={permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="block px-6 py-8 text-center text-sm text-muted"
        >
          View this post on Instagram
        </a>
      </blockquote>
    </div>
  );
}
