"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { achievementsData, languagesData } from "@/config/social";

export default function Achievements() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="section-padding bg-white">
      <div className="max-w-content">
        <SectionTitle
          label="Achievements"
          title="Certifications & Honors"
          subtitle="Credentials that validate my expertise."
        />

        <div ref={ref} className="grid sm:grid-cols-3 gap-8 mb-16">
          <AnimatedCounter to={2} suffix="+" label="Certifications" />
          <AnimatedCounter to={4} suffix="+" label="Projects Completed" />
          <AnimatedCounter to={2} suffix="" label="Languages Spoken" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-fog/50 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-dark text-lg">{achievement.title}</h3>
                  <p className="text-burgundy text-sm font-medium mb-2">
                    {achievement.organization} &middot; {achievement.period}
                  </p>
                  <p className="text-muted text-sm leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-xl mx-auto"
        >
          <h3 className="text-xl font-bold text-dark text-center mb-6">Languages</h3>
          <div className="grid grid-cols-2 gap-4">
            {languagesData.map((lang) => (
              <div
                key={lang.language}
                className="p-5 rounded-xl bg-surface border border-fog/50 text-center"
              >
                <p className="font-semibold text-dark">{lang.language}</p>
                <p className="text-sm text-muted mt-1">{lang.level}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
