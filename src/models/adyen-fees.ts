import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Deducts the fees due to Adyen (markup or commission) from the specified balance account.
 *
 * Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.
 */
export const AdyenFees = {
  DeductFromLiableAccount: "deductFromLiableAccount",
  DeductFromOneBalanceAccount: "deductFromOneBalanceAccount",
} as const;
export type AdyenFees = (typeof AdyenFees)[keyof typeof AdyenFees] | (string & {});

export const adyenFeesSchema: EnumSchema<AdyenFees> = s.enumOf<AdyenFees>(AdyenFees);
