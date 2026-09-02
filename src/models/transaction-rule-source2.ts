import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransactionRuleSource2 = {
  id?: string;
  type?: string;
};

export const transactionRuleSource2Schema: Schema<TransactionRuleSource2> = s.object<TransactionRuleSource2>({
  id: s.optional(s.string()),
  type: s.optional(s.string()),
});
