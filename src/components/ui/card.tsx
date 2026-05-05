import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type CardProps = ComponentPropsWithoutRef<"div">;

export function Card({ className, ...props }: CardProps) {
  return (
    <div className={cn("rounded-md border border-zinc-200 bg-white p-5", className)} {...props} />
  );
}
