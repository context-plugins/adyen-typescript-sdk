import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MatchingTransactionsRestriction1 = {
  operation: string;
  value?: number;
};

export const matchingTransactionsRestriction1Schema: Schema<MatchingTransactionsRestriction1> =
  s.object<MatchingTransactionsRestriction1>({
    operation: s.string(),
    value: s.optional(s.number()),
  });
