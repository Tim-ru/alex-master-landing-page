"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { mainNavigation } from "@/lib/navigation";
import { analytics } from "@/lib/analytics";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="bg-forest-950">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <p
              className="text-base font-bold text-cream-50"
              style={{ fontFamily: "var(--font-manrope, inherit)" }}
            >
              Alex Master
            </p>
            <a
              href={PHONE_HREF}
              onClick={() => analytics.phoneClick()}
              className="mt-3 block text-sm font-semibold text-fog-300 transition hover:text-cream-50"
            >
              {PHONE_DISPLAY}
            </a>
            <p className="mt-3 text-sm leading-6 text-sage-600">
              Санкт-Петербург и Ленинградская область
            </p>
            <p className="mt-0.5 text-sm text-sage-600">Ежедневно с 9:00 до 21:00</p>
          </div>

          {/* Navigation */}
          <nav aria-label="Навигация в футере">
            <p className="text-xs font-semibold uppercase tracking-widest text-sage-600">
              Навигация
            </p>
            <ul className="mt-4 space-y-2.5">
              {mainNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-fog-300 transition hover:text-cream-50"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-fog-300 transition hover:text-cream-50"
                >
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </nav>

          {/* Service info */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-sage-600">
              Ремонтируем
            </p>
            <p className="mt-4 text-sm leading-6 text-fog-300">
              Стиральные машины всех популярных брендов: Samsung, LG, Bosch, Indesit, Whirlpool,
              Electrolux и других.
            </p>
            <p className="mt-3 text-sm text-fog-300">
              Ремонт на дому — без вывоза и лишних трат.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-[rgba(255,255,255,0.07)] pt-6 text-xs text-sage-600">
          © {new Date().getFullYear()} Alex Master
        </div>
      </Container>
    </footer>
  );
}
