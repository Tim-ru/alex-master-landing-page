import type { FAQItem } from "@/types/content";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://alexmaster.ru";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Alex Master",
    description: "Ремонт стиральных машин на дому в Санкт-Петербурге",
    url: SITE_URL,
    telephone: "+7-921-123-45-67",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Санкт-Петербург",
      addressCountry: "RU"
    },
    openingHours: "Mo-Su 09:00-21:00",
    areaServed: "Санкт-Петербург и Ленинградская область"
  };
}

export function faqPageSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}
