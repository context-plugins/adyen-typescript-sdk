import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Value2 = {
  Barcode: "barcode",
  Chip: "chip",
  Cof: "cof",
  Contactless: "contactless",
  Magstripe: "magstripe",
  Manual: "manual",
  Ocr: "ocr",
  Server: "server",
  Unknown: "unknown",
} as const;
export type Value2 = (typeof Value2)[keyof typeof Value2] | (string & {});

export const value2Schema: EnumSchema<Value2> = s.enumOf<Value2>(Value2);
