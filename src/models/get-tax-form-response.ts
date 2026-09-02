import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorFieldTypeSchema, type ErrorFieldType } from "./error-field-type.js";

export type GetTaxFormResponse = {
  content?: string;
  contentType?: string;
  invalidFields?: ErrorFieldType[];
  pspReference?: string;
  resultCode?: string;
};

export const getTaxFormResponseSchema: Schema<GetTaxFormResponse> = s.object<GetTaxFormResponse>({
  content: s.optional(s.string()),
  contentType: s.optional(s.string()),
  invalidFields: s.optional(s.array(s.lazy(() => errorFieldTypeSchema))),
  pspReference: s.optional(s.string()),
  resultCode: s.optional(s.string()),
});
