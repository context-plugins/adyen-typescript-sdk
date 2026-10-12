import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsInternationalAchAddressRequirement = {
  /**
   * Specifies that you must provide a complete street address for International ACH (IAT)
   * transactions.
   */
  description?: string;
  /** **usInternationalAchAddressRequirement** @default "usInternationalAchAddressRequirement" */
  type?: "usInternationalAchAddressRequirement";
};

export const usInternationalAchAddressRequirementSchema: Schema<UsInternationalAchAddressRequirement> =
  s.object<UsInternationalAchAddressRequirement>({
    description: s.optional(s.string()),
    type: s.defaulted(
      s.literal("usInternationalAchAddressRequirement"),
      "usInternationalAchAddressRequirement",
    ),
  });
