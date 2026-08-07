import { LegacyPageShell } from "@/components/legacy/LegacyPageShell";
import { PageHero } from "@/components/legacy/PageHero";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "導入実績",
  description: "Vixeedの導入実績とお客様の声。信頼と実績で選ばれています。",
};

const industries = [
  {
    title: "通信・インフラ",
    desc: "通信回線・インターネットサービスの営業代行を中心に、安定した成果を提供しています。",
    delay: "delay-1",
  },
  {
    title: "IT・SaaS",
    desc: "ITサービス・SaaSプロダクトの新規開拓営業を支援し、顧客獲得に貢献しています。",
    delay: "delay-2",
  },
  {
    title: "不動産・住宅",
    desc: "住宅関連サービスの営業支援を行い、成約率の向上に寄与しています。",
    delay: "delay-3",
  },
  {
    title: "人材・教育",
    desc: "人材サービス・教育関連企業の営業活動を代行し、事業拡大を支援しています。",
    delay: "delay-4",
  },
];

const testimonials = [
  {
    q: "通信業界 — マーケティング担当者様",
    a: "「他社と比べて圧倒的に行動量が違います。数字へのコミットが強く、毎月安定した成果を出してくれています。若いチームですが、信頼できるパートナーです。」",
  },
  {
    q: "IT企業 — 営業部長様",
    a: "「新規開拓が課題でしたが、Vixeedさんに依頼してから月間のリード数が大幅に改善しました。報告も丁寧で、PDCAのスピードが速いのが印象的です。」",
  },
  {
    q: "人材サービス — 代表取締役様",
    a: "「営業代行は何社か試しましたが、ここまで熱量の高いチームは初めてです。単なる外注ではなく、事業パートナーとして一緒に走ってくれている感覚があります。」",
  },
];

export default function ClientsPage() {
  return (
    <LegacyPageShell>
      <PageHero title="導入実績" subtitle="Clients & Results" />

      <section className="sec" style={{ maxWidth: 720 }}>
        <h2 className="line-anim reveal">信頼と実績で選ばれています</h2>
        <p className="reveal">
          設立以来、幅広い業界のお客様にサービスを提供し、確かな成果を創出してきました。信念ある営業力と誠実な対応で、継続的なパートナーシップを築いています。
        </p>
      </section>

      <section className="sec-wide sec-off">
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <h2 className="line-anim reveal">数字で見るVixeed</h2>
          <div className="stats reveal">
            <div className="stat">
              <div className="stat-val countup">50+</div>
              <div className="stat-label">累計取引社数</div>
            </div>
            <div className="stat">
              <div className="stat-val countup">95%</div>
              <div className="stat-label">顧客継続率</div>
            </div>
            <div className="stat">
              <div className="stat-val countup">8名</div>
              <div className="stat-label">在籍メンバー</div>
            </div>
            <div className="stat">
              <div className="stat-val countup">2事業</div>
              <div className="stat-label">展開事業数</div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ maxWidth: 860 }}>
        <h2 className="line-anim reveal">対応業界</h2>
        <div className="cards reveal">
          {industries.map((item) => (
            <div className={`card hover-float ${item.delay}`} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sec-wide sec-green">
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 className="line-anim reveal">選ばれる理由</h2>
          <div className="benefits reveal">
            <div className="benefit">
              <div className="benefit-icon">🔥</div>
              <h3>圧倒的な行動量</h3>
              <p>質と量の両立で成果を最大化</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">🤝</div>
              <h3>誠実な対応</h3>
              <p>信頼関係を最優先に構築</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">📈</div>
              <h3>成果へのコミット</h3>
              <p>数字で結果を証明し続ける</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ maxWidth: 720 }}>
        <h2 className="line-anim reveal">お客様の声</h2>
        <div className="accordion reveal">
          {testimonials.map((item) => (
            <div className="acc-item" key={item.q}>
              <div className="acc-q">{item.q}</div>
              <div className="acc-a">
                <div className="acc-a-inner">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-sec">
        <h2 className="line-anim reveal">営業力で、お客様の成長を加速する</h2>
        <p className="reveal">まずはお気軽にご相談ください</p>
        <Link href="/contact/" className="btn-white btn-hover reveal">
          お問い合わせ
        </Link>
      </section>
    </LegacyPageShell>
  );
}
