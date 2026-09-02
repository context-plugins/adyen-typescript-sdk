import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Commission = {
  fixedAmount?: number;
  variablePercentage?: number;
};

export const commissionSchema: Schema<Commission> = s.object<Commission>({
  fixedAmount: s.optional(s.number()),
  variablePercentage: s.optional(s.number()),
});
