import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const [, repo] = process.env.GITHUB_REPOSITORY?.split("/") ?? [];
const isUserSite = repo?.endsWith(".github.io") ?? false;
const basePath = isGithubPages && repo && !isUserSite ? `/${repo}` : "";

const nextConfig: NextConfig = {
  ...(isGithubPages ? { output: "export" as const } : {}),
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: isGithubPages,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
