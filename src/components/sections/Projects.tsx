"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import { projectsData, siteConfig } from "@/config/social";

function ProjectCard({ project, index }: { project: typeof projectsData[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group"
    >
      <div
        className="relative p-6 sm:p-8 rounded-2xl bg-white border border-fog/50 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          e.currentTarget.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)";
        }}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-burgundy/10 flex items-center justify-center">
            <svg className="w-6 h-6 text-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <span className="text-xs text-muted font-medium">{project.year}</span>
        </div>

        <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-burgundy transition-colors">
          {project.title}
        </h3>

        <p className="text-muted text-sm leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-burgundy hover:text-burgundy-light transition-colors group/github"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          View on GitHub
          {project.isPlaceholder && (
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-fog/50 text-muted group-hover/github:text-burgundy transition-colors">
              Template
            </span>
          )}
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="max-w-content">
        <SectionTitle
          label="Projects"
          title="What I've Built"
          subtitle="Full-stack applications, desktop tools, and image processing systems."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted hover:text-burgundy transition-colors font-medium"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            See all projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
