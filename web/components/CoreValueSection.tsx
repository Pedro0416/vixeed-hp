"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Flag,
  Handshake,
  HeartHandshake,
  Users,
  Waypoints,
} from "lucide-react";
import { useMemo } from "react";

const values = [
  {
    num: "01",
    ja: "挑戦を楽しむ",
    en: "Enjoy Challenge",
    desc: "変化を機会と捉え、前向きに挑戦し続ける。楽しむ姿勢が、成果と成長を生み出します。",
    icon: Flag,
  },
  {
    num: "02",
    ja: "感謝",
    en: "Gratitude",
    desc: "関わるすべての人への敬意と感謝を忘れず、誠実な関係を積み重ねます。",
    icon: HeartHandshake,
  },
  {
    num: "03",
    ja: "与える精神",
    en: "Give First",
    desc: "自らが先に価値を届ける。見返りを前提とせず、貢献から信頼を築きます。",
    icon: Handshake,
  },
  {
    num: "04",
    ja: "relationship＆teamwork",
    en: "Relationship & Teamwork",
    desc: "個の力をチームの力へ。対話と協力を通じて、より大きな成果を実現します。",
    icon: Users,
  },
  {
    num: "05",
    ja: "信念を貫く",
    en: "Conviction",
    desc: "正しいと信じた道を、責任を持って貫く。一貫した姿勢が信頼の土台になります。",
    icon: Waypoints,
  },
] as const;

const ease = [0.4, 0.4, 0, 1] as const;
const viewport = { once: true, amount: 0.18 };

export function CoreValueSection() {
  const reduceMotion = useReducedMotion();

  const headerVariants = useMemo(
    () =>
      reduceMotion
        ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
        : {
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease },
            },
          },
    [reduceMotion],
  );

  const listVariants = useMemo(
    () =>
      reduceMotion
        ? { hidden: {}, visible: {} }
        : {
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12, delayChildren: 0.18 },
            },
          },
    [reduceMotion],
  );

  const rowVariants = useMemo(
    () =>
      reduceMotion
        ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
        : {
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease },
            },
          },
    [reduceMotion],
  );

  const lineVariants = useMemo(
    () =>
      reduceMotion
        ? { hidden: { scaleY: 1 }, visible: { scaleY: 1 } }
        : {
            hidden: { scaleY: 0 },
            visible: {
              scaleY: 1,
              transition: { duration: 1.0, ease, delay: 0.25 },
            },
          },
    [reduceMotion],
  );

  return (
    <section
      className="relative overflow-hidden border-y border-[#e8e8ec] bg-[#f7f7f8] px-4 py-16 md:px-8 md:py-28"
      aria-labelledby="core-value-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c9a227]/50 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[900px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={headerVariants}
          className="text-center"
        >
          <p className="font-[family-name:var(--font-inter)] text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[#9a7b2e]">
            Core Value
          </p>
          <h2
            id="core-value-heading"
            className="font-[family-name:var(--font-serif)] mt-4 text-[clamp(1.55rem,3vw,2rem)] font-bold tracking-[-0.01em] text-[#0a0a0a]"
          >
            VixeedのCore Value
          </h2>
          <motion.span
            aria-hidden
            initial={reduceMotion ? false : { scaleX: 0 }}
            whileInView={reduceMotion ? undefined : { scaleX: 1 }}
            viewport={viewport}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="mx-auto mt-6 block h-px w-14 origin-center bg-[#c9a227]"
          />
          <p className="mx-auto mt-6 max-w-lg text-[0.95rem] leading-[1.95] text-[#555]">
            事業と組織の判断基準となる、5つの行動指針です。
          </p>
        </motion.div>

        <div className="relative mt-14 md:mt-16">
          <motion.div
            aria-hidden
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={lineVariants}
            className="absolute bottom-6 left-[1.35rem] top-6 hidden w-px origin-top bg-[#e5e5e8] sm:left-[5.35rem] sm:block md:left-[5.6rem]"
          />

          <motion.ol
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={listVariants}
            className="space-y-3 md:space-y-4"
          >
            {values.map(({ num, ja, en, desc, icon: Icon }) => (
              <motion.li key={num} variants={rowVariants}>
                <article className="group relative grid grid-cols-[auto_1fr] gap-4 overflow-hidden rounded-xl border border-[#e8e8ec] bg-white px-4 py-5 shadow-[0_1px_0_rgba(0,0,0,0.02)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-[#c9a227]/45 hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] sm:grid-cols-[3.25rem_3.25rem_1fr] sm:gap-5 sm:px-5 sm:py-6 md:gap-6">
                  <span
                    aria-hidden
                    className="absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-[#c9a227] transition-transform duration-300 ease-out group-hover:scale-y-100"
                  />

                  <div className="relative z-[1] flex flex-col items-start pt-0.5">
                    <span className="font-[family-name:var(--font-inter)] text-[0.72rem] font-semibold tracking-[0.14em] text-[#9a7b2e] transition-transform duration-300 group-hover:translate-x-0.5">
                      {num}
                    </span>
                    <span className="mt-3 hidden h-2 w-2 rounded-full border border-[#c9a227]/70 bg-white sm:block" />
                  </div>

                  <div
                    className="relative z-[1] hidden h-12 w-12 items-center justify-center border border-[#e8e8ec] bg-[#fafafa] text-[#0a0a0a] transition-[background-color,border-color,color,transform] duration-300 group-hover:scale-105 group-hover:border-[#c9a227]/55 group-hover:bg-[#1c222b] group-hover:text-[#e5c158] sm:flex"
                    aria-hidden
                  >
                    <Icon
                      className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                      strokeWidth={1.6}
                    />
                  </div>

                  <div className="relative z-[1] min-w-0">
                    <div className="flex items-start gap-3">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#e8e8ec] bg-[#fafafa] text-[#0a0a0a] transition-colors duration-300 group-hover:border-[#c9a227]/55 group-hover:bg-[#1c222b] group-hover:text-[#e5c158] sm:hidden"
                        aria-hidden
                      >
                        <Icon className="h-4 w-4" strokeWidth={1.6} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-[family-name:var(--font-noto)] text-[clamp(1.05rem,2vw,1.22rem)] font-bold tracking-[-0.01em] text-[#0a0a0a] transition-colors duration-300 group-hover:text-[#1c222b]">
                          {ja}
                        </h3>
                        <p className="font-[family-name:var(--font-inter)] mt-1.5 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[#999] transition-colors duration-300 group-hover:text-[#9a7b2e]">
                          {en}
                        </p>
                      </div>
                    </div>
                    <p className="mt-3.5 text-[0.92rem] leading-[1.95] text-[#555] transition-colors duration-300 group-hover:text-[#333] md:max-w-[36rem]">
                      {desc}
                    </p>
                  </div>
                </article>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
