import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type59Schema, type Type59 } from "./type59.js";

export type PaymentDetails = {
  checkoutAttemptId?: string;
  sdkData?: string;
  type?: Type59;
};

export const paymentDetailsSchema: Schema<PaymentDetails> = s.object<PaymentDetails>({
  checkoutAttemptId: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  type: s.optional(s.lazy(() => type59Schema)),
});
