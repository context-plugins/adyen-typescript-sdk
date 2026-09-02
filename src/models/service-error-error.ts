import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ServiceErrorError = {
  additionalData?: Record<string, string>;
  errorCode?: string;
  errorType?: string;
  message?: string;
  pspReference?: string;
  status?: number;
};

export const serviceErrorErrorSchema: Schema<ServiceErrorError> = s.object<ServiceErrorError>({
  additionalData: s.optional(s.record(s.string(), s.string())),
  errorCode: s.optional(s.string()),
  errorType: s.optional(s.string()),
  message: s.optional(s.string()),
  pspReference: s.optional(s.string()),
  status: s.optional(s.number()),
});
