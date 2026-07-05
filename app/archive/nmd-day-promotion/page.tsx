import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Container from "@/components/Container";
import CtaBanner from "@/components/CtaBanner";
import DoodleGallery from "@/components/DoodleGallery";
import NmdDayStickers from "@/components/NmdDayStickers";
import {
  nmdDayDek,
  nmdDayFlyers,
  nmdDayPosters,
  nmdDaySocial,
} from "@/lib/data/nmd-day";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "NMD Day",
  description: nmdDayDek,
};

export default function NmdDayPage() {
  return (
    <div className="relative overflow-x-hidden">
      <NmdDayStickers />

      <Container className="relative z-10 py-20">
        <Link
          href="/archive"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-accent"
        >
          <ArrowLeft size={16} /> Back to Archive
        </Link>

        <header className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-maroon">
            Promotion &middot; Spring 2026
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            NMD Day
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{nmdDayDek}</p>
        </header>

        <div className="mx-auto mt-14 max-w-2xl space-y-6 border-t border-border pt-14 text-base leading-[1.85] text-muted">
          <p>
            This was the first NMD Day ever at RIT Croatia, not a comeback, just a debut. The New
            Media Design major didn&apos;t exist before Fall 2022, so there was never an NMD Day to
            throw until now. The whole point was simple: showcase and celebrate what our students are
            making, while giving everyone a reason to hang out, meet people outside their year, and
            actually enjoy themselves.
          </p>
          <p>
            The day brought together student work on display, a drawing challenge, a DJ, food, coffee,
            and drinks, less a formal exhibition and more a party where the work happened to be
            really good. NMC assisted with promotion, helping brainstorm the look and feel, and
            pushing the event on Instagram. Posters, stickers, and the rest of the campaign came
            together across the major and campus, not from the club alone.
          </p>
        </div>
      </Container>

      <section aria-label="Posters" className="relative z-10 mt-20">
        <Container className="mb-6">
          <h2 className="text-center text-2xl font-bold tracking-tight">Posters</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted">
            Printed around campus, the &ldquo;This Is Not AI&rdquo; series and event variants.
          </p>
        </Container>
        <DoodleGallery images={nmdDayPosters} />
      </section>

      <Container className="relative z-10 pb-20 pt-20">
        <section className="relative mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold tracking-tight">Flyers &amp; stickers</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted">
            Handouts and die-cut stickers, the NMDX logo and &ldquo;Hello, my name is&rdquo; tags
            scattered around like someone actually used them.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-1 sm:grid-cols-4">
            {nmdDayFlyers.map((flyer) => (
              <figure
                key={flyer.src}
                className="overflow-hidden border border-border bg-white p-2"
              >
                <Image
                  src={flyer.src}
                  alt={flyer.alt}
                  width={400}
                  height={400}
                  className="h-auto w-full"
                />
              </figure>
            ))}
          </div>
        </section>
      </Container>

      <section aria-label="Social media" className="relative z-10 mt-8 pb-20 pt-12 sm:mt-12 sm:pt-16">
        <Container className="mb-6">
          <h2 className="text-center text-2xl font-bold tracking-tight">Social media</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted">
            Stories and posts promoting the event on {siteConfig.instagramHandle}.
          </p>
        </Container>
        <DoodleGallery images={nmdDaySocial} />
      </section>

      <Container className="relative z-10 pb-20">
        <p className="mx-auto max-w-2xl text-base leading-[1.85] text-muted">
          NMD Day reminded us why the club exists, not just to make things in isolation, but to put
          student work in front of people and build the kind of community where you want to stay
          after class. If you missed it, follow {siteConfig.instagramHandle} for whatever we cook up
          next.
        </p>

        <div className="relative mt-20">
          <CtaBanner
            title="Want in on the next one?"
            description="Join the club to help brainstorm, promote, and shape whatever comes next, or just show up and enjoy it."
            primaryHref="/join"
            primaryLabel="Join the club"
            secondaryHref={siteConfig.instagram}
            secondaryLabel="Follow on Instagram"
          />
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/archive"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
          >
            Browse the full archive <ArrowUpRight size={16} />
          </Link>
        </div>
      </Container>
    </div>
  );
}
