import { InstagramIcon } from "@/components/legacy/InstagramIcon";
import { LegacyPageShell } from "@/components/legacy/LegacyPageShell";
import { PageHero } from "@/components/legacy/PageHero";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "代表挨拶",
  description: "代表取締役・大田将馬からのメッセージ。信念ある挑戦が当たり前の社会に。",
};

export default function PresidentMessagePage() {
  return (
    <LegacyPageShell active="about">
      <PageHero title="代表挨拶" subtitle="Message" />

      <main>
        <section className="sec sec-president">
          <div className="president-message reveal">
            <h2 className="president-message-head">代表挨拶</h2>
            <div className="president-message-body">
              <p className="president-message-sub" id="president-message-anchor">
                ー 信念ある挑戦が当たり前の社会に ー
              </p>
              <div className="president-message-text">
                <div className="president-message-text-lead">
                  <p>初めまして。</p>
                  <p>株式会社Vixeed 代表取締役の大田将馬と申します。</p>
                  <p>この度は、当社のウェブサイトをご覧いただき、誠にありがとうございます。</p>
                  <p>私の原点は、今も昔も、ただ一つです。</p>
                  <p>「信念を持って挑戦することが、当たり前の社会を創る」</p>
                  <p>この想いを胸に、私は今日まで走り続けてきました。</p>
                </div>
                <button
                  type="button"
                  className="president-read-more-btn link-more"
                  id="president-read-more"
                  aria-expanded="false"
                  aria-controls="president-message-more"
                >
                  続きを読む <span aria-hidden="true">↓</span>
                </button>
                <div className="president-message-text-more" id="president-message-more" hidden>
                  <p>
                    18歳まではサッカーに打ち込み、
                    <br />
                    19歳でアメリカへ留学しました。
                  </p>
                  <p>
                    異国の地で日本を見つめ直したとき、
                    <br />
                    この国の素晴らしさと同時に、見えづらい課題もはっきりと見えました。
                  </p>
                  <p>
                    挑戦する人が笑われる。
                    <br />
                    批判される。
                    <br />
                    根拠のない「安定」が正解のように扱われる。
                  </p>
                  <p>
                    本気で生きる人間ほど、
                    <br />
                    「変わり者」と呼ばれてしまう空気がある。
                  </p>
                  <p>
                    この社会に、自分の子どもや未来ある若者たちを、
                    <br />
                    胸を張って送り出せるだろうか。
                  </p>
                  <p>そう自分に問い続けた末に、答えは明確でした。</p>
                  <p>「待つのではなく、自分が変える側に立つ」</p>
                  <p>
                    帰りの飛行機の中で下したこの決断が、
                    <br />
                    私のすべての始まりです。
                  </p>
                  <p>20歳で、完全成果報酬の訪問営業の世界に飛び込みました。</p>
                  <p>
                    華やかさとは無縁の泥臭い現場。
                    <br />
                    断られ続ける毎日。
                    <br />
                    自分の未熟さと無力さを突きつけられる日々。
                  </p>
                  <p>正直、何度も心が折れかけました。</p>
                  <p>
                    それでも前に立ち続けられたのは、
                    <br />
                    「信念ある挑戦が当たり前の社会を創る」という使命があったからです。
                  </p>
                  <p>この経験は、私に一つの確信を与えてくれました。</p>
                  <p>「人は環境で変わるのではない。信念で変わる。」</p>
                  <p>その後、23歳で大手外資系コンサルティング会社に入社しました。</p>
                  <p>
                    恵まれた環境、優秀な仲間、安定したキャリア。
                    <br />
                    多くの人が望む道の中に、確かに私はいました。
                  </p>
                  <p>それでも、心の奥の違和感は消えませんでした。</p>
                  <p>
                    「このまま安定の中で生きて、この国は本当に良くなるのか」
                    <br />
                    「自分は後世に、何を残せるのか」
                  </p>
                  <p>その問いに対する答えは、最後まで変わりませんでした。</p>
                  <p>
                    信念に従って生きること。
                    <br />
                    信念を貫く側に立つこと。
                  </p>
                  <p>私は、その選択をしました。</p>
                  <p>
                    挑戦する人が増えれば、社会は必ず前に進む。
                    <br />
                    信念を持つ人が報われる環境をつくれば、未来は必ず変えられる。
                  </p>
                  <p>私は、そう本気で信じています。</p>
                  <p>挑戦する理由は一つです。</p>
                  <p>「本気で挑戦した人間にしか、見えない景色がある」</p>
                  <p>
                    まだ若い会社ではありますが、
                    <br />
                    多くの仲間とお客様に支えられ、着実に成長を続けています。
                  </p>
                  <p>
                    これからも私たちは、
                    <br />
                    「信念ある挑戦」を軸に社会課題の解決へ真正面から向き合い、
                    <br />
                    本質的な価値を提供し続けてまいります。
                  </p>
                  <p>今後の株式会社Vixeedに、ぜひご期待ください。</p>
                  <p className="president-message-name">代表 大田 将馬</p>
                  <button
                    type="button"
                    className="president-read-back-btn"
                    id="president-read-back"
                    aria-label="挨拶本文の先頭へ戻る"
                  >
                    戻る
                  </button>
                </div>
              </div>

              <p className="president-ig-wrap reveal">
                <a
                  href="https://www.instagram.com/shoma_vixeed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="president-ig-link"
                >
                  <InstagramIcon />
                  <span>@shoma_vixeed</span>
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="ig-cta reveal">
          <div className="ig-cta-inner">
            <p className="ig-cta-text">
              代表の取り組みや発信はInstagramでもご覧いただけます。
            </p>
            <a
              href="https://www.instagram.com/shoma_vixeed/"
              target="_blank"
              rel="noopener noreferrer"
              className="ig-cta-btn"
            >
              代表Instagramを見る
            </a>
          </div>
        </section>

        <section className="sec president-back-wrap reveal">
          <Link href="/about/" className="president-back-link">
            私たちについてへ戻る
          </Link>
        </section>
      </main>
    </LegacyPageShell>
  );
}
