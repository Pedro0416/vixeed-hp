"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.4, 0.4, 0, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  as?: "div" | "section" | "article" | "header" | "p" | "h1" | "h2" | "h3" | "span";
} & Omit<HTMLMotionProps<"div">, "children">;

export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 40,
  once = true,
  as = "div",
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();
  const Comp = motion[as];

  if (reduce) {
    return (
      <Comp className={className} {...rest}>
        {children}
      </Comp>
    );
  }

  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease }}
      {...rest}
    >
      {children}
    </Comp>
  );
}

/** VALTIC風: overflow で隠して下からせり上げるマスク文字 */
export function MaskReveal({
  children,
  className,
  delay = 0,
  duration = 0.75,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  as?: "div" | "h1" | "h2" | "h3" | "p" | "span";
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as];

  if (reduce) {
    return <Comp className={className}>{children}</Comp>;
  }

  return (
    <span className="block overflow-hidden">
      <Comp
        className={`block ${className ?? ""}`}
        initial={{ y: "110%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </Comp>
    </span>
  );
}

/** 横ラインが伸びる */
export function DrawLine({
  className,
  delay = 0.2,
  width = "4rem",
}: {
  className?: string;
  delay?: number;
  width?: string | number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.span
      aria-hidden
      className={`mx-auto block h-px origin-center bg-current ${className ?? ""}`}
      style={{ width }}
      initial={reduce ? false : { scaleX: 0, opacity: 0 }}
      whileInView={reduce ? undefined : { scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.55, delay, ease }}
    />
  );
}

export function StaggerGroup({
  children,
  className,
  delayChildren = 0.12,
  stagger = 0.1,
}: {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  stagger?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: reduce
            ? {}
            : { staggerChildren: stagger, delayChildren },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 36,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={
        reduce
          ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
          : {
              hidden: { opacity: 0, y },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease },
              },
            }
      }
    >
      {children}
    </motion.div>
  );
}
