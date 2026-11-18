import { InstagramIcon } from "@/components/legacy/InstagramIcon";
import { LegacyPageShell } from "@/components/legacy/LegacyPageShell";
import { PageHero } from "@/components/legacy/PageHero";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "採用情報",
  description:
    "Vixeedの採用情報。インターン生・正社員（新卒・第二新卒・中途）募集中。",
};

export default function RecruitPage() {
  return (
    <LegacyPageShell active="recruit">
      <PageHero title="採用情報" subtitle="Recruit" />

      <section className="sec recruit-lead">
        <h2 className="line-anim reveal">採用メッセージ</h2>
        <p className="reveal recruit-lead-text">
          事業拡大に伴い、<strong>共に挑戦できる仲間</strong>を募集しています。
        </p>
        <p className="reveal">
          未経験からでも、実力で成長できる環境があります。年齢や経験よりも、
          <strong>挑戦意欲</strong>と<strong>成長意欲</strong>
          を重視しています。学生でも若手でも、裁量を持って動ける場です。結果だけでなく、
          <strong>挑戦する姿勢</strong>を評価します。
        </p>
      </section>

      <section className="sec-wide sec-off">
        <div className="recruit-inner">
          <h2 className="line-anim reveal">求める人物像</h2>
          <ul className="recruit-persona-list reveal">
            <li>素直に学べる人</li>
            <li>行動力がある人</li>
            <li>数字に向き合える人</li>
            <li>チームで動ける人</li>
            <li>挑戦を楽しめる人</li>
          </ul>
        </div>
      </section>

      <section className="sec" id="intern">
        <h2 className="line-anim reveal">インターン生募集</h2>
        <div className="recruit-block reveal">
          <h3 className="recruit-subhead">インターン概要</h3>
          <p>
            Vixeedのインターンは<strong>実践型</strong>
            。営業・ビジネス・ITの現場経験が積めます。数字で考える力、論理的思考、対人力が鍛えられ、就活でも活きる経験が得られます。
          </p>
        </div>

        <h3 className="recruit-subhead reveal">募集職種</h3>

        <div className="recruit-job reveal">
          <h4 className="recruit-job-title">営業職</h4>
          <p className="recruit-job-desc">
            お客様への提案営業、課題・ニーズのヒアリング、商材説明、契約・導入サポート、数字管理や改善提案。身につくのはコミュニケーション力・提案力・論理的思考力・数字意識・PDCA力・実行力。
          </p>
          <div className="cards">
            <div className="card reveal hover-float delay-1">
              <h3>ToC営業</h3>
              <p>個人向け。分かりやすく伝える力・信頼関係を作る力が重要。行動量と改善力が鍵。</p>
              <Link href="/contact/#contact-form" className="recruit-job-cta">
                この職種に応募する
              </Link>
            </div>
            <div className="card reveal hover-float delay-2">
              <h3>ToB営業</h3>
              <p>法人向け。課題解決型。論理性・提案設計力が重要。ビジネス視点、提案資料・ロジカルな説明力が身につきます。</p>
              <Link href="/contact/#contact-form" className="recruit-job-cta">
                この職種に応募する
              </Link>
            </div>
          </div>
        </div>

        <div className="recruit-job reveal">
          <h4 className="recruit-job-title">エンジニア職</h4>
          <p className="recruit-job-desc">
            <strong>プログラミング未経験でも応募可能</strong>
            。理系学生歓迎。Web制作・システム開発のサポート、ノーコード/ローコード活用、UI改善、データ整理、SaaS活用支援など。
          </p>
          <Link href="/contact/#contact-form" className="recruit-job-cta">
            この職種に応募する
          </Link>
        </div>

        <div className="recruit-block reveal">
          <h3 className="recruit-subhead">1日の流れ（例）</h3>
          <p>出勤 → 朝会 → 営業/制作/開発業務 → 振り返り → 数字確認 → 終了</p>
        </div>
      </section>

      <section className="sec-wide sec-off">
        <div className="recruit-inner" id="fulltime">
          <h2 className="line-anim reveal">正社員募集</h2>
          <p className="reveal recruit-lead-text">
            事業拡大フェーズだからこそ<strong>裁量</strong>があります。年功序列ではなく
            <strong>実力</strong>を見ています。
          </p>
          <div className="cards">
            <div className="card reveal hover-float delay-1">
              <h3>中途</h3>
              <p>これまでの経験を活かしたい方、即戦力だけでなく成長意欲の高い方も対象。</p>
              <Link href="/contact/#contact-form" className="recruit-job-cta">
                この区分に応募する
              </Link>
            </div>
            <div className="card reveal hover-float delay-2">
              <h3>第二新卒</h3>
              <p>社会人経験が浅くても挑戦可能。若いうちから成長したい方、再スタートしたい方にも開かれた環境。</p>
              <Link href="/contact/#contact-form" className="recruit-job-cta">
                この区分に応募する
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="recruit-inner">
          <h2 className="line-anim reveal">Vixeedで得られる経験</h2>
          <ul className="recruit-persona-list reveal">
            <li>実践的な営業経験</li>
            <li>ビジネス視点</li>
            <li>課題解決力</li>
            <li>数字管理力</li>
            <li>IT / DX領域への理解</li>
            <li>将来のキャリアにつながる経験</li>
          </ul>
        </div>
      </section>

      <section className="sec-wide sec-off">
        <div className="recruit-inner" id="requirements">
          <h2 className="line-anim reveal">募集要項</h2>
          <table className="info-table reveal">
            <tbody>
              <tr>
                <th>雇用形態</th>
                <td>正社員 / 業務委託（インターンはアルバイト・業務委託など）</td>
              </tr>
              <tr>
                <th>募集職種</th>
                <td>営業（ToC / ToB）、エンジニア、その他事業に応じて</td>
              </tr>
              <tr>
                <th>応募条件</th>
                <td>意欲・学習意欲を重視。職種により要相談</td>
              </tr>
              <tr>
                <th>歓迎条件</th>
                <td>営業経験、開発経験、理系、語学など職種により歓迎</td>
              </tr>
              <tr>
                <th>勤務地</th>
                <td>〒260-0031 千葉県千葉市中央区新千葉2-7-1-403（出社 / 一部リモート可の職種あり）</td>
              </tr>
              <tr>
                <th>勤務時間</th>
                <td>シフト・職種により異なります。詳細は面談時にご説明します</td>
              </tr>
              <tr>
                <th>給与</th>
                <td>固定給＋成果報酬型、または完全成果報酬型。成果に上限なし。インセンティブ制度あり</td>
              </tr>
              <tr>
                <th>昇給・評価</th>
                <td>実力・成果に応じた評価制度</td>
              </tr>
              <tr>
                <th>休日・休暇</th>
                <td>週休制・シフト制など職種により異なります</td>
              </tr>
              <tr>
                <th>待遇</th>
                <td>交通費支給、研修制度、インセンティブ制度</td>
              </tr>
              <tr>
                <th>福利厚生</th>
                <td>各種保険、研修・学習支援、社内イベント、メンター制度、キャリア相談</td>
              </tr>
              <tr>
                <th>試用期間</th>
                <td>あり（期間は雇用形態により異なります）</td>
              </tr>
              <tr>
                <th>選考フロー</th>
                <td>LINE/フォーム応募 → カジュアル面談 → 面接 → 内定</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="sec recruit-cta-block">
        <h2 className="line-anim reveal">応募はこちら</h2>
        <p className="reveal" style={{ marginBottom: "1.5rem" }}>
          まずは話を聞いてみたい、自分が向いているか確認したい方も歓迎です。よくある質問は
          <Link href="/faq/">FAQ</Link>をご覧ください。
        </p>
        <div className="recruit-cta-buttons reveal">
          <a
            href="https://line.me/R/ti/p/@vixeed"
            target="_blank"
            rel="noopener noreferrer"
            className="recruit-cta-btn recruit-cta-line btn-hover"
          >
            LINEで相談する
          </a>
          <a
            href="mailto:office@vixeed.jp"
            className="recruit-cta-btn recruit-cta-outline btn-hover"
          >
            メールで問い合わせ
          </a>
        </div>
      </section>

      <section className="cta-sec">
        <h2 className="reveal line-anim">一緒に挑戦しませんか？</h2>
        <p className="reveal">まずは気軽にLINEで相談してください</p>
        <a
          href="https://line.me/R/ti/p/@vixeed"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-line reveal btn-hover"
        >
          LINEで応募する
        </a>
      </section>

      <section className="ig-cta sec">
        <p className="ig-cta-text reveal">
          働く雰囲気や日常の様子はInstagramでも発信しています。
        </p>
        <a
          href="https://www.instagram.com/vixeed_co_ltd/"
          target="_blank"
          rel="noopener noreferrer"
          className="ig-cta-btn btn-hover reveal"
        >
          <InstagramIcon />
          Instagramを見る
        </a>
      </section>
    </LegacyPageShell>
  );
}
