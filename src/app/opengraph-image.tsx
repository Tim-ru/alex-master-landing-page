import { ImageResponse } from "next/og";
import { loadOgFonts } from "@/lib/og-fonts";
import { ogTemplate } from "@/lib/og-template";

export const alt = "Alex Master — Ремонт стиральных машин на дому в Санкт-Петербурге";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const fonts = await loadOgFonts();

  return new ImageResponse(
    ogTemplate({
      title: "Ремонт стиральных машин на дому",
      subtitle:
        "Санкт-Петербург · Диагностика в день обращения · Гарантия на ремонт",
    }),
    { ...size, fonts }
  );
}
