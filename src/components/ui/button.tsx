import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "secondary";
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-[14px] px-6 text-sm font-semibold transition",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper-600",
        variant === "primary" &&
          "bg-copper-600 text-white shadow-sm hover:bg-copper-700 active:scale-[0.98]",
        variant === "secondary" &&
          "border border-[rgba(20,33,27,0.15)] bg-white text-forest-950 shadow-sm hover:bg-linen-50 hover:border-[rgba(20,33,27,0.25)] active:scale-[0.98]",
        className
      )}
      {...props}
    />
  );
}
