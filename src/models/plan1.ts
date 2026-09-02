import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Plan1 = {
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
export type Plan1 = (typeof Plan1)[keyof typeof Plan1] | (string & {});

export const plan1Schema: EnumSchema<Plan1> = s.enumOf<Plan1>(Plan1);
