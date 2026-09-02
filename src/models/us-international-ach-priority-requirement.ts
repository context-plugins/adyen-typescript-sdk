import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type431Schema, type Type431 } from "./type431.js";

export type UsInternationalAchPriorityRequirement = {
  description?: string;
  type: Type431;
};

export const usInternationalAchPriorityRequirementSchema: Schema<UsInternationalAchPriorityRequirement> =
  s.object<UsInternationalAchPriorityRequirement>({
    description: s.optional(s.string()),
    type: type431Schema,
  });
