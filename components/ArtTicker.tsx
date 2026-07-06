import HeroWelcome from "@/components/home/HeroWelcome";
import ArtWallSection from "@/components/home/ArtWallSection";

export default function ArtTicker() {
  return (
    <div className="py-10 sm:py-14 md:py-16">
      <HeroWelcome />
      <ArtWallSection />
    </div>
  );
}
