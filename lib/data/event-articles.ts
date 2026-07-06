import { environmentalClubArticle, ritatsuJiujitsuArticle } from "@/lib/data/project-articles";

export type EventArticleSection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | {
      type: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
      caption?: string;
    }
  | { type: "instagram"; url: string; caption?: string }
  | { type: "instagramProfile"; url: string; handle: string; caption?: string }
  | { type: "externalLink"; url: string; label: string; caption?: string }
  | { type: "spotifyEmbed"; embedUrl: string; title?: string; caption?: string; height?: number }
  | { type: "pdfEmbed"; src: string; title?: string; caption?: string; height?: number };

export interface EventArticle {
  /** One-line emotional hook beneath the title. */
  dek: string;
  sections: EventArticleSection[];
  /** Optional closing reflection after the main body. */
  closing?: string;
}

/**
 * Long-form event write-ups, keyed by event slug (see lib/data/events.ts).
 * Add an entry here when an archive event should open an article at /archive/[slug].
 */
export const eventArticles: Record<string, EventArticle> = {
  "under-the-stairs-visit": {
    dek: "Stepping inside a real game studio reminded us why we started making things in the first place.",
    sections: [
      {
        type: "paragraph",
        text: "Walking into Under the Stairs felt a little like walking into a level we'd only ever seen on a screen. The studio behind Eyes in the Dark isn't flashy from the outside, but inside, every corner had evidence of someone caring deeply about a pixel, a frame, a note in a spreadsheet.",
      },
      {
        type: "paragraph",
        text: "We went in as a club of students who mostly know each other from classroom projects and Monday meetings. We left with a clearer picture of what a real production pipeline looks like, not as a diagram in a slide deck, but as people moving between Unity, Spine, Trello, and Jira, juggling creative decisions and deadlines at the same time.",
      },
      {
        type: "heading",
        text: "What stayed with us",
      },
      {
        type: "paragraph",
        text: "What stuck wasn't just the tools. It was watching animators and designers talk through a problem together, the casual back-and-forth of people who've built trust over years of shipping work. That kind of collaboration is hard to teach in a lecture. You have to see it.",
      },
      {
        type: "paragraph",
        text: "Eyes in the Dark gave us a generous look behind the curtain: early sketches next to polished assets, the messiness of iteration made visible. For a lot of us, it was the first time a local studio felt reachable, not a distant company on a website, but humans who started somewhere familiar and kept going.",
      },
      {
        type: "instagram",
        url: "https://www.instagram.com/reel/DYFEaNKIgA4/",
        caption:
          "We captured the day on Instagram, the energy, the questions, the quiet moments between demos.",
      },
    ],
    closing:
      "Studio visits like this are why NMC exists. Not to fill a calendar, but to shrink the distance between where we are and where we might go. If you're curious about game dev, animation, or what comes after graduation, come to the next one. We'll be there, still asking questions, still trying to make things.",
  },
  "ritatsu-jiujitsu-collab": ritatsuJiujitsuArticle,
  "environmental-club-recycling": environmentalClubArticle,
  "graz-excursion": {
    dek: "One of our first excursions as a club, Graz, good company, and a lot of walking.",
    sections: [
      {
        type: "paragraph",
        text: "Early in the club's life we took a trip to Graz, Austria, less a formal tour and more an excuse to explore a new city together, get out of the campus bubble, and see what happens when a group of creative students lands somewhere unfamiliar.",
      },
      {
        type: "instagram",
        url: "https://www.instagram.com/p/DD7BuSbM1VX/",
        caption: "Snapshots from the Graz trip, posted on @nmc_zagreb.",
      },
      {
        type: "instagram",
        url: "https://www.instagram.com/p/DEIB4ziokhU/",
        caption: "More from the excursion, the city, the crew, the vibe.",
      },
    ],
    closing:
      "Excursions like this are part of why NMC exists, not just to make things in a room, but to go see things, together.",
  },
  "rijeka-carnival": {
    dek: "Color, chaos, and costumes, the club hit the Rijeka Carnival.",
    sections: [
      {
        type: "paragraph",
        text: "In Spring 2025 we joined one of Croatia's biggest carnival celebrations in Rijeka, a loud, colorful, completely unpretentious day out that had nothing to do with deadlines or portfolios and everything to do with showing up as a group and having fun.",
      },
      {
        type: "instagram",
        url: "https://www.instagram.com/p/DGz1l-QN5Ur/",
        caption: "The day captured on Instagram, costumes, crowds, and carnival energy.",
      },
    ],
    closing:
      "Not every club outing needs a creative brief. Sometimes the best community-building is just going somewhere together.",
  },
  "rit-croatia-yearbook-2024": {
    dek: "Before the Instagram page and the weekly hangouts, we made the yearbook.",
    sections: [
      {
        type: "paragraph",
        text: "The RIT Croatia yearbook is a full visual record of the academic year: senior portraits, faculty and staff photos, candid shots from classrooms and campus events, and coverage of clubs and student life across Zagreb and Dubrovnik. It's the kind of project that only works when a lot of people contribute, photographers shooting events all year, designers laying out spreads, and reporters gathering the stories behind each page.",
      },
      {
        type: "paragraph",
        text: "For the 2023/2024 edition, NMC members took on that work, documenting what actually happened on campus and turning it into something permanent you can flip through long after the semester ends. It was one of the club's first big creative outputs, and a lot of what came later, the community hangouts, the excursions, the collaborations, grew out of the same instinct: capture what we're making together, and share it.",
      },
      {
        type: "pdfEmbed",
        src: "https://drive.google.com/file/d/1v6s5DDkV6MnvHlvU1SCTBm6m03HWej-Z/view?usp=sharing",
        title: "RIT Croatia Yearbook 2023/2024",
        caption: "Flip through the full 2023/2024 yearbook below, or open it in a new tab.",
        height: 720,
      },
    ],
    closing:
      "The yearbook is still part of what NMC does, if you're interested in photography, layout, or telling the story of campus life, there's always another edition to help shape.",
  },
  "valentines-arts-crafts": {
    dek: "No plan, just the library, some craft supplies, and a playlist. It turned into one of the most heartfelt afternoons of the year.",
    sections: [
      {
        type: "paragraph",
        text: "We started with no plan in mind, just a meet-up in the library to have fun. Everyone brought whatever materials they had for arts and crafts, we put on a playlist, and people sat around making Valentine's cards while chatting. That was the whole idea.",
      },
      {
        type: "instagram",
        url: "https://www.instagram.com/p/DUlSL8JCOjU/",
        caption: "The poster that kicked it off. Low-key, open invite, no pressure.",
      },
      {
        type: "paragraph",
        text: "What started as something simple turned into a room where people kept coming and going over hours. We never thought it would last almost four hours. Random people joined in spontaneously, not everyone had been to a club meeting before. Friendships were made. Advice was shared, creative advice too.",
      },
      {
        type: "spotifyEmbed",
        embedUrl:
          "https://open.spotify.com/embed/playlist/7FpufZewsCsaYF9VDj3ZJh?utm_source=generator",
        title: "Sunwritten, the playlist from the afternoon",
        caption:
          "The soundtrack while we cut, glued, and talked, mostly 2000s optimism and sing-along energy.",
        height: 352,
      },
      {
        type: "heading",
        text: "See for yourself",
      },
      {
        type: "instagram",
        url: "https://www.instagram.com/reel/DUyxk0JCGV3/",
        caption: "A glimpse of the afternoon: cards, conversation, and people drifting in and out.",
      },
    ],
    closing:
      "This was one of the most heartfelt events we had this year. No brief, no deliverable, just showing up with paper and markers and letting the room fill itself. That's the kind of thing we want more of.",
  },
};

export function getEventArticle(slug: string): EventArticle | undefined {
  return eventArticles[slug];
}
