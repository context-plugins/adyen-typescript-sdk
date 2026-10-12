import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The region of operation. For example, **NA**, **EU**, **CH**, **AU**. */
export const Region = {
  Na: "NA",
  Eu: "EU",
  Ch: "CH",
  Au: "AU",
} as const;
export type Region = (typeof Region)[keyof typeof Region] | (string & {});

export const regionSchema: EnumSchema<Region> = s.enumOf<Region>(Region);
