import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fieldTypeSchema, type FieldType } from "./field-type.js";

export type ErrorFieldType = {
  /** The validation error code. */
  errorCode?: number;
  /** A description of the validation error. */
  errorDescription?: string;
  /** The type of error field. */
  fieldType?: FieldType;
};

export const errorFieldTypeSchema: Schema<ErrorFieldType> = s.object<ErrorFieldType>({
  errorCode: s.optional(s.int()),
  errorDescription: s.optional(s.string()),
  fieldType: s.optional(s.lazy(() => fieldTypeSchema)),
});
