"use client";

import { Suspense, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadSchema, type LeadFormValues } from "@/lib/lead-schema";
import { submitLead } from "@/app/actions/submit-lead";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { analytics } from "@/lib/analytics";

function LeadFormInner() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema)
  });

  useEffect(() => {
    setValue("renderedAt", Date.now());
    setValue("pageUrl", window.location.href);
    setValue("utmSource", searchParams.get("utm_source") ?? undefined);
    setValue("utmMedium", searchParams.get("utm_medium") ?? undefined);
    setValue("utmCampaign", searchParams.get("utm_campaign") ?? undefined);
    setValue("utmContent", searchParams.get("utm_content") ?? undefined);
    setValue("utmTerm", searchParams.get("utm_term") ?? undefined);
  }, [setValue, searchParams]);

  async function onSubmit(values: LeadFormValues) {
    setStatus("loading");
    const result = await submitLead(values);
    if (result.ok) {
      analytics.formSubmit();
      setStatus("success");
      reset();
    } else {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-md border border-zinc-200 bg-zinc-50 p-6">
        <p className="text-sm font-semibold text-zinc-950">Заявка принята</p>
        <p className="mt-2 text-sm leading-6 text-zinc-600">
          Мастер свяжется с вами в ближайшее время для уточнения деталей.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      {/* honeypot — hidden from real users */}
      <input
        type="text"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden"
        {...register("honeypot")}
      />
      <input type="hidden" {...register("renderedAt", { valueAsNumber: true })} />
      <input type="hidden" {...register("pageUrl")} />
      <input type="hidden" {...register("utmSource")} />
      <input type="hidden" {...register("utmMedium")} />
      <input type="hidden" {...register("utmCampaign")} />
      <input type="hidden" {...register("utmContent")} />
      <input type="hidden" {...register("utmTerm")} />

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-zinc-950">
          Имя
        </label>
        <Input
          id="name"
          type="text"
          autoComplete="name"
          className="mt-1.5"
          placeholder="Ваше имя"
          aria-invalid={!!errors.name}
          {...register("name")}
        />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-zinc-950">
          Телефон
        </label>
        <Input
          id="phone"
          type="tel"
          autoComplete="tel"
          className="mt-1.5"
          placeholder="+7 (000) 000-00-00"
          aria-invalid={!!errors.phone}
          {...register("phone")}
        />
        {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="problem" className="block text-sm font-medium text-zinc-950">
          Опишите неисправность <span className="font-normal text-zinc-400">(необязательно)</span>
        </label>
        <Textarea
          id="problem"
          rows={3}
          className="mt-1.5"
          placeholder="Стиральная машина не сливает воду..."
          {...register("problem")}
        />
      </div>

      {status === "error" && (
        <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3">
          <p className="text-sm text-red-700">
            Не удалось отправить заявку. Попробуйте ещё раз или позвоните напрямую.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-zinc-950 px-5 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 sm:w-auto"
      >
        {status === "loading" ? "Отправляем..." : "Отправить заявку"}
      </button>
    </form>
  );
}

export function LeadForm() {
  return (
    <Suspense fallback={null}>
      <LeadFormInner />
    </Suspense>
  );
}
