export interface ArtWallImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/** Student-submitted artwork for the homepage art wall ticker. */
export const artWallImages: ArtWallImage[] = [
  { src: "/artwall/artwall-01.webp", alt: "Student artwork", width: 800, height: 1422 },
  { src: "/artwall/artwall-02.webp", alt: "Student artwork", width: 800, height: 1066 },
  { src: "/artwall/artwall-03.webp", alt: "Student artwork", width: 800, height: 1066 },
  { src: "/artwall/artwall-04.webp", alt: "Student artwork", width: 800, height: 1066 },
  { src: "/artwall/artwall-05.webp", alt: "Student artwork", width: 800, height: 1066 },
  { src: "/artwall/artwall-06.webp", alt: "Student artwork", width: 1066, height: 800 },
  { src: "/artwall/artwall-07.webp", alt: "Student artwork", width: 1066, height: 800 },
  { src: "/artwall/artwall-08.webp", alt: "Student artwork", width: 800, height: 914 },
];
