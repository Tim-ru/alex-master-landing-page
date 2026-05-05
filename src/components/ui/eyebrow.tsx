import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
};

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p className={cn("text-xs font-semibold uppercase tracking-widest text-copper-600", className)}>
      {children}
    </p>
  );
}
