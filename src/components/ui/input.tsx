import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type InputProps = ComponentPropsWithoutRef<"input">;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "block w-full rounded-[14px] border border-[rgba(20,33,27,0.15)] bg-white px-4 py-3 text-sm text-forest-950",
        "placeholder:text-sage-600",
        "focus:border-copper-600 focus:outline-none focus:ring-2 focus:ring-copper-200",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}
