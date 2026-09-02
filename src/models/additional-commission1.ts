import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalCommission1 = {
  balanceAccountId?: string;
  fixedAmount?: number;
  variablePercentage?: number;
};

export const additionalCommission1Schema: Schema<AdditionalCommission1> = s.object<AdditionalCommission1>({
  balanceAccountId: s.optional(s.string()),
  fixedAmount: s.optional(s.number()),
  variablePercentage: s.optional(s.number()),
});
