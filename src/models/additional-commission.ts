import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalCommission = {
  /** Unique identifier of the balance account to which the additional commission is booked. */
  balanceAccountId?: string;
  /** A fixed commission fee, in minor units. */
  fixedAmount?: number;
  /** A variable commission fee, in basis points. */
  variablePercentage?: number;
};

export const additionalCommissionSchema: Schema<AdditionalCommission> = s.object<AdditionalCommission>({
  balanceAccountId: s.optional(s.string()),
  fixedAmount: s.optional(s.int()),
  variablePercentage: s.optional(s.int()),
});
