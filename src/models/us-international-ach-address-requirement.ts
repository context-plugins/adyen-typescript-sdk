import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type421Schema, type Type421 } from "./type421.js";

export type UsInternationalAchAddressRequirement = {
  description?: string;
  type: Type421;
};

export const usInternationalAchAddressRequirementSchema: Schema<UsInternationalAchAddressRequirement> =
  s.object<UsInternationalAchAddressRequirement>({
    description: s.optional(s.string()),
    type: type421Schema,
  });
