import { SiteFooter } from "@/components/SiteFooter";
import { LegacyHeader } from "@/components/legacy/LegacyHeader";
import { LegacyMobileCta } from "@/components/legacy/LegacyMobileCta";
import type { NavId } from "@/lib/nav";

type LegacyPageShellProps = {
  active?: NavId;
  hero?: boolean;
  children: React.ReactNode;
};

export function LegacyPageShell({
  active,
  hero = false,
  children,
}: LegacyPageShellProps) {
  return (
    <>
      <LegacyHeader active={active} hero={hero} />
      {children}
      <SiteFooter />
      <LegacyMobileCta />
    </>
  );
}
