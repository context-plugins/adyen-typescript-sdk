import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The text shown on the payment terminal, asking the shopper for a donation. */
export const DisplayTextField1 = {
  CauseName: "causeName",
  NonprofitName: "nonprofitName",
} as const;
export type DisplayTextField1 = (typeof DisplayTextField1)[keyof typeof DisplayTextField1] | (string & {});

export const displayTextField1Schema: EnumSchema<DisplayTextField1> =
  s.enumOf<DisplayTextField1>(DisplayTextField1);
