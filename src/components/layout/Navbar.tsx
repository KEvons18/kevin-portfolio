"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/social";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useActiveSection } from "@/hooks/useActiveSection";

const navItemVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

const mobileListVariants = {
  initial: { opacity: 0, height: 0 },
  animate: {
    opacity: 1,
    height: "auto",
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { staggerChildren: 0.04, staggerDirection: -1 },
  },
};

export default function Navbar() {
  const { scrolled, progress } = useScrollProgress();
  const activeSection = useActiveSection();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const indicatorLink = hoveredLink || activeSection;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.div
        animate={{ opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-white/85 backdrop-blur-xl border-b border-fog/30 shadow-sm"
      />

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-burgundy origin-left z-10"
        style={{ scaleX: progress }}
      />

      <div className="relative max-w-content mx-auto px-6 sm:px-12 lg:px-24">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xl font-bold text-dark"
          >
            <span className="text-burgundy">K</span>
            <span className="hover:text-burgundy transition-colors">RG</span>
          </motion.a>

          <LayoutGroup>
            <div className="hidden md:flex items-center gap-8">
              {siteConfig.navLinks.map((link) => {
                const sectionId = link.href.slice(1);
                const isActive = sectionId === indicatorLink;

                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    whileHover={{ y: -2 }}
                    onHoverStart={() => setHoveredLink(sectionId)}
                    onHoverEnd={() => setHoveredLink(null)}
                    className={cn(
                      "relative text-sm font-medium transition-colors duration-200",
                      isActive ? "text-burgundy" : "text-muted hover:text-burgundy"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-burgundy rounded-full"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </motion.a>
                );
              })}
            </div>
          </LayoutGroup>

          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.9 }}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-burgundy/5 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            variants={mobileListVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative md:hidden bg-white/95 backdrop-blur-xl border-t border-fog/30 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-2">
              {siteConfig.navLinks.map((link) => {
                const sectionId = link.href.slice(1);
                const isActive = sectionId === activeSection;

                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    variants={navItemVariants}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block py-2 font-medium transition-colors",
                      isActive ? "text-burgundy" : "text-muted hover:text-burgundy"
                    )}
                  >
                    {link.label}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
