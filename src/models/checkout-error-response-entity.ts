import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CheckoutErrorResponseEntity = {
  errorCode: string;
  errorType: string;
  message: string;
  pspReference?: string;
  status?: number;
};

export const checkoutErrorResponseEntitySchema: Schema<CheckoutErrorResponseEntity> =
  s.object<CheckoutErrorResponseEntity>({
    errorCode: s.string(),
    errorType: s.string(),
    message: s.string(),
    pspReference: s.optional(s.string()),
    status: s.optional(s.number()),
  });
