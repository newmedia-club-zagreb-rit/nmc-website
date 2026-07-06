export type ProjectStatus = "in-progress" | "concept" | "completed";

export interface Project {
  slug: string;
  title: string;
  status: ProjectStatus;
  summary: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

/**
 * Add a new project by adding an object to this array, no other file
 * needs to change. `slug` must be unique and URL-safe (lowercase, dashes).
 */
export const projects: Project[] = [
  {
    slug: "flight-radar-display",
    title: "Flight Radar Display",
    status: "in-progress",
    summary:
      "A real-time flight information screen built on a Raspberry Pi, blending live data with sleek, physical display design.",
    description:
      "A real-time flight information screen taking off in pilot mode. Built to test APIs, data visualization, and user-friendly design, combining sleek visuals with practical functionality. The prototype runs on a club-owned Raspberry Pi and is now gathering feedback from early users and aviation enthusiasts alike.",
    tags: ["Hardware", "Data Viz", "Raspberry Pi", "UI Design"],
    featured: true,
  },
  {
    slug: "projection-mapping",
    title: "Projection Mapping",
    status: "concept",
    summary: "Exploring projected visuals on physical surfaces for events and installations.",
    description:
      "An ongoing exploration into projection mapping, turning walls, objects, and campus spaces into canvases for motion graphics and generative visuals. Early concept work is shaping future workshops and live event visuals.",
    tags: ["Motion", "Visuals", "Installation"],
  },
  {
    slug: "audio-visualization",
    title: "Audio Visualization",
    status: "concept",
    summary: "Turning sound into responsive, generative visuals for live and digital display.",
    description:
      "A creative-technology concept combining audio analysis with generative visuals, designed to grow alongside the club's interest in interactive, code-driven design.",
    tags: ["Audio", "Generative Art", "Code"],
  },
  {
    slug: "artist-talk-visuals",
    title: "Artist Talk Visuals",
    status: "completed",
    summary: "Promotional and event visuals created for the Mislav Mesek artist talk.",
    description:
      "Visual identity and promotional material designed for the club's October 2025 artist talk with alumnus and photographer Mislav Mesek, supporting turnout and giving the event a polished, professional feel.",
    tags: ["Branding", "Event Design"],
  },
  {
    slug: "ritatsu-jiujitsu-branding",
    title: "RITatsu Jiujitsu Branding",
    status: "completed",
    summary: "Promotional posters designed in collaboration with RITatsu Jiujitsu Club.",
    description:
      "In November 2025, NMC helped a freshman IT student and RITatsu Jiujitsu Club leader design and print a promotional poster to boost jiujitsu visibility on campus, a cross-club collaboration that put our branding skills to practical use.",
    tags: ["Branding", "Collaboration", "Print"],
  },
  {
    slug: "environmental-club-branding",
    title: "Environmental Club Branding",
    status: "completed",
    summary: "Visual identity support for a recycling-focused collaborative event.",
    description:
      "In late Fall 2025, NMC helped two Environmental Club colleagues build branding for a joint recycling event, posters, social assets, and a cohesive look that helped their sustainability message land on campus.",
    tags: ["Branding", "Sustainability", "Collaboration"],
  },
  {
    slug: "nfc-projects",
    title: "Color Poetry",
    status: "completed",
    summary:
      "An NFC-powered app by Mia and Tea that pairs exhibition artworks with dynamically generated verses and hues, save them as mementos or transfer them onto giftable souvenirs.",
    description:
      "Built over November and December 2025 as part of Capstone I, Color Poetry lets visitors scan NFC stickers beside artworks to receive short, personalized poetry blended with each piece's color palette, then keep it in the app or load it onto a souvenir chip to give someone else.",
    tags: ["NFC", "Interactive", "Art", "Capstone"],
  },
  {
    slug: "custom-card-decks",
    title: "Custom Card Decks",
    status: "concept",
    summary: "Designing an original card deck as a tangible, shareable piece of club identity.",
    description:
      "A playful design project exploring illustration, layout systems, and print production through an original custom card deck, merging graphic design with something members can hold and share.",
    tags: ["Illustration", "Print", "Graphic Design"],
  },
  {
    slug: "doodle-yearbook",
    title: "Doodle Yearbook",
    status: "in-progress",
    summary: "A community-built archive of member doodles and artwork, collected all year long.",
    description:
      "A living, growing archive of doodles and artwork submitted by members throughout the year, part sketchbook, part yearbook, and a visible record of the community's creativity.",
    tags: ["Community", "Illustration", "Archive"],
  },
];

export function getFeaturedProject(): Project {
  return projects.find((p) => p.featured) ?? projects[0];
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
