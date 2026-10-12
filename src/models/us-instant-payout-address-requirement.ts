import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsInstantPayoutAddressRequirement = {
  /**
   * Specifies that you must provide complete street addresses for the party and counterParty for
   * transactions greater than USD 3000.
   */
  description?: string;
  /** **usInstantPayoutAddressRequirement** @default "usInstantPayoutAddressRequirement" */
  type?: "usInstantPayoutAddressRequirement";
};

export const usInstantPayoutAddressRequirementSchema: Schema<UsInstantPayoutAddressRequirement> =
  s.object<UsInstantPayoutAddressRequirement>({
    description: s.optional(s.string()),
    type: s.defaulted(s.literal("usInstantPayoutAddressRequirement"), "usInstantPayoutAddressRequirement"),
  });
