import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RefundCostAllocation = {
  DeductFromLiableAccount: "deductFromLiableAccount",
  DeductFromOneBalanceAccount: "deductFromOneBalanceAccount",
} as const;
export type RefundCostAllocation =
  | (typeof RefundCostAllocation)[keyof typeof RefundCostAllocation]
  | (string & {});

export const refundCostAllocationSchema: EnumSchema<RefundCostAllocation> =
  s.enumOf<RefundCostAllocation>(RefundCostAllocation);
