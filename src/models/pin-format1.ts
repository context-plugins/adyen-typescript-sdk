import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Possible values:
 * * **ISO0**
 * * **ISO1**
 * * **ISO2**
 * * **ISO3**
 */
export const PinFormat1 = {
  Iso0: "ISO0",
  Iso1: "ISO1",
  Iso2: "ISO2",
  Iso3: "ISO3",
} as const;
export type PinFormat1 = (typeof PinFormat1)[keyof typeof PinFormat1] | (string & {});

export const pinFormat1Schema: EnumSchema<PinFormat1> = s.enumOf<PinFormat1>(PinFormat1);
