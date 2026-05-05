import Link from "next/link";
import { Container } from "@/components/layout/container";
import { mainNavigation } from "@/lib/navigation";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <Container className="py-6 text-sm text-zinc-600">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-zinc-950">Alex Master</p>
            <a href={PHONE_HREF} className="transition hover:text-zinc-950">
              {PHONE_DISPLAY}
            </a>
          </div>

          <nav aria-label="Навигация в футере" className="flex flex-wrap gap-x-5 gap-y-2">
            {mainNavigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-zinc-950">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <p className="mt-4 border-t border-zinc-200 pt-4 text-xs text-zinc-400">
          © {new Date().getFullYear()} Alex Master
        </p>
      </Container>
    </footer>
  );
}
