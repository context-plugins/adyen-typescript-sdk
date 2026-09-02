import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SameAmountRestriction = {
  operation: string;
  value?: boolean;
};

export const sameAmountRestrictionSchema: Schema<SameAmountRestriction> = s.object<SameAmountRestriction>({
  operation: s.string(),
  value: s.optional(s.boolean()),
});
