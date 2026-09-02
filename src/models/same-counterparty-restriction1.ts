import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SameCounterpartyRestriction1 = {
  operation: string;
  value?: boolean;
};

export const sameCounterpartyRestriction1Schema: Schema<SameCounterpartyRestriction1> =
  s.object<SameCounterpartyRestriction1>({
    operation: s.string(),
    value: s.optional(s.boolean()),
  });
