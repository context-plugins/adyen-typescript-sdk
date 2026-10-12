import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Possible values:
 * * **Forbidden**
 * * **Processed**
 * * **Allowed**
 * * **Proposed**
 * * **Required**
 */
export const LoyaltyHandling = {
  Forbidden: "Forbidden",
  Processed: "Processed",
  Allowed: "Allowed",
  Proposed: "Proposed",
  Required: "Required",
} as const;
export type LoyaltyHandling = (typeof LoyaltyHandling)[keyof typeof LoyaltyHandling] | (string & {});

export const loyaltyHandlingSchema: EnumSchema<LoyaltyHandling> = s.enumOf<LoyaltyHandling>(LoyaltyHandling);
