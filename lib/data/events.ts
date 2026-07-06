export type EventCategory = "talk" | "workshop" | "visit" | "collaboration" | "promotion";

export interface ClubEvent {
  slug: string;
  title: string;
  date: string; // human-readable, e.g. "October 2025"
  semester: string;
  category: EventCategory;
  summary: string;
  featured?: boolean;
}

/**
 * Higher key = more recent semester.
 * Academic order: Fall 2024 → Spring 2025 → Fall 2025 → Spring 2026
 * Fall YYYY → YYYY*2; Spring YYYY → YYYY*2−1 (spring belongs to the prior fall's year)
 * YYYY/YYYY (full academic year) → startYear*2−2
 */
export function semesterSortKey(semester: string): number {
  const academicYear = semester.match(/^(\d{4})\/(\d{4})$/);
  if (academicYear) {
    return Number(academicYear[1]) * 2 - 2;
  }
  const match = semester.match(/^(Fall|Spring)\s(\d{4})$/);
  if (!match) return 0;
  const [, term, year] = match;
  const y = Number(year);
  return term === "Spring" ? y * 2 - 1 : y * 2;
}

/**
 * The club's activity archive. Add new semesters/events here as they happen;
 * the Archive page renders this list automatically, grouped by semester.
 */
export const events: ClubEvent[] = [
  // 2023/2024
  {
    slug: "rit-croatia-yearbook-2024",
    title: "RIT Croatia Yearbook",
    date: "2023/2024",
    semester: "2023/2024",
    category: "collaboration",
    summary:
      "Designed and produced RIT Croatia's yearbook, a printed record of student life, club events, portraits, and candid campus moments from the academic year.",
  },
  // Fall 2024
  {
    slug: "instagram-token-contest-launch",
    title: "Instagram Launch & Token Design Contest",
    date: "September 2024",
    semester: "Fall 2024",
    category: "promotion",
    summary:
      "Launched @nmc_zagreb and opened a token design contest, members submitted designs for the club's physical reward tokens from the founding project proposal.",
  },
  {
    slug: "coffee-shop-hangouts",
    title: "Coffee Shop Hangouts",
    date: "Fall 2024",
    semester: "Fall 2024",
    category: "workshop",
    summary:
      "Regular casual meetups at local coffee shops to doodle, draw, and hang out, low-pressure community building with no formal agenda.",
  },
  {
    slug: "halloween-pumpkin-patch-collab",
    title: "Halloween Pumpkin Patch Collab",
    date: "October 29, 2024",
    semester: "Fall 2024",
    category: "collaboration",
    summary:
      "Friendly pumpkin design competition with @ritnewmediaclub at RIT main campus, everyone contributed in one shared Figma file.",
  },
  {
    slug: "graz-excursion",
    title: "Club Trip to Graz",
    date: "Fall 2024",
    semester: "Fall 2024",
    category: "visit",
    summary:
      "Excursion to Graz, Austria, exploring the city together as an early club outing.",
  },
  {
    slug: "art-zagreb-visit",
    title: "Art Zagreb Visit",
    date: "December 2024",
    semester: "Fall 2024",
    category: "visit",
    summary:
      "Visited Art Zagreb at the Meštrović Pavilion, Croatia's contemporary art fair featuring regional galleries, the student \"Pay and Take\" exhibition, and free talks on the art market (Dec 12–15, 2024).",
  },
  // Spring 2025
  {
    slug: "rijeka-carnival",
    title: "Rijeka Carnival",
    date: "Spring 2025",
    semester: "Spring 2025",
    category: "visit",
    summary:
      "Club outing to the Rijeka Carnival, one of Croatia's biggest carnival celebrations.",
  },
  {
    slug: "festival-of-lights-zagreb",
    title: "Festival of Lights, Zagreb",
    date: "March 2025",
    semester: "Spring 2025",
    category: "visit",
    summary:
      "Visited Zagreb's annual Festival of Lights, light installations and projections across the city center.",
  },
  {
    slug: "academic-integrity-campaign",
    title: "Academic Integrity Campaign with RIT",
    date: "Spring 2025",
    semester: "Spring 2025",
    category: "collaboration",
    summary:
      "Partnered with RIT on an anti-cheating awareness campaign, photoshoot with mascot Ritchie to produce stickers promoting academic integrity.",
  },
  // Fall 2025
  {
    slug: "raspberry-pi-flight-screen-planning",
    title: "Raspberry Pi & Flight Screen Planning",
    date: "Fall 2025",
    semester: "Fall 2025",
    category: "workshop",
    summary:
      "Purchased a Raspberry Pi and began brainstorming the Flight Radar Display, a long-term creative technology initiative combining data, hardware, and UI design.",
  },
  {
    slug: "website-instagram-launch",
    title: "New Media Center Website & Instagram Hub Launch",
    date: "Fall 2025",
    semester: "Fall 2025",
    category: "promotion",
    summary:
      "Launched the club's first custom website, linked to @nmc_zagreb, as a central hub for joining, participating, and browsing projects and archive content.",
  },
  {
    slug: "mislav-mesek-artist-talk",
    title: "Artist Talk with Mislav Mesek",
    date: "October 2025",
    semester: "Fall 2025",
    category: "talk",
    summary:
      "Alumnus and photographer Mislav Mesek returned to share his creative journey, building creative confidence, and shaping a personal visual voice.",
  },
  {
    slug: "ritatsu-jiujitsu-collab",
    title: "RITatsu Jiujitsu Club Poster Collaboration",
    date: "November 2025",
    semester: "Fall 2025",
    category: "collaboration",
    summary:
      "Helped a freshman IT student and RITatsu Jiujitsu Club leader design a promotional poster to boost jiujitsu visibility on campus.",
  },
  {
    slug: "environmental-club-recycling",
    title: "Recycling Event with Environmental Club",
    date: "Nov/Dec 2025",
    semester: "Fall 2025",
    category: "collaboration",
    summary:
      "NMC helped two Environmental Club colleagues with branding for a joint recycling event, connecting creative practice with sustainability on campus.",
  },
  // Spring 2026
  {
    slug: "weekly-monday-meetings",
    title: "Weekly Monday Meetings",
    date: "Spring 2026",
    semester: "Spring 2026",
    category: "workshop",
    summary:
      "Regular meetings for brainstorming, project updates, and peer exchange across photography, videography, modeling, marketing, and production.",
  },
  {
    slug: "valentines-arts-crafts",
    title: "Valentine's Day Arts & Crafts Workshop",
    date: "February 2026",
    semester: "Spring 2026",
    category: "workshop",
    summary:
      "A drop-in library hangout with no real plan: crafts, a shared playlist, and almost four hours of people making cards, chatting, and showing up spontaneously.",
  },
  {
    slug: "under-the-stairs-visit",
    title: "Company Visit: Under the Stairs / Eyes in the Dark",
    date: "March 31, 2026",
    semester: "Spring 2026",
    category: "visit",
    summary:
      "Toured the studio behind Eyes in the Dark and learned about the full game production pipeline, design, animation, coding, and project management tools like Unity, Spine, Trello, and Jira.",
    featured: true,
  },
  {
    slug: "nmd-day-promotion",
    title: "NMD Day",
    date: "April 25, 2026",
    semester: "Spring 2026",
    category: "promotion",
    summary:
      "The first NMD Day ever, NMC helped brainstorm and promote on Instagram, alongside a campus-wide celebration of student work and the New Media Design major.",
  },
];

export function getFeaturedEvent(): ClubEvent {
  return events.find((e) => e.featured) ?? events[events.length - 1];
}

export function getEventBySlug(slug: string): ClubEvent | undefined {
  return events.find((e) => e.slug === slug);
}

export function groupEventsBySemester() {
  const semesters = Array.from(new Set(events.map((e) => e.semester))).sort(
    (a, b) => semesterSortKey(b) - semesterSortKey(a),
  );
  return semesters.map((semester) => ({
    semester,
    events: events.filter((e) => e.semester === semester),
  }));
}

/** Most recent events first, spanning the latest semester(s) as needed. */
export function getRecentEvents(n: number): ClubEvent[] {
  const grouped = groupEventsBySemester();
  const recent: ClubEvent[] = [];
  for (const group of grouped) {
    const reversed = [...group.events].reverse();
    for (const event of reversed) {
      recent.push(event);
      if (recent.length >= n) return recent;
    }
  }
  return recent;
}
