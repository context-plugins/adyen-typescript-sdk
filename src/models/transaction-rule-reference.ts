import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransactionRuleReference = {
  description?: string;
  id?: string;
  outcomeType?: string;
  reference?: string;
  score?: number;
};

export const transactionRuleReferenceSchema: Schema<TransactionRuleReference> =
  s.object<TransactionRuleReference>({
    description: s.optional(s.string()),
    id: s.optional(s.string()),
    outcomeType: s.optional(s.string()),
    reference: s.optional(s.string()),
    score: s.optional(s.number()),
  });
