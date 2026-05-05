import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Eyebrow } from "@/components/ui/eyebrow";
import { brands, errorCodes, getBrandBySlug } from "@/content";
import { faqPageSchema, breadcrumbSchema, serviceSchema } from "@/lib/structured-data";
import { canonical } from "@/lib/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) return {};
  return {
    ...canonical(`/brands/${slug}`),
    title: brand.metaTitle,
    description: brand.metaDescription,
    openGraph: { title: brand.metaTitle, description: brand.metaDescription }
  };
}

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export default async function BrandPage({ params }: Props) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) notFound();

  const brandErrorCodes = errorCodes.filter((ec) => ec.brandSlug === slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema(brand.h1, brand.intro, `/brands/${brand.slug}`))
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(brand.faq)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Главная", href: "/" },
              { name: brand.brand, href: `/brands/${brand.slug}` }
            ])
          )
        }}
      />
      <Section className="bg-zinc-50">
        <div className="max-w-2xl">
          <Eyebrow>Ремонт по бренду</Eyebrow>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            {brand.h1}
          </h1>
          <p className="mt-4 text-base leading-7 text-zinc-600">{brand.intro}</p>
          <div className="mt-8">
            <Button href="/contacts">Вызвать мастера</Button>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold text-zinc-950">Частые проблемы</h2>
            <ul className="mt-4 space-y-2">
              {brand.commonProblems.map((problem) => (
                <li key={problem} className="flex gap-2 text-sm leading-6 text-zinc-600">
                  <span className="mt-0.5 text-zinc-400">—</span>
                  {problem}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-zinc-950">Коды ошибок</h2>
            {brandErrorCodes.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {brandErrorCodes.map((ec) => (
                  <Link key={ec.slug} href={`/error-codes/${ec.brandSlug}/${ec.slug}`}>
                    <span className="inline-flex items-center rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-950 transition hover:border-zinc-300">
                      {ec.code}
                    </span>
                  </Link>
                ))}
              </div>
            ) : (
              <ul className="mt-4 flex flex-wrap gap-2">
                {brand.commonErrorCodes.map((code) => (
                  <li
                    key={code}
                    className="inline-flex items-center rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-950"
                  >
                    {code}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Section>

      {brandErrorCodes.length > 0 && (
        <Section className="bg-zinc-50">
          <h2 className="text-lg font-semibold text-zinc-950">Расшифровка ошибок</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {brandErrorCodes.map((ec) => (
              <Link
                key={ec.slug}
                href={`/error-codes/${ec.brandSlug}/${ec.slug}`}
                className="group"
              >
                <Card className="h-full transition group-hover:border-zinc-300">
                  <p className="text-sm font-semibold text-zinc-950">{ec.code}</p>
                  <p className="mt-1 text-sm leading-6 text-zinc-600">{ec.meaning}</p>
                </Card>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <Section>
        <h2 className="text-lg font-semibold text-zinc-950">Частые вопросы</h2>
        <dl className="mt-6 max-w-2xl space-y-6">
          {brand.faq.map((item) => (
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

      {brand.relatedLinks.length > 0 && (
        <Section className="bg-zinc-50">
          <h2 className="text-sm font-semibold text-zinc-950">Полезные ссылки</h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {brand.relatedLinks.map((link) => (
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
