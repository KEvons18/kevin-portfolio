"use client";

import { useState, useEffect } from "react";

const SECTION_IDS = ["about", "skills", "projects", "experience", "achievements", "contact"];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return activeSection;
}
