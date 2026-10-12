import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SameCounterpartyRestriction = {
  /** Defines how the condition must be evaluated. */
  operation: string;
  value?: boolean;
};

export const sameCounterpartyRestrictionSchema: Schema<SameCounterpartyRestriction> =
  s.object<SameCounterpartyRestriction>({
    operation: s.string(),
    value: s.optional(s.boolean()),
  });
