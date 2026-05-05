import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { prices } from "@/content";

export const metadata: Metadata = {
  title: "Цены на ремонт стиральных машин",
  description:
    "Ориентировочные цены на ремонт стиральных машин. Итоговая стоимость согласуется с вами до начала работ."
};

export default function PricesPage() {
  return (
    <>
      <Section className="bg-zinc-50">
        <div className="max-w-2xl">
          <Eyebrow>Стоимость работ</Eyebrow>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            Цены на ремонт стиральных машин
          </h1>
          <p className="mt-4 text-base leading-7 text-zinc-600">
            Ориентировочные цены. Итоговая стоимость определяется после диагностики — до начала
            работ мастер согласует её с вами.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-2xl">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-200">
                <th className="pb-3 text-left font-semibold text-zinc-950">Услуга</th>
                <th className="pb-3 text-right font-semibold text-zinc-950">Стоимость</th>
              </tr>
            </thead>
            <tbody>
              {prices.map((item, index) => (
                <tr
                  key={item.service}
                  className={index < prices.length - 1 ? "border-b border-zinc-100" : ""}
                >
                  <td className="py-3 text-zinc-700">{item.service}</td>
                  <td className="py-3 text-right text-zinc-950">{item.priceRange}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="mt-6 text-sm leading-6 text-zinc-500">
            В стоимость ремонта входит диагностика. Запчасти оплачиваются отдельно по согласованию.
          </p>

          <div className="mt-8">
            <Button href="/contacts">Вызвать мастера</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
