import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorFieldTypeSchema, type ErrorFieldType } from "./error-field-type.js";

export type GenericResponse = {
  /** Contains field validation errors that would prevent requests from being processed. */
  invalidFields?: ErrorFieldType[];
  /** The reference of a request. Can be used to uniquely identify the request. */
  pspReference?: string;
  /** The result code. */
  resultCode?: string;
};

export const genericResponseSchema: Schema<GenericResponse> = s.object<GenericResponse>({
  invalidFields: s.optional(s.array(s.lazy(() => errorFieldTypeSchema))),
  pspReference: s.optional(s.string()),
  resultCode: s.optional(s.string()),
});
