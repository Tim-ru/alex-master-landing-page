import type { BrandPage } from "@/types/content";
import { commonFaq } from "./faq";

export const brands: BrandPage[] = [
  {
    slug: "lg",
    brand: "LG",
    metaTitle: "Ремонт стиральных машин LG",
    metaDescription: "Типовые неисправности стиральных машин LG, ошибки и подготовка к ремонту.",
    h1: "Ремонт стиральных машин LG",
    intro: "Для LG часто важны корректная диагностика отжима, слива и датчиков балансировки.",
    commonProblems: ["Не отжимает", "Появляется ошибка UE", "Шумит на высоких оборотах"],
    commonErrorCodes: ["UE", "OE", "DE"],
    faq: commonFaq,
    relatedLinks: [
      { label: "Ошибка LG UE", href: "/error-codes/lg/ue" },
      { label: "Не отжимает", href: "/symptoms/not-spinning" }
    ]
  },
  {
    slug: "bosch",
    brand: "Bosch",
    metaTitle: "Ремонт стиральных машин Bosch",
    metaDescription: "Типовые поломки Bosch, частые ошибки и базовая информация перед ремонтом.",
    h1: "Ремонт стиральных машин Bosch",
    intro: "У Bosch часто встречаются ошибки слива, нагрева и блокировки люка.",
    commonProblems: ["Не сливает воду", "Выдает E18", "Останавливает программу"],
    commonErrorCodes: ["E18", "E23", "F21"],
    faq: commonFaq,
    relatedLinks: [
      { label: "Ошибка Bosch E18", href: "/error-codes/bosch/e18" },
      { label: "Не сливает воду", href: "/symptoms/not-draining" }
    ]
  },
  {
    slug: "samsung",
    brand: "Samsung",
    metaTitle: "Ремонт стиральных машин Samsung",
    metaDescription: "Контентная заготовка для страницы ремонта стиральных машин Samsung.",
    h1: "Ремонт стиральных машин Samsung",
    intro: "Для Samsung в MVP учитываются частые ошибки залива, слива и дисбаланса.",
    commonProblems: ["Не набирает воду", "Показывает 4E", "Не выходит на отжим"],
    commonErrorCodes: ["4E", "5E", "UE"],
    faq: commonFaq,
    relatedLinks: [
      { label: "Ошибка Samsung 4E", href: "/error-codes/samsung/4e" },
      { label: "FAQ", href: "/faq" }
    ]
  },
  {
    slug: "indesit",
    brand: "Indesit",
    metaTitle: "Ремонт стиральных машин Indesit",
    metaDescription: "Типовые проблемы и ошибки стиральных машин Indesit для будущей MVP-страницы.",
    h1: "Ремонт стиральных машин Indesit",
    intro: "У Indesit часто проверяют слив, нагрев, модуль управления и состояние проводки.",
    commonProblems: ["Не сливает воду", "Появляется F05", "Не запускает программу"],
    commonErrorCodes: ["F05", "F08", "F12"],
    faq: commonFaq,
    relatedLinks: [
      { label: "Ошибка Indesit F05", href: "/error-codes/indesit/f05" },
      { label: "Не сливает воду", href: "/symptoms/not-draining" }
    ]
  }
];
