import type { Metadata } from "next";
import { AppShell } from "@/components/layout/app-shell";
import { YandexMetrica } from "@/components/yandex-metrica";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://alexmaster.ru";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ремонт стиральных машин на дому — Alex Master",
    template: "%s | Alex Master"
  },
  description:
    "Ремонт стиральных машин на дому в Санкт-Петербурге. Диагностика в день обращения, гарантия на ремонт.",
  openGraph: {
    siteName: "Alex Master",
    locale: "ru_RU",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <AppShell>{children}</AppShell>
      <YandexMetrica />
    </html>
  );
}
