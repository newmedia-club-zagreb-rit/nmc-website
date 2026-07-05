"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const minimalRoutes = ["/links"];

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const minimal = minimalRoutes.includes(pathname);

  if (minimal) {
    return <main className="flex-1">{children}</main>;
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-[var(--header-height)]">{children}</main>
      <Footer />
    </>
  );
}
