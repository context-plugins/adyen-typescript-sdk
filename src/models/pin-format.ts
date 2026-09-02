import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PinFormat = {
  Iso0: "ISO0",
  Iso1: "ISO1",
  Iso2: "ISO2",
  Iso3: "ISO3",
} as const;
export type PinFormat = (typeof PinFormat)[keyof typeof PinFormat] | (string & {});

export const pinFormatSchema: EnumSchema<PinFormat> = s.enumOf<PinFormat>(PinFormat);
