import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PaymentFee = {
  DeductFromLiableAccount: "deductFromLiableAccount",
  DeductFromOneBalanceAccount: "deductFromOneBalanceAccount",
} as const;
export type PaymentFee = (typeof PaymentFee)[keyof typeof PaymentFee] | (string & {});

export const paymentFeeSchema: EnumSchema<PaymentFee> = s.enumOf<PaymentFee>(PaymentFee);
