import type { FAQItem } from "@/types/content";
import { PHONE_HREF } from "@/lib/constants";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://alexmaster.ru";

const PHONE = PHONE_HREF.replace("tel:", "");

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: "Ремонт стиральных машин",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "Alex Master",
      telephone: PHONE,
      url: SITE_URL
    },
    areaServed: {
      "@type": "City",
      name: "Санкт-Петербург"
    },
    url: `${SITE_URL}${path}`
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
    "@id": `${SITE_URL}/#business`,
    name: "Alex Master",
    description: "Ремонт стиральных машин на дому в Санкт-Петербурге",
    url: SITE_URL,
    telephone: PHONE,
    priceRange: "₽₽",
    currenciesAccepted: "RUB",
    paymentAccepted: "Наличные, банковская карта",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Санкт-Петербург",
      addressRegion: "Санкт-Петербург",
      addressCountry: "RU"
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday"
      ],
      opens: "09:00",
      closes: "21:00"
    },
    areaServed: [
      { "@type": "City", name: "Санкт-Петербург" },
      { "@type": "AdministrativeArea", name: "Ленинградская область" }
    ]
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
