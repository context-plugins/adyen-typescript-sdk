import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type91Schema, type Type91 } from "./type91.js";

export type AmountMinMaxRequirement = {
  description?: string;
  max?: number;
  min?: number;
  type: Type91;
};

export const amountMinMaxRequirementSchema: Schema<AmountMinMaxRequirement> =
  s.object<AmountMinMaxRequirement>({
    description: s.optional(s.string()),
    max: s.optional(s.number()),
    min: s.optional(s.number()),
    type: type91Schema,
  });
