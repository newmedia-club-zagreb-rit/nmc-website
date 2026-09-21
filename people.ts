export interface Person {
  name: string;
  role: string;
  bio?: string;
  instagram?: string;
}

export const people: Person[] = [
  {
    name: "Angelina Korotkina",
    role: "President, 2026–present",
  },
  {
    name: "Prophet Brunson",
    role: "Vice President, 2026–present",
  },
  {
    name: "Tea Durdevic",
    role: "President, 2025/26",
    bio: "Expanded the club's scope to creative engineering and completed the club's visual identity.",
  },
  {
    name: "Mia K. B. McG.",
    role: "Vice President, 2025/26",
    bio: "Organised artist talks and company visits.",
  },
  {
    name: "Iva",
    role: "Treasurer",
  },
  {
    name: "Benjamin Metzger",
    role: "Secretary of Agriculture",
  },
  {
    name: "Nora Miskulin",
    role: "Founder & President, 2023–25",
  },
  {
    name: "Dimash",
    role: "Vice President, 2023–25",
    bio: "Videographer.",
  },
];
