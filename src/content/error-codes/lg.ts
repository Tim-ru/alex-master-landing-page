import type { ErrorCodePage } from "@/types/content";

export const lgErrorCodes: ErrorCodePage[] = [
  {
    brandSlug: "lg",
    code: "UE",
    slug: "ue",
    metaTitle: "Ошибка UE на стиральной машине LG",
    metaDescription: "Что означает ошибка UE на LG и когда нужен мастер.",
    h1: "Ошибка UE на стиральной машине LG",
    meaning: "Ошибка UE обычно связана с дисбалансом белья или невозможностью выйти на отжим.",
    symptoms: ["Машина пытается распределить белье", "Отжим не начинается", "Код UE повторяется"],
    possibleCauses: [
      "Дисбаланс загрузки",
      "Проблемы с амортизаторами",
      "Неисправность датчика оборотов"
    ],
    selfCheckSteps: ["Перераспределить белье", "Уменьшить загрузку", "Запустить отжим отдельно"],
    whenNeedMaster: [
      "Ошибка возникает без перегруза",
      "Барабан сильно бьет по корпусу",
      "Отжим не работает стабильно"
    ],
    relatedLinks: [
      { label: "Ремонт LG", href: "/brands/lg" },
      { label: "Не отжимает", href: "/symptoms/not-spinning" }
    ]
  }
];
