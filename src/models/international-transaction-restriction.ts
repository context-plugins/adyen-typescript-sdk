import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InternationalTransactionRestriction = {
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

export const internationalTransactionRestrictionSchema: Schema<InternationalTransactionRestriction> =
  s.object<InternationalTransactionRestriction>({
    operation: s.string(),
    value: s.optional(s.boolean()),
  });
