import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AcquiringFees = {
  DeductFromLiableAccount: "deductFromLiableAccount",
  DeductFromOneBalanceAccount: "deductFromOneBalanceAccount",
} as const;
export type AcquiringFees = (typeof AcquiringFees)[keyof typeof AcquiringFees] | (string & {});

export const acquiringFeesSchema: EnumSchema<AcquiringFees> = s.enumOf<AcquiringFees>(AcquiringFees);
