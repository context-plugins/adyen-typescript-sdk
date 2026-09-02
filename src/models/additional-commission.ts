import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalCommission = {
  balanceAccountId?: string;
  fixedAmount?: number;
  variablePercentage?: number;
};

export const additionalCommissionSchema: Schema<AdditionalCommission> = s.object<AdditionalCommission>({
  balanceAccountId: s.optional(s.string()),
  fixedAmount: s.optional(s.number()),
  variablePercentage: s.optional(s.number()),
});
