"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { experienceData, educationData } from "@/config/social";

const timeline = [
  {
    type: "education",
    title: educationData.degree,
    organization: educationData.institution,
    period: educationData.period,
    items: educationData.coursework.map((c) => `Coursework: ${c}`),
  },
  ...experienceData.map((exp) => ({
    type: "work" as const,
    title: exp.role,
    organization: exp.company,
    period: exp.period,
    items: exp.highlights,
  })),
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-dark text-white">
      <div className="max-w-content">
        <SectionTitle
          label="Experience"
          title="My Journey"
          subtitle="Education and professional experience shaping my career."
        />

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-[7px] sm:left-[11px] top-0 bottom-0 w-px bg-fog-dark/30" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <TimelineCard key={`${item.title}-${index}`} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  item,
  index,
}: {
  item: { type: string; title: string; organization: string; period: string; items: string[] };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-10 sm:pl-14"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
        className={`absolute left-0 top-1 w-[15px] h-[15px] rounded-full border-2 shadow ${
          item.type === "education"
            ? "bg-gold border-dark"
            : "bg-burgundy border-dark"
        }`}
      />

      <div className="p-6 sm:p-8 rounded-2xl bg-dark-secondary/80 border border-white/5 shadow-sm hover:shadow-lg hover:border-white/10 transition-all">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="text-xl font-bold text-white">{item.title}</h3>
            <p className={item.type === "education" ? "text-gold font-medium" : "text-burgundy font-medium"}>
              {item.organization}
            </p>
          </div>
          <span className={`px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap ${
            item.type === "education"
              ? "bg-gold/10 text-gold border border-gold/20"
              : "bg-burgundy/10 text-burgundy border border-burgundy/20"
          }`}>
            {item.period}
          </span>
        </div>

        <ul className="space-y-3">
          {item.items.map((detail, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              className="flex gap-3 text-fog-dark text-sm leading-relaxed"
            >
              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                item.type === "education" ? "bg-gold" : "bg-gold"
              }`} />
              {detail}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
