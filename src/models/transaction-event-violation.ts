import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionRuleReference2Schema,
  type TransactionRuleReference2,
} from "./transaction-rule-reference2.js";
import { transactionRuleSource2Schema, type TransactionRuleSource2 } from "./transaction-rule-source2.js";

export type TransactionEventViolation = {
  reason?: string;
  transactionRule?: TransactionRuleReference2;
  transactionRuleSource?: TransactionRuleSource2;
};

export const transactionEventViolationSchema: Schema<TransactionEventViolation> =
  s.object<TransactionEventViolation>({
    reason: s.optional(s.string()),
    transactionRule: s.optional(s.lazy(() => transactionRuleReference2Schema)),
    transactionRuleSource: s.optional(s.lazy(() => transactionRuleSource2Schema)),
  });
