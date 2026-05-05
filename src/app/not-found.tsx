import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Страница не найдена"
};

export default function NotFound() {
  return (
    <Section className="bg-zinc-50">
      <div className="max-w-md">
        <p className="text-sm font-medium text-zinc-400">404</p>
        <h1 className="mt-2 text-2xl font-semibold text-zinc-950">Страница не найдена</h1>
        <p className="mt-3 text-sm leading-6 text-zinc-600">
          Возможно, страница была удалена или вы перешли по неверной ссылке.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/">На главную</Button>
          <Button href="/contacts" variant="secondary">
            Связаться с мастером
          </Button>
        </div>
      </div>
    </Section>
  );
}
