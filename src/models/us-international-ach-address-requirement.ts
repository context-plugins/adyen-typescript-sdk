import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsInternationalAchAddressRequirement = {
  description?: string;
  type: "usInternationalAchAddressRequirement";
};

export const usInternationalAchAddressRequirementSchema: Schema<UsInternationalAchAddressRequirement> =
  s.object<UsInternationalAchAddressRequirement>({
    description: s.optional(s.string()),
    type: s.literal("usInternationalAchAddressRequirement"),
  });
