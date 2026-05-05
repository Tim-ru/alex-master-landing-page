"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { analytics } from "@/lib/analytics";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/constants";

export function MobileCTA() {
  const pathname = usePathname();

  if (pathname === "/contacts") return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-[rgba(20,33,27,0.1)] bg-white/95 backdrop-blur-sm sm:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex gap-3 px-4 py-3">
        <a
          href={PHONE_HREF}
          onClick={() => analytics.phoneClick()}
          className="inline-flex flex-1 min-h-11 items-center justify-center rounded-[14px] border border-[rgba(20,33,27,0.15)] text-sm font-semibold text-forest-950 transition hover:bg-linen-50"
        >
          {PHONE_DISPLAY}
        </a>
        <Link
          href="/contacts"
          className="inline-flex flex-1 min-h-11 items-center justify-center rounded-[14px] bg-copper-600 text-sm font-semibold text-white transition hover:bg-copper-700"
        >
          Вызвать мастера
        </Link>
      </div>
    </div>
  );
}
