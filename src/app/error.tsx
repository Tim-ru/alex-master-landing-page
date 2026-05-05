"use client";

import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Section className="bg-zinc-50">
      <div className="max-w-md">
        <p className="text-sm font-medium text-zinc-400">Ошибка</p>
        <h1 className="mt-2 text-2xl font-semibold text-zinc-950">Что-то пошло не так</h1>
        <p className="mt-3 text-sm leading-6 text-zinc-600">
          Попробуйте обновить страницу или вернитесь на главную.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={reset}
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-zinc-950 px-5 text-sm font-medium text-white transition hover:bg-zinc-800"
          >
            Попробовать снова
          </button>
          <Button href="/" variant="secondary">
            На главную
          </Button>
        </div>
      </div>
    </Section>
  );
}
