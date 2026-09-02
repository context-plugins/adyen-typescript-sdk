import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorFieldTypeSchema, type ErrorFieldType } from "./error-field-type.js";

export type GetPciUrlResponse = {
  invalidFields?: ErrorFieldType[];
  pspReference?: string;
  redirectUrl?: string;
  resultCode?: string;
};

export const getPciUrlResponseSchema: Schema<GetPciUrlResponse> = s.object<GetPciUrlResponse>({
  invalidFields: s.optional(s.array(s.lazy(() => errorFieldTypeSchema))),
  pspReference: s.optional(s.string()),
  redirectUrl: s.optional(s.string()),
  resultCode: s.optional(s.string()),
});
