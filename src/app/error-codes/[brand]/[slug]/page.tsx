import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { errorCodes, getBrandBySlug, getErrorCodeByBrandAndSlug } from "@/content";

type Props = {
  params: Promise<{ brand: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { brand: brandSlug, slug } = await params;
  const errorCode = getErrorCodeByBrandAndSlug(brandSlug, slug);
  if (!errorCode) return {};
  return {
    title: errorCode.metaTitle,
    description: errorCode.metaDescription,
    openGraph: { title: errorCode.metaTitle, description: errorCode.metaDescription }
  };
}

export function generateStaticParams() {
  return errorCodes.map((ec) => ({ brand: ec.brandSlug, slug: ec.slug }));
}

export default async function ErrorCodePage({ params }: Props) {
  const { brand: brandSlug, slug } = await params;
  const errorCode = getErrorCodeByBrandAndSlug(brandSlug, slug);

  if (!errorCode) notFound();

  const brand = getBrandBySlug(brandSlug);

  return (
    <>
      <Section className="bg-zinc-50">
        <div className="max-w-2xl">
          <Eyebrow>
            {brand ? (
              <Link href={`/brands/${brandSlug}`} className="hover:underline underline-offset-4">
                {brand.brand}
              </Link>
            ) : (
              "Код ошибки"
            )}
          </Eyebrow>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            {errorCode.h1}
          </h1>
          <p className="mt-4 text-base leading-7 text-zinc-600">{errorCode.meaning}</p>
          <div className="mt-8">
            <Button href="/contacts">Вызвать мастера</Button>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold text-zinc-950">Симптомы</h2>
            <ul className="mt-4 space-y-2">
              {errorCode.symptoms.map((s) => (
                <li key={s} className="flex gap-2 text-sm leading-6 text-zinc-600">
                  <span className="mt-0.5 text-teal-700">✓</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-zinc-950">Возможные причины</h2>
            <ul className="mt-4 space-y-2">
              {errorCode.possibleCauses.map((cause) => (
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
              {errorCode.selfCheckSteps.map((step, i) => (
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
              {errorCode.whenNeedMaster.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-6 text-zinc-600">
                  <span className="mt-0.5 text-zinc-400">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {errorCode.relatedLinks.length > 0 && (
        <Section>
          <h2 className="text-sm font-semibold text-zinc-950">Полезные ссылки</h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {errorCode.relatedLinks.map((link) => (
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
