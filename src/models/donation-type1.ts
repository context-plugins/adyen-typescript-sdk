import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of donation to collect from the shopper. Possible values:
 *
 * - **roundup**: Round up the transaction amount.
 *
 * - **fixedAmounts**: Choose a fixed amount.
 *
 * - **fixedAmountsRoundup**: Round up, or choose a fixed amount.
 */
export const DonationType1 = {
  Roundup: "roundup",
  FixedAmounts: "fixedAmounts",
  FixedAmountsRoundup: "fixedAmountsRoundup",
} as const;
export type DonationType1 = (typeof DonationType1)[keyof typeof DonationType1] | (string & {});

export const donationType1Schema: EnumSchema<DonationType1> = s.enumOf<DonationType1>(DonationType1);
