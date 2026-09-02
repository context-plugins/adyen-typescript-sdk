import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransactionRuleReference2 = {
  description?: string;
  id?: string;
  outcomeType?: string;
  reference?: string;
  score?: number;
};

export const transactionRuleReference2Schema: Schema<TransactionRuleReference2> =
  s.object<TransactionRuleReference2>({
    description: s.optional(s.string()),
    id: s.optional(s.string()),
    outcomeType: s.optional(s.string()),
    reference: s.optional(s.string()),
    score: s.optional(s.number()),
  });
