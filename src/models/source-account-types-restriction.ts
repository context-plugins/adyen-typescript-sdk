import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { value5Schema, type Value5 } from "./value5.js";

export type SourceAccountTypesRestriction = {
  /** Defines how the condition must be evaluated. */
  operation: string;
  /** The list of source account types to be evaluated. */
  value?: Value5[];
};

export const sourceAccountTypesRestrictionSchema: Schema<SourceAccountTypesRestriction> =
  s.object<SourceAccountTypesRestriction>({
    operation: s.string(),
    value: s.optional(s.array(s.lazy(() => value5Schema))),
  });
