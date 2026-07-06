import NextImage, { type ImageProps } from "next/image";
import { assetPath } from "@/lib/asset-path";

function resolveSrc(src: ImageProps["src"]): ImageProps["src"] {
  if (typeof src === "string" && src.startsWith("/")) {
    return assetPath(src);
  }
  return src;
}

/** next/image wrapper that applies the GitHub Pages base path to public assets. */
export default function SiteImage({ src, ...props }: ImageProps) {
  return <NextImage src={resolveSrc(src)} {...props} />;
}
