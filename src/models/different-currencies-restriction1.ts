import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DifferentCurrenciesRestriction1 = {
  operation: string;
  value?: boolean;
};

export const differentCurrenciesRestriction1Schema: Schema<DifferentCurrenciesRestriction1> =
  s.object<DifferentCurrenciesRestriction1>({
    operation: s.string(),
    value: s.optional(s.boolean()),
  });
