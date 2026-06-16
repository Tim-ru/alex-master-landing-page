import { ImageResponse } from "next/og";
import { getBrandBySlug } from "@/content";
import { loadOgFonts } from "@/lib/og-fonts";
import { ogTemplate } from "@/lib/og-template";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = { params: Promise<{ slug: string }> };

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) return new Response("Not found", { status: 404 });

  const fonts = await loadOgFonts();

  return new ImageResponse(
    ogTemplate({
      eyebrow: "Alex Master · Ремонт стиральных машин",
      title: brand.h1,
      subtitle: brand.intro,
    }),
    { ...size, fonts }
  );
}
