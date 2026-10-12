import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Indicates whether transaction is an international transaction and specifies the operation.
 *
 * Supported operations: **equals**, **notEquals**.
 */
export type InternationalTransactionRestriction1 = {
  /** Defines how the condition must be evaluated. */
  operation: string;
  /**
   * Boolean indicating whether transaction is an international transaction.
   *
   * Possible values:
   *
   * - **true**: The transaction is an international transaction.
   *
   * - **false**: The transaction is a domestic transaction.
   */
  value?: boolean;
};

export const internationalTransactionRestriction1Schema: Schema<InternationalTransactionRestriction1> =
  s.object<InternationalTransactionRestriction1>({
    operation: s.string(),
    value: s.optional(s.boolean()),
  });
