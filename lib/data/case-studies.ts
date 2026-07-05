export interface CaseStudyExample {
  title: string;
  description: string;
}

export interface CaseStudySketch {
  caption: string;
}

export interface CaseStudyDirection {
  title: string;
  description: string;
  whyDropped: string;
}

export interface CaseStudyProblem {
  problem: string;
  solution: string;
}

export interface CaseStudyHeroImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface CaseStudy {
  heroImage?: CaseStudyHeroImage;
  prototypeLink?: { url: string; label?: string };
  motivation: string;
  realWorldExamples: CaseStudyExample[];
  sketches: CaseStudySketch[];
  directionsConsidered: CaseStudyDirection[];
  problems: CaseStudyProblem[];
  finalResult: string;
}

/**
 * Long-form case studies, keyed by project slug (see lib/data/projects.ts).
 * Not every project has one, only add an entry here once a project has
 * enough of a story to justify its own page, then it'll automatically show
 * up as a link from its ProjectCard and get a route at /projects/[slug].
 *
 * NOTE: this content is a realistic first draft written from what we know
 * about the project so far, edit freely to match what actually happened.
 */
export const caseStudies: Record<string, CaseStudy> = {
  "flight-radar-display": {
    heroImage: {
      src: "/projects/flight-radar-display-banner.png",
      alt: "Airport departure board showing flight times, destinations, and on-time statuses",
      width: 1024,
      height: 576,
    },
    motivation:
      "We wanted a project that forced us to work across disciplines instead of staying in one lane, something that mixed hardware, live data, and interface design into a single physical object. A flight tracker felt perfect: Zagreb sits under a busy stretch of European airspace, planes are something everyone already finds a little bit magical, and a screen that shows what's actually flying overhead right now is an easy way to turn raw data into something people stop and look at. It also gave newer members a low-stakes way to touch APIs, hardware, and UI design in one semester-long project instead of three separate ones. There's a personal layer to it too, RIT Croatia is an international campus, and most of us flew in from somewhere else to be here, so a screen full of live flight paths overhead hits a little differently for a student body that's constantly coming and going.",
    realWorldExamples: [
      {
        title: "Airport departure boards",
        description:
          "The classic split-flap board aesthetic, high information density, but designed to be read at a glance from across a room. We kept coming back to this as a benchmark for legibility.",
      },
      {
        title: "FlightRadar24 & ADS-B community trackers",
        description:
          "Widely used live flight-tracking sites and the hobbyist Raspberry Pi + ADS-B receiver builds behind them showed us that a Pi-based setup was realistic on a club budget, and gave us a rough map of what data was actually available for free.",
      },
      {
        title: "Ambient data-art installations",
        description:
          "Projects like Nijmegen's/Dutch-rail-style departure light art, where a data feed drives a purely ambient, ever-changing visual piece rather than a literal dashboard, pushed us to think about the display as art first, information second.",
      },
    ],
    sketches: [
      { caption: "List view, departure-board style rows of nearby flights, sorted by altitude" },
      { caption: "Radar/map view, a top-down sweep with blips for each tracked aircraft" },
      { caption: "Minimal ambient view, just callsign, route, and altitude in large type" },
      { caption: "Physical enclosure sketch, mounting the Pi and screen in a shared campus space" },
    ],
    directionsConsidered: [
      {
        title: "E-ink display",
        description:
          "An e-ink panel would've made for a very calm, low-power ambient piece that looked great in any lighting.",
        whyDropped:
          "E-ink refresh rates are far too slow for a feed that updates every few seconds, flights would appear to teleport instead of move, defeating the point of a *live* tracker.",
      },
      {
        title: "Campus bus arrival board",
        description:
          "Repurposing the same display to show live arrival times for the campus bus line, since students already gather near the screen's location.",
        whyDropped:
          "Everyone already has Google Maps or a transit app doing this in their pocket, a dedicated screen for it wouldn't tell people anything they can't already see live on their phone, so it didn't add enough value to justify diluting the flight radar concept.",
      },
      {
        title: "Scrolling news ticker",
        description:
          "A ticker bar cycling through club announcements and campus news alongside the flight data, turning the display into more of a general info board.",
        whyDropped:
          "It's a genuinely good idea, just for a different project, mixing it in here would blur what the display is actually about. We shelved it as a possible standalone screen down the line instead.",
      },
    ],
    problems: [
      {
        problem: "Free flight-data APIs are rate-limited and have patchy coverage over Croatia.",
        solution:
          "We added a caching layer that polls on a fixed interval and reuses the last known positions between calls, so the display stays smooth even when a request gets throttled.",
      },
      {
        problem: "The Raspberry Pi struggled to redraw a full UI at a steady frame rate.",
        solution:
          "We moved to a lighter-weight rendering approach that only redraws the parts of the screen that actually changed, instead of the whole layout every tick.",
      },
      {
        problem: "The first UI pass looked good on a laptop but was hard to read from across a hallway.",
        solution:
          "We redesigned around a higher-contrast palette, bigger type, and fewer simultaneous data points per flight.",
      },
    ],
    finalResult:
      "The pilot version is up and running on club-owned hardware, showing live flights in the area with the pared-back, high-contrast list view that tested best for readability. We're currently gathering feedback from early users and aviation enthusiasts around campus before deciding what to prioritize next, likely candidates are a nicer enclosure, sound-free alerts for notable flights, and revisiting the map view now that we understand the constraints better.",
  },
  "nfc-projects": {
    prototypeLink: {
      url: "https://www.figma.com/proto/qiIt6UcnKG2hmWIw77uVdJ/testing-capstone-project?node-id=28-3007&t=QeCfJGlgjWJBxx8Q-1",
      label: "Open Figma prototype",
    },
    motivation:
      "Mia and Tea set out to answer a question that sat at the heart of their Capstone I brief: what if looking at a painting didn't have to end when you walked away? Color Poetry grew from NMC's ongoing interest in NFC as a bridge between physical and digital, but this time the goal wasn't a link or a landing page. It was something emotional. Visit an exhibition, tap your phone to an NFC sticker beside a work you love, and receive a short verse woven together with the hues of that artwork, displayed dynamically on screen, unique to each piece. The project ran through November and December 2025, and it pushed both of them across app development, color logic, hardware prototyping, and the kind of exhibition UX you can't mock up convincingly on a laptop alone.",
    realWorldExamples: [
      {
        title: "Museum audio guides & smart labels",
        description:
          "Gallery apps that unlock context when you're standing in front of a work, we borrowed the idea of the phone as a private layer on a public space, but swapped factual captions for generative poetry.",
      },
      {
        title: "NFC in retail and packaging",
        description:
          "Tap-to-learn product stories and limited-edition drops showed us NFC could feel magical when the physical object and digital payload are designed as one experience, not an afterthought.",
      },
      {
        title: "Interactive poetry installations",
        description:
          "Text-based art that responds to place or audience, Color Poetry sits in that tradition, but shrinks the installation down to a sticker, a screen, and a moment between viewer and artwork.",
      },
    ],
    sketches: [
      { caption: "Exhibition flow, visitor path from artwork to NFC tap to poetry reveal on phone" },
      { caption: "Color extraction mockup, mapping dominant hues from each artwork into the verse display" },
      { caption: "In-app collection view, saved poems as personal mementos from the visit" },
      { caption: "Souvenir transfer concept, writing a saved poem onto a giftable NFC chip" },
    ],
    directionsConsidered: [
      {
        title: "QR codes beside each artwork",
        description:
          "Printed codes would've been cheaper to deploy across a whole exhibition and work on any phone camera.",
        whyDropped:
          "QR codes break the intimacy of the moment, you're photographing a label instead of gesturing toward the art. NFC felt closer to a whisper than a billboard.",
      },
      {
        title: "Static pre-written captions",
        description:
          "Fixed text per artwork would've been simpler to author and easier to proofread before opening night.",
        whyDropped:
          "The whole point was synthesis, poetry and palette generated together, dynamically. Static copy would've turned it into a fancy plaque, not Color Poetry.",
      },
      {
        title: "Bluetooth beacons",
        description:
          "Room-level proximity triggers could've detected which zone a visitor was in without placing hardware on every piece.",
        whyDropped:
          "Beacons couldn't tie the experience tightly enough to a single artwork, and they added infrastructure complexity without the satisfying tap-to-reveal moment NFC gives you.",
      },
    ],
    problems: [
      {
        problem: "NFC read reliability varied across phone models and sticker placement.",
        solution:
          "They tested sticker positions at different heights and angles on mock displays, added clear visual cues for where to tap, and built in a graceful retry state when a read didn't land on the first attempt.",
      },
      {
        problem: "Matching generated verses to each artwork's color palette felt generic at first.",
        solution:
          "Mia and Tea refined the color-extraction pipeline and tuned the display so hue, typography, and motion all responded to the artwork's dominant tones, making each reveal feel tied to that specific piece.",
      },
      {
        problem: "Transferring a saved poem onto a physical souvenir chip needed to feel effortless at the shop.",
        solution:
          "They designed a short transfer flow in the app, select a saved memento, tap the souvenir's NFC chip, confirm, so visitors could leave with something giftable without a technical explanation.",
      },
    ],
    finalResult:
      "Color Poetry shipped as Mia and Tea's Capstone I project in December 2025: a working app, NFC stickers deployed beside artworks at the exhibition, in-app memento saving, and a souvenir path that lets visitors transfer a collected poem onto a chip and pass it on. It's the clearest example so far of what NMC's NFC experiments were aiming at, not just tap-to-link, but tap-to-feel-something.",
  },
};

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}
