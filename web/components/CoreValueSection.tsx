"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Heart, ShieldCheck, Sprout, Telescope } from "lucide-react";
import { useMemo } from "react";
import { GlassTiltCard } from "./GlassTiltCard";

const fadeUpMotion = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fadeUpReduced = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

const staggerCards = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.05 },
  },
};

const staggerCardsReduced = {
  hidden: {},
  visible: { transition: { staggerChildren: 0 } },
};

const viewport = { once: true, amount: 0.25 };

export function CoreValueSection() {
  const reduceMotion = useReducedMotion();
  const fadeUp = useMemo(
    () => (reduceMotion ? fadeUpReduced : fadeUpMotion),
    [reduceMotion],
  );
  const staggerParent = useMemo(
    () => (reduceMotion ? staggerCardsReduced : staggerCards),
    [reduceMotion],
  );
  return (
    <section
      className="relative overflow-hidden bg-[#f6f7f9] px-4 py-16 md:px-8 md:py-24"
      aria-labelledby="core-value-heading"
    >
      <div
        className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="text-center"
        >
          <p className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.35em] text-[#9a7b2e]">
            Core Value
          </p>
          <h2
            id="core-value-heading"
            className="font-[family-name:var(--font-noto)] mt-3 text-lg font-bold tracking-[0.12em] text-[#0a0a0a] md:text-xl"
          >
            VixeedのCore Value
          </h2>
        </motion.div>

        {/* 1. 信念 Conviction */}
        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="font-[family-name:var(--font-noto)] relative mx-auto mt-12 max-w-3xl rounded-2xl border border-[#e8e8ec] bg-white p-8 shadow-[0_8px_32px_rgba(0,0,0,0.06)] md:mt-16 md:p-12"
        >
          <div className="mb-6 flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6">
            <span
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#C9A227]/12 text-[#9a7b2e]"
              aria-hidden
            >
              <ShieldCheck className="h-7 w-7" strokeWidth={1.5} />
            </span>
            <div className="text-center sm:text-left">
              <h3 className="font-[family-name:var(--font-noto)] text-xl font-bold tracking-wide text-[#0a0a0a] md:text-2xl">
                信念{" "}
                <span className="font-[family-name:var(--font-inter)] font-semibold lowercase text-[#9a7b2e]">
                  conviction
                </span>
              </h3>
            </div>
          </div>

          <p className="text-center font-[family-name:var(--font-noto)] text-[clamp(1.75rem,6vw,3rem)] font-black leading-tight tracking-tight text-[#b28a1d] sm:text-[clamp(2rem,5vw,3.25rem)]">
            挑戦は、楽しい。
          </p>

          <p className="font-[family-name:var(--font-noto)] mt-8 text-sm leading-[2.05] text-[#444] md:text-[0.95rem]">
            信じた道を誠実に歩み続ける。自らの信念に基づき選択し、責任を持って行動し続けることが、持続的な成長と価値創出につながると考えています。私たちは、一つひとつの挑戦に真摯に向き合い、社会に対して誠実であり続けます。
          </p>
        </motion.article>

        {/* 2. 未来図 / 理念 / 使命 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerParent}
          className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3 md:gap-5"
        >
          <GlassTiltCard
            tiltDisabled={!!reduceMotion}
            icon={Telescope}
            labelEn="Vision"
            labelJa="未来図"
            title={
              <>
                信念ある挑戦が当たり前の社会に。
                <br />
                挑戦が尊重される社会の実現へ…
              </>
            }
          >
            <p>
              挑戦が尊重される社会の実現へ。挑戦する人が正当に評価される環境を創出し、個々の可能性が最大限発揮される社会を目指します。その実現に向けて、事業を通じた価値提供を継続してまいります。
            </p>
          </GlassTiltCard>

          <GlassTiltCard
            tiltDisabled={!!reduceMotion}
            icon={Heart}
            labelEn="Philosophy"
            labelJa="理念"
            title={
              <>
                愛、感謝、挑戦。
                <br />
                人を尊び、感謝を忘れず、挑戦し続ける…
              </>
            }
          >
            <p>
              すべての事業活動の根底には「人」があります。関わるすべての方々へ、愛と感謝を大切にしながら、挑戦を通じて社会に新たな価値を創出していきます。
            </p>
          </GlassTiltCard>

          <GlassTiltCard
            tiltDisabled={!!reduceMotion}
            icon={Sprout}
            labelEn="Mission"
            labelJa="使命"
            title={
              <>
                信念の種を蒔き、
                <br />
                社会に価値を芽吹かせる
              </>
            }
          >
            <p>一人ひとりの可能性を育て、未来につながる価値を社会に広げていく。</p>
          </GlassTiltCard>
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="font-[family-name:var(--font-noto)] mx-auto mt-14 max-w-2xl text-center text-sm leading-[2] text-[#555] md:mt-16"
        >
          「信念」と「挑戦」を軸に、若者を支え、社会に価値を生み出す。
          <br className="hidden sm:inline" />
          日本の若者に、勇気と希望を届ける。
        </motion.p>
      </div>
    </section>
  );
}
