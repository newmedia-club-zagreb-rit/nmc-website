import type { Metadata } from "next";
import { Geist, Geist_Mono, Kodchasan, Kristi } from "next/font/google";
import "./globals.css";
import SiteShell from "@/components/SiteShell";
import { siteConfig } from "@/lib/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Used for all headings/titles across the site (see --font-heading in
// globals.css). Not a variable font on Google Fonts, so weights are explicit.
const kodchasan = Kodchasan({
  variable: "--font-kodchasan",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

const kristi = Kristi({
  variable: "--font-kristi",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | RIT Croatia`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "RIT Croatia",
    "New Media Design",
    "New Media Club",
    "NMC Zagreb",
    "student club",
    "creative technology",
    "design club",
  ],
  openGraph: {
    title: `${siteConfig.name} | RIT Croatia`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | RIT Croatia`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${kodchasan.variable} ${kristi.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
