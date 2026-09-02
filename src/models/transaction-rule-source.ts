import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransactionRuleSource = {
  id?: string;
  type?: string;
};

export const transactionRuleSourceSchema: Schema<TransactionRuleSource> = s.object<TransactionRuleSource>({
  id: s.optional(s.string()),
  type: s.optional(s.string()),
});
