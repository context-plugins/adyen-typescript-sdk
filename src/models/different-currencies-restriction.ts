import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DifferentCurrenciesRestriction = {
  operation: string;
  value?: boolean;
};

export const differentCurrenciesRestrictionSchema: Schema<DifferentCurrenciesRestriction> =
  s.object<DifferentCurrenciesRestriction>({
    operation: s.string(),
    value: s.optional(s.boolean()),
  });
