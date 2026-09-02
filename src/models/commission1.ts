import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Commission1 = {
  fixedAmount?: number;
  variablePercentage?: number;
};

export const commission1Schema: Schema<Commission1> = s.object<Commission1>({
  fixedAmount: s.optional(s.number()),
  variablePercentage: s.optional(s.number()),
});
