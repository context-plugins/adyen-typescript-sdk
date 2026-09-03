import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AmountMinMaxRequirement = {
  description?: string;
  max?: number;
  min?: number;
  type: "amountMinMaxRequirement";
};

export const amountMinMaxRequirementSchema: Schema<AmountMinMaxRequirement> =
  s.object<AmountMinMaxRequirement>({
    description: s.optional(s.string()),
    max: s.optional(s.number()),
    min: s.optional(s.number()),
    type: s.literal("amountMinMaxRequirement"),
  });
