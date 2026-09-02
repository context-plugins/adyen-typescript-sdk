import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PanEntryMode = {
  Chip: "chip",
  Cof: "cof",
  Contactless: "contactless",
  Ecommerce: "ecommerce",
  Magstripe: "magstripe",
  Manual: "manual",
  Token: "token",
} as const;
export type PanEntryMode = (typeof PanEntryMode)[keyof typeof PanEntryMode] | (string & {});

export const panEntryModeSchema: EnumSchema<PanEntryMode> = s.enumOf<PanEntryMode>(PanEntryMode);
