import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Checks if a user has recently made multiple transfers to the same counterparty.
 *
 * To use this restriction, you must:
 *
 * - Set the rule `type` to **velocity**.
 *
 * - Specify a time `interval`.
 *
 * - Specify a number of `matchingTransactions`.
 *
 * Supported operations: **equals**.
 */
export type SameCounterpartyRestriction1 = {
  /** Defines how the condition must be evaluated. */
  operation: string;
  value?: boolean;
};

export const sameCounterpartyRestriction1Schema: Schema<SameCounterpartyRestriction1> =
  s.object<SameCounterpartyRestriction1>({
    operation: s.string(),
    value: s.optional(s.boolean()),
  });
