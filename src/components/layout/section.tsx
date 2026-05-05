import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  children: ReactNode;
  containerClassName?: string;
};

export function Section({ children, className, containerClassName, ...props }: SectionProps) {
  return (
    <section className={cn("py-12 sm:py-16", className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
