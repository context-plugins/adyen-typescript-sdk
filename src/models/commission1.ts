import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Defines your platform's commission for the processed payments as a fixed amount (specified in
 * minor units), a percentage (specified in basis points), or both. The commission is booked to your
 * platform's liable balance account.
 */
export type Commission1 = {
  /** A fixed commission fee, in minor units. */
  fixedAmount?: number;
  /** A variable commission fee, in basis points. */
  variablePercentage?: number;
};

export const commission1Schema: Schema<Commission1> = s.object<Commission1>({
  fixedAmount: s.optional(s.int()),
  variablePercentage: s.optional(s.int()),
});
