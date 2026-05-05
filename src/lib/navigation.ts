export type NavigationItem = {
  label: string;
  href: string;
};

export const mainNavigation: NavigationItem[] = [
  { label: "Главная", href: "/" },
  { label: "Цены", href: "/prices" },
  { label: "FAQ", href: "/faq" },
  { label: "Контакты", href: "/contacts" }
];
