import { footerLinks } from "@/lib/nav";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#e8e8ec] bg-[#f6f7f9] px-8 py-16 pb-10 text-[#0a0a0a]">
      <div className="mx-auto max-w-[900px]">
        <div className="mb-10 flex flex-wrap items-start justify-between gap-8">
          <div className="font-[family-name:var(--font-inter)] text-xl font-semibold tracking-tight">
            Vixeed
          </div>
          <nav className="flex flex-wrap gap-5 text-[0.72rem] text-[#666]">
            {footerLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="transition-colors hover:text-[#0a0a0a]"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-2 text-[0.78rem] text-[#666]">
            <a
              href="https://www.instagram.com/vixeed_co_ltd/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#0a0a0a]"
            >
              公式Instagram
            </a>
            <a
              href="mailto:office@vixeed.jp"
              className="transition-colors hover:text-[#0a0a0a]"
            >
              office@vixeed.jp
            </a>
          </div>
        </div>
        <div className="border-t border-black/10 pt-8 text-[0.6rem] tracking-wide text-[#999]">
          © 2025 Vixeed Inc.
        </div>
      </div>
    </footer>
  );
}
