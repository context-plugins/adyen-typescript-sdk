import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SameAmountRestriction1 = {
  operation: string;
  value?: boolean;
};

export const sameAmountRestriction1Schema: Schema<SameAmountRestriction1> = s.object<SameAmountRestriction1>({
  operation: s.string(),
  value: s.optional(s.boolean()),
});
