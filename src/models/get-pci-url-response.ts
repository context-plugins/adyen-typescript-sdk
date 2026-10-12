import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorFieldTypeSchema, type ErrorFieldType } from "./error-field-type.js";

export type GetPciUrlResponse = {
  /** Information about any invalid fields. */
  invalidFields?: ErrorFieldType[];
  /** The reference of a request. Can be used to uniquely identify the request. */
  pspReference?: string;
  /**
   * The URL to the PCI compliance questionnaire where you should redirect your account holder. This
   * URL must be used within 30 seconds and can only be used once.
   */
  redirectUrl?: string;
  /** The result code. */
  resultCode?: string;
};

export const getPciUrlResponseSchema: Schema<GetPciUrlResponse> = s.object<GetPciUrlResponse>({
  invalidFields: s.optional(s.array(s.lazy(() => errorFieldTypeSchema))),
  pspReference: s.optional(s.string()),
  redirectUrl: s.optional(s.string()),
  resultCode: s.optional(s.string()),
});
