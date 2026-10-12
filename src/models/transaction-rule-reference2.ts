import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Contains information about the transaction rule. */
export type TransactionRuleReference2 = {
  /** The description of the resource. */
  description?: string;
  /** The unique identifier of the resource. */
  id?: string;
  /** The outcome type of the rule. */
  outcomeType?: string;
  /** The reference for the resource. */
  reference?: string;
  /**
   * The transaction score determined by the rule. Returned only when `outcomeType` is
   * **scoreBased**.
   */
  score?: number;
};

export const transactionRuleReference2Schema: Schema<TransactionRuleReference2> =
  s.object<TransactionRuleReference2>({
    description: s.optional(s.string()),
    id: s.optional(s.string()),
    outcomeType: s.optional(s.string()),
    reference: s.optional(s.string()),
    score: s.optional(s.int()),
  });
