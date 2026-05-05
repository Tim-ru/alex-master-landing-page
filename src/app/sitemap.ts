import type { MetadataRoute } from "next";
import { brands, errorCodes, symptoms } from "@/content";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://alexmaster.ru";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, priority: 1.0, changeFrequency: "weekly" },
    { url: `${SITE_URL}/prices`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${SITE_URL}/faq`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${SITE_URL}/contacts`, priority: 0.9, changeFrequency: "monthly" }
  ];

  const symptomPages: MetadataRoute.Sitemap = symptoms.map((s) => ({
    url: `${SITE_URL}/symptoms/${s.slug}`,
    priority: 0.8,
    changeFrequency: "monthly"
  }));

  const brandPages: MetadataRoute.Sitemap = brands.map((b) => ({
    url: `${SITE_URL}/brands/${b.slug}`,
    priority: 0.8,
    changeFrequency: "monthly"
  }));

  const errorCodePages: MetadataRoute.Sitemap = errorCodes.map((ec) => ({
    url: `${SITE_URL}/error-codes/${ec.brandSlug}/${ec.slug}`,
    priority: 0.7,
    changeFrequency: "monthly"
  }));

  return [...staticPages, ...symptomPages, ...brandPages, ...errorCodePages];
}
