import { LegacyPageShell } from "@/components/legacy/LegacyPageShell";
import { PageHero } from "@/components/legacy/PageHero";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Vixeedに関するよくある質問。インターン、採用、キャリアについて。",
};

const faqGroups = [
  [
    {
      q: "インターンでもどれくらい稼げますか？",
      a: "固定給＋成果報酬型、もしくは完全成果報酬型を選択できます。平均月収は10〜18万円（週3〜4稼働）、上位層は月30〜50万円。3ヶ月で月50万円達成の事例もあり、半年で累計100万円超の実績もあります。成果報酬に上限はありません。※全員が最初から高収入になるわけではありません。行動量と改善スピードが比例します。",
    },
    {
      q: "リモート勤務は可能ですか？",
      a: "職種により異なります。営業職は原則現場対応（出社または直行直帰）、マーケティング・バックオフィスは週2〜3日リモート可、個人事業主契約はフルリモート案件あり。成果が安定すれば裁量は拡大します。",
    },
    {
      q: "副業・個人事業主としての参加は可能ですか？",
      a: "可能です。業務委託契約あり、完全成果報酬型も選択可、他社との兼業OK（競合を除く）。副業からスタートし、成果次第で本業化するメンバーもいます。",
    },
  ],
  [
    {
      q: "営業未経験でも本当に大丈夫ですか？",
      a: "問題ありません。在籍メンバーの99%が営業未経験スタートです。",
    },
    {
      q: "どんな人が活躍していますか？",
      a: "元大手IT企業勤務、体育会系学生、元アパレル販売員、元事務職。共通点は「素直さ」と「行動量」。学歴よりも実行力を重視しています。",
    },
    {
      q: "成果が出るまでどれくらいかかりますか？",
      a: '個人差はありますが、平均2〜3ヶ月で安定収益化。上位層は3ヶ月で月40〜50万円、半年で月70万円以上の実績あり。営業力は "行動量 × 改善 × 継続" の掛け算。本気でやる人に、上限はありません。',
    },
  ],
  [
    {
      q: "インターン経験者の主な就職先は？",
      a: "外資系コンサル企業、大手IT企業（上場企業含む）、メーカー営業職、ベンチャー企業の事業責任者候補。営業経験と数字実績が強い評価を受けています。",
    },
    {
      q: "ここでの経験は市場価値にどう影響しますか？",
      a: "数字責任・営業力・事業理解の3つが身につきます。これらは業界を問わず高く評価されるスキルセットです。",
    },
    {
      q: "就職・独立支援はありますか？",
      a: "あります。OB・OGによるキャリア面談、面接対策サポート、企業紹介（希望者のみ）、独立希望者向けの事業相談。実際に独立したメンバーも在籍しています。",
    },
  ],
];

export default function FaqPage() {
  return (
    <LegacyPageShell>
      <PageHero title="よくある質問" subtitle="FAQ" />

      <section className="sec" style={{ maxWidth: 760 }}>
        {faqGroups.map((group, groupIndex) => (
          <div key={groupIndex}>
            {groupIndex > 0 ? <div className="divider" /> : null}
            <div className="accordion reveal">
              {group.map((item) => (
                <div className="acc-item" key={item.q}>
                  <div className="acc-q">{item.q}</div>
                  <div className="acc-a">
                    <div className="acc-a-inner">{item.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="cta-sec">
        <h2 className="line-anim reveal">まずは気軽に相談してください</h2>
        <p className="reveal">LINEで簡単に応募できます</p>
        <a
          href="https://line.me/R/ti/p/@vixeed"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-line btn-hover reveal"
        >
          LINEで応募する
        </a>
      </section>
    </LegacyPageShell>
  );
}
