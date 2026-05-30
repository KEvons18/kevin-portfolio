"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { skillsData } from "@/config/social";

const categories = Object.keys(skillsData) as Array<keyof typeof skillsData>;

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof skillsData>(categories[0]);

  return (
    <section id="skills" className="section-padding bg-surface">
      <div className="max-w-content">
        <SectionTitle
          label="Skills"
          title="Technical Arsenal"
          subtitle="Tools, languages, and frameworks I use to deliver results."
        />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-burgundy text-white shadow-md"
                  : "bg-white text-muted border border-fog/50 hover:border-burgundy/30 hover:text-burgundy"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {skillsData[activeCategory].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative p-5 rounded-xl bg-white border border-fog/50 shadow-sm hover:shadow-lg hover:border-burgundy/20 transition-all duration-300 cursor-default"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-burgundy/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 text-sm font-medium text-dark group-hover:text-burgundy transition-colors">
                  {skill}
                </span>
                <div className="mt-3 h-1.5 rounded-full bg-fog/50 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${60 + (skill.length * 2) % 35}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.05 }}
                    className="h-full rounded-full bg-gradient-to-r from-burgundy to-burgundy-light"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
