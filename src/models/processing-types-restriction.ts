import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { value4Schema, type Value4 } from "./value4.js";

export type ProcessingTypesRestriction = {
  operation: string;
  value?: Value4[];
};

export const processingTypesRestrictionSchema: Schema<ProcessingTypesRestriction> =
  s.object<ProcessingTypesRestriction>({
    operation: s.string(),
    value: s.optional(s.array(s.lazy(() => value4Schema))),
  });
