import type { Metadata } from "next";
import { AboutPageClient } from "@/components/AboutPageClient";

export const metadata: Metadata = {
  title: "私たちについて",
  description:
    "株式会社VixeedのCore Value。挑戦を楽しむ、感謝、与える精神、relationship＆teamwork、信念を貫く。",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
