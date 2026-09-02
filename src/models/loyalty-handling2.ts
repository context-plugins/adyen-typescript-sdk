import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LoyaltyHandling2 = {
  Forbidden: "Forbidden",
  Processed: "Processed",
  Allowed: "Allowed",
  Proposed: "Proposed",
  Required: "Required",
} as const;
export type LoyaltyHandling2 = (typeof LoyaltyHandling2)[keyof typeof LoyaltyHandling2] | (string & {});

export const loyaltyHandling2Schema: EnumSchema<LoyaltyHandling2> =
  s.enumOf<LoyaltyHandling2>(LoyaltyHandling2);
