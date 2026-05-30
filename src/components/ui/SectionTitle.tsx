"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ label, title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16 sm:mb-20"
    >
      <span className="inline-block text-burgundy font-medium text-sm tracking-widest uppercase mb-3">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark">{title}</h2>
      {subtitle && <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">{subtitle}</p>}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 60 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="h-1 bg-burgundy mx-auto mt-6 rounded-full"
      />
    </motion.div>
  );
}
