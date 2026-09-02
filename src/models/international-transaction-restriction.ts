import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InternationalTransactionRestriction = {
  operation: string;
  value?: boolean;
};

export const internationalTransactionRestrictionSchema: Schema<InternationalTransactionRestriction> =
  s.object<InternationalTransactionRestriction>({
    operation: s.string(),
    value: s.optional(s.boolean()),
  });
