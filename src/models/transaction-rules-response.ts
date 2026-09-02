import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transactionRuleSchema, type TransactionRule } from "./transaction-rule.js";

export type TransactionRulesResponse = {
  transactionRules?: TransactionRule[];
};

export const transactionRulesResponseSchema: Schema<TransactionRulesResponse> =
  s.object<TransactionRulesResponse>({
    transactionRules: s.optional(s.array(s.lazy(() => transactionRuleSchema))),
  });
