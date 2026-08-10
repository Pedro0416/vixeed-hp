import { LegacyPageShell } from "@/components/legacy/LegacyPageShell";
import { PageHero } from "@/components/legacy/PageHero";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "事業内容",
  description:
    "エネルギー事業、DX支援事業（SaaS等）。Vixeedの事業領域をご紹介します。",
};

export default function ServicePage() {
  return (
    <LegacyPageShell active="service">
      <PageHero title="事業内容" subtitle="Business" />

      <section className="sec service-value-lead">
        <h2 className="line-anim reveal">提供価値</h2>
        <p className="service-value-lead-text reveal">
          Vixeedは、<strong>2つの事業</strong>
          を通じて、日本の社会課題に向き合い、持続可能な未来の実現を支えます。エネルギーとデジタルの領域で、現場に根差した実行力と提案力を通じて価値を提供します。
        </p>
      </section>

      <section className="sec">
        <h2 className="line-anim reveal">事業内容一覧</h2>
        <div className="cards">
          <a href="#business-02" className="card reveal hover-float delay-2">
            <h3>01 エネルギー事業</h3>
            <p>
              再生可能エネルギーを中心に、太陽光発電や蓄電池の導入支援を通じて、エネルギー課題の解決に取り組みます。
            </p>
          </a>
          <a href="#business-03" className="card reveal hover-float delay-3">
            <h3>02 DX支援事業（SaaS等）</h3>
            <p>
              SaaSプロダクトの提供と導入支援を通じて、業務効率化と生産性向上を実現し、企業変革を支援します。
            </p>
          </a>
        </div>
      </section>

      <section className="sec-wide" style={{ paddingTop: 0 }}>
        <div className="business-detail-inner">
          <h2 className="line-anim reveal" style={{ marginBottom: "3rem" }}>
            各事業の詳細
          </h2>

          <article className="business-detail reveal" id="business-02">
            <div className="business-detail-img-wrap">
              <Image
                src="/images/energy-business-detail.jpg"
                alt="エネルギー事業"
                className="business-detail-img"
                width={1200}
                height={600}
                unoptimized
              />
            </div>
            <h3 className="business-detail-title">エネルギー事業</h3>
            <p className="business-detail-text">
              私たちは、再生可能エネルギーを中心に、日本のエネルギー課題の解決に取り組んでいます。エネルギーは、社会や産業を支える基盤であり、その在り方は、国の未来に直結します。太陽光発電や蓄電池の導入支援を通じて、エネルギーの自立性向上と持続可能な社会の実現に貢献してまいります。本事業は単なる商品提供ではなく、社会課題に対する具体的なアクションであると考えています。
            </p>
          </article>

          <article className="business-detail reveal" id="business-03">
            <div className="business-detail-img-wrap">
              <Image
                src="/images/business-detail-03.jpg"
                alt="DX支援事業（SaaS等）"
                className="business-detail-img"
                width={1200}
                height={600}
                unoptimized
              />
            </div>
            <h3 className="business-detail-title">DX支援事業（SaaS等）</h3>
            <p className="business-detail-text">
              企業の持続的な成長には、デジタル技術の活用が不可欠です。私たちは、SaaSプロダクトの提供および導入支援を通じて、業務効率化や生産性向上を支援しています。単なるツール導入に留まらず、現場に根付く運用設計までを一貫してサポートすることで、企業の変革を実現します。テクノロジーの力で、人の可能性を最大化する。それが、私たちのDX支援です。
            </p>
          </article>

        </div>
      </section>

      <section className="cta-sec">
        <h2 className="reveal line-anim">一緒に挑戦しませんか？</h2>
        <p className="reveal">インターン・正社員（新卒／第二新卒／中途）募集中</p>
        <a
          href="https://lin.ee/70GV5eO"
          className="btn-white reveal btn-hover"
          target="_blank"
          rel="noopener noreferrer"
        >
          LINEで応募する
        </a>
      </section>
    </LegacyPageShell>
  );
}
