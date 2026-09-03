import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsInstantPayoutAddressRequirement = {
  description?: string;
  type: "usInstantPayoutAddressRequirement";
};

export const usInstantPayoutAddressRequirementSchema: Schema<UsInstantPayoutAddressRequirement> =
  s.object<UsInstantPayoutAddressRequirement>({
    description: s.optional(s.string()),
    type: s.literal("usInstantPayoutAddressRequirement"),
  });
