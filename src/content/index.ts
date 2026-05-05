import type { ErrorCodePage, PageSummary } from "@/types/content";
import { brands } from "./brands";
import { errorCodes } from "./error-codes";
import { commonFaq } from "./faq";
import { prices } from "./prices";
import { reviews } from "./reviews";
import { symptoms } from "./symptoms";

export { brands, commonFaq, errorCodes, prices, reviews, symptoms };

export function getSymptomBySlug(slug: string) {
  return symptoms.find((symptom) => symptom.slug === slug);
}

export function getBrandBySlug(slug: string) {
  return brands.find((brand) => brand.slug === slug);
}

export function getErrorCodeByBrandAndSlug(
  brandSlug: string,
  slug: string
): ErrorCodePage | undefined {
  return errorCodes.find(
    (errorCode) => errorCode.brandSlug === brandSlug && errorCode.slug === slug
  );
}

export const mvpPageSummaries: PageSummary[] = [
  {
    title: "Главная",
    description: "Основная страница будущего сайта.",
    href: "/"
  },
  {
    title: "Цены",
    description: "Будущая страница с ориентировочными ценами.",
    href: "/prices"
  },
  {
    title: "FAQ",
    description: "Будущая страница с частыми вопросами.",
    href: "/faq"
  },
  {
    title: "Контакты",
    description: "Будущая контактная страница.",
    href: "/contacts"
  }
];
