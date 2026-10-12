import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The number of transactions and the operation.
 *
 * Supported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**,
 * **lessThanOrEqualTo**, **lessThan**.
 */
export type MatchingTransactionsRestriction1 = {
  /** Defines how the condition must be evaluated. */
  operation: string;
  /** The number of transactions. */
  value?: number;
};

export const matchingTransactionsRestriction1Schema: Schema<MatchingTransactionsRestriction1> =
  s.object<MatchingTransactionsRestriction1>({
    operation: s.string(),
    value: s.optional(s.int()),
  });
