import type { NavId } from "@/lib/nav";
import { navItems } from "@/lib/nav";
import Image from "next/image";
import Link from "next/link";

type LegacyHeaderProps = {
  active?: NavId;
  hero?: boolean;
};

export function LegacyHeader({ active, hero = false }: LegacyHeaderProps) {
  return (
    <header className={`header${hero ? " header--hero" : ""}`}>
      <div className="header-inner">
        <Link href="/" className="logo">
          <Image
            src="/images/logo.png"
            alt="Vixeed"
            width={40}
            height={40}
            unoptimized
          />
          <span className="logo-text">Vixeed</span>
        </Link>
        <nav className="nav">
          {navItems.map(({ id, href, labelJa, labelEn }) => (
            <Link
              key={id}
              href={href}
              className={active === id ? "is-active" : undefined}
            >
              {labelJa}
              <span>{labelEn}</span>
            </Link>
          ))}
        </nav>
        <div className="hamburger">
          <span />
          <span />
          <span />
        </div>
      </div>
    </header>
  );
}
