import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type101Schema, type Type101 } from "./type101.js";

export type AmountNonZeroDecimalsRequirement = {
  description?: string;
  type: Type101;
};

export const amountNonZeroDecimalsRequirementSchema: Schema<AmountNonZeroDecimalsRequirement> =
  s.object<AmountNonZeroDecimalsRequirement>({
    description: s.optional(s.string()),
    type: type101Schema,
  });
