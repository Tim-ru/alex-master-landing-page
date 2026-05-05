import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Eyebrow } from "@/components/ui/eyebrow";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  title: "Контакты — вызов мастера по ремонту стиральных машин",
  description:
    "Оставьте заявку или позвоните — мастер уточнит неисправность и предложит удобное время выезда."
};

const contactDetails = [
  { label: "Телефон", value: "+7 (921) 123-45-67" },
  { label: "Район работы", value: "Санкт-Петербург и Ленинградская область" },
  { label: "Время работы", value: "Ежедневно с 9:00 до 21:00" },
  { label: "Выезд", value: "В день обращения при наличии свободного окна" }
];

export default function ContactsPage() {
  return (
    <>
      <Section className="bg-zinc-50">
        <div className="max-w-2xl">
          <Eyebrow>Связаться с мастером</Eyebrow>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            Контакты
          </h1>
          <p className="mt-4 text-base leading-7 text-zinc-600">
            Позвоните или оставьте заявку — мастер уточнит неисправность и предложит удобное время
            выезда.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            {contactDetails.map((detail) => (
              <Card key={detail.label}>
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">
                  {detail.label}
                </p>
                <p className="mt-1 text-sm font-medium text-zinc-950">{detail.value}</p>
              </Card>
            ))}
          </div>

          <div>
            <p className="mb-5 text-sm font-semibold text-zinc-950">Оставить заявку</p>
            <LeadForm />
          </div>
        </div>
      </Section>
    </>
  );
}
