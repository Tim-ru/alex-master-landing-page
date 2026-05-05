import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type CardProps = ComponentPropsWithoutRef<"div">;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[20px] border border-[rgba(20,33,27,0.08)] bg-white p-5 shadow-[0_10px_30px_rgba(16,24,20,0.06)]",
        className
      )}
      {...props}
    />
  );
}
