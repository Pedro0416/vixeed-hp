import type { Metadata } from "next";
import { DM_Sans, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-noto",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const notoSerifJp = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "株式会社 Vixeed",
    template: "%s | Vixeed",
  },
  description: "信念の種を蒔き、社会に価値を芽吹かせる。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${dmSans.variable} ${notoSansJp.variable} ${notoSerifJp.variable} h-full antialiased`}
    >
      <body className="font-[family-name:var(--font-noto)] min-h-full bg-white text-[#0a0a0a]">
        {children}
      </body>
    </html>
  );
}
