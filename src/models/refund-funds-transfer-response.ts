import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorFieldTypeSchema, type ErrorFieldType } from "./error-field-type.js";

export type RefundFundsTransferResponse = {
  invalidFields?: ErrorFieldType[];
  merchantReference?: string;
  message?: string;
  originalReference?: string;
  pspReference?: string;
  resultCode?: string;
};

export const refundFundsTransferResponseSchema: Schema<RefundFundsTransferResponse> =
  s.object<RefundFundsTransferResponse>({
    invalidFields: s.optional(s.array(s.lazy(() => errorFieldTypeSchema))),
    merchantReference: s.optional(s.string()),
    message: s.optional(s.string()),
    originalReference: s.optional(s.string()),
    pspReference: s.optional(s.string()),
    resultCode: s.optional(s.string()),
  });
