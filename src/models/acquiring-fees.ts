import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Deducts the acquiring fees (the aggregated amount of interchange and scheme fee) from the
 * specified balance account.
 *
 * Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.
 */
export const AcquiringFees = {
  DeductFromLiableAccount: "deductFromLiableAccount",
  DeductFromOneBalanceAccount: "deductFromOneBalanceAccount",
} as const;
export type AcquiringFees = (typeof AcquiringFees)[keyof typeof AcquiringFees] | (string & {});

export const acquiringFeesSchema: EnumSchema<AcquiringFees> = s.enumOf<AcquiringFees>(AcquiringFees);
