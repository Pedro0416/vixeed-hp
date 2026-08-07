"use client";

import { initLegacyEffects } from "@/lib/legacy-effects";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function LegacyEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const cleanup = initLegacyEffects();
    return cleanup;
  }, [pathname]);

  return null;
}
