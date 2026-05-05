import type { ErrorCodePage } from "@/types/content";

export const samsungErrorCodes: ErrorCodePage[] = [
  {
    brandSlug: "samsung",
    code: "4E",
    slug: "4e",
    metaTitle: "Ошибка 4E на стиральной машине Samsung",
    metaDescription: "Что означает ошибка 4E на Samsung и что проверить перед вызовом мастера.",
    h1: "Ошибка 4E на стиральной машине Samsung",
    meaning: "Ошибка 4E обычно связана с набором воды.",
    symptoms: ["Машина не набирает воду", "Программа останавливается", "На дисплее появляется 4E"],
    possibleCauses: [
      "Перекрыта вода",
      "Засор сетки заливного клапана",
      "Неисправен клапан подачи воды"
    ],
    selfCheckSteps: [
      "Проверить кран подачи воды",
      "Осмотреть заливной шланг",
      "Перезапустить программу"
    ],
    whenNeedMaster: [
      "Вода подается, но ошибка остается",
      "Слышен гул без набора воды",
      "Нужна проверка клапана"
    ],
    relatedLinks: [
      { label: "Ремонт Samsung", href: "/brands/samsung" },
      { label: "Контакты", href: "/contacts" }
    ]
  }
];
