"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { educationData } from "@/config/social";

const strengths = [
  { title: "Analytical Thinking", description: "Transforming complex datasets into clear, actionable business insights." },
  { title: "Technical Versatility", description: "Full-stack development from C++ desktop apps to Django web platforms." },
  { title: "Data Storytelling", description: "Bridging the gap between raw data and strategic decision-making." },
  { title: "Continuous Learning", description: "Pursuing cutting-edge AI coursework alongside professional certifications." },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-content">
        <SectionTitle
          label="About"
          title="Beyond the Resume"
          subtitle="Computer Science & AI student at Cairo University with a passion for turning data into decisions."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-dark text-lg leading-relaxed mb-6">
                I&apos;m a Computer Science and Artificial Intelligence student at Cairo University with
                hands-on experience in data analytics, business intelligence, and full-stack software
                development. I&apos;m a Certified Microsoft Power BI Specialist with a proven ability to build
                interactive dashboards, write complex DAX formulas, and transform raw datasets into
                actionable insights.
              </p>
              <p className="text-muted leading-relaxed">
                Proficient in Python, SQL, Power BI, and Tableau, I thrive at the intersection of
                data engineering and software development. Whether I&apos;m building a Django web
                application or analyzing HR metrics, my goal is the same: deliver solutions that are
                both technically sound and business-relevant.
              </p>
            </div>

            <div className="mt-10 p-6 rounded-2xl bg-surface border border-fog/50">
              <h3 className="font-semibold text-dark mb-2">Education</h3>
              <p className="text-burgundy font-medium">{educationData.degree}</p>
              <p className="text-muted text-sm">
                {educationData.institution} &middot; {educationData.period}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {educationData.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1 bg-burgundy/5 text-burgundy text-xs rounded-full border border-burgundy/10"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="p-6 rounded-2xl bg-white border border-fog/50 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-burgundy/10 flex items-center justify-center mb-4">
                  <div className="w-4 h-4 rounded-full bg-burgundy" />
                </div>
                <h4 className="font-semibold text-dark mb-2">{strength.title}</h4>
                <p className="text-muted text-sm leading-relaxed">{strength.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
