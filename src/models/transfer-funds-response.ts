import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorFieldTypeSchema, type ErrorFieldType } from "./error-field-type.js";

export type TransferFundsResponse = {
  invalidFields?: ErrorFieldType[];
  merchantReference?: string;
  pspReference?: string;
  resultCode?: string;
};

export const transferFundsResponseSchema: Schema<TransferFundsResponse> = s.object<TransferFundsResponse>({
  invalidFields: s.optional(s.array(s.lazy(() => errorFieldTypeSchema))),
  merchantReference: s.optional(s.string()),
  pspReference: s.optional(s.string()),
  resultCode: s.optional(s.string()),
});
