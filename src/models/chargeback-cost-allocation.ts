import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Deducts the chargeback costs from the specified balance account.
 *
 * Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**
 */
export const ChargebackCostAllocation = {
  DeductFromLiableAccount: "deductFromLiableAccount",
  DeductFromOneBalanceAccount: "deductFromOneBalanceAccount",
} as const;
export type ChargebackCostAllocation =
  | (typeof ChargebackCostAllocation)[keyof typeof ChargebackCostAllocation]
  | (string & {});

export const chargebackCostAllocationSchema: EnumSchema<ChargebackCostAllocation> =
  s.enumOf<ChargebackCostAllocation>(ChargebackCostAllocation);
