import { LegacyEffects } from "@/components/legacy/LegacyEffects";

export default function LegacyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <link rel="stylesheet" href="/css/style.css" />
      <LegacyEffects />
      {children}
    </>
  );
}
