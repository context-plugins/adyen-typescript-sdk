import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LoyaltyHandling1 = {
  Forbidden: "Forbidden",
  Processed: "Processed",
  Allowed: "Allowed",
  Proposed: "Proposed",
  Required: "Required",
} as const;
export type LoyaltyHandling1 = (typeof LoyaltyHandling1)[keyof typeof LoyaltyHandling1] | (string & {});

export const loyaltyHandling1Schema: EnumSchema<LoyaltyHandling1> =
  s.enumOf<LoyaltyHandling1>(LoyaltyHandling1);
