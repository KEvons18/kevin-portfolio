"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
  download?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  target,
  rel,
  download,
  type,
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-burgundy/50";

  const variants = {
    primary: "bg-burgundy text-white hover:bg-burgundy-light shadow-md hover:shadow-lg",
    outline: "border-2 border-burgundy text-burgundy hover:bg-burgundy hover:text-white",
    ghost: "text-burgundy hover:bg-burgundy/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = cn(base, variants[variant], sizes[size], className, disabled && "opacity-50 cursor-not-allowed pointer-events-none");

  const MotionTag = href ? motion.a : motion.button;

  const extraProps: Record<string, unknown> = {};
  if (href) {
    extraProps.href = href;
    extraProps.target = target;
    extraProps.rel = rel;
  }
  if (type) {
    extraProps.type = type;
  }
  if (!href) {
    extraProps.disabled = disabled;
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (disabled) return;
    if (onClick) onClick();
    if (download && href) {
      e.preventDefault();
      const a = document.createElement("a");
      a.href = href;
      a.download = download;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <MotionTag
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      className={classes}
      onClick={handleClick}
      {...extraProps}
    >
      {children}
    </MotionTag>
  );
}
