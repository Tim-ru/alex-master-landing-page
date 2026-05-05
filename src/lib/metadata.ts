import type { Metadata } from "next";

export function canonical(path: string): Pick<Metadata, "alternates"> {
  return { alternates: { canonical: path } };
}
