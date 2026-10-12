import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of transaction. Possible values:
 * * **splitPayment**: for payments
 * * **splitRefund**: for refunds
 */
export const RateType2 = {
  SplitPayment: "splitPayment",
  BalanceConversion: "balanceConversion",
  Transfer: "transfer",
  SplitRefund: "splitRefund",
} as const;
export type RateType2 = (typeof RateType2)[keyof typeof RateType2] | (string & {});

export const rateType2Schema: EnumSchema<RateType2> = s.enumOf<RateType2>(RateType2);
