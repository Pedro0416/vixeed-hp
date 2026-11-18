import { InstagramIcon } from "@/components/legacy/InstagramIcon";
import { footerLinks, navItems } from "@/lib/nav";
import Link from "next/link";

const COMPANY_ROWS = [
  { label: "会社名", value: "株式会社 Vixeed" },
  { label: "代表者", value: "大田 将馬" },
  { label: "設立", value: "2025年10月7日" },
  {
    label: "所在地",
    value: "〒260-0031 千葉県千葉市中央区新千葉2-7-1-403",
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-[#1a2744] px-6 pt-16 pb-28 text-white md:px-10 md:pb-16">
      <div className="mx-auto max-w-[960px]">
        <div className="grid gap-12 md:grid-cols-[1.45fr_0.9fr] md:gap-16">
          <section aria-labelledby="company-overview">
            <p className="font-[family-name:var(--font-inter)] text-[0.68rem] font-semibold tracking-[0.28em] text-[#c9a227] uppercase">
              Company
            </p>
            <h2
              id="company-overview"
              className="font-[family-name:var(--font-serif)] mt-3 text-[1.55rem] font-semibold tracking-wide"
            >
              会社概要
            </h2>
            <dl className="mt-6">
              {COMPANY_ROWS.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[4.75rem_1fr] gap-3 border-b border-white/15 py-3 text-[0.9rem] leading-relaxed"
                >
                  <dt className="text-white/55">{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <div>
            <p className="text-[0.72rem] tracking-[0.18em] text-white/55">
              連絡先
            </p>
            <div className="mt-4 flex flex-col gap-3 text-[0.88rem]">
              <a
                href="https://www.instagram.com/vixeed_co_ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
              >
                <InstagramIcon className="h-3.5 w-3.5 shrink-0" />
                公式Instagram
              </a>
              <a
                href="https://www.instagram.com/shoma_vixeed/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
              >
                <InstagramIcon className="h-3.5 w-3.5 shrink-0" />
                代表Instagram
              </a>
              <a
                href="mailto:office@vixeed.jp"
                className="text-white/80 transition-colors hover:text-white"
              >
                office@vixeed.jp
              </a>
              <a
                href="tel:08032791108"
                className="text-white/80 transition-colors hover:text-white"
              >
                080-3279-1108
              </a>
            </div>
            <nav
              aria-label="その他のページ"
              className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-[0.78rem] text-white/65"
            >
              {footerLinks
                .filter(
                  ({ href }) => href === "/faq/" || href === "/news/",
                )
                .map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                ))}
            </nav>
          </div>
        </div>

        <nav
          aria-label="メインメニュー"
          className="mt-14 flex flex-col items-center gap-7 border-t border-white/15 pt-10 md:flex-row md:flex-wrap md:justify-center md:gap-x-8 md:gap-y-6"
        >
          {navItems.map(({ id, href, labelJa, labelEn }) => (
            <Link
              key={id}
              href={href}
              className="flex flex-col items-center text-[1.05rem] font-medium tracking-wide text-white transition-colors hover:text-[#e5c158]"
            >
              {labelJa}
              <span className="font-[family-name:var(--font-inter)] mt-1 text-[0.62rem] font-medium tracking-[0.16em] text-white/50 uppercase">
                {labelEn}
              </span>
            </Link>
          ))}
        </nav>

        <p className="mt-10 text-center text-[0.68rem] tracking-[0.08em] text-white/45">
          © 2025 株式会社 Vixeed
        </p>
      </div>
    </footer>
  );
}
