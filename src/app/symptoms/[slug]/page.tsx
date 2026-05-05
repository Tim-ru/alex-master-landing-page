import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { getSymptomBySlug, symptoms } from "@/content";
import { faqPageSchema, breadcrumbSchema } from "@/lib/structured-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const symptom = getSymptomBySlug(slug);
  if (!symptom) return {};
  return {
    title: symptom.metaTitle,
    description: symptom.metaDescription,
    openGraph: { title: symptom.metaTitle, description: symptom.metaDescription }
  };
}

export function generateStaticParams() {
  return symptoms.map((s) => ({ slug: s.slug }));
}

export default async function SymptomPage({ params }: Props) {
  const { slug } = await params;
  const symptom = getSymptomBySlug(slug);

  if (!symptom) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(symptom.faq)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Главная", href: "/" },
              { name: symptom.title, href: `/symptoms/${symptom.slug}` }
            ])
          )
        }}
      />
      <Section className="bg-zinc-50">
        <div className="max-w-2xl">
          <Eyebrow>Неисправность</Eyebrow>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            {symptom.h1}
          </h1>
          <p className="mt-4 text-base leading-7 text-zinc-600">{symptom.intro}</p>
          <div className="mt-8">
            <Button href="/contacts">Вызвать мастера</Button>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold text-zinc-950">Признаки</h2>
            <ul className="mt-4 space-y-2">
              {symptom.signs.map((sign) => (
                <li key={sign} className="flex gap-2 text-sm leading-6 text-zinc-600">
                  <span className="mt-0.5 text-teal-700">✓</span>
                  {sign}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-zinc-950">Возможные причины</h2>
            <ul className="mt-4 space-y-2">
              {symptom.possibleCauses.map((cause) => (
                <li key={cause} className="flex gap-2 text-sm leading-6 text-zinc-600">
                  <span className="mt-0.5 text-zinc-400">—</span>
                  {cause}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-zinc-50">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold text-zinc-950">Что можно проверить самому</h2>
            <ol className="mt-4 space-y-2">
              {symptom.selfCheckSteps.map((step, i) => (
                <li key={step} className="flex gap-3 text-sm leading-6 text-zinc-600">
                  <span className="mt-0.5 shrink-0 font-medium text-teal-700">{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-zinc-950">Когда нужен мастер</h2>
            <ul className="mt-4 space-y-2">
              {symptom.whenNeedMaster.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-6 text-zinc-600">
                  <span className="mt-0.5 text-zinc-400">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-2xl">
          <h2 className="text-lg font-semibold text-zinc-950">Стоимость</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-600">{symptom.priceNote}</p>
          <div className="mt-4">
            <Button href="/prices" variant="secondary">
              Посмотреть цены
            </Button>
          </div>
        </div>
      </Section>

      <Section className="bg-zinc-50">
        <h2 className="text-lg font-semibold text-zinc-950">Частые вопросы</h2>
        <dl className="mt-6 max-w-2xl space-y-6">
          {symptom.faq.map((item) => (
            <div
              key={item.question}
              className="border-b border-zinc-100 pb-6 last:border-0 last:pb-0"
            >
              <dt className="text-sm font-semibold text-zinc-950">{item.question}</dt>
              <dd className="mt-2 text-sm leading-6 text-zinc-600">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {symptom.relatedLinks.length > 0 && (
        <Section>
          <h2 className="text-sm font-semibold text-zinc-950">Полезные ссылки</h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {symptom.relatedLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-teal-700 underline-offset-4 hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}
    </>
  );
}
