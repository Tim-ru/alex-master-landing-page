import type { ErrorCodePage } from "@/types/content";
import { boschErrorCodes } from "./bosch";
import { indesitErrorCodes } from "./indesit";
import { lgErrorCodes } from "./lg";
import { samsungErrorCodes } from "./samsung";

export const errorCodes: ErrorCodePage[] = [
  ...boschErrorCodes,
  ...indesitErrorCodes,
  ...lgErrorCodes,
  ...samsungErrorCodes
];
