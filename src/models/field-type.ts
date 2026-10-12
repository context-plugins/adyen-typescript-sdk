import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fieldNameSchema, type FieldName } from "./field-name.js";

/** The type of error field. */
export type FieldType = {
  /** The full name of the property. */
  field?: string;
  /** The type of the field. */
  fieldName?: FieldName;
  /**
   * The code of the shareholder that the field belongs to. If empty, the field belongs to an
   * account holder.
   */
  shareholderCode?: string;
};

export const fieldTypeSchema: Schema<FieldType> = s.object<FieldType>({
  field: s.optional(s.string()),
  fieldName: s.optional(s.lazy(() => fieldNameSchema)),
  shareholderCode: s.optional(s.string()),
});
