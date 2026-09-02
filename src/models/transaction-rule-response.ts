import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transactionRule1Schema, type TransactionRule1 } from "./transaction-rule1.js";

export type TransactionRuleResponse = {
  transactionRule?: TransactionRule1;
};

export const transactionRuleResponseSchema: Schema<TransactionRuleResponse> =
  s.object<TransactionRuleResponse>({
    transactionRule: s.optional(s.lazy(() => transactionRule1Schema)),
  });
