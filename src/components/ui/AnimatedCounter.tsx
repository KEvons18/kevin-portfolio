"use client";

import { useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  suffix?: string;
  label: string;
}

export default function AnimatedCounter({ from = 0, to, suffix = "", label }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const spring = useSpring(from, { stiffness: 50, damping: 20 });
  const display = useTransform(spring, (v) => `${Math.round(v)}${suffix}`);

  if (isInView) {
    spring.set(to);
  }

  return (
    <div ref={ref} className="text-center">
      <motion.span className="text-4xl sm:text-5xl font-bold text-burgundy block">
        {display}
      </motion.span>
      <span className="text-muted text-sm mt-2 block">{label}</span>
    </div>
  );
}
