import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The region of operation. */
export const Region1 = {
  Au: "AU",
  Ch: "CH",
  Eu: "EU",
  Na: "NA",
} as const;
export type Region1 = (typeof Region1)[keyof typeof Region1] | (string & {});

export const region1Schema: EnumSchema<Region1> = s.enumOf<Region1>(Region1);
