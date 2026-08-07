import { InstagramIcon } from "@/components/legacy/InstagramIcon";
import { LegacyPageShell } from "@/components/legacy/LegacyPageShell";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "株式会社 Vixeed | 信念の種を蒔き社会に価値を",
  description:
    "信念ある挑戦が当たり前の社会を目指し、日本の若者に勇気と希望を届ける。",
};

export default function HomePage() {
  return (
    <LegacyPageShell active="home" hero>
      <section className="hero">
        <div className="hero-bg-parallax" />
        <div className="hero-veil" aria-hidden />
        <div className="hero-inner">
          <p className="hero-eyebrow hero-stagger">Vixeed Inc.</p>
          <h1 className="hero-stagger">
            信念の種を蒔き
            <br />
            社会に価値を芽吹かせる
          </h1>
          <p className="hero-sub hero-stagger">
            信念ある挑戦が当たり前の社会を目指し、
            <br />
            日本の若者に勇気と希望を届ける。
          </p>
          <div className="hero-actions hero-stagger">
            <a
              href="https://lin.ee/70GV5eO"
              className="hero-btn hero-btn--primary btn-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINEで応募する
            </a>
            <Link href="/service/" className="hero-btn hero-btn--ghost btn-hover">
              事業を見る
            </Link>
          </div>
        </div>
        <div className="hero-scroll" aria-hidden>
          <span>Scroll</span>
          <i />
        </div>
      </section>

      <section className="sec-wide service-sec">
        <div className="service-sec-inner">
          <div className="service-header reveal">
            <span className="service-label">Business</span>
            <h2>事業内容</h2>
            <p className="service-lead">
              エネルギーとデジタル。二つの軸で、現場に根ざした価値をつくる。
            </p>
          </div>

          <div className="service-row reveal delay-2">
            <div
              className="service-block-img service-block-img--02 media-reveal"
              role="img"
              aria-label="エネルギー事業"
            />
            <div className="service-block-content">
              <span className="service-accent" />
              <h3 className="service-block-title">
                <span className="service-num">01</span> エネルギー事業
              </h3>
              <p>
                再生可能エネルギーを中心に、太陽光発電や蓄電池の導入支援を通じてエネルギー課題の解決に取り組みます。
              </p>
              <Link href="/service/#business-02" className="service-cta btn-hover">
                詳しく見る <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="service-row reveal delay-3">
            <div className="service-block-content">
              <span className="service-accent" />
              <h3 className="service-block-title">
                <span className="service-num">02</span> DX支援事業（SaaS等）
              </h3>
              <p>
                SaaSプロダクトの提供と導入支援を通じて、業務効率化や生産性向上を支援し、企業変革を実現します。
              </p>
              <Link href="/service/#business-03" className="service-cta btn-hover">
                詳しく見る <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div
              className="service-block-img service-block-img--03 media-reveal"
              role="img"
              aria-label="DX支援事業"
            />
          </div>
        </div>
      </section>

      <section className="cta-sec cta-sec--premium">
        <div className="cta-glow" aria-hidden />
        <h2 className="reveal">インターン・正社員 募集中</h2>
        <p className="reveal">
          インターン（未経験歓迎）／正社員（新卒・第二新卒・中途）。営業職・PM職・人材育成・マネジメント
        </p>
        <a
          href="https://lin.ee/70GV5eO"
          className="btn-white btn-hover reveal"
          target="_blank"
          rel="noopener noreferrer"
        >
          LINEで応募する
        </a>
      </section>

      <section className="ig-cta sec">
        <p className="ig-cta-text reveal">
          会社の日常や最新情報はInstagramで発信しています。
        </p>
        <a
          href="https://www.instagram.com/vixeed_co_ltd/"
          target="_blank"
          rel="noopener noreferrer"
          className="ig-cta-btn btn-hover reveal"
        >
          <InstagramIcon />
          公式Instagramを見る
        </a>
      </section>

      <section className="sec reveal">
        <h2 className="line-anim">よくある質問</h2>
        <div className="accordion">
          <div className="acc-item">
            <div className="acc-q">インターンでもどれくらい稼げますか？</div>
            <div className="acc-a">
              <div className="acc-a-inner">
                固定給＋成果報酬型、もしくは完全成果報酬型を選択できます。平均月収は10〜18万円（週3〜4稼働）、上位層は月30〜50万円。成果報酬に上限はありません。
              </div>
            </div>
          </div>
          <div className="acc-item">
            <div className="acc-q">営業未経験でも大丈夫ですか？</div>
            <div className="acc-a">
              <div className="acc-a-inner">
                問題ありません。在籍メンバーの99%が営業未経験スタートです。
              </div>
            </div>
          </div>
          <div className="acc-item">
            <div className="acc-q">インターン経験者の就職先は？</div>
            <div className="acc-a">
              <div className="acc-a-inner">
                外資系コンサル企業、大手IT企業（上場企業含む）、メーカー営業職、ベンチャー企業の事業責任者候補など。
              </div>
            </div>
          </div>
        </div>
        <Link href="/faq/" className="link-more btn-hover">
          すべてのFAQを見る →
        </Link>
      </section>

      <section className="sec-wide sec-off">
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <h2 className="line-anim reveal">お知らせ</h2>
          <div className="news-item reveal delay-1">
            <span className="news-date">2025.10.07</span>
            <span>株式会社Vixeed 設立</span>
          </div>
          <div className="news-item reveal delay-2">
            <span className="news-date">2025.10.07</span>
            <span>ホームページを公開しました</span>
          </div>
        </div>
      </section>

      <section className="quote quote--motion">
        <p className="reveal">ここを挑戦を楽しむ。</p>
        <small className="reveal">愛、感謝、挑戦、信念を貫く</small>
      </section>
    </LegacyPageShell>
  );
}
