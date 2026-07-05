/**
 * Derives the public site URL for metadata, sitemap, and Open Graph.
 * On GitHub Actions, uses the repo name to build the Pages URL automatically.
 */
export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }

  const repository = process.env.GITHUB_REPOSITORY;
  if (process.env.GITHUB_PAGES === "true" && repository) {
    const [owner, repo] = repository.split("/");
    if (repo.endsWith(".github.io")) {
      return `https://${repo}`;
    }
    return `https://${owner}.github.io/${repo}`;
  }

  return "https://newmediaclub-rit.vercel.app";
}
