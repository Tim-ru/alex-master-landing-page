import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Eyebrow } from "@/components/ui/eyebrow";
import { localBusinessSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Ремонт стиральных машин на дому — Alex Master",
  description:
    "Ремонт стиральных машин на дому в Санкт-Петербурге. Диагностика в день обращения, точная смета до начала работ, гарантия на ремонт.",
  openGraph: {
    title: "Ремонт стиральных машин на дому — Alex Master",
    description: "Диагностика в день обращения, точная смета до начала работ, гарантия на ремонт."
  }
};
import { brands, commonFaq, reviews, symptoms } from "@/content";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />
      <Section className="bg-zinc-50">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
            Ремонт стиральных машин на дому
          </h1>
          <p className="mt-5 text-base leading-7 text-zinc-600">
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

      <Section>
        <Eyebrow>Неисправности</Eyebrow>
        <h2 className="mt-3 text-2xl font-semibold text-zinc-950">С какой проблемой обращаются</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {symptoms.map((s) => (
            <Link key={s.slug} href={`/symptoms/${s.slug}`} className="group">
              <Card className="h-full transition group-hover:border-zinc-300">
                <h3 className="text-base font-semibold text-zinc-950">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{s.intro}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-zinc-50">
        <Eyebrow>Бренды</Eyebrow>
        <h2 className="mt-3 text-2xl font-semibold text-zinc-950">Ремонтируем стиральные машины</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {brands.map((b) => (
            <Link key={b.slug} href={`/brands/${b.slug}`} className="group">
              <Card className="h-full transition group-hover:border-zinc-300">
                <h3 className="text-base font-semibold text-zinc-950">{b.brand}</h3>
                <ul className="mt-3 space-y-1 text-sm text-zinc-600">
                  {b.commonProblems.map((p) => (
                    <li key={p}>— {p}</li>
                  ))}
                </ul>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <Eyebrow>Отзывы</Eyebrow>
        <h2 className="mt-3 text-2xl font-semibold text-zinc-950">Что говорят клиенты</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <Card key={r.name}>
              <p className="text-sm leading-6 text-zinc-600">{r.text}</p>
              <div className="mt-4 border-t border-zinc-100 pt-3">
                <p className="text-sm font-medium text-zinc-950">{r.name}</p>
                <p className="text-sm text-zinc-500">
                  {r.district} · {r.problem}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-zinc-50">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="mt-3 text-2xl font-semibold text-zinc-950">Частые вопросы</h2>
        <dl className="mt-8 max-w-2xl space-y-6">
          {commonFaq.slice(0, 3).map((item) => (
            <div key={item.question}>
              <dt className="text-sm font-semibold text-zinc-950">{item.question}</dt>
              <dd className="mt-2 text-sm leading-6 text-zinc-600">{item.answer}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-8">
          <Button href="/faq" variant="secondary">
            Все вопросы
          </Button>
        </div>
      </Section>

      <Section>
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold text-zinc-950">Нужен мастер?</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-600">
            Оставьте заявку — мастер позвонит, уточнит неисправность и предложит удобное время.
          </p>
          <div className="mt-6">
            <Button href="/contacts">Вызвать мастера</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
