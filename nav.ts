/** Match a nav link as active for its page and any nested routes. */
export function isNavLinkActive(pathname: string, href: string): boolean {
  const stripTrailingSlash = (path: string) =>
    path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;

  const path = stripTrailingSlash(pathname);
  const target = stripTrailingSlash(href);

  if (target === "/") return path === "/";
  return path === target || path.startsWith(`${target}/`);
}
