import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionEventViolationSchema,
  type TransactionEventViolation,
} from "./transaction-event-violation.js";

export type TransactionRulesResult = {
  /** The advice given by the Risk analysis. */
  advice?: string;
  /** Indicates whether the transaction passed the evaluation for all hardblock rules */
  allHardBlockRulesPassed?: boolean;
  /** The score of the Risk analysis. */
  score?: number;
  /** Array containing all the transaction rules that the transaction triggered. */
  triggeredTransactionRules?: TransactionEventViolation[];
};

export const transactionRulesResultSchema: Schema<TransactionRulesResult> = s.object<TransactionRulesResult>({
  advice: s.optional(s.string()),
  allHardBlockRulesPassed: s.optional(s.boolean()),
  score: s.optional(s.int()),
  triggeredTransactionRules: s.optional(s.array(s.lazy(() => transactionEventViolationSchema))),
});
