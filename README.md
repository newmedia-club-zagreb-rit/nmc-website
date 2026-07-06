# New Media Design Club, Website

RIT Croatia's New Media Design Club site, rebuilt as a real codebase (Next.js +
TypeScript + Tailwind) instead of a no-code builder, so the club owns it
forever: free to host, free to extend, and easy to hand off to next year's
officers.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** for styling
- **lucide-react** for icons
- Fully static, no database, no server required, deploys anywhere for free

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content (no deep React knowledge needed)

Almost everything on the site is driven by plain data files. To update
content, you only need to edit these, the pages re-render automatically:

| What to change | File |
| --- | --- |
| Club name, tagline, social links, join/submit form URLs | `lib/site-config.ts` |
| Projects (add/edit/remove) | `lib/data/projects.ts` |
| Archive / timeline events | `lib/data/events.ts` |
| Officers / members | `lib/data/people.ts` |
| Workshop topics | `lib/data/learn.ts` |

Each file is an array of objects with comments explaining the shape. To add a
new project, for example, just copy an existing object in `projects.ts`,
change the values, and give it a unique `slug`.

### Things to fill in before launch

Search the codebase for `TODO`, currently that's:

- `lib/site-config.ts` — `whatsappCommunityUrl` and any form URLs still marked TODO
- `lib/data/people.ts` — replace placeholder names/roles with the real e-board

## Project structure

```
app/                 Pages (one folder per route: /projects, /people, /learn, /join, /participate, /archive)
components/          Reusable UI (Navbar, Footer, cards, badges, CTA banner)
lib/data/            Editable content (projects, events, people, learn topics)
lib/site-config.ts   Site-wide constants (links, name, tagline)
```

Adding a brand-new page (e.g. a blog or events calendar later) is just adding
a new folder under `app/` with a `page.tsx`, Next.js routes it automatically.

## Deploying for free

### GitHub Pages (recommended — free, no account limits)

This repo includes a GitHub Actions workflow (`.github/workflows/deploy-pages.yml`)
that builds and publishes the site automatically on every push to `main`.

**One-time setup:**

1. Create a new GitHub repo (e.g. `nmc-website`) and push this code to it.
2. On GitHub, open **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push to `main` (or run the workflow manually under **Actions**).

Your site will be live at:

`https://YOUR-GITHUB-USERNAME.github.io/REPO-NAME/`

Example: repo `nmc-website` under user `tea4004` →
`https://tea4004.github.io/nmc-website/`

**Optional:** set a custom domain under **Settings → Pages → Custom domain**,
then add `NEXT_PUBLIC_SITE_URL=https://your-domain.com` as a repo secret or
Actions variable so sitemap/metadata use the right URL.

**Test the static build locally:**

```bash
GITHUB_PAGES=true GITHUB_REPOSITORY=your-user/your-repo npm run build
npx serve out
```

### Other free hosts

1. **Vercel** — push to GitHub, import at [vercel.com/new](https://vercel.com/new)
2. **Netlify** / **Cloudflare Pages** — same idea as Vercel

## Free domain options

- Ask RIT Croatia if the club can get a subdomain of the school's domain
  (most professional, free option)
- [GitHub Student Developer Pack](https://education.github.com/pack), free
  `.me` domain for a year if you have a student email
- Free subdomains: `*.vercel.app`, `*.pages.dev`, `*.netlify.app`,
  `*.github.io`, or [is-a.dev](https://is-a.dev)

## Why this instead of Framer

- You own the code, no vendor lock-in, no monthly limits
- Free hosting with no restrictions on bandwidth for a site this size
- Easy for future club members to edit content via simple data files
- Fast, accessible, SEO-friendly by default (Next.js static generation,
  sitemap, robots.txt, Open Graph metadata already set up)
