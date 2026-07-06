/**
 * Prefixes public asset paths with the GitHub Pages base path
 * (e.g. /nmc-website) so images load on project sites.
 *
 * next/image does not always apply basePath in static export — this helper
 * ensures /logo.png becomes /nmc-website/logo.png at build time.
 */
export function getBasePath(): string {
  if (process.env.NEXT_PUBLIC_BASE_PATH) {
    return process.env.NEXT_PUBLIC_BASE_PATH.replace(/\/$/, "");
  }

  const isGithubPages = process.env.GITHUB_PAGES === "true";
  const [, repo] = process.env.GITHUB_REPOSITORY?.split("/") ?? [];
  const isUserSite = repo?.endsWith(".github.io") ?? false;

  if (isGithubPages && repo && !isUserSite) {
    return `/${repo}`;
  }

  return "";
}

export function assetPath(path: string): string {
  if (!path.startsWith("/")) return path;
  const base = getBasePath();
  return base ? `${base}${path}` : path;
}
