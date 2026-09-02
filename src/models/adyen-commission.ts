import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AdyenCommission = {
  DeductFromLiableAccount: "deductFromLiableAccount",
  DeductFromOneBalanceAccount: "deductFromOneBalanceAccount",
} as const;
export type AdyenCommission = (typeof AdyenCommission)[keyof typeof AdyenCommission] | (string & {});

export const adyenCommissionSchema: EnumSchema<AdyenCommission> = s.enumOf<AdyenCommission>(AdyenCommission);
