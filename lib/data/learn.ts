export interface LearnResourceLink {
  title: string;
  url: string;
  intro: string;
}

export interface LearnTopic {
  title: string;
  description: string;
  links?: LearnResourceLink[];
}

/**
 * Skills/workshops the club wants to teach or has been asked about.
 * Pulled from the 2025-2026 club report's recommendations.
 */
export const learnTopics: LearnTopic[] = [
  {
    title: "Framer & Web Design",
    description:
      "No-code and code-based web design, build sites, landing pages, and portfolios that feel professional.",
    links: [
      {
        title: "Switching to Framer (YouTube)",
        url: "https://youtu.be/mWnMo_KoM8s",
        intro:
          "A solid starting point if you're moving into Framer for the first time, walks through the interface and workflow so you're not guessing where everything lives.",
      },
      {
        title: "Awwwards",
        url: "https://www.awwwards.com/",
        intro:
          "Award-winning sites worth studying before you open a blank canvas, great for layout, typography, motion, and interaction ideas when you're designing your own pages.",
      },
    ],
  },
  {
    title: "Adobe Creative Suite",
    description:
      "Photoshop, Illustrator, and Premiere fundamentals for branding, editing, and visual storytelling.",
  },
  {
    title: "3D & Motion",
    description: "Intro to 3D modeling and motion graphics for interactive and animated work.",
  },
  {
    title: "Projection Mapping",
    description: "Mapping visuals onto real-world surfaces for installations and live events.",
  },
  {
    title: "Marketing & Social Media",
    description: "Content strategy, reels, and promotion, turning creative work into visibility.",
  },
  {
    title: "Game Development Workflows",
    description:
      "Tools and pipelines used by real studios: Unity, Spine, Trello, Jira, and team-based production.",
  },
];

export interface IndustryConnection {
  name: string;
  description: string;
}

export const industryConnections: IndustryConnection[] = [
  { name: "Zagreb GameDev Meetup", description: "Local meetup for game developers in Zagreb." },
  { name: "WIP Party Discord", description: "Community Discord for sharing work-in-progress creative projects." },
  { name: "Game Dev Croatia Discord", description: "Regional Discord community for game development in Croatia." },
];
