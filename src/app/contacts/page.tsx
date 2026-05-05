import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Eyebrow } from "@/components/ui/eyebrow";
import { LeadForm } from "@/components/lead-form";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Контакты — вызов мастера по ремонту стиральных машин",
  description:
    "Оставьте заявку или позвоните — мастер уточнит неисправность и предложит удобное время выезда."
};

export default function ContactsPage() {
  return (
    <>
      <Section className="bg-zinc-50">
        <div className="max-w-2xl">
          <Eyebrow>Связаться с мастером</Eyebrow>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            Контакты
          </h1>
          <p className="mt-4 text-base leading-7 text-zinc-500">
            Позвоните или оставьте заявку — мастер уточнит неисправность и предложит удобное время
            выезда.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <Card>
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">Телефон</p>
              <a
                href={PHONE_HREF}
                className="mt-1 block text-sm font-semibold text-zinc-950 transition hover:text-teal-700"
              >
                {PHONE_DISPLAY}
              </a>
            </Card>
            <Card>
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">
                Район работы
              </p>
              <p className="mt-1 text-sm font-medium text-zinc-950">
                Санкт-Петербург и Ленинградская область
              </p>
            </Card>
            <Card>
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">
                Время работы
              </p>
              <p className="mt-1 text-sm font-medium text-zinc-950">Ежедневно с 9:00 до 21:00</p>
            </Card>
            <Card>
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">Выезд</p>
              <p className="mt-1 text-sm font-medium text-zinc-950">
                В день обращения при наличии свободного окна
              </p>
            </Card>
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
