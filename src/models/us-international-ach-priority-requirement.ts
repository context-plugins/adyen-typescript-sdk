import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsInternationalAchPriorityRequirement = {
  /**
   * Specifies that transactions deemed to be International ACH (IAT) per OFAC/NACHA rules cannot
   * have fast priority.
   */
  description?: string;
  /** **usInternationalAchPriorityRequirement** @default "usInternationalAchPriorityRequirement" */
  type?: "usInternationalAchPriorityRequirement";
};

export const usInternationalAchPriorityRequirementSchema: Schema<UsInternationalAchPriorityRequirement> =
  s.object<UsInternationalAchPriorityRequirement>({
    description: s.optional(s.string()),
    type: s.defaulted(
      s.literal("usInternationalAchPriorityRequirement"),
      "usInternationalAchPriorityRequirement",
    ),
  });
