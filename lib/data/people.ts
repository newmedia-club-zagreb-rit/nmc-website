export interface Person {
  name: string;
  role: string;
  bio?: string;
  instagram?: string;
}

export const people: Person[] = [
  {
    name: "Tea Durdevic",
    role: "President",
    bio: "\"The only way to do great work is to love what you do.\", Steve Jobs",
  },
  {
    name: "Mia K. B. McG.",
    role: "Vice President",
  },
  {
    name: "Benjamin Metzger",
    role: "Secretary of Agriculture",
  },
  {
    name: "Iva",
    role: "Financial Coordinator",
  },
  {
    name: "Nora Miskulin",
    role: "Founder",
  },
  {
    name: "Dimash",
    role: "Social Media Lead",
  },
  {
    name: "Tea",
    role: "Creative Technology Lead",
    bio: "Owns the Flight Radar Display and other hardware/code projects.",
  },
];
