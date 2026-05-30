"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      className={cn(
        "rounded-2xl bg-white border border-fog/50 shadow-sm hover:shadow-xl transition-shadow duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
