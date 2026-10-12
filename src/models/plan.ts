import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The installment plan, used for [card installments in
 * Japan](https://docs.adyen.com/payment-methods/cards/credit-card-installments#make-a-payment-japan).
 * and
 * [Mexico](https://docs.adyen.com/payment-methods/cards/credit-card-installments/#getting-paid-mexico).
 * By default, this is set to **regular**.
 */
export const Plan = {
  Bonus: "bonus",
  BuynowPaylater: "buynow_paylater",
  InteresRefundPrctg: "interes_refund_prctg",
  InterestBonus: "interest_bonus",
  NointeresRefundPrctg: "nointeres_refund_prctg",
  NointerestBonus: "nointerest_bonus",
  RefundPrctg: "refund_prctg",
  Regular: "regular",
  Revolving: "revolving",
  WithInterest: "with_interest",
} as const;
export type Plan = (typeof Plan)[keyof typeof Plan] | (string & {});

export const planSchema: EnumSchema<Plan> = s.enumOf<Plan>(Plan);
