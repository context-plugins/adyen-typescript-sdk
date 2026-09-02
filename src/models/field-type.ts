import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fieldNameSchema, type FieldName } from "./field-name.js";

export type FieldType = {
  field?: string;
  fieldName?: FieldName;
  shareholderCode?: string;
};

export const fieldTypeSchema: Schema<FieldType> = s.object<FieldType>({
  field: s.optional(s.string()),
  fieldName: s.optional(s.lazy(() => fieldNameSchema)),
  shareholderCode: s.optional(s.string()),
});
