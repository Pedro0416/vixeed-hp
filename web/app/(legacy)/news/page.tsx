import { LegacyPageShell } from "@/components/legacy/LegacyPageShell";
import { PageHero } from "@/components/legacy/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お知らせ",
  description: "株式会社Vixeedからのお知らせ一覧。",
};

const newsItems = [
  { date: "2025.10.07", text: "株式会社Vixeed 設立" },
  { date: "2026.5.31", text: "ホームページを公開しました" },
];

export default function NewsPage() {
  return (
    <LegacyPageShell>
      <PageHero title="お知らせ" subtitle="News" />

      <section className="sec">
        {newsItems.map((item) => (
          <div className="news-item reveal" key={item.text}>
            <span className="news-date">{item.date}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </section>
    </LegacyPageShell>
  );
}
