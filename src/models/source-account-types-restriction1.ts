import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { value5Schema, type Value5 } from "./value5.js";

export type SourceAccountTypesRestriction1 = {
  operation: string;
  value?: Value5[];
};

export const sourceAccountTypesRestriction1Schema: Schema<SourceAccountTypesRestriction1> =
  s.object<SourceAccountTypesRestriction1>({
    operation: s.string(),
    value: s.optional(s.array(s.lazy(() => value5Schema))),
  });
