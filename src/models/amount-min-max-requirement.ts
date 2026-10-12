import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AmountMinMaxRequirement = {
  /** Specifies the eligible amounts for a particular route. */
  description?: string;
  /** Maximum amount. */
  max?: number;
  /** Minimum amount. */
  min?: number;
  /** **amountMinMaxRequirement** @default "amountMinMaxRequirement" */
  type?: "amountMinMaxRequirement";
};

export const amountMinMaxRequirementSchema: Schema<AmountMinMaxRequirement> =
  s.object<AmountMinMaxRequirement>({
    description: s.optional(s.string()),
    max: s.optional(s.int()),
    min: s.optional(s.int()),
    type: s.defaulted(s.literal("amountMinMaxRequirement"), "amountMinMaxRequirement"),
  });
