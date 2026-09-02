import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
