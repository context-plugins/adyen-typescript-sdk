import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Commission = {
  /** A fixed commission fee, in minor units. */
  fixedAmount?: number;
  /** A variable commission fee, in basis points. */
  variablePercentage?: number;
};

export const commissionSchema: Schema<Commission> = s.object<Commission>({
  fixedAmount: s.optional(s.int()),
  variablePercentage: s.optional(s.int()),
});
