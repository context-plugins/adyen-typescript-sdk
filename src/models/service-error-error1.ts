import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ServiceErrorError1 = {
  /** The error code mapped to the error message. */
  errorCode?: string;
  /** The category of the error. */
  errorType?: string;
  /** A short explanation of the issue. */
  message?: string;
  /** The PSP reference of the payment. */
  pspReference?: string;
  /** The HTTP response status. */
  status?: number;
};

export const serviceErrorError1Schema: Schema<ServiceErrorError1> = s.object<ServiceErrorError1>({
  errorCode: s.optional(s.string()),
  errorType: s.optional(s.string()),
  message: s.optional(s.string()),
  pspReference: s.optional(s.string()),
  status: s.optional(s.int()),
});
