# New Media Design Club, Ideas backlog

A living list of things we might build or try. Not commitments, just ideas
so future officers don't have to reinvent them.

Status key:

- **idea**, not started, needs discussion
- **planned**, we want to do it, blocked on time/setup
- **in progress**, someone is working on it
- **done**, shipped or no longer relevant

---

## Instagram mirror newsletter

**Status:** idea  
**Goal:** Keep people in the loop who don't use Instagram, using the same
visuals we already post to the grid or Stories.

### What it is

When NMC posts on Instagram, subscribers get an email with that same image
(and a short caption + link to the post). No separate newsletter design work:
the Instagram post _is_ the newsletter content.

### Where emails come from

- People who fill out the **join form** (`joinFormUrl` in `lib/site-config.ts`)
 , the join page already says we'll add them to the "mailing list"
- Optionally: a dedicated signup on the site later (footer / `/join`) for
  people who only want updates, not full membership

### How it could work (high level)

1. **Collect emails**, Google Form responses export, or sync to a mailing tool
   (Buttondown, MailerLite) or a small database (e.g. Supabase)
2. **Detect new posts**, Instagram Graph API (requires Business/Creator account
   linked to a Facebook Page) or a no-code trigger (Zapier/Make)
3. **Send email**, Resend, SendGrid, or the mailing tool's "send campaign"
   with the post image, caption, and link to Instagram

### Notes / constraints

- **Grid posts:** Straightforward to automate once the account is Business +
  API access is set up
- **Stories:** Hard to fully automate (24h expiry, limited API). Options:
  - Mirror important Stories as a feed post and email that
  - Manual "send this story to the list" button when needed
- **Privacy:** Only use emails people gave via the join form; include
  unsubscribe in every email
- **Site today:** Static Next.js site, automation likely lives in Vercel Cron
  + email API, or entirely in Zapier/Make + a mailing service

### Open questions

- [ ] Is `@nmc_zagreb` already a Business/Creator account on a Facebook Page?
- [ ] Who owns the join form responses export / mailing list?
- [ ] Posts only, or also Stories (with manual fallback)?
- [ ] How often do we post, is free tier of Zapier (100 tasks/mo) enough?

---

## Other ideas

_Add new sections below as they come up._

### Example: Events calendar on the site

**Status:** idea  
**Goal:** Show upcoming meetings/workshops on the homepage instead of only on
Instagram.

---

## How to use this file

- Add a new `##` section per idea
- Update **Status** when something moves forward
- Link to relevant files (`lib/site-config.ts`, forms, etc.) when useful
- When an idea ships, move details to `README.md` and mark **done** here or
  remove the section
