import type { ErrorCodePage } from "@/types/content";

export const indesitErrorCodes: ErrorCodePage[] = [
  {
    brandSlug: "indesit",
    code: "F05",
    slug: "f05",
    metaTitle: "Ошибка F05 на стиральной машине Indesit",
    metaDescription: "Что означает ошибка F05 на Indesit и какие узлы требуют проверки.",
    h1: "Ошибка F05 на стиральной машине Indesit",
    meaning: "Ошибка F05 чаще всего связана со сливом воды или датчиком уровня.",
    symptoms: ["Вода не уходит", "Люк не открывается после программы", "На панели появляется F05"],
    possibleCauses: ["Засор слива", "Неисправность насоса", "Сбой или поломка прессостата"],
    selfCheckSteps: [
      "Отключить машинку",
      "Проверить сливной фильтр",
      "Убедиться, что шланг не пережат"
    ],
    whenNeedMaster: [
      "Ошибка возвращается после чистки",
      "Насос не запускается",
      "Нужна диагностика датчика уровня"
    ],
    relatedLinks: [
      { label: "Ремонт Indesit", href: "/brands/indesit" },
      { label: "Не сливает воду", href: "/symptoms/not-draining" }
    ]
  }
];
