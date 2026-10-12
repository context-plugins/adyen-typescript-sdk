import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Compares the currency of the payment against the currency of the payment instrument, and
 * specifies the operation.
 *
 * Supported operations: **equals**, **notEquals**.
 */
export type DifferentCurrenciesRestriction1 = {
  /** Defines how the condition must be evaluated. */
  operation: string;
  /**
   * Checks the currency of the payment against the currency of the payment instrument.
   *
   * Possible values:
   *
   * - **true**: The currency of the payment is different from the currency of the payment
   *   instrument.
   *
   * - **false**: The currencies are the same.
   */
  value?: boolean;
};

export const differentCurrenciesRestriction1Schema: Schema<DifferentCurrenciesRestriction1> =
  s.object<DifferentCurrenciesRestriction1>({
    operation: s.string(),
    value: s.optional(s.boolean()),
  });
