"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { useRef } from "react";

type GlassTiltCardProps = {
  icon: LucideIcon;
  labelEn: string;
  labelJa: string;
  title: ReactNode;
  children: ReactNode;
  tiltDisabled?: boolean;
};

const springConfig = { stiffness: 400, damping: 35 };

export function GlassTiltCard({
  icon: Icon,
  labelEn,
  labelJa,
  title,
  children,
  tiltDisabled = false,
}: GlassTiltCardProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, springConfig);
  const springY = useSpring(rotateY, springConfig);

  const cardVariants = reduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
        },
      };

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (tiltDisabled || reduceMotion) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(x * 14);
    rotateX.set(-y * 14);
  }

  function handleLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  const surfaceClass =
    "border border-[#e8e8ec] bg-white p-6 shadow-[0_8px_28px_rgba(0,0,0,0.06)] md:p-8";

  return (
    <motion.div
      variants={cardVariants}
      style={{ perspective: 1200 }}
      className="h-full"
    >
      <motion.div
        ref={ref}
        style={{ rotateX: springX, rotateY: springY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={`relative h-full rounded-2xl ${surfaceClass}`}
      >
        <div
          className="mb-4 flex items-center gap-3"
          style={{ transform: "translateZ(24px)" }}
        >
          <span
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#C9A227]/12 text-[#9a7b2e]"
          >
            <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
          </span>
          <div>
            <p
              className="font-[family-name:var(--font-inter)] text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#9a7b2e]"
            >
              {labelEn}
            </p>
            <p
              className="text-xs font-semibold tracking-wider text-[#444]"
            >
              {labelJa}
            </p>
          </div>
        </div>
        <div
          className="font-[family-name:var(--font-noto)] text-lg font-bold leading-snug tracking-wide text-[#0a0a0a] md:text-xl"
          style={{ transform: "translateZ(16px)" }}
        >
          {title}
        </div>
        <div
          className="font-[family-name:var(--font-noto)] mt-4 text-sm leading-[1.9] text-[#555]"
          style={{ transform: "translateZ(8px)" }}
        >
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}
