import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorFieldTypeSchema, type ErrorFieldType } from "./error-field-type.js";

export type GenericResponse = {
  invalidFields?: ErrorFieldType[];
  pspReference?: string;
  resultCode?: string;
};

export const genericResponseSchema: Schema<GenericResponse> = s.object<GenericResponse>({
  invalidFields: s.optional(s.array(s.lazy(() => errorFieldTypeSchema))),
  pspReference: s.optional(s.string()),
  resultCode: s.optional(s.string()),
});
