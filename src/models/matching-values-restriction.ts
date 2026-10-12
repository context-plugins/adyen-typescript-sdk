import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { value3Schema, type Value3 } from "./value3.js";

export type MatchingValuesRestriction = {
  /** Defines how the condition must be evaluated. */
  operation: string;
  value?: Value3[];
};

export const matchingValuesRestrictionSchema: Schema<MatchingValuesRestriction> =
  s.object<MatchingValuesRestriction>({
    operation: s.string(),
    value: s.optional(s.array(s.lazy(() => value3Schema))),
  });
