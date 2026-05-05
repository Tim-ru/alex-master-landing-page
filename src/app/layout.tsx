import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppShell } from "@/components/layout/app-shell";
import { YandexMetrica } from "@/components/yandex-metrica";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap"
});

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
    <html lang="ru" className={inter.variable}>
      <AppShell>{children}</AppShell>
      <YandexMetrica />
    </html>
  );
}
