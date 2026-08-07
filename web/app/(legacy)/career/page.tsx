import { LegacyPageShell } from "@/components/legacy/LegacyPageShell";
import { PageHero } from "@/components/legacy/PageHero";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "キャリア・就職先",
  description: "Vixeedインターン卒業生の声と就職先・進路をご紹介します。",
};

const alumni = [
  {
    meta: "2026卒 / 男性",
    heading: "大手IT企業 内定",
    body: "Vixeedのインターンでは、ロジカルシンキングを徹底的に鍛えることができました。実践の中で考え抜く力が身につき、就職活動でも大きな武器になりました。",
    tags: ["論理思考", "実践経験"],
    delay: "delay-1",
  },
  {
    meta: "2026卒 / 男性",
    heading: "外資コンサル 内定",
    body: "数字で課題を捉え、仮説を立て、改善する力が身につきました。現場で培った思考力は、コンサル選考でもそのまま活きたと感じています。",
    tags: ["仮説思考", "課題解決"],
    delay: "delay-2",
  },
  {
    meta: "2025卒 / 男性",
    heading: "大手人材企業 内定",
    body: "営業だけでなく、チームで成果を出す力まで学べたことが大きな財産でした。学生のうちにここまで本気で挑戦できる環境は貴重だと思います。",
    tags: ["チーム力", "成長環境"],
    delay: "delay-3",
  },
];

const careerPaths = [
  {
    title: "外資系コンサル",
    desc: "戦略・経営コンサルティングファームなど、外資系コンサル企業への就職実績があります。",
    delay: "delay-1",
  },
  {
    title: "大手IT企業",
    desc: "上場IT企業をはじめとする、大手IT企業への就職・転職実績があります。",
    delay: "delay-2",
  },
  {
    title: "大手不動産",
    desc: "不動産仲介・開発を手がける大手不動産企業への就職実績があります。",
    delay: "delay-3",
  },
  {
    title: "大手人材会社",
    desc: "人材紹介・人材サービスを展開する大手人材会社への就職実績があります。",
    delay: "delay-4",
  },
];

export default function CareerPage() {
  return (
    <LegacyPageShell active="career">
      <PageHero title="インターン生の就職先" subtitle="Career" />

      <section className="sec sec-alumni">
        <div className="alumni-wrapper">
          <p className="alumni-eyebrow reveal">Alumni Voice</p>
          <h2 className="alumni-title reveal">Vixeedインターン卒業生の声</h2>
          <p className="alumni-intro reveal">
            Vixeedでの実践経験を通じて、思考力・行動力・成果を出す力を磨いた卒業生たち。
            次のキャリアにつながったリアルな声を紹介します。
          </p>

          <div className="alumni-grid">
            {alumni.map((item) => (
              <article className={`alumni-card reveal ${item.delay}`} key={item.heading}>
                <p className="alumni-meta">{item.meta}</p>
                <h3 className="alumni-heading">{item.heading}</h3>
                <p className="alumni-body">{item.body}</p>
                <div className="alumni-tags">
                  {item.tags.map((tag) => (
                    <span className="alumni-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec-wide sec-off">
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <h2 className="line-anim reveal">就職先・進路</h2>
          <div className="cards">
            {careerPaths.map((item) => (
              <div className={`card reveal hover-float ${item.delay}`} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 className="line-anim reveal">挑戦が、次のキャリアを開く</h2>
          <p className="reveal">
            ここで得た「行動力」「提案力」「マネジメント力」は、どの業界・職種でも通用する財産です。一緒に挑戦し、次のステージへ。
          </p>
          <Link href="/recruit/" className="link-more btn-hover reveal">
            採用情報を見る →
          </Link>
        </div>
      </section>

      <section className="cta-sec">
        <h2 className="reveal">インターン・正社員 募集中</h2>
        <p className="reveal">
          事業拡大に伴い、インターン・正社員（新卒／第二新卒／中途）で一緒に働く仲間を募集しています
        </p>
        <Link href="/contact/" className="btn-white reveal btn-hover">
          LINEで応募する
        </Link>
      </section>
    </LegacyPageShell>
  );
}
