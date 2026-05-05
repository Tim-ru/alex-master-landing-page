import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Eyebrow } from "@/components/ui/eyebrow";
import { LeadForm } from "@/components/lead-form";
import { localBusinessSchema } from "@/lib/structured-data";
import { brands, commonFaq, reviews, symptoms } from "@/content";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Ремонт стиральных машин на дому — Alex Master",
  description:
    "Ремонт стиральных машин на дому в Санкт-Петербурге. Диагностика в день обращения, точная смета до начала работ, гарантия на ремонт.",
  openGraph: {
    title: "Ремонт стиральных машин на дому — Alex Master",
    description: "Диагностика в день обращения, точная смета до начала работ, гарантия на ремонт."
  }
};

const trustItems = [
  "Диагностика в день обращения",
  "Ремонт на дому — без вывоза",
  "Смета до начала работ",
  "Гарантия на все работы",
];

const advantages = [
  { num: "01", title: "Диагностика в день обращения", desc: "Приедем и проверим в удобное вам время" },
  { num: "02", title: "Смета до начала работ", desc: "Стоимость ремонта согласуется заранее" },
  { num: "03", title: "Гарантия на ремонт", desc: "Гарантируем результат на все виды работ" },
  { num: "04", title: "Работаем ежедневно", desc: "Без выходных, с 9:00 до 21:00" }
];

const steps = [
  {
    title: "Звонок или заявка",
    desc: "Опишите неисправность по телефону или через форму — согласуем удобное время выезда."
  },
  {
    title: "Выезд мастера",
    desc: "Приедем в назначенное время с инструментом и запчастями для распространённых поломок."
  },
  {
    title: "Диагностика и смета",
    desc: "Определим причину поломки и назовём точную стоимость до начала работ."
  },
  {
    title: "Ремонт и гарантия",
    desc: "Устраним неисправность и выдадим гарантию на все выполненные работы."
  }
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />

      {/* Hero */}
      <section className="bg-forest-950">
        <Container className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-[1fr_440px] lg:items-center lg:gap-16 lg:py-24 xl:py-28">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(201,120,59,0.3)] bg-[rgba(201,120,59,0.08)] px-3 py-1 text-xs font-medium text-copper-200">
              <span className="h-1.5 w-1.5 rounded-full bg-copper-600" aria-hidden="true" />
              Санкт-Петербург · Ежедневно с 9:00 до 21:00
            </div>

            <h1 className="mt-5 text-[clamp(2.125rem,5vw,3.5rem)] font-extrabold leading-[1.1] tracking-tight text-cream-50">
              Ремонт стиральных машин на дому
            </h1>

            <p className="mt-5 max-w-[44ch] text-base leading-relaxed text-fog-300 sm:text-lg">
              Диагностика в день обращения. Точная смета до начала работ. Гарантия на ремонт.
            </p>

            <ul className="mt-6 space-y-2.5">
              {[
                "Приедем в удобное вам время",
                "Стоимость согласуем до начала работ",
                "Работаем без выходных с 9:00 до 21:00",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-fog-300">
                  <span className="font-bold text-copper-600">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/contacts">Вызвать мастера</Button>
              <a
                href={PHONE_HREF}
                className="text-sm font-semibold text-fog-300 transition hover:text-cream-50"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {/* Right — Form card */}
          <div className="rounded-[24px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.3)] lg:p-8">
            <p className="text-base font-semibold text-forest-950">Оставить заявку</p>
            <p className="mt-1 text-sm text-sage-600">Мастер перезвонит и уточнит детали</p>
            <div className="mt-6">
              <LeadForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Trust strip */}
      <div className="border-b border-[rgba(20,33,27,0.06)] bg-linen-50">
        <Container className="py-5 sm:py-6">
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-copper-600" />
                <span className="text-sm font-medium text-forest-950">{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Неисправности */}
      <Section>
        <Eyebrow>Неисправности</Eyebrow>
        <h2 className="mt-3 text-2xl font-bold text-forest-950 sm:text-3xl">С какой проблемой обращаются</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {symptoms.map((s) => (
            <Link key={s.slug} href={`/symptoms/${s.slug}`} className="group">
              <Card className="h-full transition-shadow group-hover:shadow-[0_16px_40px_rgba(16,24,20,0.1)]">
                <h3 className="text-sm font-semibold text-forest-950">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-sage-600">{s.intro}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* Преимущества */}
      <Section className="bg-linen-50">
        <Eyebrow>Преимущества</Eyebrow>
        <h2 className="mt-3 text-2xl font-bold text-forest-950 sm:text-3xl">Почему выбирают нас</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item) => (
            <div key={item.title}>
              <p className="text-4xl font-extrabold tracking-tight text-copper-600/20">{item.num}</p>
              <p className="mt-3 text-sm font-semibold text-forest-950">{item.title}</p>
              <p className="mt-1.5 text-sm leading-6 text-sage-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Бренды */}
      <Section>
        <Eyebrow>Бренды</Eyebrow>
        <h2 className="mt-3 text-2xl font-bold text-forest-950 sm:text-3xl">Ремонтируем стиральные машины</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {brands.map((b) => (
            <Link key={b.slug} href={`/brands/${b.slug}`} className="group">
              <Card className="h-full transition-shadow group-hover:shadow-[0_16px_40px_rgba(16,24,20,0.1)]">
                <h3 className="text-sm font-semibold text-forest-950">{b.brand}</h3>
                <ul className="mt-3 space-y-1 text-sm text-sage-600">
                  {b.commonProblems.map((p) => (
                    <li key={p}>— {p}</li>
                  ))}
                </ul>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* Как мы работаем */}
      <Section className="bg-linen-50">
        <Eyebrow>Процесс</Eyebrow>
        <h2 className="mt-3 text-2xl font-bold text-forest-950 sm:text-3xl">Как мы работаем</h2>
        <div className="relative mt-10">
          <div
            aria-hidden="true"
            className="absolute inset-x-4 top-4 hidden border-t border-dashed border-[rgba(20,33,27,0.15)] lg:block"
          />
          <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step.title}>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-forest-950 text-xs font-semibold text-white ring-4 ring-linen-50">
                  {i + 1}
                </div>
                <p className="mt-4 text-sm font-semibold text-forest-950">{step.title}</p>
                <p className="mt-1.5 text-sm leading-6 text-sage-600">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Отзывы */}
      <Section>
        <Eyebrow>Отзывы</Eyebrow>
        <h2 className="mt-3 text-2xl font-bold text-forest-950 sm:text-3xl">Что говорят клиенты</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <Card key={r.name} className="flex flex-col justify-between">
              <div>
                <div className="flex gap-0.5 text-amber-400" aria-label="5 звёзд">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <p className="mt-3 text-sm leading-6 text-sage-600">{r.text}</p>
              </div>
              <div className="mt-4 border-t border-[rgba(20,33,27,0.06)] pt-3">
                <p className="text-sm font-semibold text-forest-950">{r.name}</p>
                <p className="mt-0.5 text-xs text-fog-300">
                  {r.district} · {r.problem}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-linen-50">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="mt-3 text-2xl font-bold text-forest-950 sm:text-3xl">Частые вопросы</h2>
        <dl className="mt-8 max-w-2xl divide-y divide-[rgba(20,33,27,0.08)]">
          {commonFaq.slice(0, 3).map((item) => (
            <div key={item.question} className="py-5 first:pt-0 last:pb-0">
              <dt className="text-sm font-semibold text-forest-950">{item.question}</dt>
              <dd className="mt-2 text-sm leading-6 text-sage-600">{item.answer}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-8">
          <Button href="/faq" variant="secondary">
            Все вопросы
          </Button>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-forest-950">
        <Container className="py-16 sm:py-20">
          <div className="max-w-xl">
            <h2 className="text-2xl font-extrabold text-cream-50 sm:text-3xl">Нужен мастер?</h2>
            <p className="mt-4 text-base leading-relaxed text-fog-300">
              Оставьте заявку — мастер позвонит, уточнит неисправность и предложит удобное время.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/contacts">Вызвать мастера</Button>
              <a
                href={PHONE_HREF}
                className="text-sm font-semibold text-fog-300 transition hover:text-cream-50"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
