import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ServiceError1 = {
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

export const serviceError1Schema: Schema<ServiceError1> = s.object<ServiceError1>({
  errorCode: s.optional(s.string()),
  errorType: s.optional(s.string()),
  message: s.optional(s.string()),
  pspReference: s.optional(s.string()),
  status: s.optional(s.int()),
});
