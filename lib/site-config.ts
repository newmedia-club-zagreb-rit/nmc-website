/**
 * Central place for club-wide constants.
 * Update these once and they propagate across the whole site
 * (nav links, footer, metadata, social links, join/submit forms).
 */

import { getSiteUrl } from "./github-pages";

export const siteConfig = {
  name: "New Media Design Club",
  shortName: "NMC",
  tagline: "RIT Croatia's home for design, photography, video, code & creative technology.",
  description:
    "New Media Design Club (NMC) at RIT Croatia connects students through creative projects, industry exposure, peer learning, and community-building events.",
  url: getSiteUrl(),
  instagram: "https://www.instagram.com/nmc_zagreb/",
  instagramHandle: "@nmc_zagreb",
  email: "newmediaclub.rit@gmail.com", // TODO: replace with the real club inbox
  joinFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSfoW55K8ORd_LRx7qhsAop6I2Bq63RHO7PE8DV2cIuZTnQmGQ/viewform",
  artworkFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLScJDXGDsRWc-TCXiC-DIq2qH4uY_K-P69tcYldmq7YzDguJ0g/viewform",
  photoVideoFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLScjQClshlv_RIEOxcd9KzRmzwr-gtNJclXIRZwj0UJsvNeDZg/viewform",
  projectIdeaFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSdd2v1b5mZdMqPEkvLO0LImEojcTVVz-u5du5ORJLHnj0JS1Q/viewform",
  location: "RIT Croatia, Zagreb & Dubrovnik",
  brandbookUrl:
    "https://drive.google.com/drive/folders/1CnNN6SCIYvNUMhzHjIXBo2IkEuFWC8XV?usp=sharing",
  linksPageTagline: "✨🪩 Let's create. Let's connect. Let's grow. 🪩✨",
  whatsappCommunityUrl: "", // TODO: paste the WhatsApp group invite link
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/people", label: "People" },
  { href: "/learn", label: "Learn" },
  { href: "/archive", label: "Archive" },
  { href: "/participate", label: "Participate" },
];
