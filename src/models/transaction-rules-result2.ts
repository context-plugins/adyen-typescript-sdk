import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionEventViolationSchema,
  type TransactionEventViolation,
} from "./transaction-event-violation.js";

export type TransactionRulesResult2 = {
  advice?: string;
  allHardBlockRulesPassed?: boolean;
  score?: number;
  triggeredTransactionRules?: TransactionEventViolation[];
};

export const transactionRulesResult2Schema: Schema<TransactionRulesResult2> =
  s.object<TransactionRulesResult2>({
    advice: s.optional(s.string()),
    allHardBlockRulesPassed: s.optional(s.boolean()),
    score: s.optional(s.number()),
    triggeredTransactionRules: s.optional(s.array(s.lazy(() => transactionEventViolationSchema))),
  });
