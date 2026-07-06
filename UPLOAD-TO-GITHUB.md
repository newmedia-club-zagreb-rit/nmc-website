# Upload this folder to GitHub

Ready-to-upload copy of the NMC website — Kristi font, image paths fixed for GitHub Pages, yearbook on Google Drive.

**Live URL after deploy:** `https://newmedia-club-zagreb-rit.github.io/nmc-website/`

---

## Critical: upload the full `public/` folder

Images only work if **every file in `public/`** is on GitHub before the workflow runs. GitHub Actions builds from the repo — missing files = broken images on the live site.

### Required `public/` contents (upload all of these)

| Path | What it is |
|------|------------|
| `public/logo.png` | Navbar & footer icon |
| `public/artwall/` | 8 student art photos (homepage ticker) |
| `public/doodles/` | 7 doodle gallery images |
| `public/projects/flight-radar-display-banner.png` | Flight Radar case study hero |
| `public/home/join-club-room.jpg` | Homepage join section photo |
| `public/home/instagram-grid-source.png` | Links page asset |
| `public/archive/nmd-day/` | NMD Day posters, flyers, stickers |

Upload in batches if drag-and-drop struggles: `logo.png` first, then one folder at a time.

**Do not upload** the old yearbook PDF — the yearbook uses Google Drive now.

---

## What to upload (full repo)

### Folders
- `.github` — auto-deploy workflow
- `app`
- `components`
- `lib`
- `public` — **entire folder** (see checklist above)

### Root files
- `package.json`
- `package-lock.json`
- `next.config.ts`
- `tsconfig.json`
- `postcss.config.mjs`
- `eslint.config.mjs`
- `next-env.d.ts`
- `README.md`

### Do NOT upload
- `node_modules`
- `.next`
- `out`
- `.DS_Store`

---

## If `.github` won't drag-and-drop

1. **Add file → Create new file**
2. Name: `.github/workflows/deploy-pages.yml`
3. Paste contents from this folder
4. Commit

---

## After uploading

1. **Settings → Pages → Source → GitHub Actions**
2. **Actions** → wait for green checkmark (or Re-run workflow)
3. Open `https://newmedia-club-zagreb-rit.github.io/nmc-website/`
4. Hard-refresh: `Cmd + Shift + R`

---

## Quick test (images working?)

These URLs should all load images (not 404):

- `.../nmc-website/logo.png`
- `.../nmc-website/artwall/artwall-01.jpg`
- `.../nmc-website/home/join-club-room.jpg`
- `.../nmc-website/projects/flight-radar-display-banner.png`

---

## Folder structure

```
nmc-website-github/
├── .github/workflows/   Deploy workflow
├── app/                 Pages
├── components/          UI (SiteImage, CalligraphyTitle, …)
├── lib/                 Content data + asset-path helper
├── public/              All images & assets (MUST upload fully)
├── package.json
└── next.config.ts
```

## Editing content later

Edit files in `lib/data/` (`projects.ts`, `events.ts`, `people.ts`, etc.) and `lib/site-config.ts`. Upload changes → site rebuilds automatically.
