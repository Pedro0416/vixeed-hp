"use client";

import { navItems, type NavId } from "@/lib/nav";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type SiteHeaderProps = {
  active?: NavId;
};

export function SiteHeader({ active }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  function closeMenu() {
    setOpen(false);
    document.body.style.overflow = "";
  }

  function toggleMenu() {
    setOpen((o) => {
      const next = !o;
      document.body.style.overflow = next ? "hidden" : "";
      return next;
    });
  }

  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-[#e8e8ec] bg-white/90 backdrop-blur-[16px]">
      <div className="flex items-center justify-between px-6 py-2.5 md:px-10">
        <Link href="/" className="inline-flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Vixeed"
            width={40}
            height={40}
            className="h-9 w-auto"
            unoptimized
          />
          <span className="font-[family-name:var(--font-inter)] text-[1.35rem] font-semibold tracking-tight text-[#0a0a0a]">
            Vixeed
          </span>
        </Link>

        <nav
          className={`fixed right-0 top-0 z-[200] flex h-screen w-[80%] max-w-[280px] flex-col gap-1 border-l border-[#e8e8ec] bg-white px-6 pb-8 pt-20 shadow-[-10px_0_30px_rgba(0,0,0,0.08)] transition-[transform] duration-300 md:static md:h-auto md:w-auto md:max-w-none md:flex-row md:gap-1 md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
            open ? "translate-x-0" : "translate-x-full md:translate-x-0"
          }`}
          id="site-nav"
        >
          {navItems.map(({ id, href, labelJa, labelEn }) => (
            <Link
              key={id}
              href={href}
              onClick={closeMenu}
              className={`flex w-full flex-col items-center rounded-md border border-transparent px-4 py-2 text-center text-[0.8rem] font-medium leading-snug tracking-wide transition-colors hover:text-[#0a0a0a] md:w-auto md:py-[0.35rem] ${
                active === id ? "text-[#0a0a0a]" : "text-[#555]"
              }`}
            >
              {labelJa}
              <span className="font-[family-name:var(--font-inter)] mt-0.5 block text-[0.55rem] font-medium uppercase tracking-[0.12em] text-[#999]">
                {labelEn}
              </span>
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="relative z-[201] flex flex-col gap-[5px] p-1 md:hidden"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={toggleMenu}
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        >
          <span
            className={`block h-0.5 w-[22px] bg-[#0a0a0a] transition-transform ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-[22px] bg-[#0a0a0a] transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-[22px] bg-[#0a0a0a] transition-transform ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>
      {open ? (
        <button
          type="button"
          className="fixed inset-0 z-[150] bg-black/25 md:hidden"
          aria-label="オーバーレイを閉じる"
          onClick={closeMenu}
        />
      ) : null}
    </header>
  );
}
