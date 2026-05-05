"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/layout/container";
import { mainNavigation } from "@/lib/navigation";
import { analytics } from "@/lib/analytics";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/constants";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="border-b border-zinc-200 bg-white/95">
      <Container className="flex min-h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="text-base font-semibold text-zinc-950"
          onClick={() => setOpen(false)}
        >
          Alex Master
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Основная навигация"
          className="hidden items-center gap-6 text-sm text-zinc-600 sm:flex"
        >
          {mainNavigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-zinc-950">
              {item.label}
            </Link>
          ))}
          <a
            href={PHONE_HREF}
            onClick={() => analytics.phoneClick()}
            className="font-medium text-zinc-950 transition hover:text-teal-700"
          >
            {PHONE_DISPLAY}
          </a>
        </nav>

        {/* Mobile: phone + hamburger */}
        <div className="flex items-center gap-4 sm:hidden">
          <a
            href={PHONE_HREF}
            onClick={() => analytics.phoneClick()}
            className="text-sm font-medium text-zinc-950"
          >
            {PHONE_DISPLAY}
          </a>
          <button
            type="button"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-md text-zinc-600 transition hover:bg-zinc-100"
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path
                  d="M5 5L15 15M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path
                  d="M3 6h14M3 10h14M3 14h14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-zinc-100 bg-white sm:hidden">
          <Container>
            <nav aria-label="Мобильная навигация" className="flex flex-col py-3">
              {mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={
                    "py-2.5 text-sm transition hover:text-zinc-950 " +
                    (pathname === item.href ? "font-semibold text-zinc-950" : "text-zinc-600")
                  }
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
