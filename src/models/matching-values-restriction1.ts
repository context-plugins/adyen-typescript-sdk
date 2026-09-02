import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { value3Schema, type Value3 } from "./value3.js";

export type MatchingValuesRestriction1 = {
  operation: string;
  value?: Value3[];
};

export const matchingValuesRestriction1Schema: Schema<MatchingValuesRestriction1> =
  s.object<MatchingValuesRestriction1>({
    operation: s.string(),
    value: s.optional(s.array(s.lazy(() => value3Schema))),
  });
