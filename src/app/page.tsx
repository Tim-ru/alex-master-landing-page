import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Eyebrow } from "@/components/ui/eyebrow";
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

const advantages = [
  { num: "01", title: "Диагностика в день обращения", desc: "Приедем и проверим в удобное вам время" },
  { num: "02", title: "Смета до начала работ", desc: "Стоимость ремонта согласуется заранее" },
  { num: "03", title: "Гарантия на ремонт", desc: "Гарантируем результат на все виды работ" },
  { num: "04", title: "Работаем ежедневно", desc: "Без выходных, с 9:00 до 21:00" }
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />

      {/* Hero */}
      <Section className="bg-zinc-50">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 ring-1 ring-inset ring-teal-600/10">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" aria-hidden="true" />
            Принимаем заявки ежедневно с 9:00 до 21:00
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
            Ремонт стиральных машин на дому
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-500">
            Диагностика в день обращения, точная смета до начала работ, гарантия на ремонт.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contacts">Вызвать мастера</Button>
            <Button href="/prices" variant="secondary">
              Цены
            </Button>
          </div>
        </div>
      </Section>

      {/* Преимущества */}
      <Section>
        <Eyebrow>Преимущества</Eyebrow>
        <h2 className="mt-3 text-2xl font-semibold text-zinc-950">Почему выбирают нас</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item) => (
            <div key={item.title}>
              <p className="text-4xl font-bold tracking-tight text-teal-600/30">{item.num}</p>
              <p className="mt-3 text-sm font-semibold text-zinc-950">{item.title}</p>
              <p className="mt-1.5 text-sm leading-6 text-zinc-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Неисправности */}
      <Section className="bg-zinc-50">
        <Eyebrow>Неисправности</Eyebrow>
        <h2 className="mt-3 text-2xl font-semibold text-zinc-950">С какой проблемой обращаются</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {symptoms.map((s) => (
            <Link key={s.slug} href={`/symptoms/${s.slug}`} className="group">
              <Card className="h-full transition group-hover:border-zinc-300 group-hover:shadow-md">
                <h3 className="text-sm font-semibold text-zinc-950">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-500">{s.intro}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* Бренды */}
      <Section>
        <Eyebrow>Бренды</Eyebrow>
        <h2 className="mt-3 text-2xl font-semibold text-zinc-950">Ремонтируем стиральные машины</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {brands.map((b) => (
            <Link key={b.slug} href={`/brands/${b.slug}`} className="group">
              <Card className="h-full transition group-hover:border-zinc-300 group-hover:shadow-md">
                <h3 className="text-sm font-semibold text-zinc-950">{b.brand}</h3>
                <ul className="mt-3 space-y-1 text-sm text-zinc-500">
                  {b.commonProblems.map((p) => (
                    <li key={p}>— {p}</li>
                  ))}
                </ul>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* Отзывы */}
      <Section className="bg-zinc-50">
        <Eyebrow>Отзывы</Eyebrow>
        <h2 className="mt-3 text-2xl font-semibold text-zinc-950">Что говорят клиенты</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <Card key={r.name} className="flex flex-col justify-between">
              <div>
                <div className="flex gap-0.5 text-amber-400" aria-label="5 звёзд">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <p className="mt-3 text-sm leading-6 text-zinc-500">{r.text}</p>
              </div>
              <div className="mt-4 border-t border-zinc-100 pt-3">
                <p className="text-sm font-semibold text-zinc-950">{r.name}</p>
                <p className="mt-0.5 text-xs text-zinc-400">
                  {r.district} · {r.problem}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="mt-3 text-2xl font-semibold text-zinc-950">Частые вопросы</h2>
        <dl className="mt-8 max-w-2xl divide-y divide-zinc-100">
          {commonFaq.slice(0, 3).map((item) => (
            <div key={item.question} className="py-5 first:pt-0 last:pb-0">
              <dt className="text-sm font-semibold text-zinc-950">{item.question}</dt>
              <dd className="mt-2 text-sm leading-6 text-zinc-500">{item.answer}</dd>
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
      <Section className="bg-zinc-950">
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold text-white">Нужен мастер?</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-400">
            Оставьте заявку — мастер позвонит, уточнит неисправность и предложит удобное время.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/contacts" variant="secondary">Вызвать мастера</Button>
            <a
              href={PHONE_HREF}
              className="inline-flex min-h-11 items-center justify-center px-2 text-sm font-medium text-zinc-400 transition hover:text-white"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
