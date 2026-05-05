import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type TextareaProps = ComponentPropsWithoutRef<"textarea">;

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "block w-full rounded-md border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-950",
        "placeholder:text-zinc-400",
        "focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-200",
        "disabled:cursor-not-allowed disabled:opacity-50 resize-none",
        className
      )}
      {...props}
    />
  );
}
