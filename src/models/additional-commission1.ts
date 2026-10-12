import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Defines whether to book an additional commission for payments to your user's balance account. The
 * commission amount can be defined as a fixed amount (specified in minor units), a percentage
 * (specified in basis points), or both.
 */
export type AdditionalCommission1 = {
  /** Unique identifier of the balance account to which the additional commission is booked. */
  balanceAccountId?: string;
  /** A fixed commission fee, in minor units. */
  fixedAmount?: number;
  /** A variable commission fee, in basis points. */
  variablePercentage?: number;
};

export const additionalCommission1Schema: Schema<AdditionalCommission1> = s.object<AdditionalCommission1>({
  balanceAccountId: s.optional(s.string()),
  fixedAmount: s.optional(s.int()),
  variablePercentage: s.optional(s.int()),
});
