import type { Metadata } from "next";
import { CoreValueSection } from "@/components/CoreValueSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "私たちについて | Vixeed",
  description:
    "株式会社Vixeedの信念・未来図・理念・使命。挑戦は楽しい。信念ある挑戦が当たり前の社会へ。",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader active="about" />
      <div className="border-b border-[#e0e0e0] bg-white pb-12 pt-28 text-center md:pt-32">
        <h1 className="text-[1.6rem] font-extrabold tracking-wide text-[#0a0a0a]">
          私たちについて
        </h1>
        <p className="font-[family-name:var(--font-inter)] mt-2 text-[0.7rem] uppercase tracking-[0.2em] text-[#888]">
          About Us
        </p>
      </div>

      <main className="pb-24 md:pb-0">
        <CoreValueSection />

        <section className="mx-auto max-w-[860px] px-8 py-24">
          <a
            href="/president-message/"
            className="group block rounded-lg border border-[#e0e0e0] bg-white p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-[border-color,box-shadow] hover:border-[#c9a227]/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
          >
            <h2 className="relative text-center text-[clamp(1.2rem,3vw,1.45rem)] font-bold text-[#0a0a0a]">
              代表挨拶
            </h2>
            <p className="mt-6 text-center text-sm font-medium tracking-wide text-[#666]">
              ー 信念ある挑戦が当たり前の社会に ー
            </p>
            <p className="mt-4 text-center text-[0.9rem] leading-relaxed text-[#666]">
              代表取締役・大田将馬からのメッセージをご覧いただけます。
            </p>
            <span className="font-[family-name:var(--font-noto)] mt-8 flex items-center justify-center gap-1 text-[0.8rem] font-semibold text-[#0a0a0a] underline decoration-[#0a0a0a] decoration-1 underline-offset-4 transition-all group-hover:gap-2 group-hover:opacity-60">
              全文を読む <span aria-hidden>→</span>
            </span>
          </a>
        </section>

        <section className="mx-auto max-w-[860px] px-8 pb-24">
          <h2 className="font-[family-name:var(--font-noto)] relative mb-6 inline-block text-[clamp(1.5rem,3vw,1.85rem)] font-bold text-[#0a0a0a] after:absolute after:bottom-[-6px] after:left-0 after:h-0.5 after:w-full after:bg-[#0a0a0a] after:transition-all">
            会社概要
          </h2>
          <table className="w-full border-collapse text-left text-[0.9rem]">
            <tbody>
              <tr className="border-b border-[#e0e0e0]">
                <th className="w-[140px] py-4 font-semibold text-[#0a0a0a]">
                  会社名
                </th>
                <td className="py-4 text-[#666]">株式会社 Vixeed</td>
              </tr>
              <tr className="border-b border-[#e0e0e0]">
                <th className="py-4 font-semibold text-[#0a0a0a]">代表者</th>
                <td className="py-4 text-[#666]">大田 将馬</td>
              </tr>
              <tr className="border-b border-[#e0e0e0]">
                <th className="py-4 font-semibold text-[#0a0a0a]">設立</th>
                <td className="py-4 text-[#666]">2025年10月7日</td>
              </tr>
              <tr className="border-b border-[#e0e0e0]">
                <th className="py-4 font-semibold text-[#0a0a0a]">資本金</th>
                <td className="py-4 text-[#666]">100万円</td>
              </tr>
              <tr className="border-b border-[#e0e0e0]">
                <th className="py-4 font-semibold text-[#0a0a0a]">所在地</th>
                <td className="py-4 text-[#666]">
                  〒260-0031 千葉県千葉市中央区新千葉2-7-1-403
                </td>
              </tr>
              <tr className="border-b border-[#e0e0e0]">
                <th className="py-4 font-semibold text-[#0a0a0a]">事業内容</th>
                <td className="py-4 text-[#666]">
                  エネルギー事業／DX支援事業（SaaS等）
                </td>
              </tr>
              <tr className="border-b border-[#e0e0e0]">
                <th className="py-4 font-semibold text-[#0a0a0a]">従業員数</th>
                <td className="py-4 text-[#666]">8名</td>
              </tr>
              <tr className="border-b border-[#e0e0e0]">
                <th className="align-top py-4 font-semibold text-[#0a0a0a]">
                  お問い合わせ
                </th>
                <td className="py-4 text-[#666]">
                  <a
                    href="tel:08032791108"
                    className="text-[#0a0a0a] underline underline-offset-[3px]"
                  >
                    080-3279-1108
                  </a>
                  <br />
                  <a
                    href="mailto:office@vixeed.jp"
                    className="text-[#0a0a0a] underline underline-offset-[3px]"
                  >
                    office@vixeed.jp
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="relative overflow-hidden bg-[#f6f7f9] px-8 py-24 text-center">
          <span
            className="pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 font-serif text-[8rem] leading-none text-black/[0.04]"
            aria-hidden
          >
            &ldquo;
          </span>
          <p className="font-[family-name:var(--font-noto)] relative mx-auto max-w-[550px] text-[clamp(1.1rem,2.2vw,1.5rem)] font-normal leading-[2.4] tracking-wide text-[#0a0a0a]">
            ここを挑戦を楽しむ。
          </p>
          <small className="font-[family-name:var(--font-inter)] mt-6 block text-[0.68rem] uppercase tracking-[0.15em] text-[#999]">
            代表 大田 将馬
          </small>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
