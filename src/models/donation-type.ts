import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DonationType = {
  Roundup: "roundup",
  FixedAmounts: "fixedAmounts",
  FixedAmountsRoundup: "fixedAmountsRoundup",
} as const;
export type DonationType = (typeof DonationType)[keyof typeof DonationType] | (string & {});

export const donationTypeSchema: EnumSchema<DonationType> = s.enumOf<DonationType>(DonationType);
