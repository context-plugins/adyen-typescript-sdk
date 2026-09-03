import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AmountNonZeroDecimalsRequirement = {
  description?: string;
  type: "amountNonZeroDecimalsRequirement";
};

export const amountNonZeroDecimalsRequirementSchema: Schema<AmountNonZeroDecimalsRequirement> =
  s.object<AmountNonZeroDecimalsRequirement>({
    description: s.optional(s.string()),
    type: s.literal("amountNonZeroDecimalsRequirement"),
  });
