import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InternationalTransactionRestriction1 = {
  operation: string;
  value?: boolean;
};

export const internationalTransactionRestriction1Schema: Schema<InternationalTransactionRestriction1> =
  s.object<InternationalTransactionRestriction1>({
    operation: s.string(),
    value: s.optional(s.boolean()),
  });
