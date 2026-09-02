import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { value4Schema, type Value4 } from "./value4.js";

export type ProcessingTypesRestriction1 = {
  operation: string;
  value?: Value4[];
};

export const processingTypesRestriction1Schema: Schema<ProcessingTypesRestriction1> =
  s.object<ProcessingTypesRestriction1>({
    operation: s.string(),
    value: s.optional(s.array(s.lazy(() => value4Schema))),
  });
