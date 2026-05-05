import type { ErrorCodePage } from "@/types/content";

export const boschErrorCodes: ErrorCodePage[] = [
  {
    brandSlug: "bosch",
    code: "E18",
    slug: "e18",
    metaTitle: "Ошибка E18 на стиральной машине Bosch",
    metaDescription: "Причины ошибки E18 на Bosch и безопасные действия перед ремонтом.",
    h1: "Ошибка E18 на стиральной машине Bosch",
    meaning: "Ошибка E18 указывает на проблему со сливом воды.",
    symptoms: ["Вода остается в баке", "Программа не завершает слив", "Машина показывает E18"],
    possibleCauses: ["Засор фильтра", "Проблема со сливным насосом", "Засор сливного тракта"],
    selfCheckSteps: ["Отключить питание", "Слить воду через аварийный шланг", "Проверить фильтр"],
    whenNeedMaster: [
      "Фильтр чистый, но ошибка остается",
      "Насос не работает",
      "Вода уходит слишком медленно"
    ],
    relatedLinks: [
      { label: "Ремонт Bosch", href: "/brands/bosch" },
      { label: "Не сливает воду", href: "/symptoms/not-draining" }
    ]
  }
];
