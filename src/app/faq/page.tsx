import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { commonFaq } from "@/content";
import { faqPageSchema } from "@/lib/structured-data";
import { canonical } from "@/lib/metadata";

export const metadata: Metadata = {
  ...canonical("/faq"),
  title: "Частые вопросы о ремонте стиральных машин",
  description:
    "Ответы на частые вопросы: сроки, стоимость, гарантия и порядок ремонта стиральных машин на дому."
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(commonFaq)) }}
      />
      <Section className="bg-zinc-50">
        <div className="max-w-2xl">
          <Eyebrow>Вопросы и ответы</Eyebrow>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            Частые вопросы
          </h1>
          <p className="mt-4 text-base leading-7 text-zinc-600">
            Ответы на самые распространённые вопросы о диагностике и ремонте стиральных машин.
          </p>
        </div>
      </Section>

      <Section>
        <dl className="max-w-2xl space-y-8">
          {commonFaq.map((item) => (
            <div
              key={item.question}
              className="border-b border-zinc-100 pb-8 last:border-0 last:pb-0"
            >
              <dt className="text-base font-semibold text-zinc-950">{item.question}</dt>
              <dd className="mt-3 text-sm leading-6 text-zinc-600">{item.answer}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 max-w-2xl border-t border-zinc-200 pt-8">
          <p className="text-sm text-zinc-600">Не нашли ответ на свой вопрос?</p>
          <div className="mt-4">
            <Button href="/contacts">Задать вопрос мастеру</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
