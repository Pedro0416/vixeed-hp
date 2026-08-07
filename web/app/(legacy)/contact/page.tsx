import { LegacyPageShell } from "@/components/legacy/LegacyPageShell";
import { PageHero } from "@/components/legacy/PageHero";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "株式会社Vixeedへのお問い合わせ。資料請求、ご相談、採用について。",
};

export default function ContactPage() {
  return (
    <LegacyPageShell active="contact">
      <PageHero title="お問い合わせ" subtitle="Contact" />

      <section className="sec">
        <p
          className="reveal"
          style={{
            textAlign: "center",
            color: "var(--gray)",
            marginBottom: "2.5rem",
          }}
        >
          お気軽にご連絡ください
        </p>

        <form id="contact-form" className="contact-form reveal" noValidate>
          <div className="contact-form-row">
            <label className="contact-form-label">
              ご用件 <span className="required">*</span>
            </label>
            <div className="contact-form-field contact-form-radios">
              <label className="contact-form-radio">
                <input type="radio" name="purpose" value="資料請求" defaultChecked required />{" "}
                資料請求
              </label>
              <label className="contact-form-radio">
                <input type="radio" name="purpose" value="ご相談" /> ご相談
              </label>
              <label className="contact-form-radio">
                <input type="radio" name="purpose" value="採用について" /> 採用について
              </label>
              <label className="contact-form-radio">
                <input type="radio" name="purpose" value="その他" /> その他
              </label>
            </div>
          </div>
          <div className="contact-form-row">
            <label className="contact-form-label" htmlFor="company">
              法人名
            </label>
            <div className="contact-form-field">
              <input
                type="text"
                id="company"
                name="company"
                className="contact-form-input"
                placeholder="例：株式会社ヴィクシード"
              />
            </div>
          </div>
          <div className="contact-form-row">
            <label className="contact-form-label">
              お名前 <span className="required">*</span>
            </label>
            <div className="contact-form-fields contact-form-two">
              <div className="contact-form-sub">
                <label className="contact-form-sublabel" htmlFor="name">
                  お名前
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="contact-form-input"
                  placeholder="例：山田太郎"
                  required
                />
              </div>
              <div className="contact-form-sub">
                <label className="contact-form-sublabel" htmlFor="furigana">
                  ふりがな
                </label>
                <input
                  type="text"
                  id="furigana"
                  name="furigana"
                  className="contact-form-input"
                  placeholder="例：やまだたろう"
                  required
                />
              </div>
            </div>
          </div>
          <div className="contact-form-row">
            <label className="contact-form-label">
              ご連絡先 <span className="required">*</span>
            </label>
            <div className="contact-form-fields contact-form-two">
              <div className="contact-form-sub">
                <label className="contact-form-sublabel" htmlFor="tel">
                  電話番号
                </label>
                <input
                  type="tel"
                  id="tel"
                  name="tel"
                  className="contact-form-input"
                  placeholder="例：03-1234-5678"
                  required
                />
              </div>
              <div className="contact-form-sub">
                <label className="contact-form-sublabel" htmlFor="email">
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="contact-form-input"
                  placeholder="例：office@vixeed.jp"
                  required
                />
              </div>
            </div>
          </div>
          <div className="contact-form-row">
            <label className="contact-form-label" htmlFor="message">
              お問い合わせ内容 <span className="required">*</span>
            </label>
            <div className="contact-form-field">
              <textarea
                id="message"
                name="message"
                className="contact-form-textarea"
                placeholder="ご質問内容を具体的にご記入ください"
                rows={5}
                required
              />
            </div>
          </div>
          <div className="contact-form-row contact-form-submit-row">
            <span className="contact-form-label" />
            <button type="submit" className="contact-form-submit">
              入力内容を確認する <span className="contact-form-arrow">→</span>
            </button>
          </div>
        </form>

        <div
          className="contact-mail-row reveal"
          style={{
            maxWidth: 560,
            margin: "0 auto 2.5rem",
            padding: "1.5rem",
            background: "var(--light)",
            borderRadius: 8,
            border: "1px solid var(--border)",
          }}
        >
          <h3
            style={{
              fontSize: "0.85rem",
              fontWeight: 600,
              marginBottom: "0.5rem",
              color: "var(--black)",
            }}
          >
            メールでのお問い合わせ
          </h3>
          <p style={{ fontSize: "0.9rem", color: "#666" }}>
            <a
              href="mailto:office@vixeed.jp"
              style={{ color: "var(--black)", textDecoration: "underline" }}
            >
              office@vixeed.jp
            </a>
          </p>
          <p
            style={{
              fontSize: "0.78rem",
              color: "var(--gray)",
              marginTop: "0.5rem",
            }}
          >
            件名に「お問い合わせ」とご記入の上、お送りください。通常2営業日以内にご返信します。
          </p>
        </div>

        <div className="ec-section reveal">
          <div className="ec-cards">
            <a href="mailto:office@vixeed.jp" className="ec-card reveal">
              <div className="ec-card-icon">
                <svg viewBox="0 0 40 40" aria-hidden="true" shapeRendering="geometricPrecision">
                  <rect
                    x="7"
                    y="11"
                    width="26"
                    height="18"
                    rx="2.5"
                    ry="2.5"
                    fill="none"
                    stroke="#111"
                    strokeWidth="2"
                  />
                  <polyline
                    points="8,12 20,22 32,12"
                    fill="none"
                    stroke="#111"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="ec-card-title">メール</h3>
              <p className="ec-card-info">office@vixeed.jp</p>
              <p className="ec-card-sub">24時間受付中 / 2営業日以内に返信</p>
            </a>
            <a
              href="https://line.me/R/ti/p/@vixeed"
              target="_blank"
              rel="noopener noreferrer"
              className="ec-card ec-card--line reveal delay-1"
            >
              <div className="ec-card-icon ec-card-icon--line">
                <Image
                  src="/images/ec-icon-line.png"
                  alt=""
                  width={40}
                  height={40}
                  decoding="async"
                  className="ec-card-icon-img"
                  unoptimized
                />
              </div>
              <h3 className="ec-card-title">LINE</h3>
              <p className="ec-card-info">友だち追加</p>
              <p className="ec-card-sub">チャットで気軽にご相談</p>
              <span className="ec-card-btn ec-card-btn--line">今すぐ追加</span>
            </a>
            <a href="tel:08032791108" className="ec-card reveal delay-2">
              <div className="ec-card-icon ec-card-icon--phone">
                <Image
                  src="/images/ec-icon-phone.png"
                  alt=""
                  width={40}
                  height={40}
                  decoding="async"
                  className="ec-card-icon-img"
                  unoptimized
                />
              </div>
              <h3 className="ec-card-title">電話</h3>
              <p className="ec-card-info">080-3279-1108</p>
              <p className="ec-card-sub">平日 9:00〜18:00 / 担当：大田</p>
              <span className="ec-card-btn">発信する</span>
            </a>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "2.5rem" }} className="reveal">
          <p style={{ color: "var(--gray)", fontSize: "0.82rem" }}>
            〒260-0031 千葉県千葉市中央区新千葉2-7-1-403
          </p>
          <div style={{ maxWidth: 560, margin: "1.5rem auto 0" }}>
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
                overflow: "hidden",
                borderRadius: 12,
                boxShadow: "0 10px 30px rgba(15,23,42,0.18)",
              }}
            >
              <iframe
                src="https://www.google.com/maps?q=%E3%80%92260-0031+%E5%8D%83%E8%91%89%E7%9C%8C%E5%8D%83%E8%91%89%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%E6%96%B0%E5%8D%83%E8%91%892-7-1-403&hl=ja&z=16&output=embed"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vixeed 所在地"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="cta-sec">
        <h2 className="line-anim reveal">LINEで簡単に応募できます</h2>
        <p className="reveal">まずは友だち追加から</p>
        <a
          href="https://line.me/R/ti/p/@vixeed"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-white btn-hover reveal"
        >
          LINEで応募する
        </a>
      </section>
    </LegacyPageShell>
  );
}
