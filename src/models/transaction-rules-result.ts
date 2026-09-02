import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionEventViolationSchema,
  type TransactionEventViolation,
} from "./transaction-event-violation.js";

export type TransactionRulesResult = {
  advice?: string;
  allHardBlockRulesPassed?: boolean;
  score?: number;
  triggeredTransactionRules?: TransactionEventViolation[];
};

export const transactionRulesResultSchema: Schema<TransactionRulesResult> = s.object<TransactionRulesResult>({
  advice: s.optional(s.string()),
  allHardBlockRulesPassed: s.optional(s.boolean()),
  score: s.optional(s.number()),
  triggeredTransactionRules: s.optional(s.array(s.lazy(() => transactionEventViolationSchema))),
});
