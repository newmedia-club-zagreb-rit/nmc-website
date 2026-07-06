import type { EventArticle } from "@/lib/data/event-articles";

export const ritatsuJiujitsuArticle: EventArticle = {
  dek: "Helping another club get noticed on campus turned out to be one of our favorite kinds of project, simple, useful, and genuinely collaborative.",
  sections: [
    {
      type: "paragraph",
      text: "In November 2025, a freshman IT student leading the RITatsu Jiujitsu Club came to us with a straightforward ask: people on campus didn't really know the club existed, and they needed a poster bold enough to stop students mid-walk.",
    },
    {
      type: "paragraph",
      text: "NMC members sat down with them to talk through the message, sketch layout ideas, and turn a rough concept into something print-ready, typography, hierarchy, and a visual hook that actually felt like jiujitsu, not generic campus flyer noise.",
    },
    {
      type: "heading",
      text: "Why it mattered",
    },
    {
      type: "paragraph",
      text: "Cross-club work like this is exactly why we exist. Not every project needs to be a semester-long build or a Raspberry Pi on a wall. Sometimes the best thing we can do is help someone else ship something they're proud of and learn a little about collaboration along the way.",
    },
    {
      type: "instagram",
      url: "https://www.instagram.com/p/DQCuDdmjSx5/",
      caption:
        "The finished poster, shared on Instagram, proof that a small collaboration can make a real difference for another student org.",
    },
  ],
  closing:
    "If your club or campus project needs a poster, reel, or visual push, reach out. We're always looking for ways to collaborate across RIT Croatia.",
};

export const environmentalClubArticle: EventArticle = {
  dek: "Two colleagues, one sustainability mission, and a branding push that helped the Environmental Club show up with confidence.",
  sections: [
    {
      type: "paragraph",
      text: "Late in Fall 2025, we teamed up with two colleagues from the Environmental Club on a joint recycling-focused event, and quickly realized they needed more than logistics. They needed a visual identity that matched the care they put into the work: clear, approachable, and unmistakably about sustainability.",
    },
    {
      type: "paragraph",
      text: "NMC members helped shape the branding around the event, posters, social assets, and the kind of cohesive look that makes people stop and actually read a flyer instead of walking past it. It wasn't about reinventing their club from scratch; it was about giving them tools to communicate what they already believed in.",
    },
    {
      type: "heading",
      text: "Design meets purpose",
    },
    {
      type: "paragraph",
      text: "Collaborations like this sit at the intersection of creative practice and real campus impact. The Environmental Club brought the mission; we brought layout, typography, and an eye for what reads well on a phone screen and on a wall. Together it became a small but meaningful step toward more interdisciplinary programming at RIT Croatia.",
    },
    {
      type: "instagramProfile",
      url: "https://www.instagram.com/environmental.club.rit/",
      handle: "@environmental.club.rit",
      caption:
        "Follow the Environmental Club on Instagram to see their events, recycling initiatives, and the work they're building on campus.",
    },
  ],
  closing:
    "Creative skills mean more when they're shared. If your club is planning an event and needs a visual push, whether it's sustainability, sports, or something entirely new, we'd love to hear from you.",
};

export const projectArticles: Record<string, EventArticle> = {
  "ritatsu-jiujitsu-branding": ritatsuJiujitsuArticle,
  "environmental-club-branding": environmentalClubArticle,
};

export function getProjectArticle(slug: string): EventArticle | undefined {
  return projectArticles[slug];
}
