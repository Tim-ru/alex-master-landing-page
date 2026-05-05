import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MobileCTA } from "@/components/layout/mobile-cta";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <body className="min-h-screen bg-white text-zinc-950 antialiased">
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main id="content" className="flex-1 pb-24 sm:pb-0">
          {children}
        </main>
        <SiteFooter />
      </div>
      <MobileCTA />
    </body>
  );
}
