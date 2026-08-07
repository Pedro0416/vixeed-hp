export type NavId =
  | "home"
  | "about"
  | "service"
  | "recruit"
  | "career"
  | "contact";

export const navItems: {
  id: NavId;
  href: string;
  labelJa: string;
  labelEn: string;
}[] = [
  { id: "home", href: "/", labelJa: "ホーム", labelEn: "Home" },
  {
    id: "about",
    href: "/about/",
    labelJa: "私たちについて",
    labelEn: "About",
  },
  { id: "service", href: "/service/", labelJa: "事業", labelEn: "Business" },
  { id: "recruit", href: "/recruit/", labelJa: "採用", labelEn: "Recruit" },
  { id: "career", href: "/career/", labelJa: "キャリア", labelEn: "Career" },
  {
    id: "contact",
    href: "/contact/",
    labelJa: "お問い合わせ",
    labelEn: "Contact",
  },
];

export const footerLinks = [
  { href: "/about/", label: "私たちについて" },
  { href: "/service/", label: "事業" },
  { href: "/recruit/", label: "採用" },
  { href: "/career/", label: "キャリア" },
  { href: "/faq/", label: "FAQ" },
  { href: "/news/", label: "お知らせ" },
  { href: "/contact/", label: "お問い合わせ" },
] as const;
