import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { value5Schema, type Value5 } from "./value5.js";

export type SourceAccountTypesRestriction = {
  operation: string;
  value?: Value5[];
};

export const sourceAccountTypesRestrictionSchema: Schema<SourceAccountTypesRestriction> =
  s.object<SourceAccountTypesRestriction>({
    operation: s.string(),
    value: s.optional(s.array(s.lazy(() => value5Schema))),
  });
