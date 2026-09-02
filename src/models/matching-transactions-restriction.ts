import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MatchingTransactionsRestriction = {
  operation: string;
  value?: number;
};

export const matchingTransactionsRestrictionSchema: Schema<MatchingTransactionsRestriction> =
  s.object<MatchingTransactionsRestriction>({
    operation: s.string(),
    value: s.optional(s.number()),
  });
