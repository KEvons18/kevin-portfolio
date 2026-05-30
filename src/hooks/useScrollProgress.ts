"use client";

import { useState, useEffect } from "react";

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(scrollPercent);
      setScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { progress, scrolled };
}
