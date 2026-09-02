import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RateType1 = {
  SplitPayment: "splitPayment",
  BalanceConversion: "balanceConversion",
  Transfer: "transfer",
  SplitRefund: "splitRefund",
} as const;
export type RateType1 = (typeof RateType1)[keyof typeof RateType1] | (string & {});

export const rateType1Schema: EnumSchema<RateType1> = s.enumOf<RateType1>(RateType1);
