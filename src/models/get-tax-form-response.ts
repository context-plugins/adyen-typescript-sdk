import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorFieldTypeSchema, type ErrorFieldType } from "./error-field-type.js";

export type GetTaxFormResponse = {
  /** The content of the tax form in the Base64 binary format. */
  content?: string;
  /** The content type of the tax form. */
  contentType?: string;
  /** Contains field validation errors that would prevent requests from being processed. */
  invalidFields?: ErrorFieldType[];
  /** The reference of a request. Can be used to uniquely identify the request. */
  pspReference?: string;
  /** The result code. */
  resultCode?: string;
};

export const getTaxFormResponseSchema: Schema<GetTaxFormResponse> = s.object<GetTaxFormResponse>({
  content: s.optional(s.string()),
  contentType: s.optional(s.string()),
  invalidFields: s.optional(s.array(s.lazy(() => errorFieldTypeSchema))),
  pspReference: s.optional(s.string()),
  resultCode: s.optional(s.string()),
});
