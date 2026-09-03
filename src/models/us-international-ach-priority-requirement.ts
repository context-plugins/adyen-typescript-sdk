import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsInternationalAchPriorityRequirement = {
  description?: string;
  type: "usInternationalAchPriorityRequirement";
};

export const usInternationalAchPriorityRequirementSchema: Schema<UsInternationalAchPriorityRequirement> =
  s.object<UsInternationalAchPriorityRequirement>({
    description: s.optional(s.string()),
    type: s.literal("usInternationalAchPriorityRequirement"),
  });
