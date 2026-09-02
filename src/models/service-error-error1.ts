import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ServiceErrorError1 = {
  errorCode?: string;
  errorType?: string;
  message?: string;
  pspReference?: string;
  status?: number;
};

export const serviceErrorError1Schema: Schema<ServiceErrorError1> = s.object<ServiceErrorError1>({
  errorCode: s.optional(s.string()),
  errorType: s.optional(s.string()),
  message: s.optional(s.string()),
  pspReference: s.optional(s.string()),
  status: s.optional(s.number()),
});
