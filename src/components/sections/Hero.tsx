"use client";

import { motion } from "framer-motion";
import { useTypewriter } from "@/hooks/useTypewriter";
import Button from "@/components/ui/Button";
import FloatingParticles from "@/components/ui/FloatingParticles";
import { siteConfig } from "@/config/social";

export default function Hero() {
  const typedText = useTypewriter({
    words:     ["Data Analyst", "BI Specialist", "Python Developer", "AI Enthusiast"],
    typeSpeed: 90,
    deleteSpeed: 60,
    delayBetweenWords: 2000,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-fog-light to-white"
    >
      <FloatingParticles />

      <div className="absolute top-1/3 right-0 w-96 h-96 bg-burgundy/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-content section-padding text-center"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 text-xs font-medium tracking-widest uppercase text-burgundy bg-burgundy/10 rounded-full border border-burgundy/20">
            Computer Science &amp; AI Student at Cairo University
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-8xl font-bold text-dark leading-tight mb-6"
        >
          {siteConfig.name.split(" ")[0]}{" "}
          <span className="text-burgundy">{siteConfig.name.split(" ").slice(1).join(" ")}</span>
        </motion.h1>

        <motion.div variants={itemVariants} className="text-xl sm:text-2xl lg:text-3xl text-muted mb-6 h-10">
          <span>{typedText}</span>
          <span className="inline-block w-0.5 h-8 bg-burgundy ml-1 animate-pulse" />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {siteConfig.location}. Certified Microsoft Power BI Specialist. Transforming raw data into
          actionable insights through analytics, visualization, and full-stack development.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
          <Button href="#projects" size="lg">
            View My Work
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Button>
          <Button href="#contact" variant="outline" size="lg">
            Get In Touch
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.1, color: "#6D071A" }}
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-burgundy transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, color: "#6D071A" }}
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-burgundy transition-colors"
            aria-label="GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, color: "#6D071A" }}
            href={`mailto:${siteConfig.email}`}
            className="text-muted hover:text-burgundy transition-colors"
            aria-label="Email"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
