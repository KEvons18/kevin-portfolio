import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "gold";
  className?: string;
}

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-burgundy/10 text-burgundy border border-burgundy/20",
    outline: "bg-transparent text-muted border border-fog-dark",
    gold: "bg-gold/10 text-gold border border-gold/20",
  };

  return (
    <span className={cn("inline-block px-3 py-1 rounded-full text-xs font-medium", variants[variant], className)}>
      {children}
    </span>
  );
}
