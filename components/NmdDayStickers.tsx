import Image from "next/image";
import { nmdDayStickerPlacements } from "@/lib/data/nmd-day";

export default function NmdDayStickers() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
    >
      {nmdDayStickerPlacements.map((sticker, index) => (
        <div
          key={`${sticker.src}-${index}`}
          className={`absolute ${sticker.hideOnMobile ? "hidden sm:block" : ""}`}
          style={{
            top: sticker.top,
            left: sticker.left,
            right: sticker.right,
            transform: `rotate(${sticker.rotate}deg)`,
          }}
        >
          <Image
            src={sticker.src}
            alt=""
            width={sticker.width}
            height={sticker.height ?? sticker.width}
            className="h-auto drop-shadow-[0_4px_12px_rgba(40,26,27,0.18)]"
            style={{ width: sticker.width }}
          />
        </div>
      ))}
    </div>
  );
}
