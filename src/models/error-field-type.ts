import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fieldTypeSchema, type FieldType } from "./field-type.js";

export type ErrorFieldType = {
  errorCode?: number;
  errorDescription?: string;
  fieldType?: FieldType;
};

export const errorFieldTypeSchema: Schema<ErrorFieldType> = s.object<ErrorFieldType>({
  errorCode: s.optional(s.number()),
  errorDescription: s.optional(s.string()),
  fieldType: s.optional(s.lazy(() => fieldTypeSchema)),
});
