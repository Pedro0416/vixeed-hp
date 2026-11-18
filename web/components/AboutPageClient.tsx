"use client";

import {
  DrawLine,
  MaskReveal,
  ScrollReveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/ScrollReveal";
import { CoreValueSection } from "@/components/CoreValueSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export function AboutPageClient() {
  return (
    <>
      <SiteHeader active="about" />

      <header className="relative overflow-hidden bg-white px-6 pb-16 pt-32 text-center md:px-8 md:pb-20 md:pt-40">
        <MaskReveal
          as="p"
          delay={0.05}
          className="font-[family-name:var(--font-inter)] text-[clamp(2.4rem,7vw,3.75rem)] font-semibold leading-none tracking-[-0.03em] text-[#0a0a0a]"
        >
          About us
        </MaskReveal>
        <MaskReveal
          as="h1"
          delay={0.18}
          className="mt-4 text-[0.95rem] font-medium tracking-[0.08em] text-[#555]"
        >
          私たちについて
        </MaskReveal>
        <DrawLine
          className="mt-8 text-[#c9a227]"
          width="3.5rem"
          delay={0.35}
        />
      </header>

      <main className="pb-24 md:pb-0">
        <section className="mx-auto max-w-[720px] px-6 pb-20 text-center md:px-8">
          <MaskReveal
            as="p"
            delay={0.1}
            className="font-[family-name:var(--font-serif)] text-[clamp(1.25rem,3.2vw,1.75rem)] font-bold leading-[1.7] tracking-[-0.01em] text-[#0a0a0a]"
          >
            信念の種を蒔き、社会に価値を芽吹かせる。
          </MaskReveal>

          <StaggerGroup className="mt-10 space-y-5" delayChildren={0.2} stagger={0.12}>
            <StaggerItem>
              <p className="text-[0.95rem] leading-[2.05] text-[#555]">
                挑戦も失敗も、偶然ではありません。
                <br />
                そこには、信じた道を貫く意志があります。
              </p>
            </StaggerItem>
            <StaggerItem>
              <p className="text-[0.95rem] leading-[2.05] text-[#555]">
                Vixeedは、エネルギーとデジタルの現場に入り込み、
                <br className="hidden sm:block" />
                若者の挑戦と社会の課題をつなぐ価値を生み出します。
              </p>
            </StaggerItem>
          </StaggerGroup>
        </section>

        <CoreValueSection />

        <section className="mx-auto max-w-[860px] px-6 py-24 md:px-8">
          <ScrollReveal>
            <a
              href="/president-message/"
              className="group block overflow-hidden rounded-2xl border border-[#e8e8ec] bg-white p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[#c9a227]/40 hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] md:p-12"
            >
              <p className="font-[family-name:var(--font-inter)] text-center text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#9a7b2e]">
                Message
              </p>
              <h2 className="font-[family-name:var(--font-serif)] mt-3 text-center text-[clamp(1.35rem,2.8vw,1.65rem)] font-bold tracking-[-0.01em] text-[#0a0a0a]">
                代表挨拶
              </h2>
              <span
                aria-hidden
                className="mx-auto mt-5 block h-px w-10 origin-center scale-x-0 bg-[#c9a227] transition-transform duration-500 group-hover:scale-x-100"
              />
              <p className="mt-6 text-center text-[0.95rem] font-medium tracking-wide text-[#555]">
                ー 信念ある挑戦が当たり前の社会に ー
              </p>
              <p className="mt-4 text-center text-[0.92rem] leading-[1.9] text-[#666]">
                代表取締役・大田将馬からのメッセージをご覧いただけます。
              </p>
              <span className="mt-8 flex items-center justify-center gap-1 text-[0.8rem] font-semibold text-[#0a0a0a] underline decoration-[#0a0a0a] decoration-1 underline-offset-4 transition-all group-hover:gap-2 group-hover:opacity-60">
                全文を読む <span aria-hidden>→</span>
              </span>
            </a>
          </ScrollReveal>
        </section>

        <section className="mx-auto max-w-[860px] px-6 pb-24 md:px-8">
          <ScrollReveal>
            <p className="font-[family-name:var(--font-inter)] text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#9a7b2e]">
              Company
            </p>
            <h2 className="font-[family-name:var(--font-serif)] mt-3 text-[clamp(1.55rem,2.8vw,2rem)] font-bold tracking-[-0.01em] text-[#0a0a0a]">
              会社概要
            </h2>
            <DrawLine
              className="mx-0 mt-5 text-[#0a0a0a]"
              width="2.5rem"
              delay={0.15}
            />
          </ScrollReveal>

          <ScrollReveal delay={0.12} className="mt-10">
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
                  <td className="py-4 text-[#666]">15名</td>
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
          </ScrollReveal>
        </section>

        <section className="relative overflow-hidden bg-[#1c222b] px-6 py-24 text-center md:px-8">
          <ScrollReveal>
            <p className="font-[family-name:var(--font-serif)] relative mx-auto max-w-[28em] text-[clamp(1.45rem,3.2vw,2rem)] font-semibold leading-[1.6] tracking-[0.04em] text-white">
              信念を貫く
            </p>
            <DrawLine className="mt-8 text-[#c9a227]" width="3rem" delay={0.2} />
            <small className="font-[family-name:var(--font-inter)] mt-6 block text-[0.65rem] uppercase tracking-[0.22em] text-white/45">
              Shohma Ota / Founder
            </small>
          </ScrollReveal>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
