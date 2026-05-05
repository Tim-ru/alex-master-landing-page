import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "secondary";
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-lg px-6 text-sm font-medium transition",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950",
        variant === "primary" && "bg-zinc-950 text-white shadow-sm hover:bg-zinc-800 active:scale-95",
        variant === "secondary" && "border border-zinc-200 bg-white text-zinc-700 shadow-sm hover:border-zinc-300 hover:shadow-md hover:text-zinc-950 active:scale-95",
        className
      )}
      {...props}
    />
  );
}
