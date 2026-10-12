import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AmountNonZeroDecimalsRequirement = {
  /**
   * Specifies for which routes the amount in a transfer request must have no non-zero decimal
   * places, so the transfer can only be processed if the amount consists of round numbers.
   */
  description?: string;
  /** **amountNonZeroDecimalsRequirement** @default "amountNonZeroDecimalsRequirement" */
  type?: "amountNonZeroDecimalsRequirement";
};

export const amountNonZeroDecimalsRequirementSchema: Schema<AmountNonZeroDecimalsRequirement> =
  s.object<AmountNonZeroDecimalsRequirement>({
    description: s.optional(s.string()),
    type: s.defaulted(s.literal("amountNonZeroDecimalsRequirement"), "amountNonZeroDecimalsRequirement"),
  });
