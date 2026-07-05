import type { GalleryImage } from "@/lib/data/galleries";

export type StickerPlacement = {
  src: string;
  alt: string;
  width: number;
  height?: number;
  top: string;
  left?: string;
  right?: string;
  rotate: number;
  /** Hide on small screens when placement would crowd content */
  hideOnMobile?: boolean;
};

export const nmdDayPosters: GalleryImage[] = [
  {
    src: "/archive/nmd-day/posters/poster-01.png",
    alt: "NMD Day poster, This Is Not AI",
    width: 1080,
    height: 1524,
  },
  {
    src: "/archive/nmd-day/posters/poster-02.png",
    alt: "NMD Day poster variant",
    width: 1080,
    height: 1524,
  },
  {
    src: "/archive/nmd-day/posters/poster-03.png",
    alt: "NMD Day poster variant",
    width: 1080,
    height: 1524,
  },
  {
    src: "/archive/nmd-day/posters/poster-04.png",
    alt: "NMD Day poster variant",
    width: 1080,
    height: 1524,
  },
  {
    src: "/archive/nmd-day/posters/poster-05.png",
    alt: "NMD Day poster variant",
    width: 1080,
    height: 1524,
  },
  {
    src: "/archive/nmd-day/posters/poster-06.png",
    alt: "NMD Day poster variant",
    width: 1080,
    height: 1524,
  },
  {
    src: "/archive/nmd-day/posters/poster-07.png",
    alt: "NMD Day poster variant",
    width: 1080,
    height: 1524,
  },
  {
    src: "/archive/nmd-day/posters/poster-08.png",
    alt: "NMD Day poster variant",
    width: 1080,
    height: 1524,
  },
];

export const nmdDayFlyers = [
  { src: "/archive/nmd-day/flyers/flyer-01.png", alt: "NMD Day flyer, NMDX logo" },
  { src: "/archive/nmd-day/flyers/flyer-02.png", alt: "NMD Day flyer variant" },
  { src: "/archive/nmd-day/flyers/flyer-03.png", alt: "NMD Day flyer variant" },
  { src: "/archive/nmd-day/flyers/flyer-04.png", alt: "NMD Day flyer variant" },
];

export const nmdDaySocial: GalleryImage[] = [
  {
    src: "/archive/nmd-day/social/social-main.png",
    alt: "NMD Day Instagram story, event lineup",
    width: 1080,
    height: 1920,
  },
  {
    src: "/archive/nmd-day/social/this-is-not-ai.png",
    alt: "NMD Day social, This Is Not AI",
    width: 1080,
    height: 1524,
  },
  {
    src: "/archive/nmd-day/social/social-03.png",
    alt: "NMD Day social graphic",
    width: 1080,
    height: 1524,
  },
  {
    src: "/archive/nmd-day/social/social-05.png",
    alt: "NMD Day social graphic",
    width: 1080,
    height: 1524,
  },
  {
    src: "/archive/nmd-day/social/letci.png",
    alt: "NMD Day social graphic",
    width: 1771,
    height: 1263,
  },
  {
    src: "/archive/nmd-day/social/promo-preview.png",
    alt: "NMD Day promotion preview",
    width: 1080,
    height: 1919,
  },
];

/** Stickers placed like someone actually slapped them around the page. */
export const nmdDayStickerPlacements: StickerPlacement[] = [
  {
    src: "/archive/nmd-day/stickers/sticker-01.png",
    alt: "NMDX sticker",
    width: 88,
    top: "6rem",
    left: "3%",
    rotate: -11,
    hideOnMobile: true,
  },
  {
    src: "/archive/nmd-day/stickers/name-tag-03.png",
    alt: "Hello my name is name tag",
    width: 72,
    height: 88,
    top: "9rem",
    right: "4%",
    rotate: 7,
  },
  {
    src: "/archive/nmd-day/stickers/sticker-02.png",
    alt: "NMDX sticker",
    width: 64,
    top: "22rem",
    right: "6%",
    rotate: 14,
    hideOnMobile: true,
  },
  {
    src: "/archive/nmd-day/stickers/name-tag-05.png",
    alt: "Hello my name is name tag",
    width: 80,
    height: 98,
    top: "28rem",
    left: "2%",
    rotate: -6,
  },
  {
    src: "/archive/nmd-day/stickers/sticker-03.png",
    alt: "NMDX sticker",
    width: 76,
    top: "42rem",
    left: "5%",
    rotate: 9,
    hideOnMobile: true,
  },
  {
    src: "/archive/nmd-day/stickers/name-tag-07.png",
    alt: "Hello my name is name tag",
    width: 68,
    height: 83,
    top: "48rem",
    right: "3%",
    rotate: -13,
    hideOnMobile: true,
  },
  {
    src: "/archive/nmd-day/stickers/sticker-04.png",
    alt: "NMDX sticker",
    width: 92,
    top: "62rem",
    right: "8%",
    rotate: 5,
  },
  {
    src: "/archive/nmd-day/stickers/name-tag-02.png",
    alt: "Hello my name is name tag",
    width: 74,
    height: 90,
    top: "68rem",
    left: "4%",
    rotate: 11,
    hideOnMobile: true,
  },
  {
    src: "/archive/nmd-day/stickers/sticker-05.png",
    alt: "NMDX sticker",
    width: 70,
    top: "80rem",
    left: "7%",
    rotate: -8,
  },
  {
    src: "/archive/nmd-day/stickers/name-tag-06.png",
    alt: "Hello my name is name tag",
    width: 66,
    height: 81,
    top: "86rem",
    right: "5%",
    rotate: 16,
    hideOnMobile: true,
  },
  {
    src: "/archive/nmd-day/stickers/sticker-01.png",
    alt: "NMDX sticker",
    width: 56,
    top: "98rem",
    right: "12%",
    rotate: -18,
    hideOnMobile: true,
  },
  {
    src: "/archive/nmd-day/stickers/name-tag-04.png",
    alt: "Hello my name is name tag",
    width: 78,
    height: 95,
    top: "104rem",
    left: "6%",
    rotate: 4,
  },
];

export const nmdDayDek =
  "The first NMD Day ever, a day to showcase student work, meet each other, and actually have fun doing it.";
