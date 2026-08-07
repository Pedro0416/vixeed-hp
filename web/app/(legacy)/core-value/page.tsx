import { LegacyPageShell } from "@/components/legacy/LegacyPageShell";
import { PageHero } from "@/components/legacy/PageHero";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "コアバリュー",
  description: "Vixeedのコアバリュー。愛、感謝、挑戦、信念を貫く。",
};

const values = [
  {
    title: "愛 — Love",
    desc: "仲間を、お客様を、社会を心から大切にする。利己ではなく利他の精神で行動し、関わるすべての人に誠意を持って向き合います。",
    delay: "delay-1",
  },
  {
    title: "感謝 — Gratitude",
    desc: "今ある環境、出会い、チャンスに感謝する。当たり前を当たり前と思わず、支えてくれる人への敬意を忘れない。",
    delay: "delay-2",
  },
  {
    title: "挑戦 — Challenge",
    desc: "失敗を恐れず、泥臭く一歩を踏み出す。安定に甘えず、常に新しい価値を追求する。",
    delay: "delay-3",
  },
  {
    title: "信念 — Conviction",
    desc: "自分の信じた道を貫く強さ。周りに流されず、困難な時こそ軸を持ち続ける。信念があるからこそ、ブレない営業ができる。",
    delay: "delay-4",
  },
];

export default function CoreValuePage() {
  return (
    <LegacyPageShell>
      <PageHero title="コアバリュー" subtitle="Core Value" />

      <section className="cv-pillars">
        <div className="cv-pillars-inner">
          <div className="cv-pillar reveal">
            <span className="cv-pillar-label">Mission</span>
            <p className="cv-pillar-text">信念の種を蒔き、社会に価値を芽吹かせる</p>
          </div>
          <div className="cv-pillar reveal delay-1">
            <span className="cv-pillar-label">Vision</span>
            <p className="cv-pillar-text">信念ある挑戦が当たり前の社会を目指す</p>
          </div>
          <div className="cv-pillar reveal delay-2">
            <span className="cv-pillar-label">Slogan</span>
            <p className="cv-pillar-text">愛、感謝、挑戦、信念を貫く</p>
          </div>
          <div className="cv-pillar cv-pillar-message reveal delay-3">
            <p className="cv-pillar-text">
              「信念」と「挑戦」を軸に、若者を支援し社会に価値を創出する。
              <br />
              日本の若者に勇気と希望を届けます。
            </p>
          </div>
        </div>
      </section>

      <section className="sec" style={{ maxWidth: 720 }}>
        <h2 className="line-anim reveal">4つの価値観</h2>
        <p className="reveal">
          Vixeedのすべての行動は、4つのコアバリューに根ざしています。これらは単なるスローガンではなく、一人ひとりが日々の業務で体現する行動指針です。
        </p>
      </section>

      <section className="sec-wide sec-off">
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div className="cards">
            {values.map((item) => (
              <div className={`card reveal hover-float ${item.delay}`} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ maxWidth: 720 }}>
        <h2 className="line-anim reveal">バリューの実践</h2>
        <p className="reveal">
          私たちはこの4つの価値観を、毎日の営業活動、チームミーティング、メンバーへのフィードバック、そしてお客様との対話の中で実践しています。
        </p>
        <p className="reveal" style={{ marginTop: "1rem" }}>
          新しく入るインターン生にも、スキルより先にこのバリューを共有します。技術や知識は後からいくらでも身につきますが、行動の根底にある「なぜやるのか」が揃っていなければ、本当の成果は生まれないと信じているからです。
        </p>
      </section>

      <section className="quote">
        <p className="reveal">
          蒔いた信念の種が芽吹き、
          <br />
          挑戦が当たり前になる未来へ。
        </p>
        <small className="reveal">愛、感謝、挑戦、信念を貫く</small>
      </section>

      <section className="cta-sec">
        <h2 className="line-anim reveal">この価値観に共感する仲間を求めています</h2>
        <p className="reveal">インターン（未経験歓迎）・正社員（新卒／第二新卒／中途）募集中</p>
        <Link href="/contact/" className="btn-white btn-hover reveal">
          LINEで応募する
        </Link>
      </section>
    </LegacyPageShell>
  );
}
