import type { FAQItem } from "@/types/content";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://alexmaster.ru";

export function serviceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: "Alex Master",
      url: SITE_URL
    },
    areaServed: "Санкт-Петербург",
    url
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`
    }))
  };
}

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
