import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { value3Schema, type Value3 } from "./value3.js";

/**
 * Checks if a user has recently made multiple transfers with the specified values.
 *
 * To use this restriction, you must:
 *
 * - Set the rule `type` to **velocity**.
 *
 * - Specify a time `interval`.
 *
 * - Specify a number of `matchingTransactions`.
 *
 * Supported operation: **allMatch**.
 *
 * Supported value inputs:
 * - **merchantId** and **acquirerId**
 * - **amount** and **currency**
 * - **merchantName**.
 */
export type MatchingValuesRestriction1 = {
  /** Defines how the condition must be evaluated. */
  operation: string;
  value?: Value3[];
};

export const matchingValuesRestriction1Schema: Schema<MatchingValuesRestriction1> =
  s.object<MatchingValuesRestriction1>({
    operation: s.string(),
    value: s.optional(s.array(s.lazy(() => value3Schema))),
  });
